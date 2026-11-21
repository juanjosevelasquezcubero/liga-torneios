// Tipos do app da liga. O TypeScript usa esses contratos para
// avisar no editor se esquecermos um campo ou passarmos o tipo errado.

export type Time = {
  id: string;
  nome: string;
  capitao: string;
  whatsapp: string;
  // 5 jogadores + 1 reserva entram nesta lista (passo 2).
  jogadores: string[];
};

export type Torneio = {
  id: string;
  nome: string;
  // União de literais: só esses dois jogos existem neste app.
  jogo: 'Free Fire' | 'MLBB';
  // Data no formato 'AAAA-MM-DD' (ex.: '2026-11-29').
  data: string;
  status: 'aberto' | 'andamento' | 'fim';
};

export type Partida = {
  id: string;
  torneioId: string;
  // IDs dos times que se enfrentam.
  timeA: string;
  timeB: string;
  // Opcional (?): ainda não tem vencedor enquanto a partida não termina.
  vencedor?: string;
  rodada: number;
};
