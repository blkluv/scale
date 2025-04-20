// next-sitemap.config.js
module.exports = {
    siteUrl: process.env.SITE_URL || 'https://scale-lemon.vercel.app/',
    generateRobotsTxt: true,
    exclude: ['/scale/*'],
    robotsTxtOptions: {
        policies: [{ userAgent: '*', allow: '/' }],
    },
    sitemapSize: 5000,
    changefreq: 'weekly',
    priority: 0.8,
};
