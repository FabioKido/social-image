const {default: renderSocialImage} = require('puppeteer-social-image')

const {getCustomTemplates} = require('../utils/get-templates')
const {configureParams} = require('../utils/configure-params');

// Sizes: `facebook`, `twitter`, `ig-landscape`, `ig-square`, `ig-portrait`, `ig-story`, `pinterest` or any `WIDTHxHEIGHT` value in pixels.

exports.image = async (title, size) => {

  const {
    customTemplates,
    isFreeTemplate,
    resolvedTemplate,
    extendedParams,
  } = await getCustomTemplates('article')

  const templateParamsWithConfig = configureParams({ title });

  const img = await renderSocialImage({
    template: "basic",
    templateParams: templateParamsWithConfig,
    output: "public/images/image.png",
    size
  })

  return {
    img,
    resolvedTemplate
  };
}