import { MessageCircle } from 'lucide-react';
import { useState } from 'react';

export default function WhatsAppButton() {
  const [isHovered, setIsHovered] = useState(false);

  // Numéro WhatsApp MACCI
  const whatsappNumber = '225707646361'; // Format: pays + numéro sans le +
  const whatsappMessage = "Bonjour MACCI! Je souhaite en savoir plus sur vos services.";

  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Message Preview */}
      {isHovered && (
        <div className="absolute bottom-20 right-0 bg-white rounded-2xl shadow-2xl p-4 w-64 mb-2 animate-in fade-in slide-in-from-bottom-2">
          <p className="text-sm font-semibold text-slate-800 mb-3">
            Contactez-nous sur WhatsApp
          </p>
          <p className="text-xs text-slate-600 mb-3">
            Nous sommes disponibles pour répondre à vos questions sur les services MACCI.
          </p>
          <button
            onClick={handleWhatsAppClick}
            className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200 text-sm"
          >
            Ouvrir WhatsApp
          </button>
        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={handleWhatsAppClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`flex items-center justify-center w-14 h-14 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 ${
          isHovered
            ? 'bg-emerald-600 shadow-2xl'
            : 'bg-emerald-500 hover:bg-emerald-600'
        }`}
        aria-label="Contactez-nous sur WhatsApp"
        title="Contactez-nous sur WhatsApp"
      >
        <MessageCircle className="w-7 h-7 text-white" />
      </button>

      {/* Pulsing Animation */}
      <div className="absolute inset-0 rounded-full bg-emerald-500 animate-pulse opacity-75 pointer-events-none" style={{
        animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }} />
    </div>
  );
}
