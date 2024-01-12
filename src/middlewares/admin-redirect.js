module.exports = (config, { strapi }) => {
  const redirects = ['/', '/index.html'].map((path) => ({
      method: 'GET',
      path,
      handler: (context) => context.redirect('/admin'),
      config: { auth: false },
  }));

  strapi.server.routes(redirects);
};