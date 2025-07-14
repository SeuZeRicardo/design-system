# Design System

Um sistema de design React abrangente construído com ferramentas modernas e melhores práticas.

Este sistema de design fornece um kit completo de ferramentas para construir interfaces de usuário consistentes e escaláveis, incluindo tokens de design, componentes React e soluções abrangentes de estilização.

## 🚀 Funcionalidades

- 🎨 **Tokens de Design** - Sistema abrangente de tokens para cores, tipografia, espaçamento e mais
- 🎯 **Componentes React** - Componentes prontos para produção com suporte TypeScript
- 🎭 **Suporte SCSS** - Variáveis, mixins e utilitários para estilização
- 📖 **Storybook** - Documentação interativa de componentes
- 🔧 **TypeScript** - Segurança de tipos completa em todos os pacotes
- 🏎 **Turborepo** - Sistema de build de alta performance para monorepos
- 📦 **Múltiplos Formatos** - ESM, CJS e declarações TypeScript
- 🧪 **Pronto para Testes** - Configurado para Jest e React Testing Library

## 🛠 Stack Tecnológica

- **Sistema de Build**: [Turborepo](https://turborepo.com) - Sistema de build de alta performance para Monorepos
- **Framework**: [React](https://reactjs.org/) - Biblioteca JavaScript para interfaces de usuário
- **Bundler**: [Tsup](https://github.com/egoist/tsup) - Bundler TypeScript powered by esbuild
- **Documentação**: [Storybook](https://storybook.js.org/) - Ambiente de componentes UI powered by Vite
- **Estilização**: [SCSS](https://sass-lang.com/) - Linguagem de extensão CSS
- **Tipos**: [TypeScript](https://www.typescriptlang.org/) - Verificação de tipos estática
- **Linting**: [ESLint](https://eslint.org/) - Linting de código
- **Formatação**: [Prettier](https://prettier.io) - Formatação de código
- **Versionamento**: [Changesets](https://github.com/changesets/changesets) - Gerenciamento de versões e changelogs
- **CI/CD**: [GitHub Actions](https://github.com/changesets/action) - Publicação automatizada de pacotes

## 📦 Pacotes

Este monorepo inclui os seguintes pacotes:

### Pacotes Principais

- **`@acme/tokens`** - Tokens de design com exports JavaScript/TypeScript e variáveis SCSS
- **`@acme/ui`** - Biblioteca de componentes React com suporte TypeScript
- **`@acme/docs`** - Site de documentação Storybook

### Pacotes de Configuração

- **`@acme/typescript-config`** - Configurações TypeScript compartilhadas
- **`@acme/eslint-config`** - Presets e regras ESLint

## 🚀 Começando

### Instalação

```bash
npm install
```

### Desenvolvimento

```bash
# Executar todos os pacotes em modo desenvolvimento
npm run dev

# Construir todos os pacotes
npm run build

# Executar linting
npm run lint

# Limpar todos os artefatos de build
npm run clean
```

### Storybook

O site de documentação Storybook estará disponível em `http://localhost:6006` ao executar `npm run dev`.

## 🎨 Tokens de Design

O pacote `@acme/tokens` fornece um sistema abrangente de tokens de design:

### Uso em JavaScript/TypeScript

```typescript
import { tokens } from "@acme/tokens";

// Acessar tokens de cor
const primaryColor = tokens.colors.primary[500];
const textColor = tokens.colors.neutral[900];

// Tokens de tipografia
const headingFont = tokens.typography.fontFamily.heading;
const bodySize = tokens.typography.fontSize.body;

// Tokens de espaçamento
const spacing = tokens.spacing.md;
```

### Uso em SCSS

```scss
@import "@acme/tokens/styles";

.my-component {
  color: $color-primary-500;
  font-family: $font-family-heading;
  font-size: $font-size-body;
  padding: $spacing-md;

  // Usar mixins
  @include elevation-2;
  @include breakpoint-above(md) {
    padding: $spacing-lg;
  }
}
```

### Categorias de Tokens Disponíveis

- **Cores**: Cores primárias, secundárias, neutras e semânticas
- **Tipografia**: Famílias de fontes, tamanhos, pesos e alturas de linha
- **Espaçamento**: Escala de espaçamento consistente
- **Breakpoints**: Breakpoints de design responsivo
- **Sombras**: Tokens de box-shadow para elevação
- **Bordas**: Tokens de border radius e largura
- **Z-Index**: Sistema de camadas
- **Animações**: Tokens de duração e easing

## 🧩 Componentes

O pacote `@acme/ui` fornece componentes React com suporte completo ao TypeScript:

### Uso

```tsx
import { Button } from "@acme/ui/button";

function App() {
  return (
    <Button
      variant="primary"
      size="medium"
      onClick={() => console.log("Clicado!")}
    >
      Clique em mim
    </Button>
  );
}
```

### Componentes Disponíveis

- **Button** - Variantes primária, secundária e ghost com múltiplos tamanhos
- _Mais componentes em breve..._

## 📁 Estrutura do Projeto

```
design-system/
├── apps/
│   └── docs/                    # Documentação Storybook
├── packages/
│   ├── tokens/                  # Pacote de tokens de design
│   │   ├── src/
│   │   │   ├── colors.ts       # Tokens de cor
│   │   │   ├── typography.ts   # Tokens de tipografia
│   │   │   ├── spacing.ts      # Tokens de espaçamento
│   │   │   └── styles/         # Variáveis e mixins SCSS
│   │   └── package.json
│   ├── ui/                      # Componentes React
│   │   ├── src/
│   │   │   └── components/     # Implementações de componentes
│   │   └── package.json
│   ├── typescript-config/       # Configurações TypeScript
│   └── eslint-config/          # Configurações ESLint
└── package.json
```

## 🔧 Desenvolvimento

### Adicionando um Novo Componente

1. Criar o componente em `packages/ui/src/components/`
2. Adicionar o export do componente ao `packages/ui/package.json`
3. Criar uma story Storybook em `apps/docs/stories/`
4. Atualizar os tipos TypeScript do componente

### Adicionando Novos Tokens

1. Adicionar tokens ao arquivo apropriado em `packages/tokens/src/`
2. Atualizar as variáveis SCSS em `packages/tokens/src/styles/variables.scss`
3. Executar `npm run build` para gerar os arquivos de tokens atualizados

### Diretrizes de Desenvolvimento de Componentes

- Usar TypeScript para todos os componentes
- Seguir o padrão MVP (Model-View-Presenter)
- Usar componentes funcionais com hooks
- Implementar recursos de acessibilidade adequados
- Escrever tipos de props descritivos e documentação de componentes
- Usar early returns para melhor legibilidade do código
- Seguir as convenções de nomenclatura estabelecidas

## 📋 Scripts

- `npm run dev` - Iniciar modo de desenvolvimento com Storybook
- `npm run build` - Construir todos os pacotes
- `npm run lint` - Executar ESLint em todos os pacotes
- `npm run format` - Formatar código com Prettier
- `npm run test` - Executar testes (quando configurado)
- `npm run changeset` - Gerar um changeset para versionamento
- `npm run clean` - Limpar todos os artefatos de build

## 🚢 Publicação

Este projeto usa [Changesets](https://github.com/changesets/changesets) para gerenciamento de versão e publicação.

### Criando um Changeset

```bash
npm run changeset
```

Siga os prompts para:

1. Selecionar quais pacotes foram alterados
2. Escolher o tipo de mudança (patch, minor, major)
3. Escrever um resumo das mudanças

### Publicação

A publicação é automatizada através do GitHub Actions quando as mudanças são enviadas para a branch principal.

## 🤝 Contribuindo

1. Fork o repositório
2. Criar uma branch de feature
3. Fazer suas mudanças
4. Adicionar testes se aplicável
5. Executar `npm run lint` e `npm run build`
6. Criar um changeset se necessário
7. Submeter um pull request

## 📝 Licença

Licença MIT - veja o arquivo [LICENSE](LICENSE) para detalhes.
