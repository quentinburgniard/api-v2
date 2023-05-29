module.exports = (policyContext, config, { strapi }) => {
  policyContext.request.query = {
    ...policyContext.request.query,
    filters : {
      ...policyContext.request.query.filters,
      publishedAt: { '$notNull': 'true' }
    }
  }
};