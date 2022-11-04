//import favicon from './extensions/favivon.ico';
import logo from './extensions/logo.png';

export default {
  config: {
    auth: {
      logo: logo
    },
    //head: {
      //favicon: favicon
    //},
    menu: {
      logo: logo
    },
    notifications: {
      release: false
    },
    translations: {
      en: {
        'app.components.LeftMenu.navbrand.title': 'Digital Léman Admin',
        'Auth.form.welcome.subtitle': 'Log in to your Digital Léman account',
        'Auth.form.welcome.title': 'Welcome to Digital Léman Admin!'
      }
    },
    tutorials: false
  },  
  bootstrap() {},
};