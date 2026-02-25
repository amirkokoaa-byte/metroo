import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, MapPin, Train, Bus, ArrowLeftRight } from 'lucide-react';
import { allStations } from '../data/mockData';

export default function Home() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'metro' | 'train' | 'bus' | 'capital'>('metro');
  const [fromStation, setFromStation] = useState('');
  const [toStation, setToStation] = useState('');

  // Filter stations for the dropdown (Metro only for simplicity in the main search, or all)
  const metroStations = allStations.filter(s => ['1', '2', '3', '4'].includes(s.line));

  const handleSearch = () => {
    if (fromStation && toStation) {
      navigate(`/route?from=${fromStation}&to=${toStation}&type=${activeTab}`);
    }
  };

  return (
    <div className="pb-20">
      <div className="bg-white p-4 shadow-sm">
        <div className="flex justify-between items-center mb-4">
          <button className="p-2">
            <div className="w-6 h-0.5 bg-gray-600 mb-1.5"></div>
            <div className="w-4 h-0.5 bg-gray-600 mb-1.5"></div>
            <div className="w-6 h-0.5 bg-gray-600"></div>
          </button>
          <div className="text-right">
            <p className="text-sm text-gray-500">مرحبا بك 👋</p>
            <h2 className="font-bold text-lg">اختر وسيلة المواصلات المناسبة وانطلق!</h2>
          </div>
        </div>

        {/* Feature Banner */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 mb-6 flex items-center justify-between cursor-pointer" onClick={() => navigate('/guide')}>
          <div className="flex items-center gap-2">
            <span className="text-yellow-500 text-xl">✨</span>
            <p className="text-sm font-medium text-gray-800">جرب ميزتنا الجديدة! .. واعرف الطريق لاي مكان.</p>
          </div>
          <div className="bg-yellow-400 rounded-full p-1">
            <ArrowLeftRight className="w-4 h-4 text-white" />
          </div>
        </div>

        {/* Transport Tabs */}
        <div className="grid grid-cols-4 gap-2 mb-6">
          <button 
            onClick={() => setActiveTab('metro')}
            className={`flex flex-col items-center p-3 rounded-xl transition-colors ${activeTab === 'metro' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-500'}`}
          >
            <Train className="w-6 h-6 mb-1" />
            <span className="text-xs font-medium">المترو</span>
          </button>
          <button 
            onClick={() => setActiveTab('capital')}
            className={`flex flex-col items-center p-3 rounded-xl transition-colors ${activeTab === 'capital' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-500'}`}
          >
            <Train className="w-6 h-6 mb-1" />
            <span className="text-xs font-medium">القطار الكهربائي</span>
          </button>
          <button 
            onClick={() => setActiveTab('train')}
            className={`flex flex-col items-center p-3 rounded-xl transition-colors ${activeTab === 'train' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-500'}`}
          >
            <Train className="w-6 h-6 mb-1" />
            <span className="text-xs font-medium">القطار</span>
          </button>
          <button 
            onClick={() => setActiveTab('bus')}
            className={`flex flex-col items-center p-3 rounded-xl transition-colors ${activeTab === 'bus' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-500'}`}
          >
            <Bus className="w-6 h-6 mb-1" />
            <span className="text-xs font-medium">المواصلات العامة</span>
          </button>
        </div>

        {/* Nearest Station */}
        <div className="flex items-center gap-2 mb-4 text-blue-800 bg-blue-50 p-3 rounded-lg">
          <MapPin className="w-5 h-5 text-green-500" />
          <span className="font-medium">أقرب محطة مترو:</span>
          <span className="font-bold">دار السلام</span>
        </div>

        {/* Route Search Form */}
        <div className="border border-gray-200 rounded-xl p-4 shadow-sm mb-6">
          <h3 className="font-bold mb-4 text-gray-800">أدخل المحطات من و إلي لمعرفة تفاصيل الرحلة</h3>
          
          <div className="space-y-3 mb-4">
            <div className="relative">
              <Train className="absolute right-3 top-3 w-5 h-5 text-gray-400" />
              <select 
                className="w-full p-3 pr-10 border border-gray-200 rounded-lg bg-white appearance-none text-gray-700 focus:outline-none focus:border-blue-500"
                value={fromStation}
                onChange={(e) => setFromStation(e.target.value)}
              >
                <option value="">هتركب منين؟</option>
                {metroStations.map(s => <option key={s.id} value={s.id}>{s.name}</option>)}
              </select>
            </div>
            <div className="relative">
              <Train className="absolute right-3 top-3 w-5 h-5 text-gray-400" />
              <select 
                className="w-full p-3 pr-10 border border-gray-200 rounded-lg bg-white appearance-none text-gray-700 focus:outline-none focus:border-blue-500"
                value={toStation}
                onChange={(e) => setToStation(e.target.value)}
              >
                <option value="">رايح فين؟</option>
                {metroStations.map(s => <option key={s.id} value={s.id}>{s.name}</option>)}
              </select>
            </div>
          </div>

          <button 
            onClick={handleSearch}
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors"
          >
            عرض النتائج
          </button>
        </div>

        {/* Metro Tools */}
        <div>
          <h3 className="font-bold mb-3 text-gray-800">أدوات المترو</h3>
          
          <div className="relative mb-4">
            <Search className="absolute right-3 top-3 w-5 h-5 text-gray-400" />
            <input 
              type="text" 
              placeholder="ابحث عن المكان واعرف أقرب محطة مترو منه" 
              className="w-full p-3 pr-10 border border-gray-200 rounded-lg bg-gray-50 focus:outline-none focus:bg-white focus:border-blue-500"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <button 
              onClick={() => navigate('/subscriptions')}
              className="flex items-center justify-center gap-2 p-4 border border-gray-200 rounded-xl hover:bg-gray-50"
            >
              <span className="font-bold text-gray-700">اشتراكات المترو</span>
            </button>
            <button 
              onClick={() => navigate('/lines')}
              className="flex items-center justify-center gap-2 p-4 border border-gray-200 rounded-xl hover:bg-gray-50"
            >
              <span className="font-bold text-gray-700">خطوط المترو</span>
            </button>
            <button 
              onClick={() => navigate('/calculator')}
              className="col-span-2 flex items-center justify-center gap-2 p-4 border border-gray-200 rounded-xl hover:bg-gray-50"
            >
              <span className="font-bold text-gray-700">حاسبة التذاكر</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
