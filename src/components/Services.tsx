import { FileCheck, Users, HeartHandshake, Calculator } from "lucide-react";

const services = [
  {
    icon: FileCheck,
    title: "Aposentadorias",
    description: "Aposentadoria por idade, tempo de contribuição, invalidez e especial. Análise completa do seu direito."
  },
  {
    icon: Users,
    title: "Pensão por Morte",
    description: "Auxílio para dependentes que perderam o segurado. Agilidade e suporte em momento difícil."
  },
  {
    icon: HeartHandshake,
    title: "BPC/LOAS",
    description: "Benefício de Prestação Continuada para idosos e pessoas com deficiência de baixa renda."
  },
  {
    icon: Calculator,
    title: "Revisão de Benefícios",
    description: "Revisão de aposentadorias concedidas com valores incorretos. Recupere o que é seu."
  }
];

const Services = () => {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Como Podemos Ajudar
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Atuamos em todas as áreas do direito previdenciário com experiência e dedicação
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-background p-6 rounded-lg border border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-14 h-14 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <service.icon className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
