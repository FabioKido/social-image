const {default: renderSocialImage} = require('puppeteer-social-image')

const {getCustomTemplates} = require('../utils/get-templates')
const {configureParams} = require('../utils/configure-params');
const {reducePairs} = require('../utils/reduce-pairs')

exports.image = async (template = 'basic', size, ...templateParamsArr) => {

  const templateParams = reducePairs(templateParamsArr);

  const {
    customTemplates,
    isFreeTemplate,
    resolvedTemplate,
    extendedParams,
  } = await getCustomTemplates(template)

  const templateParamsWithConfig = configureParams({ ...templateParams, ...extendedParams }, isFreeTemplate)
  
  const img = await renderSocialImage({
    template: resolvedTemplate,
    templateParams: templateParamsWithConfig,
    customTemplates,
    size,
    output: "public/images/image.png"
  })

  return {
    img,
    resolvedTemplate
  };
}