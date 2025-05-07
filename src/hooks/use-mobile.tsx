import * as React from "react"

// Definindo os principais breakpoints seguindo um padrão semelhante ao Tailwind CSS
export enum Breakpoint {
  xs = 320,  // Extra small screens (celulares pequenos)
  sm = 640,  // Small screens (celulares maiores)
  md = 768,  // Medium screens (tablets)
  lg = 1024, // Large screens (laptops/desktops menores)
  xl = 1280, // Extra large screens (desktops)
  xxl = 1536 // 2XL screens (telas maiores)
}

/**
 * Hook para verificar se a largura da tela é menor que um determinado breakpoint
 * @param breakpoint Breakpoint a ser verificado (padrão: md - 768px)
 * @returns Boolean indicando se a tela é menor que o breakpoint especificado
 */
export function useIsMobile(breakpoint: Breakpoint = Breakpoint.md) {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined)

  React.useEffect(() => {
    // Verificação inicial imediata
    setIsMobile(window.innerWidth < breakpoint)

    // Função para atualizar o estado quando a tela é redimensionada
    const handleResize = () => {
      setIsMobile(window.innerWidth < breakpoint)
    }

    // Usando matchMedia para melhor performance
    const mql = window.matchMedia(`(max-width: ${breakpoint - 1}px)`)

    // Configuração do listener dependendo da API do navegador
    if (mql.addEventListener) {
      mql.addEventListener("change", handleResize)
    } else {
      // Fallback para navegadores mais antigos
      window.addEventListener("resize", handleResize)
    }

    // Cleanup
    return () => {
      if (mql.removeEventListener) {
        mql.removeEventListener("change", handleResize)
      } else {
        window.removeEventListener("resize", handleResize)
      }
    }
  }, [breakpoint])

  return !!isMobile
}

/**
 * Hook para obter a largura atual da janela e reagir a mudanças
 * @returns Largura atual da janela em pixels
 */
export function useWindowWidth() {
  const [windowWidth, setWindowWidth] = React.useState<number | undefined>(
    typeof window !== 'undefined' ? window.innerWidth : undefined
  )

  React.useEffect(() => {
    // Função para atualizar o estado quando a tela é redimensionada
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }

    // Adicionando evento de resize
    window.addEventListener("resize", handleResize)

    // Cleanup
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return windowWidth
}

/**
 * Hook para verificar se a largura da tela está dentro de um intervalo específico
 * @param minWidth Largura mínima em pixels
 * @param maxWidth Largura máxima em pixels
 * @returns Boolean indicando se a largura da tela está dentro do intervalo
 */
export function useBreakpointRange(minWidth: number, maxWidth: number) {
  const windowWidth = useWindowWidth()

  if (typeof windowWidth === 'undefined') {
    return false
  }

  return windowWidth >= minWidth && windowWidth < maxWidth
}

/**
 * Hook para identificar o breakpoint atual
 * @returns O nome do breakpoint atual (xs, sm, md, lg, xl, xxl)
 */
export function useCurrentBreakpoint() {
  const windowWidth = useWindowWidth() || 0

  if (windowWidth < Breakpoint.sm) return 'xs'
  if (windowWidth < Breakpoint.md) return 'sm'
  if (windowWidth < Breakpoint.lg) return 'md'
  if (windowWidth < Breakpoint.xl) return 'lg'
  if (windowWidth < Breakpoint.xxl) return 'xl'
  return 'xxl'
}
