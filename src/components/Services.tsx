import { FileCheck, Users, HeartHandshake, Calculator, CheckCircle } from "lucide-react";

const services = [
  {
    icon: FileCheck,
    title: "Aposentadorias",
    description:
      "Aposentadoria por idade, tempo de contribuição e aposentadoria especial. Realizamos análise completa do seu direito ao benefício."
  },
  {
    icon: Users,
    title: "Pensão por Morte",
    description:
      "Orientação jurídica para dependentes que perderam o segurado do INSS, com suporte completo para solicitação do benefício."
  },
  {
    icon: HeartHandshake,
    title: "BPC/LOAS",
    description:
      "Benefício assistencial destinado a idosos e pessoas com deficiência de baixa renda que necessitam de apoio financeiro."
  },
  {
    icon: Calculator,
    title: "Revisão de Benefícios",
    description:
      "Análise de aposentadorias e benefícios concedidos com valores incorretos, buscando a correção e recuperação de valores devidos."
  }
];

const benefitList = [
  "Já possui idade para se aposentar, mas não sabe se tem tempo suficiente de contribuição.",
  "Trabalhou muitos anos registrado ou contribuindo para o INSS e deseja verificar seu direito à aposentadoria.",
  "Teve um pedido de aposentadoria ou benefício negado pelo INSS.",
  "Recebe um benefício, mas desconfia que o valor possa estar incorreto.",
  "Perdeu um familiar que contribuía para o INSS e precisa solicitar pensão por morte.",
  "Está doente ou incapacitado para o trabalho e precisa de auxílio do INSS."
];

const Services = () => {
  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-4">

        {/* TÍTULO */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Soluções em Aposentadoria e Benefícios do INSS
          </h2>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Orientação jurídica especializada para análise, concessão e revisão
            de aposentadorias e benefícios do INSS, com avaliação individual
            de cada caso.
          </p>
        </div>

        {/* CARDS DE SERVIÇOS */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-background p-6 rounded-xl border border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="w-14 h-14 bg-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/20 transition">
                <service.icon className="w-7 h-7 text-accent" />
              </div>

              <h3 className="text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>

              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* BLOCO DE DIREITOS */}
        <div className="relative bg-background border border-border rounded-2xl p-10 md:p-14 shadow-sm overflow-hidden">

          {/* detalhe visual */}
          <div className="absolute top-0 left-0 w-full h-1 bg-accent"></div>

          <h3 className="text-2xl md:text-3xl font-semibold text-center text-foreground mb-10">
            Você pode ter direito a um benefício do INSS se:
          </h3>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">

            {benefitList.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-4 rounded-lg hover:bg-muted/40 transition-all duration-200"
              >
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-accent/10">
                  <CheckCircle className="w-5 h-5 text-accent" />
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  {item}
                </p>
              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
};

export default Services;
