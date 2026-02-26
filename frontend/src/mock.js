// Mock data para portfolio de análise de dados
import FotoDashHR from './assets/dashboard_HR.png';

export const profileData = {
  name: "Portfólio Profissional de Willian Ferreira",
  title: "Analista de Dados",
  description: "Insights de valor que geram vantagem competitiva",
  skills: [
    { name: "Power BI", icon: "BarChart3", description: "Criação de dashboards interativos e análise de BI.", pontosFortes:"O Power BI destaca‑se pela capacidade de unir e modelar dados de múltiplas fontes — desde bancos relacionais e arquivos locais até serviços na nuvem — sem exigir programação, oferecendo ainda um conjunto rico de visualizações interativas que facilitam a exploração de informações por usuários de negócio. A plataforma permite automatizar atualizações de dados, aplicar níveis de segurança até a linha e incorporar análises avançadas com recursos de IA, o que a torna escalável e adequada tanto para projetos de autoatendimento quanto para ambientes corporativos controlados.", uso:"É olução ideal quando a necessidade é transformar dados brutos em dashboards dinâmicos e relatórios compartilháveis, permitindo que equipes tomem decisões informadas com base em informações consolidadas. É particularmente útil em cenários que exigem centralização de dados dispersos, governança de relatórios, distribuição segura via web/SharePoint/Teams e atualização contínua sem intervenção manual, oferecendo uma experiência acessível a usuários não técnicos." },
    { name: "Excel", icon: "Table", description: "Tratamento de dados complexos e automação com fórmulas.", pontosFortes:"O Excel é uma ferramenta madura de planilhas eletrônicas que combina facilidade de uso com poderosas funcionalidades de cálculo, fórmulas e gráficos. Ele oferece recursos de análise de dados como Tabelas Dinâmicas, Power Query e Power Pivot, além de suportar automação via VBA e integração com outras aplicações do ecossistema Microsoft.", uso:"Ideal para manipulação e análise de conjuntos de dados de pequeno a médio porte, modelagem financeira, acompanhamento de orçamentos e criação de relatórios ad‑hoc por usuários de negócios. O Excel brilha em tarefas que exigem cálculos rápidos, visualizações simples e compartilhamento de arquivos individuais, sendo também uma base para prototipagem antes de migrar para soluções de BI mais robustas." },
    { name: "SQL", icon: "Database", description: "Manipulação de grandes bases de dados e consultas otimizadas.", pontosFortes:"SQL (Structured Query Language) é a linguagem padrão para gerenciamento de bancos de dados relacionais, permitindo consultas poderosas, manipulação de dados e definição de esquemas de forma declarativa. Sua sintaxe universal e otimizações dos SGBDs garantem desempenho em operações de agregação, junção e transações, além de suporte a integridade referencial e escalabilidade em grandes volumes.", uso:"Utilize SQL sempre que precisar interagir diretamente com dados armazenados em um banco relacional — seja para extrair relatórios, atualizar registros ou estruturar modelos de dados. É a base para aplicações corporativas, pipelines de ETL e análises complexas; é especialmente apropriado em ambientes onde consistência, ACID e consultas ad‑hoc eficientes são exigidos." },
    { name: "Python", icon: "Code", description: "Automação, ciência de dados e bibliotecas como Pandas.", pontosFortes:"Python é uma linguagem de programação de alto nível, com sintaxe clara e grande riqueza de bibliotecas padrão e de terceiros que cobrem ciência de dados, web, automação, IA, entre outros. Sua comunidade ativa, suporte multiplataforma e capacidade de rápido protótipo fazem dela uma escolha robusta tanto para scripts simples quanto para aplicações complexas.", uso:"Adote Python sempre que precisar de flexibilidade para desenvolver desde utilitários de linha de comando e pipelines de dados até serviços web e modelos de machine learning. É particularmente eficaz em projetos que valorizam produtividade, integração com outras tecnologias (via API/CLI) e onde a extensa coleção de pacotes (NumPy, pandas, Django, etc.) acelera a entrega de funcionalidades." }
  ],
  email: "willian.ferreiraw30@gmail.com",
  linkedin: "https://www.linkedin.com/in/willian-ferreira-879b501b8/",
  github: "https://github.com/FerreiraWillianw"
};

export const aboutData = {
  title: "Sobre mim",
  description: "Meu nome é Willian Ferreira. Especialista em transformar dados complexos em visualizações claras e palpáveis. Com experiência em Power BI e Excel e aprofundando meus conhecimentos na área de programação com Python e SQL, desenvolvo dashboards interativos que auxiliam na tomada de decisões estratégicas com o objetivo de promover inteligência de negócios e contribuir para uma vantagem competitiva robusta.",
  experience: "+3 anos de experiência com dados, aprofundando cada vez mais meus conhecimentos com o aprendizado constante.",
  focus: "Foco atual: Dashboards executivos com Power BI."
};

export const projectsData = [
  {
    id: 1,
    title: "People Analytics - Estratégia, Retenção e Liderança",
    description: "Nesse relatório, desenvolvido para o setor de Recursos Humanos, foram analisados dados de funcionários para identificar padrões de retenção, desempenho e satisfação. O dashboard interativo permite aos gestores explorar métricas como taxa de rotatividade, satisfação dos funcionários e desempenho por departamento, facilitando a tomada de decisões estratégicas para melhorar a gestão de talentos.",
    technologies: ["Power BI", "Excel"],
    image: FotoDashHR,
    powerbiUrl: "https://app.powerbi.com/view?r=eyJrIjoiOWYxNjFlMzUtMDA2OC00ZWIyLTlhZGEtOTNkZGE1MjE1YmMwIiwidCI6IjJlZmMxNDk2LTE4NTktNDEyNy1iMDc4LTUwMTBhNGZlNGI5ZiJ9",
    highlights: ["Custo médio de contratação", "Taxa de Turnover", "Turnover por Gestor", "Relação de Desligados e seus Scores"]
  },

  {
    id: 2,
    title: "Em desenvolvimento",
    description: "Relatório em desenvolvimento",
    technologies: ["Em desenvolvimento"],
    image: "",
    powerbiUrl: "https://app.powerbi.com/view?r=eyJrIjoiOWYxNjFlMzUtMDA2OC00ZWIyLTlhZGEtOTNkZGE1MjE1YmMwIiwidCI6IjJlZmMxNDk2LTE4NTktNDEyNy1iMDc4LTUwMTBhNGZlNGI5asx9",
    highlights: ["Em desenvolvimento"]
  }
];