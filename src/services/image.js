const {default: renderSocialImage} = require('puppeteer-social-image')

const {reducePairs} = require('../utils/reduce-pairs')
const {getCustomTemplates} = require('../utils/get-templates')
const {configureParams} = require('../utils/configure-params')

exports.image = async (template = 'basic', size, ...templateParamsArr) => {

  const templateParams = reducePairs(templateParamsArr)

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
    type: 'jpeg',
    jpegQuality: 80
  })

  return {
    img
  }
}