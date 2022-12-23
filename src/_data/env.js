const environment = process.env.ELEVENTY_ENV;
const PROD_ENV = 'prod';
const prodUrl = 'https://rajeev.erramil.li/';
const devUrl = 'http://localhost:8080';
const baseUrl = environment === PROD_ENV ? prodUrl : devUrl;
const isProd = environment === PROD_ENV;

const folder = {
  assets: 'assets',
  input: 'src',
  output: '_site'
};

const dir = {
  img: `/${folder.assets}/img/`,
  favicons: `/${folder.assets}/img/favicons/`,
  css: `/${folder.assets}/css/`,
  icons: `/${folder.assets}/img/icons/`,
}

module.exports = {
  siteName: 'Rajeev S. Erramilli',
  themeColor: '#000000',
  author: 'Rajeev Erramilli',
  environment,
  isProd,
  folder,
  base: {
    site: baseUrl,
    img: `${baseUrl}${dir.img}`,
    favicons: `${baseUrl}${dir.favicons}`,
    css: `${baseUrl}${dir.css}`,
    icons: `${baseUrl}${dir.icons}`,
  }
};
