import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-previdenciario.jpg";

const Hero = () => {
  const scrollToForm = () => {
    document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[600px] flex items-center">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-primary/80" />
      </div>
      
      <div className="container relative z-10 mx-auto px-4 py-20">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6 animate-fade-in">
            Conquiste Seu Benefício Previdenciário
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 animate-fade-in">
            Especialistas em direito previdenciário prontos para defender seus direitos junto ao INSS
          </p>
          <Button 
            size="lg" 
            onClick={scrollToForm}
            className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-6 text-lg animate-scale-in"
          >
            Fale com um Especialista
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
