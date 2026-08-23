# CLAUDE.md — Montejano

## Sobre o negócio
Montejano NÃO é uma software house, SaaS ou startup de tecnologia. É uma
consultoria/construtora de estruturas digitais para PMEs (restaurantes,
laboratórios, eventos). Tecnologia é meio, não o produto — o discurso do
site deve sempre enquadrar automação/dados/sistemas como solução de um
problema operacional real, nunca como "tech pela tech". Evite jargão de
startup ("disruptivo", "escalável", "MVP") na cópia do site.

## Stack
- HTML + CSS + JS puro (vanilla), sem framework, sem bundler, sem build step.
- Hospedagem estática (verificar vercel.json / config atual antes de assumir).
- Fontes via Google Fonts: Bebas Neue, Playfair Display (itálico), DM Sans.
- Sem backend, sem formulário, sem analytics hoje — contato é 100% via
  link de WhatsApp (wa.me).

## Identidade visual — NÃO ALTERAR sem autorização explícita da cliente
Cores oficiais (usar sempre as CSS variables em css/style.css, nunca hexadecimais soltos):
- --preto: #111111 (preto profundo)
- --grafite: #2A2A2A
- --bordo: #6B1A1A
- --amarelo: #E8C547 (amarelo mostarda)
- --offwhite: #F0EDE8

Fontes oficiais (não trocar):
- Bebas Neue → títulos (--fonte-titulo)
- Playfair Display Italic → citações/manifesto (--fonte-elegante)
- DM Sans → corpo de texto (--fonte-corpo)

## Regras de manutenção
- Novos serviços/cases: adicionar em js/data.js, NUNCA copiar/colar blocos
  de HTML manualmente.
- Número de WhatsApp e mensagens: única fonte de verdade é js/data.js
  (CONTATO.telefone e CONTATO.msg). Nunca hardcode o número em HTML novo.
- Antes de editar qualquer regra CSS existente, confirmar que não há uma
  segunda declaração da mesma classe mais abaixo no arquivo sobrescrevendo-a
  (histórico do projeto já teve esse problema — checar duplicatas).
- Não remover as meta tags de segurança (CSP, X-Content-Type-Options etc.)
  sem entender que headers via <meta> não substituem headers HTTP reais;
  se migrar para Vercel/Netlify, configurar os headers de verdade em
  vercel.json / _headers e manter as metas como reforço.
- Links de "Política de Privacidade" e "Termos de Uso" hoje são âncoras
  mortas (#privacidade, #termos) — não apagar o aviso de LGPD sem que essas
  páginas existam de fato.

## Fluxo de deploy
O site está hospedado na Vercel, conectado ao repositório GitHub
mtcad/montejano-site. Qualquer push para a branch main publica
automaticamente. Não há vercel.json configurado — os headers de segurança
estão apenas via meta tag por enquanto (item 6 do plano de implementação).

## Correções de conteúdo pendentes
Aguardando aprovação da cliente antes de aplicar:
- Atendimento presencial: alterar de "São Paulo" para "Foz do Iguaçu e
  Ciudad del Este (CDE)".
- Atendimento remoto: alterar de "Todo o Brasil" para "Todo o continente
  americano".

Ocorrências atuais a localizar e corrigir quando aprovado (todas em
index.html; nenhuma em js/data.js hoje):
- Seção Sobre, texto corrido: "Atendemos em São Paulo e em todo o Brasil
  de forma remota."
- Seção Sobre, card de atendimento: "SÃO PAULO · TODO O BRASIL"
- Footer: "São Paulo · Todo o Brasil"

## O que evitar
- Não introduzir React/Vue/build tools — o projeto não precisa disso.
- Não adicionar tracking/cookies não-essenciais sem revisar o banner de
  consentimento (hoje é aceitação simples, não suporta granularidade).
