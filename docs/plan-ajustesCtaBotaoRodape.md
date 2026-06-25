# Plano passo a passo — Ajustes de CTA, Botão e Footer

Objetivo: posicionar o botão de cadastrar à direita, colocar o copyright no final, tornar o CTA principal "Agende sua Aula Grátis" um link para WhatsApp com mensagem pré-definida e fazer o CTA secundário "Ver Planos" rolar até a seção de preços.

Passos (seguir em ordem):

1. Inspecionar `index.html` e localizar os elementos: botão cadastrar, CTA principal, CTA secundário e rodapé.
2. Mover ou garantir que o `footer` esteja no final do `<body>`.
3. Adicionar/atualizar CSS:
   - Criar classe `.floating-register` com `position: fixed; right: 20px; top: 50%; transform: translateY(-50%);`.
   - Garantir `padding-bottom` no `body` para não sobrepor o footer.
   - Definir `.btn-primary` com cor de destaque (vermelho #e53935) e estados `:hover`.
4. Implementar CTA principal:
   - Link para WhatsApp: `https://wa.me/5544999129088?text=Ol%C3%A1!%20Quero%20agendar%20minha%20aula%20experimental%20gratuita.`
   - Atributos: `target="_blank" rel="noopener" aria-label="Agendar aula no WhatsApp"`.
5. Implementar CTA secundário "Ver Planos":
   - Adicionar `id="planos"` na seção de preços.
   - Usar link `href="#planos"` e habilitar `scroll-behavior: smooth;`.
6. Testes rápidos:
   - Desktop: verificar botão flutuante à direita e CTAs visíveis acima da dobra.
   - Mobile: verificar que o botão flutuante se move para o canto inferior e não cobre conteúdo importante.
   - Verificar abertura do WhatsApp com a mensagem correta.
7. Acessibilidade:
   - Adicionar `aria-label` aos botões.
   - Conferir contraste das cores com ferramentas (ex.: WebAIM Contrast Checker).
8. Revisão final e publicação.

Observações:
- Número de WhatsApp usado: +55 44 99912-9088 (formatado como `5544999129088` para o link `wa.me`).
- Cores sugeridas: vermelho `#e53935` (primário), laranja `#ff7043` (secundário/float).

Quer que eu execute os testes e gere capturas de tela agora?