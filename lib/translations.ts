export type Language = 'he' | 'en';

export const translations = {
  nav: {
    home: { en: 'Home', he: 'דף הבית' },
    proposals: { en: 'Proposals', he: 'הצעות נישואין' },
    corporate: { en: 'Corporate', he: 'אירועים עסקיים' },
    about: { en: 'About', he: 'עלינו' },
    gallery: { en: 'Gallery', he: 'גלריה' },
    contact: { en: 'Contact', he: 'צור קשר' },
  },
  hero: {
    title: {
      en: 'Creating Unforgettable Moments in Paradise',
      he: 'יוצרים רגעים בלתי נשכחים בגן עדן',
    },
    cta: {
      en: 'Plan Your Dream Proposal',
      he: 'תכננו את הצעת הנישואין שלכם',
    },
  },
  about: {
    title: {
      en: 'A Bit More Than Just an Event',
      he: 'קצת יותר מסתם אירוע',
    },
    text: {
      en: 'We are a team dedicated to producing and designing luxury events in Thailand. Our expertise lies in being your anchor of confidence and peace of mind when planning an event overseas. We serve as your personal contact on the ground, managing all logistical details to the highest standard, ensuring your vision comes to life exactly as you imagined. With a commitment to excellence and personal attention, we are here to create the most beautiful moments in your life.',
      he: 'אנחנו צוות להפקות ועיצוב אירועים בתאילנד, שחי ונושם את עולם האירועים והאירוח המקומי. המומחיות שלנו היא להוות עבורכם עוגן של ביטחון ושקט בתכנון אירוע מעבר לים. אנחנו כאן כדי להיות איש הקשר האישי שלכם בשטח, לנהל את כל הפרטים הלוגיסטיים בסטנדרט גבוה ולדאוג שהחזון שלכם יתממש בדיוק כפי שדמיינתם. עם מחויבות למצוינות וליחס אישי, אנחנו כאן כדי ליצור עבורכם את הרגעים היפים בחיים.',
    },
  },
  proposals: {
    title: {
      en: 'Marriage Proposals in Paradise',
      he: 'הצעות נישואין בגן עדן',
    },
    subtitle: {
      en: 'A Romantic Proposal — At the Highest Level',
      he: 'הצעת נישואין רומנטית – ברמה הגבוהה ביותר',
    },
    description: {
      en: 'The moment has come to make the decision and take the next step. And what could be more perfect than this moment in Thailand? We will tailor the proposal you have always dreamed of — a perfect and original production that will turn your moment into the most magical and joyful one. We are here to provide close personal guidance at every step, so you can arrive with peace of mind and focus solely on the emotion and shared experience.',
      he: 'הגיע הרגע לקבל את ההחלטה ולעשות את הצעד הבא במערכת היחסים. ומה יכול להיות מושלם יותר מהרגע הזה בתאילנד? אנו נתאים עבורכם את הצעת הנישואין שתמיד חלמתם עליה – הפקה מושלמת ומקורית שתהפוך את הרגע שלכם למאושר והקסום ביותר. אנחנו כאן כדי להעניק לכם ליווי אישי וצמוד בכל שלב, כך שתוכלו להגיע בראש שקט ולהתמקד אך ורק ברגש ובחוויה המשותפת שלכם.',
    },
    included: {
      en: 'What\'s Included',
      he: 'מה מקבלים בהפקה שלנו?',
    },
    items: [
      { en: 'Beachfront location during stunning sunset hours', he: 'לוקיישן בחוף הים בשעות השקיעה המרהיבות' },
      { en: 'Full atmosphere design: decorative frame of your choice, flower arrangements, lanterns and candles along the path', he: 'עיצוב אווירה מלא: מסגרת עיצובית לבחירה, שזירת פרחים, עששיות ונרות לאורך השביל' },
      { en: 'Bold and impressive "Marry Me" letter sign', he: 'שלט אותיות "Marry Me" בולט ומרשים' },
      { en: 'Professional photographer to capture the moment', he: 'צלם / צלמת מקצועיים לתיעוד הרגע' },
      { en: 'Sparkling wine, champagne glasses and a refreshing fruit platter', he: 'יין מבעבע, כוסות שמפניה ופלטת פירות מרעננת' },
      { en: 'Professional sound system with your entrance song of choice', he: 'מערכת שמע מקצועית עם שיר הכניסה לבחירתכם' },
    ],
    moreText: {
      en: 'We have much more to offer — additional elements can be upgraded and added with full customization.',
      he: 'יש לנו עוד המון מה להציע – ניתן לשדרג ולהוסיף אלמנטים נוספים בהתאמה אישית.',
    },
    stylesTitle: {
      en: 'Choose Your Style',
      he: 'בחרו את הסגנון שלכם',
    },
    styles: [
      {
        en: { name: 'Circle Design', desc: 'Modern circular design' },
        he: { name: 'עיצוב Circle', desc: 'עיצוב מודרני במבנה עיגול' },
        image: '/images/circle-design-v2.jpg',
      },
      {
        en: { name: 'Heart Design', desc: 'The iconic and beloved heart' },
        he: { name: 'עיצוב Heart', desc: 'הלב האיקוני והאהוב' },
        image: '/images/heart-design-v2.jpg',
      },
      {
        en: { name: 'Natural Waterfront', desc: 'Romantic natural design on the waterline' },
        he: { name: 'פרחים ונרות על החוף', desc: 'עיצוב טבעי ורומנטי על קו המים' },
        image: '/images/natural-design-v2.jpg',
      },
      {
        en: { name: 'Custom Design', desc: 'Have a different vision? Send us a photo for a fully tailored quote' },
        he: { name: 'עיצוב אישי', desc: 'יש לכם חזון אחר? שלחו לנו תמונה לקבלת הצעת מחיר בהתאמה מלאה' },
        image: '/images/custom-design-v2.jpg',
      },
    ],
    cta: {
      en: 'Get a Custom Quote',
      he: 'קבלו הצעת מחיר',
    },
  },
  corporate: {
    title: {
      en: 'Corporate Events with Impact',
      he: 'אירועים עסקיים עם השפעה',
    },
    subtitle: {
      en: 'A Winning Corporate Event — The Perfect Blend of Luxury and Professionalism',
      he: 'אירוע עסקי מנצח – שילוב מושלם של יוקרה ומקצועיות',
    },
    description: {
      en: 'From boutique business events to conferences and company productions — we create events that leave a powerful impression. We serve as your representatives on the ground, ensuring full synchronization between all parties and guaranteeing a seamlessly flowing event.',
      he: 'מבוטיק לעסקים ועד כנסים והפקות חברה – אנחנו מפיקים אירועים שמשאירים רושם עוצמתי. אנחנו משמשים כנציגים שלכם בשטח, דואגים לסנכרון מלא בין כל הגורמים ומבטיחים אירוע שמתנהל בזרימה מושלמת.',
    },
    services: [
      {
        en: { title: 'Event Design', desc: 'Adapting the design concept to your brand language while incorporating the unique local atmosphere' },
        he: { title: 'עיצוב אירוע', desc: 'התאמת הקונספט העיצובי לשפת המותג שלכם תוך שילוב האווירה המקומית הייחודית' },
      },
      {
        en: { title: 'Full Production', desc: 'End-to-end logistical management, vendor coordination and professional field operation' },
        he: { title: 'הפקה מלאה', desc: 'ניהול לוגיסטי מקצה לקצה, תיאום מול כל הספקים ותפעול שטח מקצועי ואיכותי' },
      },
    ],
    cta: {
      en: 'Plan Your Corporate Event',
      he: 'תכננו את האירוע העסקי שלכם',
    },
  },
  gallery: {
    title: {
      en: 'Our Work',
      he: 'העבודות שלנו',
    },
    subtitle: {
      en: 'A glimpse into the magical moments we create',
      he: 'הצצה לרגעים הקסומים שאנחנו יוצרים',
    },
  },
  contact: {
    title: {
      en: "Let's Create Something Magical",
      he: 'בואו ניצור משהו קסום',
    },
    subtitle: {
      en: 'Tell us about your dream event and we will get back to you with a personalized proposal',
      he: 'ספרו לנו על אירוע החלומות שלכם ונחזור אליכם עם הצעה מותאמת אישית',
    },
    name: { en: 'Full Name', he: 'שם מלא' },
    email: { en: 'Email', he: 'אימייל' },
    phone: { en: 'Phone', he: 'טלפון' },
    eventTypeLabel: { en: 'Event Type', he: 'סוג האירוע' },
    eventTypes: {
      proposal: { en: 'Marriage Proposal', he: 'הצעת נישואין' },
      corporate: { en: 'Corporate Event', he: 'אירוע עסקי' },
      other: { en: 'Other', he: 'אחר' },
    },
    message: { en: 'Tell us about your vision...', he: 'ספרו לנו על החזון שלכם...' },
    send: { en: 'Send Message', he: 'שליחת הודעה' },
    sending: { en: 'Sending...', he: 'שולח...' },
    success: { en: 'Message sent successfully! We will be in touch soon.', he: 'ההודעה נשלחה בהצלחה! נחזור אליכם בהקדם.' },
    error: { en: 'Something went wrong. Please try again.', he: 'משהו השתבש. אנא נסו שוב.' },
    whatsapp: { en: 'Chat on WhatsApp', he: 'שלחו הודעה בוואטסאפ' },
    orWhatsapp: { en: 'Or message us directly', he: 'או שלחו לנו הודעה ישירות' },
  },
  footer: {
    rights: {
      en: '© 2026 A Bit More — All Rights Reserved',
      he: '© 2026 A Bit More — כל הזכויות שמורות',
    },
  },
} as const;

export function t(obj: { en: string; he: string }, lang: Language): string {
  return obj?.[lang] ?? obj?.en ?? '';
}
