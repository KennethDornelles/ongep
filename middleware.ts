import createMiddleware from 'next-intl/middleware';
 
export default createMiddleware({
  // Lista dos idiomas suportados
  locales: ['en', 'pt'],
  
  // Idioma padrão
  defaultLocale: 'en',
  
  // Redirecionamento automático baseado na preferência do navegador
  localeDetection: true
});
 
export const config = {
  // Ignorar rotas que devem ser tratadas por outro middleware
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};