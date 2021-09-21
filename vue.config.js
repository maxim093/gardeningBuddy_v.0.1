module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `
            @import "@/scss/_variables.scss";
            @import "@/scss/_fonts.scss";
          `,
      },
    },
  },
  chainWebpack: (config) => {
    config.module
      .rule("vue")
      .use("vue-loader")
      .tap((options) => {
        options.compilerOptions = {
          ...options.compilerOptions,
          isCustomElement: (tag) => tag.startsWith("ion-"),
        };
        return options;
      });
  },
};
