lifeatm-platform-web/
│
├── main/ # 主基座项目
│ ├── node_modules/
│ ├── public/
│ ├── src/
│ │ └── index.html
│ ├── package.json # 只放运行时依赖
│
├── packages/ # Monorepo 公共模块
│ ├── constants/ # 全局常量模块
│ │ ├── src/
│ │ │ └── index.ts
│ │ ├── package.json
│ │
│ ├── utils/ # 工具函数模块
│ │ ├── src/
│ │ │ └── index.ts
│ │ ├── package.json
│ │
│ ├── components/ # 公共组件库模块
│ ├── src/
│ │ ├── Button.tsx # 示例组件
│ │ └── index.ts
│ ├── package.json
│
├── projects/ # 独立子项目
│ ├── project-a/
│ │ ├── src/
│ │ ├── package.json # 放本项目单独使用的包，如果这个项目依赖 main项目，可以不需要这个文件
│ │
│ ├── project-b/
│ ├── src/
│ ├── package.json # 放本项目单独使用的包
│
├── .editorconfig
├── .env.development
├── .env.production
├── .eslintrc.js
├── .gitignore
├── .prettierrc
├── package.json # 顶层 package.json，管理 workspace 只放工具链依赖
├── pnpm-lock.yaml
├── pnpm-workspace.yaml # 定义所有 workspace 路径
├── README.md
├── tsconfig.base.json # TypeScript 基础配置
└── vite.config.ts # Vite 配置
pnpm 会：
根据根目录 package.json + workspace 中各包的依赖解析所有依赖
把依赖统一安装到 根目录 node_modules
用 符号链接（symlink）把各个子包链接到各自的 node_modules
换句话说，你不需要手动在 main 或 packages 下执行 pnpm install，根目录一次就可以把整个 monorepo 的依赖装好。
