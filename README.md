# Liga Torneios

App mobile da liga local de venezuelanos em Itapiranga/SC, com campeonatos de **Free Fire** e **Mobile Legends (MLBB)**.

Feito com Expo (SDK 58), Expo Router e TypeScript (modo `strict`). Este repositório está no **passo 1**: tela inicial com a lista dos próximos torneios.

## Como rodar

No terminal, dentro da pasta do projeto:

```bash
npm install
npx expo start
```

Depois:

1. Instale o **Expo Go** no celular (Android ou iOS).
2. Leia o QR Code que aparece no terminal (ou no navegador que o Expo abrir).
3. O app carrega no telefone. Celular e computador precisam estar na mesma rede Wi-Fi.

Atalhos úteis no terminal do Expo:

- `a` — abre no emulador Android (se você tiver um)
- `w` — abre no navegador
- `r` — recarrega o app

Para só conferir o TypeScript, sem abrir o app:

```bash
npx tsc --noEmit
```

## O que já existe no passo 1

- Abas **Início** e **Ranking**
- Lista de 2 torneios de exemplo, com `FlatList` (não usamos `.map` na lista)
- Toque no card abre `/torneio/[id]`
- Botão **Inscrever time** abre `/inscricao`
- Telas ainda vazias (placeholders): inscrição, partida, ranking, admin e chave

## Roadmap

- **Passo 2 — Inscrição:** formulário com React Hook Form + Zod (nome do time, capitão, WhatsApp, 5 IDs de jogador + 1 reserva)
- **Passo 3 — Chave automática:** gerar os confrontos a partir dos times inscritos
- **Passo 4 — Resultado:** tela da partida com times, código da sala e envio do print
- **Passo 5 — Ranking:** pontos e vitórias
- **Passo 6 — Admin:** criar torneio, sortear chave e aprovar resultado
- **Backend:** Supabase (Postgres), com as tabelas `times`, `torneios`, `inscricoes` e `partidas`
- **Depois:** pagamento e bot de IA

## Como subir para o seu GitHub

O projeto já tem `README.md`, `.gitignore` e o primeiro commit. Por isso, na hora de criar o repositório no GitHub, **não** marque "Add a README file" nem "Add .gitignore" — isso evitaria conflito na hora do `git push`.

1. Entre em [github.com/new](https://github.com/new).
2. Em *Repository name*, coloque `liga-torneios`.
3. Deixe Public ou Private, como preferir.
4. **Não** marque README, .gitignore nem license.
5. Clique em **Create repository**.
6. No terminal, dentro desta pasta, rode (troque a URL se o seu usuário for outro):

```bash
git remote add origin https://github.com/juanjosevelasquezcubero/liga-torneios.git
git branch -M main
git push -u origin main
```

Se o GitHub mostrar a URL SSH (`git@github.com:...`), pode usar essa também.

### Fluxo de empresa (do dia a dia)

Depois do primeiro push, você **não** mexe direto na `main`. Cada tarefa vira uma branch, um commit e um Pull Request:

```bash
git checkout main
git pull
git checkout -b feat/inscricao-time
```

Faça as mudanças, depois:

```bash
git add .
git commit -m "feat: adiciona formulário de inscrição do time"
git push -u origin feat/inscricao-time
```

No GitHub, abra um **Pull Request** da sua branch para a `main`. Alguém revisa (code review), e só então você faz o merge. Depois apague a branch e comece a próxima tarefa do zero:

```bash
git checkout main
git pull
```

Padrão de nome de branch: `feat/...` para funcionalidade nova e `fix/...` para correção.

## Estrutura das pastas

```
app/_layout.tsx          # Stack raiz
app/(tabs)/              # Abas Início e Ranking
app/torneio/[id].tsx     # Detalhe do torneio
app/partida/[id].tsx     # Detalhe da partida
app/inscricao.tsx        # Inscrição do time
app/admin.tsx            # Área do organizador
components/              # CardTorneio e Chave
lib/                     # supabase (placeholder) e gerarChave
types/                   # Time, Torneio e Partida
```

No Expo Router, o nome do arquivo vira a rota. Por exemplo: `app/torneio/[id].tsx` é a tela `/torneio/1`.
