import React, { useState } from 'react';
import { Header } from '../components/Header';
import { MapPin, Search, RefreshCw } from 'lucide-react';

export default function GuideMe() {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [showResults, setShowResults] = useState(false);

  const handleSearch = () => {
    setShowResults(true);
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <Header title="دلني علي الطريق" showBack />
      
      {!showResults ? (
        <>
          <div className="bg-yellow-50 p-4 text-center border-b border-yellow-100">
            <div className="flex items-center justify-center gap-2 text-gray-800">
              <span className="text-yellow-500 text-xl">✨</span>
              <p className="font-medium">جرب ميزتنا الجديدة! .. واعرف الطريق لاي مكان.</p>
            </div>
          </div>

          <div className="p-4">
            <h2 className="font-bold text-lg mb-4 text-right">حدد طريقك وانطلق</h2>
            
            <div className="space-y-4 mb-6">
              <div className="relative">
                <MapPin className="absolute right-3 top-3.5 w-5 h-5 text-gray-400" />
                <input 
                  type="text" 
                  placeholder="هتركب منين؟" 
                  className="w-full p-3 pr-10 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-500"
                  value={from}
                  onChange={(e) => setFrom(e.target.value)}
                />
              </div>
              <div className="relative">
                <MapPin className="absolute right-3 top-3.5 w-5 h-5 text-gray-400" />
                <input 
                  type="text" 
                  placeholder="رايح فين؟" 
                  className="w-full p-3 pr-10 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-500"
                  value={to}
                  onChange={(e) => setTo(e.target.value)}
                />
              </div>
            </div>

            <button 
              onClick={handleSearch}
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700 shadow-md"
            >
              عرض النتائج
            </button>

            <p className="text-center text-gray-500 text-sm mt-6">
              الخدمة ما زالت تحت التجربة يرجي التحقق من المعلومات.
            </p>
          </div>

          {/* Footer Actions */}
          <div className="fixed bottom-8 left-0 right-0 flex justify-center gap-4 px-4">
            <button className="flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-lg border border-gray-100 text-gray-600 font-medium">
              <span>🔧</span>
              ساعد في التطوير
            </button>
            <button className="flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-lg border border-gray-100 text-gray-600 font-medium">
              <span>🚩</span>
              ابلاغ عن اخطاء
            </button>
          </div>
        </>
      ) : (
        <div className="p-4">
          <h2 className="font-bold text-xl text-center mb-6">ألماظة - جامع عمرو بن العاص</h2>
          
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center gap-2">
              <div className="bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center font-bold text-sm">1</div>
              <span className="font-bold text-gray-800">الاقتراح الأول - عدد التحويلات 2</span>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 relative">
            <div className="absolute right-8 top-10 bottom-10 w-0.5 border-r-2 border-dashed border-gray-300"></div>

            {/* Step 1 */}
            <div className="relative mb-8">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-bold text-gray-800 mr-8">ألماظة</h3>
                <div className="absolute right-[-5px] top-1 w-4 h-4 bg-green-500 rounded-full ring-4 ring-white z-10"></div>
                <span className="text-sm text-gray-500">ميني باص 102</span>
              </div>
              <div className="mr-8 border border-blue-200 rounded-lg p-3 text-blue-800 font-medium text-sm bg-white">
                1- اركب ميني باص 102
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative mb-8">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-bold text-gray-800 mr-8">انزل الكيلو 4.5</h3>
                <div className="absolute right-[-5px] top-1 bg-white rounded-full p-0.5 border border-gray-300 z-10">
                  <RefreshCw className="w-3 h-3 text-green-600" />
                </div>
                <span className="text-sm text-gray-500">Ms3</span>
              </div>
              <div className="mr-8 border border-blue-200 rounded-lg p-3 text-blue-800 font-medium text-sm bg-white">
                2- اركب ميني باص ms3
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative mb-8">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-bold text-gray-800 mr-8">انزل الشهداء رمسيس</h3>
                <div className="absolute right-[-5px] top-1 bg-white rounded-full p-0.5 border border-gray-300 z-10">
                  <RefreshCw className="w-3 h-3 text-green-600" />
                </div>
                <span className="text-sm text-gray-500">اتوبيس 825</span>
              </div>
              <div className="mr-8 border border-blue-200 rounded-lg p-3 text-blue-800 font-medium text-sm bg-white">
                2- اركب اتوبيس 825
              </div>
            </div>

            {/* End */}
            <div className="relative">
              <div className="absolute right-[-5px] top-1 w-4 h-4 bg-blue-600 rounded-full ring-4 ring-white z-10"></div>
              <h3 className="font-bold text-gray-800 mr-8 mb-4">انزل جامع عمرو بن العاص</h3>
              <div className="mr-8 border border-blue-200 rounded-lg p-3 flex items-center justify-center gap-2 bg-white shadow-sm">
                <span className="text-xl">🎉</span>
                <span className="text-blue-800 font-medium">مبروك وصلت وجهتك</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
