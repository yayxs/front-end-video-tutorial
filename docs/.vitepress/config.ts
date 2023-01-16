import { withMermaid } from 'vitepress-plugin-mermaid'
import { defineConfig } from 'vitepress'
export default withMermaid(
  defineConfig({
    lang: 'en-US',
    title: '前端厚说-UP视频分享',
    description: 'vanlee 免费视频系列教程分享',

    lastUpdated: true,
    cleanUrls: 'without-subfolders',

    head: [['meta', { name: 'theme-color', content: '#3c8772' }]],

    markdown: {
      headers: {
        level: [0, 0],
      },
    },

    themeConfig: {
      // lastUpdated: 'Last Updated',

      // nav: [
      //   { text: 'Guide', link: '/', activeMatch: '^/$|^/guide/' },

      //   {
      //     text: 'Git Repo',
      //     link: 'https://github.com/yayxs/vast-video-tutorial',
      //   },
      // ],
      nav: genNav(),
      // sidebar: {
      //   '/guide/': getGuideSidebar(),
      //   '/': getGuideSidebar(),
      // },

      sidebar: {
        '/vitepress/': sidebarVitepress(),
        // '/config/': sidebarConfig(),
      },
      footer: {
        message: '微信公众号 前端诗人',
        copyright: `<a
        title="京ICP备2021023212号"
        style="color:#409eff"
        href="https://beian.miit.gov.cn/#/Integrated/recordQuery"
        target="_blank"
      >
        京ICP备2021023212号-1
      </a> © 2020-present vanlee`,
      },
    },
  })
)

// module.exports = function getGuideSidebar() {
//   return [{ text: '来啦', link: '/' }]
// }

/**
 * 生成顶部的nav
 * vitepress
 */
function genNav() {
  return [
    { text: 'Vitepress', link: '/vitepress/index', activeMatch: '/vitepress/' },
    // { text: 'Configs', link: '/config/introduction', activeMatch: '/config/' },
  ]
}

/**
 * 生成有关 vitepress 的一些侧边栏
 */
function sidebarVitepress() {
  return [
    {
      text: 'Vitepress',
      items: [{ text: '这是名称', link: '/vitepress/index' }],
    },
  ]
}
