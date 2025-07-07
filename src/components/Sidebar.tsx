import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, UserPlus, BarChart3, Users, User, ClipboardList, CreditCard } from 'lucide-react';

const Sidebar = () => {
  const location = useLocation();

  const menuItems = [
    { path: '/', label: 'Landing Page', icon: Home },
    { path: '/signup', label: 'Registro', icon: UserPlus },
    { path: '/dashboard', label: 'Dashboard', icon: BarChart3 },
    { path: '/clients', label: 'Clientes', icon: Users },
    { path: '/clients/1', label: 'Perfil Cliente', icon: User },
    { path: '/plans/builder', label: 'Crear Planes', icon: ClipboardList },
    { path: '/billing', label: 'Facturación', icon: CreditCard },
  ];

  return (
    <div className="w-64 bg-gray-800 text-white min-h-screen">
      <div className="p-6">
        <h2 className="text-xl font-bold mb-8">FitFlow Pro</h2>
        <nav>
          <ul className="space-y-2">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              
              return (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className={`flex items-center space-x-3 p-3 rounded-lg transition-colors ${
                      isActive 
                        ? 'bg-blue-600 text-white' 
                        : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                    }`}
                  >
                    <Icon size={20} />
                    <span>{item.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;