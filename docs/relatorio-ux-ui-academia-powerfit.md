# Relatório UX/UI — Academia PowerFit

Data: 2026-06-25
Arquivo analisado: `index.html`

## 1. Visão geral

A aplicação apresenta uma estrutura simples e direta, com três seções principais: hero, planos e agendamento. O layout atual funciona bem como um protótipo inicial, mas a experiência ainda precisa de melhorias importantes em acessibilidade, clareza de conteúdo e confiança visual.

## 2. Pontos fortes

### 2.1 Estrutura de seções limpa
- O site usa seções bem delimitadas (`#home`, `#planos`, `#agendamento`), o que facilita a navegação por rolagem.
- Justificativa: blocos lógicos ajudam o usuário a entender rapidamente o fluxo da página e a localizar o que deseja.

### 2.2 Call to action direto
- Existem CTAs claros: "Ver Planos" e "Agendar Aula".
- Justificativa: botões visíveis incentivam ações imediatas, reduzindo a dúvida do visitante em como avançar.

### 2.3 Integração com WhatsApp
- O formulário envia diretamente para o WhatsApp com mensagem padronizada.
- Justificativa: esse fluxo facilita o contato rápido do usuário com a academia, aproveitando um canal já familiar ao público brasileiro.

### 2.4 Estilo moderno de sobreposição
- Uso de camadas com `.overlay` e blur cria efeito visual interessante e melhora a leitura sobre imagens.
- Justificativa: contrastes translúcidos ajudam a separar conteúdo do fundo, tornando o design mais profissional.

## 3. Pontos fracos

### 3.1 Falta de hierarquia tipográfica e escolha de fonte
- O projeto usa apenas `Arial` e tamanhos fixos básicos para `h1`, `h2` e texto.
- Justificativa: uma tipografia mais forte e escalonada melhora a leitura, reforça o posicionamento da marca e diferencia títulos de conteúdo.

### 3.2 Legibilidade e contraste insuficientes
- Texto branco sobre imagens pode perder contraste dependendo do fundo. O corpo do texto não define um contraste consistente em dispositivos ou zoom.
- Justificativa: baixo contraste reduz a acessibilidade e dificulta a leitura para usuários com visão reduzida.

### 3.3 Falta de responsividade completa
- Não há media queries para adaptar o layout em telas pequenas; `section` mantém `height:100vh`, o que pode causar scroll estranho em mobile.
- Justificativa: muitos usuários acessam pelo celular, e a página deve ajustar tamanho de seções, botões e cards para evitar rolagem truncada.

### 3.4 Ausência de elementos de confiança social
- Não há depoimentos, avaliações, números de clientes ou diferenciais de prova social.
- Justificativa: visitantes querem saber se a academia é confiável; social proof aumenta a credibilidade e a taxa de conversão.

### 3.5 Formulário pouco acessível e com placeholders sem labels
- O formulário usa apenas `placeholder` e não há `label` visível ou associações `for`/`id` claras.
- Justificativa: isso prejudica navegação por teclado, leitores de tela e torna o campo menos claro para quem precisa de instruções estáveis.

### 3.6 Comunicação e detalhes do produto fracos
- Os planos listados contêm apenas título e preço; não há benefícios detalhados, diferenciação clara ou CTA por plano.
- Justificativa: sem detalhes, o usuário não consegue comparar ou entender o valor de cada plano, o que reduz a chance de escolha.

### 3.7 Falta de feedback no fluxo de envio
- O usuário clica em "Enviar para WhatsApp" e é levado ao WhatsApp, mas não há confirmação visual ou validação antes do envio.
- Justificativa: sem feedback, o usuário pode ficar inseguro se o envio foi realizado corretamente ou se esqueceu de preencher algum campo.

### 3.8 Campos com valores padrão não ideais
- O campo de dia começa com "Escolha o dia da semana" em vez de um `option` desabilitado e sem valor válido.
- Justificativa: isso pode levar o usuário a enviar um valor inválido ou aceitar o placeholder como escolha real.

## 4. Sugestões de melhorias

### 4.1 Definir paleta de cores e variáveis CSS
- Adotar variáveis como `--primary`, `--secondary`, `--accent`, `--bg`, `--text`.
- Motivo: facilita manutenção, garante consistência visual e torna mais simples testar variantes de cores com contraste correto.

### 4.2 Melhorar tipografia e escala visual
- Importar fontes modernas (por exemplo, `Poppins` para títulos e `Inter` ou `Roboto` para textos) e aplicar tamanhos escalonados.
- Motivo: tipografia adequada transmite profissionalismo e orienta o olhar do usuário pela página.

### 4.3 Incluir seção de prova social
- Adicionar depoimentos, avaliações por estrelas e número de alunos ou aulas realizadas.
- Motivo: aumenta confiança e reduz a percepção de risco do visitante.

### 4.4 Tornar o formulário mais acessível
- Adicionar `label` para cada campo, usar `required` visível e campos padrão desabilitados para opções de seleção.
- Motivo: melhora usabilidade para todos os usuários, inclusive aqueles com deficiência visual e usuários em dispositivos móveis.

### 4.5 Adicionar feedback e validação
- Mostrar mensagens de erro próximas aos campos quando o preenchimento estiver incorreto; exibir confirmação antes de abrir WhatsApp.
- Motivo: reduz desistências e garante que a mensagem enviada contenha dados corretos.

### 4.6 Ajustar responsividade mobile
- Remover `height:100vh` fixo em seções, ajustar padding e empilhamento de cards, ampliar botões para toque confortável.
- Motivo: oferece uma experiência consistente em celulares e evita seções cortadas ou botões pequenos demais.

### 4.7 Melhorar os planos com benefícios claros
- Apresentar pelo menos 3 bullets por plano, diferenciais e CTA em cada card.
- Motivo: facilita a comparação e acelera a decisão de compra.

### 4.8 Usar imagens reais e ícones coerentes
- Substituir imagens genéricas por fotos reais da academia ou dos treinos e usar ícones intuitivos nos cards.
- Motivo: transmite identidade da marca e faz o site parecer mais profissional e confiável.

### 4.9 Adicionar foco visível e estados interativos
- Aplicar `:focus` e `:hover` claros para botões e inputs; usar `:disabled` quando necessário.
- Motivo: melhora acessibilidade de teclado e deixa a interface mais responsiva ao usuário.

## 5. Conclusão

A aplicação já tem uma base funcional válida para uma landing page de academia. Os pontos mais importantes a serem trabalhados são:

- clareza de comunicação (planos e benefícios);
- acessibilidade e responsividade mobile;
- confiança visual (prova social, tipografia e imagens reais);
- feedback de formulário.

Implementando essas melhorias, a página ficará mais atraente, confiável e eficiente para converter novos clientes.
