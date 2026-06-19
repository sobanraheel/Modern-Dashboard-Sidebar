import { DashboardLayout } from './components/DashboardLayout';
import { TrendingUp, Users, DollarSign, ShoppingCart } from 'lucide-react';

const StatCard = ({ title, value, change, icon: Icon, color }: any) => (
  <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
    <div className="flex items-center justify-between mb-4">
      <div className={`p-3 rounded-xl ${color} bg-opacity-10`}>
        <Icon className={color.replace('bg-', 'text-')} size={24} />
      </div>
      <span className={`text-xs font-semibold px-2 py-1 rounded-full ${change.startsWith('+') ? 'bg-emerald-100 text-emerald-700' : 'bg-rose-100 text-rose-700'}`}>
        {change}
      </span>
    </div>
    <h3 className="text-slate-500 text-sm font-medium">{title}</h3>
    <p className="text-2xl font-bold mt-1">{value}</p>
  </div>
);

export default function App() {
  return (
    <DashboardLayout>
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-slate-900">Dashboard Overview!</h1>
          <p className="text-slate-500">Welcome back, M. Soban Raheel! Here are the activities performed today.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard 
            title="Total Revenue" 
            value="$45,231.89" 
            change="+20.1%" 
            icon={DollarSign} 
            color="bg-indigo-600"
          />
          <StatCard 
            title="Active Users" 
            value="2,350" 
            change="+180.1%" 
            icon={Users} 
            color="bg-emerald-600"
          />
          <StatCard 
            title="Sales" 
            value="+12,234" 
            change="+19%" 
            icon={ShoppingCart} 
            color="bg-amber-600"
          />
          <StatCard 
            title="Active Now" 
            value="+573" 
            change="+201" 
            icon={TrendingUp} 
            color="bg-rose-600"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
            <h3 className="font-bold text-lg mb-4">Recent Transactions</h3>
            <div className="space-y-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="flex items-center justify-between p-3 hover:bg-slate-50 rounded-xl transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center">
                      <Users size={20} className="text-slate-600" />
                    </div>
                    <div>
                      <p className="font-medium">Customer #{i * 123}</p>
                      <p className="text-xs text-slate-500">4 minutes ago</p>
                    </div>
                  </div>
                  <p className="font-semibold text-emerald-600">+$450.00</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
            <h3 className="font-bold text-lg mb-4">Quick Actions</h3>
            <div className="grid grid-cols-2 gap-4">
              {['Add User', 'New Report', 'Settings', 'Support'].map((action) => (
                <button key={action} className="p-4 bg-slate-50 hover:bg-indigo-50 hover:text-indigo-600 rounded-xl border border-slate-100 transition-all text-sm font-medium text-slate-600">
                  {action}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
