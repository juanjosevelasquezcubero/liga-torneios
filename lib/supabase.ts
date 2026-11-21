// Passo 1: ainda não conectamos no Supabase.
// Quando for a hora, instale com: npx expo install @supabase/supabase-js
// e troque o `null` abaixo por createClient(url, anonKey).
//
// Variáveis de ambiente (arquivo .env na raiz do projeto):
//   EXPO_PUBLIC_SUPABASE_URL=https://xxxx.supabase.co
//   EXPO_PUBLIC_SUPABASE_ANON_KEY=sua-chave-anon
//
// O prefixo EXPO_PUBLIC_ é obrigatório para o Expo enxergar a variável no app.
// Nunca coloque a chave service_role aqui — ela é secreta e fica só no servidor.

const supabaseUrl = process.env.EXPO_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY;

// Placeholder: no passo do backend isso vira o cliente do Supabase.
export const supabase = null;

export function supabaseEstaConfigurado(): boolean {
  return Boolean(supabaseUrl && supabaseAnonKey);
}
