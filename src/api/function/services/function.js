'use strict';

const { createCoreService } = require('@strapi/strapi').factories;
const puppeteer = require('puppeteer');

module.exports = createCoreService('api::function.function', ({ strapi }) => ({
  async screenshot(params) {
    await puppeteer.launch({
      defaultViewport: {
        height: params.height || 1080,
        width: params.width || 1920
      }
    }).then(async (browser) => {
      const page = await browser.newPage();
      await page.goto(params.url);
      return page.screenshot({
        quality: 80,
        type: 'jpeg'
      });
      await browser.close();
    });
  
    //return response;
  }
}));