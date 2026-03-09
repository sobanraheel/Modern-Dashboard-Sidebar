import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  Users, 
  Settings, 
  BarChart3, 
  Mail, 
  Calendar, 
  HelpCircle, 
  ChevronLeft, 
  ChevronRight,
  LogOut,
  Bell,
  Search
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface SidebarItemProps {
  icon: React.ElementType;
  label: string;
  active?: boolean;
  collapsed: boolean;
  onClick: () => void;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ icon: Icon, label, active, collapsed, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`
        w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-200 group
        ${active 
          ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-200' 
          : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'}
      `}
    >
      <div className="flex-shrink-0">
        <Icon size={20} />
      </div>
      <AnimatePresence mode="wait">
        {!collapsed && (
          <motion.span
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            transition={{ duration: 0.2 }}
            className="font-medium whitespace-nowrap overflow-hidden"
          >
            {label}
          </motion.span>
        )}
      </AnimatePresence>
      
      {collapsed && (
        <div className="absolute left-14 bg-slate-900 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200 z-50 whitespace-nowrap">
          {label}
        </div>
      )}
    </button>
  );
};

export const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [activeItem, setActiveItem] = useState('Dashboard');

  const menuItems = [
    { icon: LayoutDashboard, label: 'Dashboard' },
    { icon: BarChart3, label: 'Analytics' },
    { icon: Users, label: 'Customers' },
    { icon: Mail, label: 'Messages' },
    { icon: Calendar, label: 'Schedule' },
    { icon: Settings, label: 'Settings' },
  ];

  return (
    <motion.div
      animate={{ width: collapsed ? 80 : 260 }}
      className="h-screen bg-white border-r border-slate-200 flex flex-col relative shadow-sm"
    >
      {/* Logo Area */}
      <div className="p-6 flex items-center gap-3">
        <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center flex-shrink-0">
          <div className="w-4 h-4 bg-white rounded-sm rotate-45" />
        </div>
        <AnimatePresence>
          {!collapsed && (
            <motion.span
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              className="font-bold text-xl text-slate-900 whitespace-nowrap"
            >
              Nexus UI
            </motion.span>
          )}
        </AnimatePresence>
      </div>

      {/* Collapse Toggle */}
      <button
        onClick={() => setCollapsed(!collapsed)}
        className="absolute -right-3 top-12 w-6 h-6 bg-white border border-slate-200 rounded-full flex items-center justify-center text-slate-500 hover:text-indigo-600 hover:border-indigo-600 transition-colors z-50 shadow-sm"
      >
        {collapsed ? <ChevronRight size={14} /> : <ChevronLeft size={14} />}
      </button>

      {/* Navigation */}
      <nav className="flex-1 px-4 space-y-2 mt-4">
        {menuItems.map((item) => (
          <SidebarItem
            key={item.label}
            icon={item.icon}
            label={item.label}
            active={activeItem === item.label}
            collapsed={collapsed}
            onClick={() => setActiveItem(item.label)}
          />
        ))}
      </nav>

      {/* Footer / User Profile */}
      <div className="p-4 border-t border-slate-100">
        <SidebarItem
          icon={HelpCircle}
          label="Support"
          collapsed={collapsed}
          onClick={() => {}}
        />
        <div className={`mt-4 flex items-center gap-3 p-2 rounded-xl bg-slate-50 ${collapsed ? 'justify-center' : ''}`}>
          <img 
            src="https://picsum.photos/seed/user/40/40" 
            alt="User" 
            className="w-8 h-8 rounded-full border border-white shadow-sm"
            referrerPolicy="no-referrer"
          />
          {!collapsed && (
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-slate-900 truncate">Alex Rivera</p>
              <p className="text-xs text-slate-500 truncate">Pro Plan</p>
            </div>
          )}
          {!collapsed && (
            <button className="text-slate-400 hover:text-red-500 transition-colors">
              <LogOut size={18} />
            </button>
          )}
        </div>
      </div>
    </motion.div>
  );
};
