import React, { useState } from 'react';
import { Header } from '../components/Header';
import { allStations } from '../data/mockData';
import { ChevronDown, ChevronUp, Train } from 'lucide-react';

export default function MetroLines() {
  const [expandedLine, setExpandedLine] = useState<string | null>('1');

  const lineNames: Record<string, string> = {
    '1': 'الخط الأول (المرج - حلوان)',
    '2': 'الخط الثاني (شبرا - المنيب)',
    '3': 'الخط الثالث (عدلي منصور - روض الفرج)',
    '4': 'الخط الرابع (حدائق الأشجار - الملك الصالح)',
    'lrt': 'القطار الكهربائي الخفيف (LRT)',
    'monorail_east': 'مونوريل شرق النيل',
    'monorail_west': 'مونوريل غرب النيل',
    'hst': 'القطار الكهربائي السريع',
    'brt': 'الأتوبيس الترددي (BRT)'
  };

  // Group stations by line
  const lines = allStations.reduce((acc, station) => {
    const lineId = station.line;
    if (!acc[lineId]) {
      acc[lineId] = {
        id: lineId,
        name: lineNames[lineId] || lineId,
        stations: []
      };
    }
    acc[lineId].stations.push(station);
    return acc;
  }, {} as Record<string, { id: string, name: string, stations: typeof allStations }>);

  // Sort stations by order
  Object.values(lines).forEach(line => {
    line.stations.sort((a, b) => a.order - b.order);
  });

  const lineOrder = ['1', '2', '3', '4', 'lrt', 'monorail_east', 'monorail_west', 'hst', 'brt'];

  return (
    <div className="min-h-screen bg-gray-50 pb-10">
      <Header title="خطوط المواصلات" showBack />
      
      <div className="p-4 space-y-4">
        {lineOrder.map(lineId => {
          const line = lines[lineId];
          if (!line) return null;

          const isExpanded = expandedLine === lineId;

          return (
            <div key={lineId} className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100">
              <button 
                onClick={() => setExpandedLine(isExpanded ? null : lineId)}
                className={`w-full flex items-center justify-between p-4 transition-colors ${isExpanded ? 'bg-blue-50' : 'hover:bg-gray-50'}`}
              >
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-full ${isExpanded ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-500'}`}>
                    <Train className="w-5 h-5" />
                  </div>
                  <span className="font-bold text-gray-800 text-right">{line.name}</span>
                </div>
                {isExpanded ? <ChevronUp className="w-5 h-5 text-gray-400" /> : <ChevronDown className="w-5 h-5 text-gray-400" />}
              </button>

              {isExpanded && (
                <div className="p-4 bg-white border-t border-gray-100">
                  <div className="relative border-r-2 border-dashed border-blue-200 mr-3 pr-6 space-y-6">
                    {line.stations.map((station, idx) => (
                      <div key={station.id} className="relative">
                        <div className="absolute -right-[29px] top-1 w-3 h-3 bg-white border-2 border-blue-500 rounded-full"></div>
                        <div className="flex items-center justify-between">
                          <span className="text-gray-700 font-medium">{station.name}</span>
                          <span className="text-xs text-gray-400 bg-gray-50 px-2 py-1 rounded">محطة {idx + 1}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
