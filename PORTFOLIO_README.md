# Portfolio de Análise de Dados - Power BI

## 🎯 Visão Geral

Portfolio profissional moderno para showcasing de projetos de análise de dados, com foco em dashboards do Power BI e Excel.

## ✨ Recursos Implementados

- ✅ **Hero Section** impactante com apresentação profissional
- ✅ **Seção Sobre** com experiência e foco atual
- ✅ **Seção de Projetos** em grid com cards interativos
- ✅ **Modal com Power BI embarcado** - visualização de dashboards interativos
- ✅ **Tema escuro** (#0a0a0a) com verde (#107C11) como cor de destaque
- ✅ **Design responsivo** e moderno
- ✅ **Navegação suave** entre seções
- ✅ **Efeitos hover** nos cards

## 📝 Como Personalizar Seus Dados

### 1. Informações Pessoais

Edite o arquivo `/app/frontend/src/mock.js`:

```javascript
export const profileData = {
  name: "SEU NOME AQUI",
  title: "Analista de Dados",
  description: "Sua descrição profissional aqui...",
  email: "seu.email@exemplo.com",
  linkedin: "https://linkedin.com/in/seu-perfil",
  github: "https://github.com/seu-usuario"
};
```

### 2. Seção Sobre

```javascript
export const aboutData = {
  description: "Sua descrição detalhada aqui...",
  experience: "X anos de experiência em análise de dados",
  focus: "Foco atual: ..."
};
```

### 3. Adicionar Seus Projetos

Para cada dashboard que você criou, adicione um novo objeto no array `projectsData`:

```javascript
{
  id: 1,
  title: "Nome do Seu Dashboard",
  description: "Descrição do que o dashboard faz...",
  technologies: ["Power BI", "Excel"],
  image: "URL_DA_IMAGEM_DO_SEU_DASHBOARD",
  powerbiUrl: "URL_DO_SEU_DASHBOARD_PUBLICADO_NO_POWER_BI",
  highlights: ["KPI 1", "KPI 2", "KPI 3"]
}
```

### 4. Como Obter o Link do Power BI

1. Publique seu dashboard no Power BI Service
2. Vá em **Arquivo > Inserir relatório > Site ou portal**
3. Copie a URL do iframe
4. Cole no campo `powerbiUrl`

### 5. Como Obter Imagens dos Dashboards

**Opção 1 - Screenshot Direto:**
- Tire um print do seu dashboard no Power BI
- Faça upload em um serviço de hospedagem de imagens (Imgur, Cloudinary, etc.)
- Use a URL da imagem

**Opção 2 - Usar Imagens Existentes:**
- Se você já tem as imagens salvas, pode fazer upload em qualquer serviço
- Ou coloque as imagens em `/app/frontend/public/images/` e referencie como `/images/nome-do-arquivo.png`

## 🎨 Personalização de Cores

Se quiser mudar a cor verde (#107C11) para outra cor:

1. Abra `/app/frontend/src/pages/HomePage.jsx`
2. Faça busca e substituição de `#107C11` pela cor desejada
3. Também substitua `#0d6209` (hover) por uma versão mais escura da sua cor

## 📱 Estrutura de Navegação

- **Sobre** - Clica na navegação ou botão "Sobre Mim"
- **Projetos** - Clica na navegação ou botão "Ver Projetos"
- **Ver Dashboard** - Clica no card do projeto para abrir o modal com iframe do Power BI

## 🚀 Próximos Passos Sugeridos

1. Substitua os dados mockados pelos seus dados reais
2. Adicione seus próprios prints de dashboards
3. Configure os links do Power BI para seus relatórios publicados
4. Atualize suas informações de contato
5. (Opcional) Adicione mais seções como "Habilidades" ou "Certificações"

## 📁 Estrutura de Arquivos

```
/app/frontend/src/
├── mock.js              # DADOS MOCKADOS - EDITE AQUI
├── pages/
│   └── HomePage.jsx     # Página principal
├── components/ui/       # Componentes Shadcn (não editar)
└── App.js              # Configuração de rotas
```

## 🎯 Dicas para Melhor Apresentação

1. Use imagens de alta qualidade dos seus dashboards
2. Escreva descrições claras e objetivas
3. Destaque os principais KPIs e insights de cada projeto
4. Mantenha a consistência no estilo de escrita
5. Teste todos os links do Power BI antes de compartilhar

## ✅ Checklist de Personalização

- [ ] Alterar nome e título no profileData
- [ ] Atualizar email, LinkedIn e GitHub
- [ ] Escrever sua descrição na seção Sobre
- [ ] Adicionar seus projetos reais
- [ ] Upload das imagens dos dashboards
- [ ] Configurar links do Power BI
- [ ] Testar todos os modals
- [ ] Verificar responsividade no mobile

---

**Portfolio desenvolvido com:**
- React
- Tailwind CSS
- Shadcn/ui
- Lucide React (ícones)
