const renderSocialImage = require('puppeteer-social-image')
//import reducePairs from './utils/reduce-pairs';
//import { getCustomTemplates } from './utils/get-templates';
//import configureParams from './utils/configure-params';

let browser;

// Sizes: `facebook`, `twitter`, `ig-landscape`, `ig-square`, `ig-portrait`, `ig-story`, `pinterest` or any `WIDTHxHEIGHT` value in pixels.

exports.image = async (size) => {
  
  browser = browser || (await puppeteer.launch({}));

//   const templateParams = reducePairs(templateParamsArr);

//   const {
//     customTemplates,
//     isFreeTemplate,
//     resolvedTemplate,
//     extendedParams,
//   } = await getCustomTemplates(template);

//   const templateParamsWithConfig = configureParams(
//     { ...templateParams, ...extendedParams },
//     isFreeTemplate
//   );

  const body = await renderSocialImage.default({
    template: "basic",
    templateParams: {
        imageUrl:
            "https://images.unsplash.com/photo-1557958114-3d2440207108?w=1950&q=80",
        title
    },
    //customTemplates,
    size,
    browser,
    preview: true,
    type: 'jpeg',
    jpegQuality: 70,
  });

  return {
    headers: {
      'Content-Type': 'image/jpeg',
    },
    statusCode: 200,
    body,
  };
}