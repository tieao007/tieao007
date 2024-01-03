/* globals Docute */

new Docute({
  target: '#docute',
  sourcePath: './docs/',
  logo: {
    template: 
    `
    <div>
      <span style="font-weight:bold;font-size:30px">🌈Tia007</span>
    </div>
    `
  },
  highlight: ['typescript', 'bash', 'json', 'markdown'],

  theme: 'default',
  detectSystemDarkTheme: true,
  darkThemeToggler: true,
  

  nav: [
    {
      title: '🌱Home',
      link: '/'
    },
    {
      title: 'Twitter',
      link: 'https://twitter.com/Tia_aiT77'
    },
    {
      title: 'Telegram',
      link: 'https://t.me/CODE007_KR'
    }
  ],

  sidebar: [
    {
      title: 'One',
      link: '/',
    },
    {
      title: 'Two',
      link: '/url',
    },
    {
      title: 'Three',
      link: '/url',
    },

  ],

  overrides: {
      '/':{
        language: '中文'
      },

      '/en':{
        language: 'English'
      },

      '/kor':{
        language: '한국어',

        sidebar: [
           {
              title: 'One',
              links: '/url'
            }
        ],
      }
  },
})
