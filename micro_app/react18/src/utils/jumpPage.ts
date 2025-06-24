import { independentAppPrefix, microAppPrefix } from "@/constant/pagePrefix";

function appendQueryParams(
  baseUrl: string,
  params: Record<string, any>,
  encode = true
): string {
  if (!params || typeof params !== 'object') return baseUrl;

  const urlParts = baseUrl.split('#');
  const [baseWithoutHash, hashFragment] = urlParts;
  const [path, query] = baseWithoutHash.split('?');

  const searchParams = new URLSearchParams(query || '');

  Object.entries(params).forEach(([key, value]) => {
    if (value === undefined || value === null) return;

    if (Array.isArray(value)) {
      value.forEach(v => {
        searchParams.append(key, encode ? encodeURIComponent(v) : v);
      });
    } else if (typeof value === 'object') {
      searchParams.set(
        key,
        encode ? encodeURIComponent(JSON.stringify(value)) : JSON.stringify(value)
      );
    } else {
      searchParams.set(key, encode ? encodeURIComponent(value) : value);
    }
  });

  const newQuery = searchParams.toString();
  const fullUrl = `${path}${newQuery ? '?' + newQuery : ''}${hashFragment ? '#' + hashFragment : ''}`;
  return fullUrl;
}

function openNewTab(path: string, query: Record<string, number | string> = {}) {
  const pagePrefix = window.__POWERED_BY_QIANKUN__ ? microAppPrefix : independentAppPrefix;
  // console.log("origin->", window.location.origin); // origin 是 domain + port 形如 http://localhost:7788
  const base = `${window.location.origin}${pagePrefix}${path}`;
  const finalUrl = appendQueryParams(base, query);
  window.open(finalUrl, '_blank');
}

export { openNewTab };