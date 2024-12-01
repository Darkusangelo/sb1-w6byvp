import { useTranslation } from 'react-i18next';
import { Menu, Globe } from 'lucide-react';

export default function Header() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    document.documentElement.dir = lng === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lng;
  };

  return (
    <header className="h-16 bg-emerald-700 text-white px-4 flex items-center justify-between shadow-lg">
      <div className="flex items-center gap-4">
        <button className="hover:bg-emerald-600 p-2 rounded-lg transition-colors">
          <Menu className="w-6 h-6" />
        </button>
        <h1 className="text-2xl font-bold">DzayerGo</h1>
      </div>
      
      <div className="flex items-center gap-4">
        <Globe className="w-6 h-6" />
        <select 
          onChange={(e) => changeLanguage(e.target.value)}
          className="bg-emerald-600 border-none outline-none rounded px-2 py-1 cursor-pointer hover:bg-emerald-500 transition-colors"
          value={i18n.language}
        >
          <option value="ar">العربية</option>
          <option value="fr">Français</option>
          <option value="en">English</option>
        </select>
      </div>
    </header>
  );
}