---
title: '如何在博客中插入图片'
description: '三种方式插入图片，让你的博客图文并茂。'
pubDate: 2026-06-16
tags: ['教程', 'Markdown']
category: '技术'
---

写博客少不了配图，这里有三种插入图片的方式。

## 方式一：本地图片（推荐）

把图片放到 `public/images/` 目录下，然后在文章里这样写：

```markdown
![图片描述](/images/你的图片.jpg)
```

比如：`![今天拍的晚霞](/images/sunset.jpg)`

`public/` 目录下的文件会被直接复制到网站根目录，所以路径用 `/images/xxx.jpg` 就行。

## 方式二：带标题的图片

```markdown
![图片描述](/images/photo.jpg "鼠标悬停时显示的文字")
```

## 方式三：外链图片

直接使用网络图片的 URL：

```markdown
![示例图片](https://picsum.photos/800/400)
```

下面是一张示例效果：

![示例图片](https://picsum.photos/800/400)

---

## 我的图片存放建议

```
public/
└── images/
    ├── 2026-06-16-sunset.jpg    ← 按日期命名，好找
    ├── 2026-07-01-coding.jpg
    └── avatar.png
```

在 `public/images/` 下按日期或主题分类存放，管理起来很方便。

## 图片小贴士

- **格式**：照片用 JPG，截图用 PNG，动画用 GIF
- **大小**：建议单张不超过 500KB，可以用 [TinyPNG](https://tinypng.com) 压缩
- **尺寸**：宽度 800px 左右就够了，博客内容区本身不宽
- **描述**：`![描述]()` 里的描述文字对无障碍访问和 SEO 都有帮助

---

快去放一张图试试效果吧 📸
