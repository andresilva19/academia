## Plan: Ajustes de CTA, Botão e Footer

TL;DR - O objetivo é (1) posicionar o botão de cadastrar à direita da tela, (2) garantir que o texto de rodapé esteja no final da página, (3) transformar o CTA principal "Agende sua Aula Grátis" em um botão vermelho/laranja que abra WhatsApp com mensagem pré-definida, e (4) configurar o CTA secundário "Ver Planos" para rolar até a seção de preços. Usaremos o arquivo de referência desing.md para padrões de cor, tipografia e hierarquia.

**Steps**
1. Inspecionar [index.html](index.html) e localizar os elementos: botão cadastrar, CTA principal, CTA secundário e rodapé. *Depends on step 2.*
2. Mover/alterar a marcação do rodapé para o final do body (garantir que o copyright esteja dentro de um elemento footer). *Blocks step 3.*
3. Atualizar CSS:
   - Adicionar classe para botão de cadastrar com posicionamento fixo à direita: posicionamento fixed, margem direita, alinhamento vertical (ex.: center), responsividade para telas pequenas.
   - Garantir que o footer não fique sobreposto (adicionar padding-bottom ao content, se necessário).
4. Implementar CTA principal (Agende sua Aula Grátis):
   - Converter em link para WhatsApp usando URL wa.me/NUMERO?text=URL_ENCODED_MENSAGEM. Instruir para substituir NUMERO pelo telefone da academia no formato internacional (ex.: 5511999999999).
   - Mensagem pré-definida: "Olá! Quero agendar minha aula experimental gratuita." (URL-encoded).
   - Atributos: target="_blank" rel="noopener".
   - Estilizar com cor de destaque (escolher vermelho ou laranja conforme desing.md) e estados hover/active.
5. Implementar CTA secundário (Ver Planos):
   - Garantir que a seção de preços tenha um id consistente, por exemplo id="planos" ou id="precos".
   - Fazer o botão/link rolar suavemente para a âncora (CSS scroll-behavior: smooth ou JavaScript de scroll).
6. Testes e responsividade:
   - Desktop: confirmar que o botão cadastrar aparece fixo à direita e não bloqueia conteúdo principal.
   - Mobile: ajustar para não cobrir conteúdo (ex.: esconder ou mover para bottom-right com tamanho reduzido).
   - Verificar que o CTA abre WhatsApp com mensagem correta e abre em nova aba/janela.
   - Verificar que o Ver Planos rola corretamente à seção de preços.
   - Confirmar que o copyright aparece no final da página e é visível em telas curtas/longas.
7. Acessibilidade e análise:
   - Adicionar aria-labels descritivos aos botões (ex.: aria-label="Agendar aula no WhatsApp").
   - Adicionar tracking opcional (data-layer ou evento onclick) para medir cliques nos CTAs.

**Relevant files**
- [index.html](index.html) — inserir/atualizar marcação e links; adicionar ids e classes.
- [desing.md](desing.md) — referência para cores, tipografia, hierarquia e CTAs.

**Verification**
1. Funcional: clicar em Agende sua Aula Grátis abre https://wa.me/SEUNUMERO com a mensagem correta.
2. Navegação: clicar em Ver Planos rola até a seção de preços (id correspondente).
3. Layout: botão cadastrar está fixo à direita em desktop e adaptado em mobile.
4. Footer: texto "© 2026 Power Fit Academia - Todos os direitos reservados." está no final do DOM e visível ao final da página.

**Decisions / Assunções**
- Preciso do número de WhatsApp no formato internacional. Se você não fornecer, deixarei um placeholder e instruções para substituir.
- Cor do CTA principal: sugerir vermelho (#e53935) ou laranja (#ff7043) conforme desing.md; por padrão recomendarei vermelho para maior urgência.
- O botão cadastrar será posicionado com position: fixed; posso ajustar se preferir comportamento diferente (ex.: botão flutuante com sombra).

**Further Considerations**
1. Quer que eu implemente essas mudanças direto no arquivo index.html? (Posso aplicar as alterações se autorizar.)
2. Deseja que eu escolha e insira o número de WhatsApp, ou prefere fornecer o número agora? 44 99912-9088
3. Quer acompanhamento de testes (capturas de tela) após a implementação? sim
Peça pra seguir etapas passo a passo. Salvar o planejamento em um md e validar o uso das regras de Ui e Ue, gerando um relatorio
