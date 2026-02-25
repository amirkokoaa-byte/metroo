
export interface Station {
  id: string;
  name: string;
  line: number;
}

export interface SubscriptionPlan {
  id: string;
  title: string;
  price: string;
  details: string;
  category: 'public' | 'elderly' | 'student' | 'capital_train';
  period: 'monthly' | 'quarterly' | 'yearly';
}

export const metroStations: Station[] = [
  { id: '1', name: 'حلوان', line: 1 },
  { id: '2', name: 'المعصرة', line: 1 },
  { id: '3', name: 'طرة البلد', line: 1 },
  { id: '4', name: 'ثكنات المعادي', line: 1 },
  { id: '5', name: 'المعادي', line: 1 },
  { id: '6', name: 'حدائق المعادي', line: 1 },
  { id: '7', name: 'دار السلام', line: 1 },
  { id: '8', name: 'الزهراء', line: 1 },
  { id: '9', name: 'مارجرجس', line: 1 },
  { id: '10', name: 'الملك الصالح', line: 1 },
  { id: '11', name: 'السيدة زينب', line: 1 },
  { id: '12', name: 'سعد زغلول', line: 1 },
  { id: '13', name: 'السادات', line: 1 }, // Transfer 1-2
  { id: '14', name: 'جمال عبد الناصر', line: 1 }, // Transfer 1-3
  { id: '15', name: 'عرابي', line: 1 },
  { id: '16', name: 'الشهداء', line: 1 }, // Transfer 1-2
  { id: '17', name: 'غمرة', line: 1 },
  { id: '18', name: 'الدمرداش', line: 1 },
  { id: '19', name: 'منشية الصدر', line: 1 },
  { id: '20', name: 'كوبري القبة', line: 1 },
  { id: '21', name: 'حمامات القبة', line: 1 },
  { id: '22', name: 'سراي القبة', line: 1 },
  { id: '23', name: 'حدائق الزيتون', line: 1 },
  { id: '24', name: 'حلمية الزيتون', line: 1 },
  { id: '25', name: 'المطرية', line: 1 },
  { id: '26', name: 'عين شمس', line: 1 },
  { id: '27', name: 'عزبة النخل', line: 1 },
  { id: '28', name: 'المرج', line: 1 },
  { id: '29', name: 'المرج الجديدة', line: 1 },
  
  // Line 2 (Partial)
  { id: '30', name: 'شبرا الخيمة', line: 2 },
  { id: '31', name: 'كلية الزراعة', line: 2 },
  { id: '32', name: 'المظلات', line: 2 },
  { id: '33', name: 'الخلفاوي', line: 2 },
  { id: '34', name: 'سانت تريزا', line: 2 },
  { id: '35', name: 'روض الفرج', line: 2 },
  { id: '36', name: 'مسرة', line: 2 },
  { id: '37', name: 'الشهداء', line: 2 }, // Transfer
  { id: '38', name: 'العتبة', line: 2 }, // Transfer 2-3
  { id: '39', name: 'محمد نجيب', line: 2 },
  { id: '40', name: 'السادات', line: 2 }, // Transfer
  { id: '41', name: 'الأوبرا', line: 2 },
  { id: '42', name: 'الدقي', line: 2 },
  { id: '43', name: 'البحوث', line: 2 },
  { id: '44', name: 'جامعة القاهرة', line: 2 }, // Transfer 2-3
  { id: '45', name: 'فيصل', line: 2 },
  { id: '46', name: 'الجيزة', line: 2 },
  { id: '47', name: 'ضواحي الجيزة', line: 2 },
  { id: '48', name: 'ساقية مكي', line: 2 },
  { id: '49', name: 'المنيب', line: 2 },

  // Line 3 (Partial)
  { id: '50', name: 'عدلي منصور', line: 3 },
  { id: '51', name: 'الهايكستب', line: 3 },
  { id: '52', name: 'عمر بن الخطاب', line: 3 },
  { id: '53', name: 'قباء', line: 3 },
  { id: '54', name: 'هشام بركات', line: 3 },
  { id: '55', name: 'النزهة', line: 3 },
  { id: '56', name: 'نادي الشمس', line: 3 },
  { id: '57', name: 'ألف مسكن', line: 3 },
  { id: '58', name: 'ميدان هليوبوليس', line: 3 },
  { id: '59', name: 'هارون', line: 3 },
  { id: '60', name: 'الأهرام', line: 3 },
  { id: '61', name: 'كلية البنات', line: 3 },
  { id: '62', name: 'ستاد القاهرة', line: 3 },
  { id: '63', name: 'أرض المعارض', line: 3 },
  { id: '64', name: 'العباسية', line: 3 },
  { id: '65', name: 'عبده باشا', line: 3 },
  { id: '66', name: 'الجيش', line: 3 },
  { id: '67', name: 'باب الشعرية', line: 3 },
  { id: '68', name: 'العتبة', line: 3 }, // Transfer
  { id: '69', name: 'جمال عبد الناصر', line: 3 }, // Transfer
  { id: '70', name: 'ماسبيرو', line: 3 },
  { id: '71', name: 'صفاء حجازي', line: 3 },
  { id: '72', name: 'الكيت كات', line: 3 },
  { id: '73', name: 'السودان', line: 3 },
  { id: '74', name: 'إمبابة', line: 3 },
  { id: '75', name: 'البوهي', line: 3 },
  { id: '76', name: 'القومية العربية', line: 3 },
  { id: '77', name: 'الطريق الدائري', line: 3 },
  { id: '78', name: 'محور روض الفرج', line: 3 },
  { id: '79', name: 'التوفيقية', line: 3 },
  { id: '80', name: 'وادي النيل', line: 3 },
  { id: '81', name: 'جامعة الدول', line: 3 },
  { id: '82', name: 'بولاق الدكرور', line: 3 },
  { id: '83', name: 'جامعة القاهرة', line: 3 }, // Transfer
];

export const subscriptions: SubscriptionPlan[] = [
  {
    id: '1',
    title: 'الجمهور',
    price: '310 جنيه',
    details: 'اسعار تبدأ من',
    category: 'public',
    period: 'monthly'
  },
  {
    id: '2',
    title: 'كبار السن من 60 ل 70 سنة',
    price: '220 جنيه',
    details: 'اسعار تبدأ من',
    category: 'elderly',
    period: 'monthly'
  },
  {
    id: '3',
    title: 'قطار العاصمة 3 محطات',
    price: '300 جنيه',
    details: 'اشتراك شهري',
    category: 'capital_train',
    period: 'monthly'
  },
  {
    id: '4',
    title: 'قطار العاصمة 7 محطات',
    price: '500 جنيه',
    details: 'اشتراك شهري',
    category: 'capital_train',
    period: 'monthly'
  },
  {
    id: '5',
    title: 'قطار العاصمة لاكثر من 7 محطات',
    price: '600 جنيه',
    details: 'اشتراك شهري',
    category: 'capital_train',
    period: 'monthly'
  },
  {
    id: '6',
    title: 'الجمهور',
    price: '310 جنيه',
    details: 'اسعار تبدأ من',
    category: 'public',
    period: 'yearly'
  },
  {
    id: '7',
    title: 'كبار السن من 60 ل 70 سنة',
    price: '220 جنيه',
    details: 'اسعار تبدأ من',
    category: 'elderly',
    period: 'yearly'
  },
];

export const calculateTicketPrice = (stations: number, type: 'public' | 'elderly' | 'special') => {
  // 2026 Estimated Prices
  let basePrice = 0;
  if (stations <= 9) basePrice = 8;
  else if (stations <= 16) basePrice = 10;
  else if (stations <= 23) basePrice = 15;
  else basePrice = 20;

  if (type === 'elderly') return Math.ceil(basePrice * 0.5);
  if (type === 'special') return 5; // Flat rate usually
  return basePrice;
};
