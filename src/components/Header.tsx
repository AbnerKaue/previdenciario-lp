import logo from "@/assets/logo.png";
import { MessageCircle } from "lucide-react";

const Header = () => {
  const handleWhatsAppClick = () => {
    const message = "Olá! Gostaria de saber mais sobre direito previdenciário.";
    const whatsappUrl = `https://wa.me/5516996081982?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <header className="absolute top-0 left-0 right-0 z-50 py-4">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3 bg-white/90 px-4 py-2 rounded-lg shadow-lg">
            <img src={logo} alt="Caroline Oliveira Advocacia" className="h-12 w-auto" />
            <span className="text-xl font-semibold text-primary">Caroline Oliveira</span>
          </div>
          
          <button
            onClick={handleWhatsAppClick}
            className="bg-[#25D366] hover:bg-[#20BA5A] text-white px-6 py-2 rounded-md font-semibold transition-colors flex items-center gap-2"
          >
            <MessageCircle className="w-5 h-5" />
            <span className="hidden sm:inline">WhatsApp</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
