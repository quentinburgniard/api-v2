module.exports = (policyContext, config, { strapi }) => {
  if (policyContext.request.query.publicationState && policyContext.request.query.publicationState == 'preview') {
    return false;
  }

  policyContext.request.query = {
    ...policyContext.request.query,
    filters : {
      ...policyContext.request.query.filters,
      publishedAt: { '$notNull': 'true' }
    }
  }
};