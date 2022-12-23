// 11ty configuration
module.exports = config => {
  config.addPassthroughCopy("src/CNAME"); 
  // 11ty defaults
  return {

    dir: {
      input: 'src',
      output: '_site'
    }

  };
};