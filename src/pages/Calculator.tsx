import React, { useState } from 'react';
import { Header } from '../components/Header';
import { metroStations, calculateTicketPrice } from '../data/mockData';
import { Minus, Plus, Ticket } from 'lucide-react';

export default function Calculator() {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  
  const [counts, setCounts] = useState({
    public: 0,
    elderly: 0,
    special: 0
  });

  const [totalPrice, setTotalPrice] = useState<number | null>(null);

  const updateCount = (type: keyof typeof counts, delta: number) => {
    setCounts(prev => ({
      ...prev,
      [type]: Math.max(0, prev[type] + delta)
    }));
  };

  const handleCalculate = () => {
    if (!from || !to) return;
    
    // Simple logic: calculate distance based on index difference for now
    // In a real app, we'd use a graph algorithm
    const fromIndex = metroStations.findIndex(s => s.id === from);
    const toIndex = metroStations.findIndex(s => s.id === to);
    
    // Mock distance: absolute difference + 5 (to simulate transfers/reality)
    const stationsCount = Math.abs(fromIndex - toIndex) + 5;
    
    const publicPrice = calculateTicketPrice(stationsCount, 'public') * counts.public;
    const elderlyPrice = calculateTicketPrice(stationsCount, 'elderly') * counts.elderly;
    const specialPrice = calculateTicketPrice(stationsCount, 'special') * counts.special;
    
    setTotalPrice(publicPrice + elderlyPrice + specialPrice);
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <Header title="احسب سعر التذاكر" showBack />
      
      <div className="p-4">
        {/* Illustration */}
        <div className="flex justify-center mb-6">
          <div className="bg-blue-100 rounded-full p-6 w-48 h-48 flex items-center justify-center">
            <Ticket className="w-24 h-24 text-blue-600" />
          </div>
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
            {metroStations.map(s => <option key={s.id} value={s.id}>{s.name}</option>)}
          </select>

          <select 
            className="w-full p-3 border border-gray-200 rounded-lg bg-white text-right"
            value={to}
            onChange={(e) => setTo(e.target.value)}
          >
            <option value="">محطة الوصول</option>
            {metroStations.map(s => <option key={s.id} value={s.id}>{s.name}</option>)}
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
