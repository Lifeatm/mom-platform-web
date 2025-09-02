# lifeatm-platform-web

一个现代化的前端平台，采用 Monorepo 架构，支持多项目协同开发，主基座与多个独立子项目共享公共模块。

---

## 🚀 特性

- Monorepo 管理，统一依赖，便于维护和扩展
- 主基座与独立子项目灵活组合
- 公共模块（常量、工具、组件）可复用
- 支持 TypeScript、Vite、pnpm 等主流技术
- 完善的开发规范与工具链

---

## 📦 目录结构

```text
mom-platform-web/
├── main/                # 主基座项目
│   ├── node_modules/
│   ├── public/
│   ├── src/
│   ├── package.json     # 只放运行时依赖
│   └── ...
├── packages/            # 公共模块
│   ├── constants/       # 全局常量
│   ├── utils/           # 工具函数
│   ├── components/      # 公共组件库
│   └── ...
├── projects/            # 独立子项目
│   ├── project-a/
│   ├── project-b/
│   └── ...
├── .editorconfig
├── .env.*
├── .eslintrc.js
├── .gitignore
├── .prettierrc
├── package.json         # 顶层 package.json，只放工具链依赖
├── pnpm-lock.yaml
├── pnpm-workspace.yaml  # workspace 路径定义
├── README.md
├── tsconfig.base.json   # TypeScript 基础配置
└── vite.config.ts       # Vite 配置
```

---

## 🛠️ 技术栈

- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [Vue 3](https://vuejs.org/)
- [pnpm](https://pnpm.io/)
- [Naive UI](https://www.naiveui.com/)
- [UnoCSS](https://unocss.dev/)

---

## 📖 安装与使用

1.  安装依赖（只需在根目录执行一次）：
    ```bash
    pnpm install
    ```
2.  启动主项目：
    ```bash
    cd main
    pnpm dev
    ```
3.  启动独立子项目（如有）：
    ```bash
    cd projects/project-a
    pnpm dev
    ```

> **依赖管理说明**：
>
> - 根目录 `package.json` + workspace 中各包的依赖解析所有依赖。
> - 依赖统一安装到根目录 `node_modules`。
> - 用符号链接（symlink）把各个子包链接到各自的 `node_modules`。
> - 不需要手动在 main 或 packages 下执行 `pnpm install`，根目录一次即可。

---

## 📂 项目说明

- **main/** 主基座项目，负责整体路由、布局、权限等核心功能。
- **packages/** 公共模块，包含常量、工具函数、组件库等，可被主项目和子项目复用。
- **projects/** 独立子项目，可按需集成到主基座，也可单独运行。

---

## 🤝 贡献指南

欢迎参与贡献！请遵循以下流程：

1.  Fork 本仓库
2.  新建分支进行开发
3.  提交 PR 并描述变更内容
4.  等待审核与合并

---

## 📄 许可证

MIT License
