import puppeteer from 'puppeteer';
import renderSocialImage from 'puppeteer-social-image';
import reducePairs from './utils/reduce-pairs';
import { getCustomTemplates } from './utils/get-templates';
import configureParams from './utils/configure-params';

let browser;

export default async function preview(
  template = 'basic',
  body,
  styles,
  size,
  ...templateParamsArr
) {
  browser = browser || (await puppeteer.launch({}));

  const templateParams = reducePairs(templateParamsArr);

  const options = {
    templateParams,
    browser,
    preview: true,
    size,
    type: 'jpeg',
    jpegQuality: 70,
  };

  if (body) {
    options.templateBody = body;
    options.templateStyles = styles;
  } else {
    const {
      customTemplates,
      isFreeTemplate,
      resolvedTemplate,
      extendedParams,
    } = await getCustomTemplates(template);

    options.template = resolvedTemplate;

    options.customTemplates = customTemplates;
    options.templateParams = configureParams(
      { ...templateParams, ...extendedParams },
      isFreeTemplate
    );
  }

  const img = await renderSocialImage(options);

  return {
    headers: {
      'Content-Type': 'image/jpeg',
    },
    statusCode: 200,
    body: img,
  };
}
