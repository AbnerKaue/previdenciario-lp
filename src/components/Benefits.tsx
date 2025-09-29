import { Shield, Clock, Award } from "lucide-react";

const benefits = [
  {
    icon: Shield,
    title: "Experiência Comprovada",
    description: "Anos de atuação em direito previdenciário com centenas de casos bem-sucedidos"
  },
  {
    icon: Clock,
    title: "Atendimento Ágil",
    description: "Resposta rápida e acompanhamento próximo em todas as etapas do processo"
  },
  {
    icon: Award,
    title: "Compromisso com Resultados",
    description: "Trabalhamos incansavelmente para garantir seus direitos previdenciários"
  }
];

const Benefits = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Por Que Escolher Nosso Escritório
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="text-center p-6"
            >
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <benefit.icon className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
