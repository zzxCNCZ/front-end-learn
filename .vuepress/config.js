const path = require('path')
module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        algorithm: path.join(__dirname, 'algorithm')
      }
    }
  },
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
  themeConfig: {
    logo: '/hero.png',
    sidebarDepth: 2,
    lastUpdated: 'Last Updated',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Fe', link: '/fe/' },
      { text: 'Browser', link: '/browser/' },
      { text: 'Lib', link: '/lib/' },
      { text: 'Tool', link: '/tool/' },
      { text: 'Algorithm', link: '/algorithm/' }
    ],
    sidebar: {
      '/fe/': [
        {
          title: 'Javascript',
          collapsable: false,
          children: [
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
            'build-in-regx',
            'func-base',
            'func-this',
            'func-call-apply-bind',
            'func-iife',
            'func-recursion',
            'func-promise',
            'func-async',
            'func-oop',
            'error',
            'module',
            'z-function-execution'
          ].map(i => `javascript/${i}`)
        },
        {
          title: 'CSS',
          collapsable: true,
          children: ['animation', 'px', 'css', 'cssExpandClickAreas', 'cssFontFamily', 'flex', 'QA'].map(i => `css/${i}`)
        },
        {
          title: 'HTML',
          collapsable: true,
          children: ['crossorigin', 'element', 'image', 'html', 'iframe', 'select'].map(i => `html/${i}`)
        },
        {
          title: 'Node',
          collapsable: true,
          children: ['', 'path', 'module', 'cli'].map(i => `node/${i}`)
        },
      ],
      '/browser/': [
        {
          title: 'WebAPI',
          collapsable: false,
          children: ['', 'file', 'canvas', 'formdata', 'uri', 'event',].map(i => `webapi/${i}`)
        },
        {
          title: '渲染',
          collapsable: false,
          children: ['', 'crp', 'viewport',].map(i => `render/${i}`)
        }, {
          title: '网络',
          collapsable: false,
          children: ['', 'router', 'tcp', 'dns', 'cache', 'storage', 'crossorigin', 'websafe',].map(i => `network/${i}`)
        },
      ],
      '/tool/': [
        {
          title: 'GIT',
          collapsable: false,
          children: ['', 'knowledge', 'base', 'branch', 'config', 'log', 'reset', 'stash'].map(i => `git/${i}`)
        },
        {
          title: '其他',
          collapsable: false,
          children: ['', 'babel', 'chrome', 'eslint', 'github', 'husky', 'ci', 'nginx', 'npm', 'vscode', 'webpack', 'webpack-split-chunks', 'webpackQA']
        },
      ],
      '/lib/': [
        {
          title: 'Vue',
          collapsable: false,
          children: ['', 'base', 'component', 'lifecycle', 'reactivity', 'sfc', 'project', 'src-code-vfor', 'store', 'store-communication', 'qa'].map(i => `vue/${i}`)
        },
        {
          title: '其他',
          collapsable: false,
          children: ['', 'element', 'pwa', 'react', 'reactnative', 'test', 'typescript']
        }
      ],
      '/algorithm/': [
        {
          title: '排序',
          collapsable: false,
          children: ['', 'bubble', 'select', 'insertion', 'shell', 'merge', 'heap', 'quick'].map(i => `sort/${i}`)
        },
        {
          title: '暴力求解',
          collapsable: false,
          children: ['', 'simple', 'all-permutations'].map(i => `violence/${i}`)
        },
        {
          title: '题目',
          collapsable: false,
          children: ['', 'search', 'dp', '13RomanToInteger', '17LetterCombinationsOfAPhoneNumber']
        }
      ],
      '/': ['']
    }
  }
}
