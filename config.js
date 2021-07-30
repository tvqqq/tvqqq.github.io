module.exports = {
  pathPrefix: '',
  siteUrl: 'https://tatviquyen.name.vn',
  siteTitle: 'Quyen Tat',
  siteDescription: 'A Saigonese, crush Coffee & love Cloud',
  author: 'TVQ',
  postsForArchivePage: 3,
  defaultLanguage: 'en',
  // disqusScript: process.env.DISQUS_SCRIPT || 'https://rolwinreevan.disqus.com/embed.js', // TODO: my own comment using GraphQL + DynamoDB
  pages: {
    home: '/',
    blog: 'blog',
    contact: 'contact',
    tag: 'tags',
  },
  social: {
    github: 'https://github.com/tvqqq',
    facebook: 'https://www.facebook.com/tvqqq',
    twitter: 'https://twitter.com/tvq9612',
    instagram: 'https://www.instagram.com/tvq.december',
    linkedin: 'https://www.linkedin.com/in/tvq',
    telegram: 'https://t.me/tvq9612',
    rss: '/rss.xml',
  },
  tags: {
    life: {
      name: 'life',
      description: 'This is my life!',
      color: '#f4979e',
    },
    finance: {
      name: 'finance',
      description: "Rule #1: Don't lose money.",
      color: '#89ae44',
    },
    code: {
      name: 'code',
      description: 'Turn ☕️ into 💻',
      color: '#c0e5e4',
    },
  },
};
