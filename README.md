# 云途笔记 · 个人技术博客网站（课程作业）

一个纯静态个人技术博客，使用 HTML + CSS + 原生 JavaScript 编写，无需后端和框架，双击 `index.html` 即可在浏览器中打开预览。

## 一、网站栏目结构（对应课堂板书）

```
personal-blog/
├── index.html                首页（index.html）
├── about.html                关于我（about.html）
├── css/
│   └── style.css             全站共用样式
├── js/
│   └── main.js               导航高亮、下拉菜单、页脚年份
├── posts/                    栏目① 技术文章
│   ├── docker.html           1.1 Docker 容器
│   ├── k8s.html              1.2 K8s 容器编排
│   └── cloud-platform.html   1.3 云平台
└── stack/                    栏目② 技术栈
    ├── node.html             Node.js
    ├── vm.html               虚拟机（VM）
    ├── pc.html               PC 开发环境
    ├── framework.html        开发框架（2023 年接触）
    └── tools.html            开发工具（2024 年）
```

## 二、栏目与网页数量预估

| 栏目 | 页面文件 | 页面数量 |
|---|---|---|
| 首页 | index.html | 1 |
| 关于我 | about.html | 1 |
| 技术文章 - Docker | posts/docker.html（3 篇文章卡片） | 1 列表页 + 3 文章占位 |
| 技术文章 - K8s | posts/k8s.html（3 篇文章卡片） | 1 列表页 + 3 文章占位 |
| 技术文章 - 云平台 | posts/cloud-platform.html（3 篇文章卡片） | 1 列表页 + 3 文章占位 |
| 技术栈 - Node.js | stack/node.html | 1 |
| 技术栈 - 虚拟机 | stack/vm.html | 1 |
| 技术栈 - PC 环境 | stack/pc.html | 1 |
| 技术栈 - 开发框架 | stack/framework.html | 1 |
| 技术栈 - 开发工具 | stack/tools.html | 1 |

当前已建成 **10 个静态页面**；每篇文章后续再单独拆成一个详情页，网页数量按"文章详情页 +1"增长。

## 三、功能说明

- 顶部导航：首页、技术文章（下拉：Docker / K8s / 云平台）、技术栈（下拉：Node.js / 虚拟机 / PC 环境 / 框架 / 工具）、关于我；鼠标悬停展开，当前页面自动高亮。
- 首页：欢迎横幅、三大栏目入口卡片、最新文章列表、侧边栏（博主简介、文章分类、标签云）。
- 文章栏目页：文章卡片 + 标签 + 日期 + 代码示例 + 阅读全文入口。
- 技术栈栏目页：技术点卡片网格，含学习程度标签、说明文字和代码示例。
- 关于我：个人简介、技能标签、学习方向、学习经历、联系方式（占位内容，可自行修改）。
- 响应式布局：桌面端左右分栏，窄屏自动切换为单列。

## 四、本地预览方法

方式一：直接双击 `index.html` 用浏览器打开。

方式二：启动本地静态服务器（推荐，避免相对路径问题）：

```bash
cd personal-blog
python3 -m http.server 8099
# 浏览器访问 http://127.0.0.1:8099
```

## 五、可自行修改的位置

- 博主名称、简介、头像首字：各页面侧边栏"博主简介"卡片与 `about.html`。
- 邮箱、GitHub、联系方式：`about.html` 联系方式部分。
- 文章标题、摘要、代码：`posts/` 下对应页面；后续新增文章时仿照现有文章卡片格式即可。
- 主题色：`css/style.css` 顶部 `:root` 中的 `--primary` 变量。
