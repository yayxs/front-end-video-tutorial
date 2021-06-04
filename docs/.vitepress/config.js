module.exports = {

    title: 'vast',
    description: '搭建博客分享',
  
    themeConfig: {
     
      docsDir: 'docs',
   
  
      nav: [
        { text: 'Guide', link: '/', activeMatch: '^/$|^/guide/' },
      
        {
          text: 'Git Repo',
          link: 'https://github.com/vuejs/vitepress/releases'
        }
      ],
  
      sidebar: {
        '/guide/': getGuideSidebar(),
        '/': getGuideSidebar()
      }
    }
  }
  
  function getGuideSidebar() {
    return [
      {
        text: 'Introduction',
        children: [
          { text: 'What is VitePress?', link: '/' },
          { text: '新建的一个页面', link: '/guide/test' },
        ]
      },
      
    ]
  }
  
