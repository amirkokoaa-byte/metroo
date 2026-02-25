import React, { useState } from 'react';
import { Header } from '../components/Header';
import { subscriptions } from '../data/mockData';
import { ChevronDown, Train, Bus, Zap } from 'lucide-react';

export default function Subscriptions() {
  const [activeTab, setActiveTab] = useState<'metro' | 'lrt' | 'monorail'>('metro');

  const filteredSubs = subscriptions.filter(s => s.mode === activeTab);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header title="الاشتراكات والأسعار" showBack />
      
      <div className="p-4">
        {/* Mode Tabs */}
        <div className="flex p-1 bg-gray-200 rounded-xl mb-6">
          <button 
            onClick={() => setActiveTab('metro')}
            className={`flex-1 py-2 rounded-lg text-sm font-bold transition-all ${activeTab === 'metro' ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-500'}`}
          >
            المترو
          </button>
          <button 
            onClick={() => setActiveTab('lrt')}
            className={`flex-1 py-2 rounded-lg text-sm font-bold transition-all ${activeTab === 'lrt' ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-500'}`}
          >
            القطار الكهربائي
          </button>
          <button 
            onClick={() => setActiveTab('monorail')}
            className={`flex-1 py-2 rounded-lg text-sm font-bold transition-all ${activeTab === 'monorail' ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-500'}`}
          >
            المونوريل
          </button>
        </div>

        <div className="space-y-6">
          {/* Monthly Section */}
          <div className="bg-white rounded-xl shadow-sm p-4">
            <h2 className="font-bold text-lg mb-4 text-gray-800 flex items-center gap-2">
              <span className="text-xl">📅</span>
              الاشتراكات الشهرية
            </h2>
            <div className="space-y-3">
              {filteredSubs.filter(s => s.period === 'monthly').map(sub => (
                <div key={sub.id} className="bg-gray-50 rounded-lg p-4 flex justify-between items-center cursor-pointer hover:bg-gray-100 transition-colors border border-gray-100">
                  <ChevronDown className="w-5 h-5 text-gray-400" />
                  <div className="text-right">
                    <h3 className="font-bold text-gray-800">{sub.title}</h3>
                    <p className="text-sm text-gray-500 mt-1">{sub.details} <span className="text-blue-600 font-bold bg-blue-50 px-2 py-0.5 rounded mr-1">{sub.price}</span></p>
                  </div>
                </div>
              ))}
              {filteredSubs.filter(s => s.period === 'monthly').length === 0 && (
                <p className="text-center text-gray-400 py-4">لا توجد اشتراكات شهرية متاحة حالياً لهذا النظام</p>
              )}
            </div>
          </div>

          {/* Quarterly/Yearly Section */}
          <div className="bg-white rounded-xl shadow-sm p-4">
            <h2 className="font-bold text-lg mb-4 text-gray-800 flex items-center gap-2">
              <span className="text-xl">🗓️</span>
              الاشتراكات الربع سنوية / السنوية
            </h2>
            <div className="space-y-3">
              {filteredSubs.filter(s => s.period !== 'monthly').map(sub => (
                <div key={sub.id} className="bg-gray-50 rounded-lg p-4 flex justify-between items-center cursor-pointer hover:bg-gray-100 transition-colors border border-gray-100">
                  <ChevronDown className="w-5 h-5 text-gray-400" />
                  <div className="text-right">
                    <h3 className="font-bold text-gray-800">{sub.title}</h3>
                    <p className="text-sm text-gray-500 mt-1">{sub.details} <span className="text-blue-600 font-bold bg-blue-50 px-2 py-0.5 rounded mr-1">{sub.price}</span></p>
                  </div>
                </div>
              ))}
              {filteredSubs.filter(s => s.period !== 'monthly').length === 0 && (
                <p className="text-center text-gray-400 py-4">لا توجد اشتراكات طويلة الأمد متاحة حالياً لهذا النظام</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
