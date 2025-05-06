// Exemplo de serviço para blog

import { ApiResponse } from '@/types/global';

export async function fetchBlogPosts(): Promise<ApiResponse> {
  const res = await fetch('/api/blog');
  return res.json();
}
