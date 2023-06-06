 const { createProxyMiddleware } = require('http-proxy-mid
module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://54.224.167.209:4001', // Replace with your API endpoint
      changeOrigin: true,
    })
  );
};

