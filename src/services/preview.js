const {default: renderSocialImage} = require('puppeteer-social-image')

const {reducePairs} = require('../utils/reduce-pairs')
const {getCustomTemplates} = require('../utils/get-templates')
const {configureParams} = require('../utils/configure-params')

exports.preview = async (template = 'basic',  body,  styles,  size,  ...templateParamsArr) => {

  const templateParams = reducePairs(templateParamsArr)
  
  const options = {
    templateParams,
    preview: true,
    size,
    type: 'jpeg',
    jpegQuality: 70
  }

  if (body) {
    options.templateBody = body
    options.templateStyles = styles
  } else {
    const {
      customTemplates,
      isFreeTemplate,
      resolvedTemplate,
      extendedParams,
    } = await getCustomTemplates(template)

    options.template = resolvedTemplate

    options.customTemplates = customTemplates;
    options.templateParams = configureParams(
      { ...templateParams, ...extendedParams },
      isFreeTemplate
    );
  }

  const img = await renderSocialImage(options)

  return {
    img
  }
}