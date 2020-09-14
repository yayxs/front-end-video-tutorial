module.exports = {
  title: "前端厚说",
  description: "fett",
  themeConfig: {
    nav: [
      { text: "Guides", link: "/guides/" },
      { text: "External", link: "https://google.com" },
    ],
    sidebar: [
      {
        title: "HTML", // 必要的

        collapsable: false, // 可选的, 默认值是 true,

        children: ["/guides/html/"],
      },
      {
        title: "CSS",
        collapsable: true,
        children: ["/guides/css/"],
      },
    ],
  },
};
