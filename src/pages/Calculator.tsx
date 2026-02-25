import React, { useState } from 'react';
import { Header } from '../components/Header';
import { allStations, calculateTicketPrice } from '../data/mockData';
import { Minus, Plus, Ticket, Train, Bus, Zap } from 'lucide-react';

export default function Calculator() {
  const [mode, setMode] = useState<'metro' | 'lrt' | 'monorail' | 'brt'>('metro');
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  
  const [counts, setCounts] = useState({
    public: 0,
    elderly: 0,
    special: 0
  });

  const [totalPrice, setTotalPrice] = useState<number | null>(null);

  // Filter stations based on selected mode
  const filteredStations = allStations.filter(s => {
    if (mode === 'metro') return ['1', '2', '3', '4'].includes(s.line);
    if (mode === 'lrt') return s.line === 'lrt';
    if (mode === 'monorail') return s.line.startsWith('monorail');
    if (mode === 'brt') return s.line === 'brt';
    return false;
  });

  const updateCount = (type: keyof typeof counts, delta: number) => {
    setCounts(prev => ({
      ...prev,
      [type]: Math.max(0, prev[type] + delta)
    }));
  };

  const handleCalculate = () => {
    if (!from || !to) return;
    
    const fromIndex = filteredStations.findIndex(s => s.id === from);
    const toIndex = filteredStations.findIndex(s => s.id === to);
    
    // Mock distance logic
    const stationsCount = Math.abs(fromIndex - toIndex) + 1;
    
    const publicPrice = calculateTicketPrice(stationsCount, 'public', mode) * counts.public;
    const elderlyPrice = calculateTicketPrice(stationsCount, 'elderly', mode) * counts.elderly;
    const specialPrice = calculateTicketPrice(stationsCount, 'special', mode) * counts.special;
    
    setTotalPrice(publicPrice + elderlyPrice + specialPrice);
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <Header title="حاسبة التذاكر" showBack />
      
      <div className="p-4">
        {/* Mode Selector */}
        <div className="grid grid-cols-4 gap-2 mb-6">
          <button 
            onClick={() => { setMode('metro'); setFrom(''); setTo(''); setTotalPrice(null); }}
            className={`flex flex-col items-center p-2 rounded-xl transition-colors ${mode === 'metro' ? 'bg-blue-600 text-white' : 'bg-white text-gray-500 border border-gray-200'}`}
          >
            <Train className="w-5 h-5 mb-1" />
            <span className="text-[10px] font-bold">المترو</span>
          </button>
          <button 
            onClick={() => { setMode('lrt'); setFrom(''); setTo(''); setTotalPrice(null); }}
            className={`flex flex-col items-center p-2 rounded-xl transition-colors ${mode === 'lrt' ? 'bg-blue-600 text-white' : 'bg-white text-gray-500 border border-gray-200'}`}
          >
            <Zap className="w-5 h-5 mb-1" />
            <span className="text-[10px] font-bold">الكهربائي</span>
          </button>
          <button 
            onClick={() => { setMode('monorail'); setFrom(''); setTo(''); setTotalPrice(null); }}
            className={`flex flex-col items-center p-2 rounded-xl transition-colors ${mode === 'monorail' ? 'bg-blue-600 text-white' : 'bg-white text-gray-500 border border-gray-200'}`}
          >
            <Train className="w-5 h-5 mb-1" />
            <span className="text-[10px] font-bold">المونوريل</span>
          </button>
          <button 
            onClick={() => { setMode('brt'); setFrom(''); setTo(''); setTotalPrice(null); }}
            className={`flex flex-col items-center p-2 rounded-xl transition-colors ${mode === 'brt' ? 'bg-blue-600 text-white' : 'bg-white text-gray-500 border border-gray-200'}`}
          >
            <Bus className="w-5 h-5 mb-1" />
            <span className="text-[10px] font-bold">الترددي</span>
          </button>
        </div>

        {/* Station Selection */}
        <div className="bg-white rounded-xl shadow-sm p-4 mb-6 space-y-4">
          <h3 className="font-bold text-right text-gray-800">حدد المحطات من .. الي</h3>
          
          <select 
            className="w-full p-3 border border-gray-200 rounded-lg bg-white text-right"
            value={from}
            onChange={(e) => setFrom(e.target.value)}
          >
            <option value="">محطة القيام</option>
            {filteredStations.map(s => <option key={s.id} value={s.id}>{s.name} {s.line !== '1' && s.line !== '2' && s.line !== '3' && s.line !== '4' ? '' : `- الخط ${s.line}`}</option>)}
          </select>

          <select 
            className="w-full p-3 border border-gray-200 rounded-lg bg-white text-right"
            value={to}
            onChange={(e) => setTo(e.target.value)}
          >
            <option value="">محطة الوصول</option>
            {filteredStations.map(s => <option key={s.id} value={s.id}>{s.name} {s.line !== '1' && s.line !== '2' && s.line !== '3' && s.line !== '4' ? '' : `- الخط ${s.line}`}</option>)}
          </select>
        </div>

        {/* Categories */}
        <div className="bg-white rounded-xl shadow-sm p-4 mb-6">
          <h3 className="font-bold text-right text-gray-800 mb-4">حدد فئة وعدد الافراد</h3>
          
          <div className="space-y-4">
            {/* Public */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <button onClick={() => updateCount('public', -1)} className="p-1 rounded-full border border-gray-300 text-gray-500 hover:bg-gray-100"><Minus className="w-4 h-4" /></button>
                <span className="font-bold w-4 text-center">{counts.public}</span>
                <button onClick={() => updateCount('public', 1)} className="p-1 rounded-full border border-gray-300 text-gray-500 hover:bg-gray-100"><Plus className="w-4 h-4" /></button>
              </div>
              <span className="text-gray-700">الجمهور</span>
            </div>

            {/* Elderly */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <button onClick={() => updateCount('elderly', -1)} className="p-1 rounded-full border border-gray-300 text-gray-500 hover:bg-gray-100"><Minus className="w-4 h-4" /></button>
                <span className="font-bold w-4 text-center">{counts.elderly}</span>
                <button onClick={() => updateCount('elderly', 1)} className="p-1 rounded-full border border-gray-300 text-gray-500 hover:bg-gray-100"><Plus className="w-4 h-4" /></button>
              </div>
              <span className="text-gray-700">كبار السن</span>
            </div>

            {/* Special Needs */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <button onClick={() => updateCount('special', -1)} className="p-1 rounded-full border border-gray-300 text-gray-500 hover:bg-gray-100"><Minus className="w-4 h-4" /></button>
                <span className="font-bold w-4 text-center">{counts.special}</span>
                <button onClick={() => updateCount('special', 1)} className="p-1 rounded-full border border-gray-300 text-gray-500 hover:bg-gray-100"><Plus className="w-4 h-4" /></button>
              </div>
              <span className="text-gray-700">اصحاب الهمم</span>
            </div>
          </div>
        </div>

        {/* Result */}
        {totalPrice !== null && (
          <div className="bg-green-50 border border-green-200 rounded-xl p-4 mb-6 text-center">
            <p className="text-gray-600 mb-1">اجمالي السعر</p>
            <p className="text-3xl font-bold text-green-700">{totalPrice} جنيه</p>
          </div>
        )}

        <button 
          onClick={handleCalculate}
          className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-blue-700 shadow-lg"
        >
          احسب السعر
        </button>
      </div>
    </div>
  );
}
