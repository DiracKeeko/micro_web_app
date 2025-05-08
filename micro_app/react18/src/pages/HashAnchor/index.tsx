import React from "react";

import "./index.css";

const anchors = [
  { id: "section1", label: "概览" },
  { id: "section2", label: "数据统计" },
  { id: "section3", label: "用户管理" },
  { id: "section4", label: "菜单管理" },
  { id: "section5", label: "系统设置" },
  { id: "section6", label: "帮助中心" },
];

const HashAnchor = () => {
  return (
    <div className="container">
      <nav className="sidebar">
        <ul>
          {anchors.map((item) => (
            <li key={item.id}>
              <a href={`#${item.id}`}>{item.label}</a>
            </li>
          ))}
        </ul>
      </nav>

      <main className="content">
        {anchors.map((item) => (
          <section key={item.id} id={item.id} className="section">
            <h2>{item.label}</h2>
            <p>这是 {item.label} 的详细内容区域。</p>
            <p>
              内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容。
            </p>
            <br />
          </section>
        ))}
      </main>
    </div>
  );
};

export default HashAnchor;
