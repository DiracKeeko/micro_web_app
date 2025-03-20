import { registerMicroApps, start } from "qiankun";

registerMicroApps([
  {
    name: "micro-react-app1",
    entry: "http://localhost:8001",
    container: "#micro-app-container",
    activeRule: "/micro/react1",
  },
]);

start();
