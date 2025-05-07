/**
 * Serviço para gerenciar interações com a API de newsletter
 */

/**
 * Tipo para os dados de inscrição na newsletter
 */
export interface NewsletterSubscription {
  email: string;
}

/**
 * Resultado da operação de inscrição na newsletter
 */
export interface NewsletterResult {
  success: boolean;
  message: string;
  status?: number;
  error?: string;
}

/**
 * Erro que pode ocorrer durante a inscrição na newsletter
 */
export class NewsletterError extends Error {
  status: number;
  
  constructor(message: string, status: number = 500) {
    super(message);
    this.name = 'NewsletterError';
    this.status = status;
  }
}

/**
 * Realiza a inscrição de um email na newsletter
 * @param email Email para inscrição
 * @returns Objeto com status da operação
 */
export async function subscribeToNewsletter(email: string): Promise<NewsletterResult> {
  try {
    if (!email || !email.trim()) {
      return { 
        success: false, 
        message: "O email não pode estar vazio",
        error: "EMPTY_EMAIL"
      };
    }

    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      return { 
        success: false, 
        message: "Por favor, insira um e-mail válido.",
        error: "INVALID_EMAIL"
      };
    }

    const res = await fetch("/api/newsletter/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email })
    });

    const data = await res.json().catch(() => null);

    if (res.ok) {
      return { 
        success: true, 
        message: "Inscrição realizada com sucesso!",
        status: res.status
      };
    } else {
      // Mensagens de erro personalizadas baseadas no status HTTP
      let errorMessage = "Erro ao inscrever. Tente novamente.";
      
      if (res.status === 400) {
        errorMessage = data?.message || "Dados inválidos. Verifique o email informado.";
      } else if (res.status === 409) {
        errorMessage = "Este email já está inscrito em nossa newsletter.";
      } else if (res.status === 429) {
        errorMessage = "Muitas tentativas. Por favor, aguarde alguns minutos e tente novamente.";
      }
      
      return { 
        success: false, 
        message: errorMessage,
        status: res.status,
        error: data?.error || "UNKNOWN_ERROR"
      };
    }
  } catch (error) {
    console.error("Erro ao inscrever na newsletter:", error);
    return { 
      success: false, 
      message: error instanceof NewsletterError ? error.message : "Erro ao inscrever. Tente novamente.",
      error: "API_ERROR"
    };
  }
}