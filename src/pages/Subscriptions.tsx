import React from 'react';
import { Header } from '../components/Header';
import { subscriptions } from '../data/mockData';
import { ChevronDown } from 'lucide-react';

export default function Subscriptions() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header title="اشتراكات المترو" showBack />
      
      <div className="p-4 space-y-6">
        {/* Monthly Section */}
        <div className="bg-white rounded-xl shadow-sm p-4">
          <h2 className="font-bold text-lg mb-4 text-gray-800">الاشتراكات الشهرية</h2>
          <div className="space-y-3">
            {subscriptions.filter(s => s.period === 'monthly').map(sub => (
              <div key={sub.id} className="bg-gray-50 rounded-lg p-4 flex justify-between items-center cursor-pointer hover:bg-gray-100 transition-colors">
                <ChevronDown className="w-5 h-5 text-gray-400" />
                <div className="text-right">
                  <h3 className="font-bold text-gray-800">{sub.title}</h3>
                  <p className="text-sm text-gray-500">{sub.details} <span className="text-gray-900 font-bold">{sub.price}</span></p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Yearly Section */}
        <div className="bg-white rounded-xl shadow-sm p-4">
          <h2 className="font-bold text-lg mb-4 text-gray-800">الاشتراكات السنوية</h2>
          <div className="space-y-3">
            {subscriptions.filter(s => s.period === 'yearly').map(sub => (
              <div key={sub.id} className="bg-gray-50 rounded-lg p-4 flex justify-between items-center cursor-pointer hover:bg-gray-100 transition-colors">
                <ChevronDown className="w-5 h-5 text-gray-400" />
                <div className="text-right">
                  <h3 className="font-bold text-gray-800">{sub.title}</h3>
                  <p className="text-sm text-gray-500">{sub.details} <span className="text-gray-900 font-bold">{sub.price}</span></p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
