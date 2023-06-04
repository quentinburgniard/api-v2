module.exports = (policyContext, config, { strapi }) => {
  if (policyContext.state.user) {
    policyContext.request.query = {
      ...policyContext.request.query,
      filters : {
        ...policyContext.request.query.filters,
        user: policyContext.state.user.id
      }
    }
  } else {
    return false;
  }
};