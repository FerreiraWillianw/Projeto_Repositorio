import React, { useState } from 'react';
import { BarChart3, Table, Database, Code, Mail, Linkedin, Github, ExternalLink, X } from 'lucide-react';
import { profileData, aboutData, projectsData } from '../mock';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose } from '../components/ui/dialog';
import { Badge } from '../components/ui/badge';

const iconMap = {
  BarChart3: BarChart3,
  Table: Table,
  Database: Database,
  Code: Code
};

const HomePage = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [scrollY, setScrollY] = useState(0);

  // Parallax effect
  React.useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-xl font-bold text-[#00FF40]">
            {profileData.name}
          </div>

          <div className="flex items-center gap-8">
            <nav className="hidden sm:flex gap-8">
              <a href="#sobre" className="text-gray-300 hover:text-[#00FF40] transition-colors">
                Sobre
              </a>
              <a href="#projetos" className="text-gray-300 hover:text-[#00FF40] transition-colors">
                Projetos
              </a>
            </nav>

            <div className="hidden sm:block w-[1.5px] h-6 bg-[#00FF40]"></div>
            
            <div className="flex gap-5">
              <a href={`mailto:${profileData.email}`} className="text-gray-400 hover:text-[#00FF40] transition-colors">
                <Mail className="w-6 h-6" />
              </a>
              <a href={profileData.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#00FF40] transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href={profileData.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#00FF40] transition-colors">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div> 
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            transform: `translateY(${scrollY * 0.5}px)`,
            transition: 'transform 0.1s ease-out'
          }}
        >
          <img 
            src="https://images.pexels.com/photos/577210/pexels-photo-577210.jpeg"
            alt="Data Analytics Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/80 to-[#0a0a0a]/50"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="max-w-4xl">
            <div className="inline-block mb-4">
              <Badge variant="outline" className="border-[#00FF40] text-[#00FF40] text-sm px-4 py-1">
                Análise de Dados
              </Badge>
            </div>
            <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Transformando dados em
              <span className="text-[#00FF40]"> inteligência de negócios</span>
            </h1>
            <p className="text-xl text-gray-400 mb-8 leading-relaxed">
              {profileData.description}
            </p>
            <div className="flex gap-4 mb-12">
              <Button 
                className="bg-[#00FF40] text-[#000000] hover:bg-[#0d6209] hover:text-white px-8 py-6 text-lg transition-all"
                onClick={() => document.getElementById('projetos').scrollIntoView({ behavior: 'smooth' })}
              >
                Ver Projetos
              </Button>
              <Button 
                variant="outline" 
                className="border-[#00FF40] text-[#00FF40] hover:bg-[#00FF40]/10 px-8 py-6 text-lg transition-all"
                onClick={() => document.getElementById('sobre').scrollIntoView({ behavior: 'smooth' })}
              >
                Sobre Mim
              </Button>
            </div>

            {/* Skills com Tooltip de Tópicos */}
            <div className="flex flex-wrap gap-6">
              {profileData.skills.map((skill, index) => {
                const Icon = iconMap[skill.icon];
                return (
                  <div key={index} className="group relative flex items-center gap-2 text-gray-300 cursor-help">
                    <Icon className="w-5 h-5 text-[#00FF40]" />
                    <span className="group-hover:text-white transition-colors">{skill.name}</span>

                    {/* Telinha Flutuante (Tooltip) */}
                    <div className="absolute bottom-full mb-3 left-1/2 -translate-x-1/2 w-64 
                                    p-4 bg-[#1a1a1a] border border-[#00FF40]/40 text-xs text-white 
                                    rounded-xl shadow-2xl opacity-0 group-hover:opacity-100 
                                    transition-all duration-300 pointer-events-none z-50">
                      
                      <p className="font-bold text-[#00FF40] mb-2 text-sm border-b border-[#00FF40]/20 pb-1">
                        {skill.name}
                      </p>
                      
                      <div className="space-y-2 text-gray-300">
                        <p>
                          <strong className="text-white">Pontos fortes:</strong> {skill.pontosFortes || "Não informado"}
                        </p>
                        <p>
                          <strong className="text-white">Melhor utilizado em:</strong> {skill.uso || "Não informado"}
                        </p>
                      </div>

                      {/* Seta do Balão */}
                      <div className="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-[#1a1a1a]"></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-20 px-6 bg-[#0f0f0f]">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {aboutData.title}
            </h2>
            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              {aboutData.description}
            </p>
            <div className="grid md:grid-cols-2 gap-6 mt-12">
              <Card className="bg-[#1a1a1a] border-[#2a2a2a] p-6">
                <div className="text-[#00FF40] font-semibold mb-2">Experiência</div>
                <div className="text-gray-300">{aboutData.experience}</div>
              </Card>
              <Card className="bg-[#1a1a1a] border-[#2a2a2a] p-6">
                <div className="text-[#00FF40] font-semibold mb-2">Foco Atual</div>
                <div className="text-gray-300">{aboutData.focus}</div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projetos" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Meus Projetos
            </h2>
            <p className="text-lg text-gray-400">
              Dashboards interativos desenvolvidos com Power BI e Excel
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projectsData.map((project) => (
              <div 
                key={project.id}
                onClick={() => handleProjectClick(project)}
                className="cursor-pointer"
              >
                <Card 
                  className="bg-[#1a1a1a] border-[#2a2a2a] overflow-hidden hover:border-[#00FF40] transition-all duration-300 group"
                >
                  <div className="relative overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent opacity-60"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-white mb-3">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, index) => (
                        <Badge key={index} variant="secondary" className="bg-[#00FF40]/20 text-[#00FF40] border-[#00FF40]/30">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex items-center text-[#00FF40] font-semibold group-hover:gap-2 transition-all">
                      Ver Dashboard
                      <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-[#1a1a1a]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-gray-400 text-sm">
            © 2026 Portfólio Profissional de Willian Werneck Ferreira. Todos os direitos reservados...
          </div>
          <div className="flex gap-6">
            <a href={`mailto:${profileData.email}`} className="text-gray-400 hover:text-[#00FF40] transition-colors">
              <Mail className="w-6 h-6" />
            </a>
            <a href={profileData.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#00FF40] transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href={profileData.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#00FF40] transition-colors">
              <Github className="w-6 h-6" />
            </a>
          </div>
        </div>
      </footer>

      {/* Project Modal */}
      <Dialog open={selectedProject !== null} onOpenChange={handleCloseModal}>
        <DialogContent className="max-w-6xl h-[95vh] bg-[#1a1a1a] border-[#2a2a2a] text-white flex flex-col p-6">
          <DialogHeader className="mb-2"> {/* Reduzir a margem aqui */}
            <DialogTitle className="text-xl font-bold text-white">
              {selectedProject?.title}
            </DialogTitle>
            <DialogClose className="absolute right-4 top-4 text-white hover:text-[#00FF40]">
              <X className="h-5 w-5" />
            </DialogClose>
          </DialogHeader>
          {selectedProject && (
            <div className="flex flex-col h-full overflow-hidden">
              {/* Descrição e Badges em um linha ou bloco menor */}
              <div className="mb-4">
              <p className="text-sm text-gray-400 mb-2">{selectedProject.description}</p>
              <div className="flex flex-wrap gap-2">
                {selectedProject.highlights.map((highlight, index) => (
                  <Badge key={index} variant="outline" className="text-[10px] border-[#00FF40] text-[#00FF40]">
                    {highlight}
                  </Badge>
                ))}
                </div>
              </div>

              {/* Iframe do Power BI ocupando o restante do modal */}
              <div className="grow bg-[#0a0a0a] rounded-lg overflow-hidden border border-[#2a2a2a] min-h-[400px]">
                <iframe
                  src={selectedProject.powerbiUrl}
                  className="w-full h-full"
                  frameBorder="0"
                  allowFullScreen={true}
                  title={selectedProject.title}
                />
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default HomePage;
