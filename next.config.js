
const plasmic = require('@plasmicapp/loader/next');
const withPlasmic = plasmic({
  projects: ['8R94i1B7qnFVCV9ArauNfq'] // An array of project ids.
});
module.exports = withPlasmic({
  trailingSlash: true,
  // Your NextJS config.
});
  