import { getRequestConfig } from 'next-intl/server';
 
export default getRequestConfig(async ({ locale }) => {
  // Guaranteed to be a string by the time we access it here
  return {
    locale: locale || 'en',
    messages: (await import(`./src/locales/${locale || 'en'}/common.json`)).default
  };
});