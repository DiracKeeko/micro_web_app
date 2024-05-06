# 简介
使用micro-app 作为微前端框架，尝试巨石web应用的拆分。
尝试使用pnpm8作为包管理工具。 (pnpm 8.15.7)

# 目录结构
```
.
├── main_app
│   ├── vue2             // 主应用 vue2 (history路由) 集成导航栏 --doing
│   └── react17          // 主应用 react17 (history路由) 集成导航栏 --todo
├── child_apps
│   ├── ...
│   ├── vue2             // 子应用 vue2 (history路由)
│   ├── react17          // 子应用 react17 (hash路由)
│   ├── vite-vue3        // 子应用 vite (hash路由)
│   └── vue3             // 子应用 vue3 (history路由)
├── package.json
└── [lockfile].json
```