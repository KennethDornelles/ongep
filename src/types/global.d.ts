// Tipos globais de exemplo

export type UserRole = 'admin' | 'editor' | 'viewer';

export interface ApiResponse<T = any> {
  success: boolean;
  data: T;
  message?: string;
}

export {}
