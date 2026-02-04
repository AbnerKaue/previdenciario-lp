import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-background.jpg";
import { MessageCircle } from "lucide-react";

const Hero = () => {
  const handleWhatsAppClick = () => {
    const message = "Olá! Gostaria de saber mais sobre meus direitos previdenciários.";
    const whatsappUrl = `https://wa.me/5516981445729?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="relative min-h-[800px] flex items-center">
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
            onClick={handleWhatsAppClick}
            className="bg-[#25D366] hover:bg-[#20BA5A] text-white font-semibold px-8 py-6 text-lg animate-scale-in flex items-center gap-3"
          >
            <MessageCircle className="w-6 h-6" />
            Fale no WhatsApp Agora
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
