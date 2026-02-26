// Mock data para portfolio de análise de dados
import FotoDashHR from './assets/dashboard_HR.png';

export const profileData = {
  name: "Portfólio Profissional de Willian Ferreira",
  title: "Analista de Dados",
  description: "Insights de valor que geram vantagem competitiva",
  skills: [
    { name: "Power BI", icon: "BarChart3", description: "Criação de dashboards interativos e análise de BI.", pontosFortes:" ", uso:" " },
    { name: "Excel", icon: "Table", description: "Tratamento de dados complexos e automação com fórmulas.", pontosFortes:" ", uso:" " },
    { name: "SQL", icon: "Database", description: "Manipulação de grandes bases de dados e consultas otimizadas.", pontosFortes:" ", uso:" " },
    { name: "Python", icon: "Code", description: "Automação, ciência de dados e bibliotecas como Pandas.", pontosFortes:" ", uso:" " }
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
  }
];