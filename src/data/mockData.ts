
export interface Station {
  id: string;
  name: string;
  line: string; // Changed to string to support 'Monorail', 'LRT', etc.
  lineName: string;
  order: number;
}

export interface SubscriptionPlan {
  id: string;
  title: string;
  price: string;
  details: string;
  category: 'public' | 'elderly' | 'student' | 'special';
  period: 'monthly' | 'quarterly' | 'yearly';
  mode: 'metro' | 'lrt' | 'monorail' | 'train';
}

// --- Metro Line 1 (Helwan - El Marg) ---
const line1Stations = [
  'حلوان', 'عين حلوان', 'جامعة حلوان', 'وادي حوف', 'حدائق حلوان', 'المعصرة', 'طرة الأسمنت', 'كوتسيكا',
  'طرة البلد', 'ثكنات المعادي', 'المعادي', 'حدائق المعادي', 'دار السلام', 'الزهراء', 'مارجرجس', 'الملك الصالح',
  'السيدة زينب', 'سعد زغلول', 'السادات', 'جمال عبد الناصر', 'عرابي', 'الشهداء', 'غمرة', 'الدمرداش',
  'منشية الصدر', 'كوبري القبة', 'حمامات القبة', 'سراي القبة', 'حدائق الزيتون', 'حلمية الزيتون', 'المطرية',
  'عين شمس', 'عزبة النخل', 'المرج', 'المرج الجديدة'
].map((name, i) => ({ id: `m1-${i}`, name, line: '1', lineName: 'الخط الأول (حلوان - المرج)', order: i + 1 }));

// --- Metro Line 2 (Shubra - El Mounib) ---
const line2Stations = [
  'المنيب', 'ساقية مكي', 'ضواحي الجيزة', 'الجيزة', 'فيصل', 'جامعة القاهرة', 'البحوث', 'الدقي', 'الأوبرا',
  'السادات', 'محمد نجيب', 'العتبة', 'الشهداء', 'مسرة', 'روض الفرج', 'سانت تريزا', 'الخلفاوي', 'المظلات',
  'كلية الزراعة', 'شبرا الخيمة'
].map((name, i) => ({ id: `m2-${i}`, name, line: '2', lineName: 'الخط الثاني (شبرا - المنيب)', order: i + 1 }));

// --- Metro Line 3 (Adly Mansour - Rod El Farag/Cairo Univ) ---
const line3Stations = [
  'عدلي منصور', 'الهايكستب', 'عمر بن الخطاب', 'قباء', 'هشام بركات', 'النزهة', 'نادي الشمس', 'ألف مسكن',
  'ميدان هليوبوليس', 'هارون', 'الأهرام', 'كلية البنات', 'ستاد القاهرة', 'أرض المعارض', 'العباسية',
  'عبده باشا', 'الجيش', 'باب الشعرية', 'العتبة', 'جمال عبد الناصر', 'ماسبيرو', 'صفاء حجازي', 'الكيت كات',
  'السودان', 'إمبابة', 'البوهي', 'القومية العربية', 'الطريق الدائري', 'محور روض الفرج',
  'التوفيقية', 'وادي النيل', 'جامعة الدول', 'بولاق الدكرور', 'جامعة القاهرة'
].map((name, i) => ({ id: `m3-${i}`, name, line: '3', lineName: 'الخط الثالث (عدلي منصور - روض الفرج)', order: i + 1 }));

// --- Metro Line 4 (Under Construction - Phase 1) ---
const line4Stations = [
  'حدائق الأشجار', 'حدائق الأهرام', 'النصر', 'المتحف المصري الكبير', 'ميدان الرماية', 'الأهرام',
  'المريوطية', 'العريش', 'المطبعة', 'الطالبية', 'مدكور', 'المساحة', 'الجيزة', 'ميدان الجيزة',
  'الروضة', 'الملك الصالح', 'الفسطاط', 'قلعة صلاح الدين', 'الملك منصور', 'الحي السادس', 'الطيران',
  'عباس العقاد', 'مكرم عبيد', 'حسن مأمون', 'الحي العاشر', 'زهراء مدينة نصر', 'أكاديمية الشرطة', 'الياسمين'
].map((name, i) => ({ id: `m4-${i}`, name, line: '4', lineName: 'الخط الرابع (أكتوبر - القاهرة الجديدة)', order: i + 1 }));

// --- Monorail East (New Capital) ---
const monorailEastStations = [
  'الاستاد', 'هشام بركات', 'نوري خطاب', 'الحي السابع', 'ذاكر حسين', 'المنطقة الحرة', 'المشير طنطاوي',
  'كايرو فيستيفال', 'الشويفات', 'المستشفى الجوي', 'النرجس', 'محمد نجيب', 'الجامعة الأمريكية', 'إعمار',
  'النافورة', 'البروة', 'الدائري الأوسطي', 'محمد بن زايد', 'الدائري الإقليمي', 'فندق الماسة',
  'حي الوزارات', 'العاصمة الإدارية'
].map((name, i) => ({ id: `me-${i}`, name, line: 'monorail_east', lineName: 'مونوريل شرق النيل (العاصمة الإدارية)', order: i + 1 }));

// --- Monorail West (6th of October) ---
const monorailWestStations = [
  'وادي النيل', 'الطريق الدائري', 'المريوطية', 'المنصورية', 'الطريق الصحراوي', 'هايبر وان', 'جهينة',
  'هيئة المجتمعات العمرانية', 'الحصري', 'دار الفؤاد', 'المنطقة الصناعية', 'القطار السريع'
].map((name, i) => ({ id: `mw-${i}`, name, line: 'monorail_west', lineName: 'مونوريل غرب النيل (أكتوبر)', order: i + 1 }));

// --- LRT (Light Rail Transit) ---
const lrtStations = [
  'عدلي منصور', 'العبور', 'المستقبل', 'الشروق', 'هليوبوليس الجديدة', 'بدر', 'الروبيكي',
  'حدائق العاصمة', 'مطار العاصمة', 'مدينة الفنون والثقافة'
].map((name, i) => ({ id: `lrt-${i}`, name, line: 'lrt', lineName: 'القطار الكهربائي الخفيف (LRT)', order: i + 1 }));

// --- High Speed Train (Green Line) ---
const highSpeedStations = [
  'العين السخنة', 'العاصمة الإدارية', 'محمد نجيب', 'القاهرة الجديدة', 'جنوب الجيزة', 'حدائق أكتوبر',
  '6 أكتوبر', 'سفنكس', 'السادات', 'وادي النطرون', 'النوبارية', 'الإسكندرية', 'برج العرب', 'العلمين',
  'رأس الحكمة', 'الضبعة', 'سيدي عبد الرحمن', 'مطروح'
].map((name, i) => ({ id: `hst-${i}`, name, line: 'hst', lineName: 'القطار الكهربائي السريع (الخط الأخضر)', order: i + 1 }));

// --- BRT (Ring Road) ---
const brtStations = [
  'عدلي منصور', 'مطار القاهرة', 'أكاديمية الشرطة', 'السويس', 'التجمع', 'طريق العين السخنة', 'كارفور المعادي',
  'البساتين', 'أثر النبي', 'المنيب', 'المريوطية', 'المنصورية', 'طريق الواحات', 'دريم لاند', 'الوراق', 'مسطرد'
].map((name, i) => ({ id: `brt-${i}`, name, line: 'brt', lineName: 'الأتوبيس الترددي (BRT)', order: i + 1 }));


export const allStations = [
  ...line1Stations, ...line2Stations, ...line3Stations, ...line4Stations,
  ...monorailEastStations, ...monorailWestStations,
  ...lrtStations, ...highSpeedStations, ...brtStations
];

export const subscriptions: SubscriptionPlan[] = [
  // Metro
  { id: 'm1', title: 'اشتراك المترو الشهري (1 منطقة)', price: '310 جنيه', details: 'عدد 60 رحلة', category: 'public', period: 'monthly', mode: 'metro' },
  { id: 'm2', title: 'اشتراك المترو الشهري (2 منطقة)', price: '365 جنيه', details: 'عدد 60 رحلة', category: 'public', period: 'monthly', mode: 'metro' },
  { id: 'm3', title: 'اشتراك المترو الشهري (3/4 مناطق)', price: '425 جنيه', details: 'عدد 60 رحلة', category: 'public', period: 'monthly', mode: 'metro' },
  { id: 'm4', title: 'اشتراك المترو الربع سنوي (1 منطقة)', price: '885 جنيه', details: 'عدد 180 رحلة', category: 'public', period: 'quarterly', mode: 'metro' },
  { id: 'm5', title: 'اشتراك المترو الربع سنوي (3/4 مناطق)', price: '1225 جنيه', details: 'عدد 180 رحلة', category: 'public', period: 'quarterly', mode: 'metro' },
  { id: 'm6', title: 'اشتراك الطلبة الربع سنوي', price: '45 جنيه', details: 'لجميع المناطق', category: 'student', period: 'quarterly', mode: 'metro' },
  { id: 'm7', title: 'اشتراك كبار السن (فوق 70)', price: 'مجانا', details: 'لجميع المناطق', category: 'elderly', period: 'monthly', mode: 'metro' },
  { id: 'm8', title: 'اشتراك كبار السن (60-70) شهري', price: '220 جنيه', details: 'لجميع المناطق', category: 'elderly', period: 'monthly', mode: 'metro' },

  // LRT
  { id: 'l1', title: 'اشتراك LRT شهري (3 محطات)', price: '300 جنيه', details: 'غير محدود', category: 'public', period: 'monthly', mode: 'lrt' },
  { id: 'l2', title: 'اشتراك LRT شهري (7 محطات)', price: '500 جنيه', details: 'غير محدود', category: 'public', period: 'monthly', mode: 'lrt' },
  { id: 'l3', title: 'اشتراك LRT شهري (أكثر من 7)', price: '700 جنيه', details: 'غير محدود', category: 'public', period: 'monthly', mode: 'lrt' },

  // Monorail (Estimated 2026)
  { id: 'mo1', title: 'اشتراك المونوريل الشهري', price: '600 جنيه', details: 'كامل الخط', category: 'public', period: 'monthly', mode: 'monorail' },
  { id: 'mo2', title: 'اشتراك المونوريل الطلابي', price: '200 جنيه', details: 'كامل الخط', category: 'student', period: 'monthly', mode: 'monorail' },

  // Train
  { id: 't1', title: 'اشتراك القطار المحسن (كيلومتري)', price: 'حسب المسافة', details: 'للمسافات الطويلة', category: 'public', period: 'monthly', mode: 'train' },
];

export const calculateTicketPrice = (stations: number, type: 'public' | 'elderly' | 'special', mode: string = 'metro') => {
  if (mode === 'metro') {
    let basePrice = 0;
    if (stations <= 9) basePrice = 8;
    else if (stations <= 16) basePrice = 10;
    else if (stations <= 23) basePrice = 15;
    else basePrice = 20;

    if (type === 'elderly') return Math.ceil(basePrice * 0.5);
    if (type === 'special') return 5;
    return basePrice;
  }
  
  if (mode === 'lrt') {
    if (stations <= 3) return 10;
    if (stations <= 7) return 15;
    return 20;
  }

  if (mode === 'monorail') {
    // Estimated flat or zone
    return 30; 
  }

  if (mode === 'brt') {
    return 15; // Flat rate estimate
  }

  return 0;
};
