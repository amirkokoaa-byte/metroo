import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { Header } from '../components/Header';
import { Clock, DollarSign, MapPin, Circle, RefreshCw, TrainFront, Ticket } from 'lucide-react';
import { metroStations } from '../data/mockData';

export default function RouteDetails() {
  const [searchParams] = useSearchParams();
  const fromId = searchParams.get('from');
  const toId = searchParams.get('to');
  const type = searchParams.get('type') || 'metro';

  const fromStation = metroStations.find(s => s.id === fromId) || metroStations[6]; // Default Dar El Salam
  const toStation = metroStations.find(s => s.id === toId) || metroStations[80]; // Default Gamaa El Dowal

  if (type === 'train') {
    return (
      <div className="min-h-screen bg-gray-50 pb-10">
        <Header title="من القاهرة الي المنصورة" showBack />
        
        {/* Summary Card */}
        <div className="bg-blue-600 px-4 pb-6 pt-2 rounded-b-3xl shadow-lg -mt-1 relative z-0">
          <div className="bg-blue-500/30 border border-blue-400/30 rounded-full p-2 flex justify-center items-center gap-4 text-white text-sm backdrop-blur-sm">
            <div className="flex items-center gap-1">
              <Circle className="w-4 h-4" />
              <span>12 محطة</span>
            </div>
          </div>
        </div>

        <div className="p-4 -mt-4 relative z-10 space-y-4">
          {/* Train Card 1 */}
          <div className="bg-white rounded-xl shadow-sm p-4 border border-gray-100">
            <div className="flex justify-between items-center mb-4 border-b border-gray-100 pb-2">
              <div className="flex flex-col items-center">
                <Ticket className="w-5 h-5 text-gray-400 mb-1" />
                <span className="text-sm font-bold text-gray-700">المنصورة</span>
              </div>
              <div className="flex flex-col items-center flex-1 px-4">
                <span className="text-sm font-bold text-gray-800 mb-1">رقم القطار: 21</span>
                <div className="w-full border-t-2 border-dashed border-gray-300 relative">
                  <div className="absolute -top-1.5 left-0 w-3 h-3 bg-gray-300 rounded-full"></div>
                  <div className="absolute -top-1.5 right-0 w-3 h-3 bg-gray-300 rounded-full"></div>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <MapPin className="w-5 h-5 text-gray-400 mb-1" />
                <span className="text-sm font-bold text-gray-700">القاهرة</span>
              </div>
            </div>
            <div className="flex justify-between items-center text-sm text-gray-600">
              <span>عدد المحطات: 21</span>
              <span>نوع القطار: محسن</span>
            </div>
          </div>

          {/* Train Card 2 */}
          <div className="bg-white rounded-xl shadow-sm p-4 border border-gray-100">
            <div className="flex justify-between items-center mb-4 border-b border-gray-100 pb-2">
              <div className="flex flex-col items-center">
                <Ticket className="w-5 h-5 text-gray-400 mb-1" />
                <span className="text-sm font-bold text-gray-700">المنصورة</span>
              </div>
              <div className="flex flex-col items-center flex-1 px-4">
                <span className="text-sm font-bold text-gray-800 mb-1">رقم القطار: 1145</span>
                <div className="w-full border-t-2 border-dashed border-gray-300 relative">
                  <div className="absolute -top-1.5 left-0 w-3 h-3 bg-gray-300 rounded-full"></div>
                  <div className="absolute -top-1.5 right-0 w-3 h-3 bg-gray-300 rounded-full"></div>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <MapPin className="w-5 h-5 text-gray-400 mb-1" />
                <span className="text-sm font-bold text-gray-700">القاهرة</span>
              </div>
            </div>
            <div className="flex justify-between items-center text-sm text-gray-600">
              <span>عدد المحطات: 21</span>
              <span>نوع القطار: روسي</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-gray-50 pb-10">
      <Header title={`من ${fromStation.name} الي ${toStation.name}`} showBack />
      
      {/* Summary Card */}
      <div className="bg-blue-600 px-4 pb-6 pt-2 rounded-b-3xl shadow-lg -mt-1 relative z-0">
        <div className="bg-blue-500/30 border border-blue-400/30 rounded-full p-2 flex justify-center items-center gap-4 text-white text-sm backdrop-blur-sm">
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>60 دقيقة</span>
          </div>
          <div className="flex items-center gap-1">
            <Circle className="w-4 h-4" />
            <span>12 محطة</span>
          </div>
          <div className="flex items-center gap-1">
            <DollarSign className="w-4 h-4" />
            <span>20 جنيها</span>
          </div>
        </div>
      </div>

      <div className="p-4 -mt-4 relative z-10">
        {/* Details Card */}
        <div className="bg-white rounded-xl shadow-sm p-4 mb-4">
          <h3 className="font-bold text-gray-800 mb-2">تفاصيل مشوارك</h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            هتركب من {fromStation.name} اتجاه المرج وهتحول من جمال عبد الناصر للخط الثالث اتجاه جامعة القاهرة
          </p>
        </div>

        {/* Timeline */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-bold text-gray-800">{fromStation.name}</h3>
            <button className="text-blue-600 text-sm font-medium">عرض المحطات ^</button>
          </div>

          <div className="relative border-r-2 border-dashed border-blue-300 mr-3 pr-6 space-y-8">
            {/* Step 1 */}
            <div className="relative">
              <div className="absolute -right-[31px] top-0 w-4 h-4 bg-blue-500 rounded-full ring-4 ring-white"></div>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 text-blue-800 font-medium text-sm">
                1- اركب اتجاه المرج
              </div>
              
              {/* Stations List (Mock) */}
              <div className="mt-4 space-y-3 text-gray-500 text-sm pr-2">
                <p>{fromStation.name}</p>
                <p>الزهراء</p>
                <p>مارجرجس</p>
                <p>الملك الصالح</p>
                <p>السيدة زينب</p>
                <p>سعد زغلول</p>
                <p>السادات</p>
              </div>
            </div>

            {/* Transfer */}
            <div className="relative pt-4">
              <div className="absolute -right-[33px] top-4 bg-white rounded-full p-1 border border-gray-300">
                <RefreshCw className="w-4 h-4 text-green-600" />
              </div>
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-bold text-gray-800">جمال عبد الناصر</h3>
                <button className="text-blue-600 text-sm font-medium">عرض المحطات v</button>
              </div>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 text-blue-800 font-medium text-sm">
                2- انزل هنا وحول لاتجاه عدلي منصور
              </div>
            </div>

            {/* End */}
            <div className="relative pt-8">
              <div className="absolute -right-[31px] top-8 w-4 h-4 bg-green-500 rounded-full ring-4 ring-white"></div>
              <h3 className="font-bold text-gray-800 mb-4">{toStation.name}</h3>
              <div className="border border-blue-200 rounded-lg p-3 flex items-center justify-center gap-2 bg-white shadow-sm">
                <span className="text-xl">🎉</span>
                <span className="text-blue-800 font-medium">مبروك وصلت وجهتك</span>
              </div>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="grid grid-cols-2 gap-4 mt-6">
          <button className="flex items-center justify-center gap-2 bg-blue-600 text-white py-3 rounded-lg font-bold shadow-md hover:bg-blue-700">
            <MapPin className="w-5 h-5" />
            تتبع الطريق
          </button>
          <button className="flex items-center justify-center gap-2 bg-white text-blue-600 border border-blue-200 py-3 rounded-lg font-bold shadow-sm hover:bg-gray-50">
            <span className="text-xl">🔖</span>
            حفظ الطريق
          </button>
        </div>
      </div>
    </div>
  );
}
