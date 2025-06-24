// src/App.tsx
import React from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

import Home from "@/pages/Home";
import About from "@/pages/About";
import HashAnchor from "@/pages/HashAnchor";

interface AppProps {
  routerBase?: string;
}

// 主应用组件
const App: React.FC<AppProps> = ({ routerBase = "/microReact18" }) => {
  return (
    <BrowserRouter basename={routerBase}>
      <div id="app">
        {/* 导航栏 */}
        <div id="nav">
          <Link to="/home">Home</Link> | <Link to="/about">About</Link>| <Link to="/hashAnchor">Hash锚点</Link>
        </div>

        {/* 路由视图 */}
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/hashAnchor" element={<HashAnchor />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
