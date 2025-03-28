import React from "react";
import ReactDOM from "react-dom/client";

import "@/style/index.less";

import App from "./App";

function render(props: { container?: HTMLElement }) {
  const { container } = props;
  ReactDOM.createRoot(container ? container.querySelector("#root")! : document.getElementById("root")!).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}

// 如果不是被 Qiankun 运行，独立运行子应用
if (!window.__POWERED_BY_QIANKUN__) {
  render({});
}

// Qiankun 子应用的生命周期函数
export async function bootstrap() {
  console.log("[react-sub] bootstraped");
}

export async function mount(props: any) {
  console.log("[react-sub] mounted", props);
  render(props);
}

export async function unmount(props: any) {
  console.log("[react-sub] unmounted", props);
  const { container } = props;
  ReactDOM.createRoot(container ? container.querySelector("#root")! : document.getElementById("root")!).unmount();
}
