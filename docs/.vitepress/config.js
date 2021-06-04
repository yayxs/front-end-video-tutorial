module.exports = {
    title: '免费视频系列教程分享',
    description: '洋小洋同学',
  
    themeConfig: {
    
      docsDir: 'docs',
  
      lastUpdated: 'Last Updated',
  
      nav: [
        { text: 'Guide', link: '/', activeMatch: '^/$|^/guide/' },

        {
          text: 'Git Repo',
          link: 'https://github.com/yayxs/vast-video-tutorial'
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
      { text: '来啦', link: '/' },
     
    ]
  }
  
 