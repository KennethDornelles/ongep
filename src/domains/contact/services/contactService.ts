/**
 * Serviço para gerenciar interações com a API de contato
 */

/**
 * Tipo para os dados de formulário de contato
 */
export interface ContactForm {
  name: string;
  email: string;
  message: string;
}

/**
 * Resultado da operação de envio de contato
 */
export interface ContactResult {
  success: boolean;
  message: string;
  status?: number;
  error?: string;
}

/**
 * Erro que pode ocorrer durante o envio de contato
 */
export class ContactError extends Error {
  status: number;
  
  constructor(message: string, status: number = 500) {
    super(message);
    this.name = 'ContactError';
    this.status = status;
  }
}

/**
 * Envia uma mensagem de contato através da API
 * @param contactData Dados do formulário de contato
 * @returns Objeto com status da operação
 */
export async function sendContactMessage(contactData: ContactForm): Promise<ContactResult> {
  try {
    // Validação dos campos obrigatórios
    if (!contactData.name || !contactData.name.trim()) {
      return { 
        success: false, 
        message: "O nome é obrigatório.",
        error: "EMPTY_NAME"
      };
    }

    if (!contactData.email || !contactData.email.trim()) {
      return { 
        success: false, 
        message: "O email é obrigatório.",
        error: "EMPTY_EMAIL"
      };
    }

    if (!contactData.message || !contactData.message.trim()) {
      return { 
        success: false, 
        message: "A mensagem é obrigatória.",
        error: "EMPTY_MESSAGE"
      };
    }

    // Validação do formato do email
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(contactData.email)) {
      return { 
        success: false, 
        message: "Por favor, insira um e-mail válido.",
        error: "INVALID_EMAIL"
      };
    }

    const res = await fetch("/api/contact/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(contactData)
    });

    const data = await res.json().catch(() => null);

    if (res.ok) {
      return { 
        success: true, 
        message: "Mensagem enviada com sucesso!",
        status: res.status
      };
    } else {
      // Mensagens de erro personalizadas baseadas no status HTTP
      let errorMessage = "Erro ao enviar mensagem. Tente novamente.";
      
      if (res.status === 400) {
        errorMessage = data?.message || "Dados inválidos. Verifique as informações fornecidas.";
      } else if (res.status === 429) {
        errorMessage = "Muitas tentativas. Por favor, aguarde alguns minutos e tente novamente.";
      } else if (res.status === 413) {
        errorMessage = "A mensagem é muito grande. Por favor, seja mais conciso.";
      }
      
      return { 
        success: false, 
        message: errorMessage,
        status: res.status,
        error: data?.error || "UNKNOWN_ERROR"
      };
    }
  } catch (error) {
    console.error("Erro ao enviar mensagem de contato:", error);
    return { 
      success: false, 
      message: error instanceof ContactError ? error.message : "Erro ao enviar mensagem. Tente novamente.",
      error: "API_ERROR"
    };
  }
}