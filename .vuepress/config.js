module.exports = {
  title: '重学前端',
  head: [
    [
      'link',
      {
        rel: 'icon',
        href: '/favicon.ico'
      }
    ]
  ],
  base: '/fe/',
  themeConfig: {
    logo: '/hero.png',
    sidebarDepth: 2,
    lastUpdated: 'Last Updated',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'JavaScript', link: '/javascript/' },
      { text: 'Browser', link: '/browser/' },
      { text: 'Vue', link: '/vue/' },
      { text: 'Tool', link: '/tool/' },
      { text: 'Algorithm', link: '/algorithm/' }
    ],
    sidebar: {
      '/javascript/': [
        '',
        'variable',
        'type-common-number',
        'type-common-string',
        'type-common-boolean',
        'type-reference-array',
        'type-reference-object',
        'logical-statement',
        'build-in-date',
        'build-in-json',
        'build-in-timer',
        'function',
        'design-patterns-oop',
        'error'
      ],
      '/browser/': ['', 'viewport', 'cros', 'event', 'uri', 'storage', 'canvas', 'file', 'formdata'],
      '/tool/': ['', 'husky'],
      '/vue/': ['', 'vue-base', 'vue-base-computed', 'vue-component', 'vue-component-update', 'vue-component-sfc', 'vue-src-code-vfor', 'vue-communication-store', 'vue-qa'],
      '/algorithm/': ['', 'dp', '13RomanToInteger', '17LetterCombinationsOfAPhoneNumber'],
      '/': ['']
    }
  }
}
