module.exports = (config, { strapi })=> {
  return async (context, next) => {
    if (!context.request.header.authorization) {
      const cookies = context.request.header.cookie || false;
      if (cookies) {
        const token = cookies.split(';').find((cookie) => cookie.trim().startsWith('t='));
        if (token) context.request.header.authorization = `Bearer ${token.split('=')[1]}`;
      }
    }
    await next();
  }
}