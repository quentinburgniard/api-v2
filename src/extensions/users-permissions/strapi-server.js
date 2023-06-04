module.exports = (plugin) => {
  const index = plugin.routes['content-api'].routes.findIndex((route) => route.handler == 'user.find');
  plugin.routes['content-api'].routes[index].config.policies = [ 'global::own-user' ];
  return plugin;
};