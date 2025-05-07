import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async ({ locale }) => {
  // Verificar se o locale é válido antes de tentar carregar o arquivo
  const validLocale = locale && (locale === 'en' || locale === 'pt') ? locale : 'en';
  
  try {
    // Usar import dinâmico com caminho absoluto para evitar problemas com paths relativos
    const messages = (await import(`../src/locales/${validLocale}/common.json`)).default;
    
    return {
      locale: validLocale,
      messages
    };
  } catch (error) {
    console.error(`Erro ao carregar traduções para locale ${validLocale}:`, error);
    
    // Fallback para inglês se ocorrer algum erro
    const fallbackMessages = (await import('../src/locales/en/common.json')).default;
    
    return {
      locale: 'en',
      messages: fallbackMessages
    };
  }
});