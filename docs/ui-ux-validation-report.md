# Relatório de Validação UI/UX — Academia Power Fit

Data: 2026-06-23
Base de referência: desing.md
Arquivos inspecionados: `index.html`

Resumo rápido
- Estado geral: Implementação inicial adequada para CTAs e footer; várias recomendações para alinhar 100% às regras de UI/UX do guia.
- Ações prioritárias: adicionar imagem real do hero, detalhar seção de planos, incluir prova social (depoimentos), definir escala tipográfica e verificar contraste de cores.

Checklist de conformidade (com observações)

1. Hero Section
- Requisitos: título forte, subtítulo explicativo, CTA principal, imagem real.
- Verificação: título e subtítulo presentes; CTA principal presente e destacado (botão vermelho). Imagem real ausente.
- Ação recomendada: adicionar foto real da academia no hero (use `img` responsiva e `alt` descritivo).

2. Prova Social
- Requisitos: avaliações, depoimentos, número de alunos, fotos reais.
- Verificação: ausência de provas sociais no HTML.
- Ação recomendada: incluir seção de depoimentos com pelo menos 3 depoimentos reais e duas fotos de alunos.

3. CTAs
- Requisitos: CTAs claros (Agendar Aula Experimental, Ver Planos, Falar com Consultor), alto contraste e repetidos ao longo da página.
- Verificação: CTA principal "Agende sua Aula Grátis" implementado como link para WhatsApp (`wa.me/5544999129088`) e estilizado em vermelho (`#e53935`); CTA secundário "Ver Planos" presente e rola para `#planos`.
- Ação recomendada: garantir tamanho de botão mínimo recomendável para toque (altura >= 44px) e repetir CTA principal em seção inferior.

4. Mobile First
- Requisitos: botões dimensionados, legibilidade, velocidade, menus simplificados.
- Verificação: `@media` presente para ajustar botão flutuante; ainda falta validação empírica em dispositivos reais.
- Ação recomendada: testar em dispositivos reais e ajustar tamanhos se necessário.

5. Regra 60-30-10 (cores)
- Requisitos: paleta com cor principal/ secundária/ destaque.
- Verificação: cor de destaque (vermelho) e cor do floating (laranja) foram aplicadas conforme guia.
- Ação recomendada: consolidar paleta no CSS (variáveis `--primary`, `--secondary`, `--accent`) e registrar valores.

6. Tipografia
- Requisitos: fontes recomendadas (Montserrat/Poppins para títulos; Inter/Roboto/Open Sans para corpo); escala tipográfica H1–H3 e corpo.
- Verificação: fonte padrão `Arial` usada; escala de tamanhos não definida.
- Ação recomendada: importar e aplicar fontes recomendadas via Google Fonts e definir tamanhos (H1 48–64px, H2 32–40px, H3 24–32px, corpo 16–18px).

7. Organização Visual & Espaçamento
- Requisitos: layout em blocos, espaçamentos consistentes (8/16/24/32/48/64px).
- Verificação: estruturas básicas em seções; não há um sistema de espaçamento consistente definido.
- Ação recomendada: definir variáveis de espaçamento e revisar margens/paddings das seções.

8. Botões e Estados
- Requisitos: estados normal/hover/active/disabled bem implementados.
- Verificação: estilos hover básicos adicionados para botões principais e secundários.
- Ação recomendada: adicionar estados `:active` e `:disabled` claros; garantir contraste no estado `:disabled`.

9. Acessibilidade
- Requisitos: `aria-labels` nos CTAs, contraste adequado, foco visível.
- Verificação: `aria-label` presente nos CTAs principais e no botão flutuante; contraste precisa ser verificado com ferramenta.
- Ação recomendada: rodar checagem de contraste (ex.: WebAIM) e adicionar outline visível em `:focus`.

10. Formulários e Fluxo de Matrícula
- Requisitos: formulário curto e objetivo para matrícula.
- Verificação: seção `#matricula` existe mas sem formulário.
- Ação recomendada: adicionar formulário com campos mínimos (nome, telefone, e-mail opcional, plano desejado) e CTA claro.

Observações técnicas adicionais
- WhatsApp: link correto `https://wa.me/5544999129088?text=Ol%C3%A1!%20Quero%20agendar%20minha%20aula%20experimental%20gratuita.`
- Scroll suave: `scroll-behavior: smooth` aplicado.
- Footer: copyright presente em `footer` no final do `body`.

Prioridade de implementação (curto prazo)
1. Adicionar imagem real ao hero e otimizar (WebP/responsive + `srcset`).
2. Preencher seção de planos com preços e CTAs por plano.
3. Incluir seção de depoimentos.
4. Adicionar formulário de matrícula simples em `#matricula`.
5. Implementar fontes e escala tipográfica.
6. Verificar contraste e ajustes de acessibilidade.

Próximos passos sugeridos (para você seguir, passo a passo)
1. Fornecer a imagem do hero (ou autorizar uso de imagem provisória).
2. Enviar conteúdo dos planos (nomes, preços e benefícios).
3. Enviar pelo menos 3 depoimentos com nomes e fotos (se disponíveis).
4. Confirmar campos que deseja no formulário de matrícula.
5. Confirmar se deseja que eu gere capturas de tela após cada alteração para validação.

Se desejar, executo os passos prioritários e gero capturas de tela após cada mudança. Quer que eu comece pelos itens de maior prioridade agora?