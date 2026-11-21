import type { Partida, Time } from '@/types';

// Vai montar a chave (confrontos) automaticamente no passo 3.
// Por enquanto só devolve uma lista vazia, para o projeto já type-checar.
export function gerarChave(_times: Time[]): Partida[] {
  return [];
}
