import { registerMicroApps, start } from "qiankun";

console.log("qiankun start");

registerMicroApps([
  {
    name: "microVue2-01",
    entry: "http://localhost:7700/subapp/sub-vue2/about",
    container: "#all-micro-container",
    activeRule: "/main/micro-vue2",
  },
  {
    name: "micro-react-app1",
    entry: "http://localhost:8001",
    container: "#micro-app-container",
    activeRule: "/micro/react1",
  },
]);

start({
  prefetch: false, // 取消预加载
});
