// graphql api url
let url = 'https://degrawanddehaan.wordtestdomain.com/graphql';  

// If we're running on Docker, use the WordPress container hostname instead of localhost.
if (process.env.HOME === '/home/node') {
  url = 'http://wp-headless:8080/graphql';
}
const Config = {
  gqlUrl: url,
};

export default Config;
