// next.config.js
const withImages = require('next-images');
const glob = require('glob');

module.exports = withImages({
  exportPathMap: () => {
    const pathMap = {
      '/': { page: '/' },
    };

    glob.sync('pages/**/*.jsx', { ignore: 'pages/_document.jsx' }).forEach((s) => {
      const path = s.split(/(pages|\.)/)[2].replace(/^\/index$/, '/');
      pathMap[path] = { page: path };
    });

    return pathMap;
  },
});
