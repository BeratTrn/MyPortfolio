// ─── Tech Stack ───────────────────────────────────────────────────────────────

export const TECH_STACK = [
  { name: 'DART', icon: <img src="/png/dartlogo.png" alt="Dart" style={{ width: '48px', height: '48px' }} /> },
  { name: 'FLUTTER', icon: <img src="/png/flutterlogo.png" alt="Flutter" style={{ width: '48px', height: '48px' }} /> },
  { name: 'JAVA', icon: <img src="/png/javalogo.png" alt="Java" style={{ width: '48px', height: '48px' }} /> },
  { name: 'FIREBASE', icon: <img src="/png/firebaselogo.png" alt="Firebase" style={{ width: '48px', height: '48px' }} /> },
  { name: 'MONGODB', icon: <img src="/png/mongodblogo.png" alt="MongoDB" style={{ width: '48px', height: '48px' }} /> },
  { name: 'REACTJS', icon: <img src="/png/reactlogo.png" alt="React" style={{ width: '48px', height: '48px' }} /> },
  { name: 'NODEJS', icon: <img src="/png/nodelogo.png" alt="Node.js" style={{ width: '48px', height: '48px' }} /> },
  { name: 'GIT', icon: <img src="/png/gitlogo.png" alt="Git" style={{ width: '48px', height: '48px' }} /> },
  { name: 'GITHUB', icon: <img src="/png/githublogo.png" alt="GitHub" style={{ width: '48px', height: '48px' }} /> },
  { name: 'FIGMA', icon: <img src="/png/figmalogo.png" alt="Figma" style={{ width: '48px', height: '48px' }} /> },
]

// ─── Socials ──────────────────────────────────────────────────────────────────

import { Instagram, Linkedin, Github, Mail } from 'lucide-react'

export const SOCIALS = [
  { icon: Instagram, label: 'Instagram', href: 'https://www.instagram.com/_beraturan/?hl=tr' },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/berat-turan-471bb3299' },
  { icon: Github, label: 'GitHub', href: 'https://github.com/BeratTrn' },
  { icon: Mail, label: 'Email', href: 'mailto:turanberatr@gmail.com' },
]

// ─── Projects ─────────────────────────────────────────────────────────────────

export const PROJECTS = [
  {
    title: 'Language Learning App',
    description: 'Yabancı dil öğrenmeyi eğlenceli ve etkili hale getiren kapsamlı bir mobil uygulama.',
    image: '/language_learning/language_learning.png',
    icon: '/language_learning/world.png',
    github: 'https://github.com/BeratTrn/Language_Learning_App',
    details: {
      baslik: 'Language Learning App',
      aciklama:
        'Bu uygulama, yabancı dil öğrenme sürecini oyunlaştırarak ve kişiselleştirerek daha etkili hale getirir. Testler, yazma alıştırmaları ve istatistiklerle dil becerilerinizi takip edebilirsiniz.',
      ozellikler: [
        'Kelimeleri test etme modülleri',
        'Yazma alıştırmaları (doğru/yanlış geri bildirimi)',
        'Kazı modülü (eğlenceli kelime oyunu)',
        'Detaylı istatistikler (başarı oranları, ilerleme grafikleri)',
        'Kullanıcı dostu arayüz',
        'Kayıt ve giriş sistemi',
        'Ana sayfa navigasyonu',
        'İlerleme takibi',
      ],
      teknolojiler: ['Flutter', 'Dart', 'Firebase (Auth, Firestore)', 'Provider State Management'],
      amac: 'Yabancı dil öğrenmeyi daha erişilebilir ve eğlenceli hale getirmek, kullanıcıların dil becerilerini düzenli olarak pratik yapabilecekleri bir platform sunmak.',
      gorseller: [
        '/language_learning/login.png',
        '/language_learning/sign.png',
        '/language_learning/home.png',
        '/language_learning/test.png',
        '/language_learning/correct_test.png',
        '/language_learning/wronge_test.png',
        '/language_learning/write.png',
        '/language_learning/correct_write.png',
        '/language_learning/wronge_write.png',
        '/language_learning/kazı.png',
        '/language_learning/correct_kazı.png',
        '/language_learning/stats1.png',
        '/language_learning/stats2.png',
      ],
    },
  },
  {
    title: 'Smart Diet App',
    description: 'Kişiselleştirilmiş diyet planları, kalori takibi ve sağlıklı yaşam için kapsamlı bir mobil uygulama.',
    image: '/smart_diet/smart_diet.png',
    icon: '/smart_diet/icon.png',
    github: 'https://github.com/BeratTrn/Smart_Diet_App',
    details: {
      baslik: 'Smart Diet App',
      aciklama:
        'Bu uygulama, sağlıklı yaşam ve kilo yönetimi hedeflerini kolaylaştırmak için tasarlanmıştır. Kullanıcıların kişisel bilgilerine göre özel diyet planları oluşturur, kalori alımını takip eder ve günlük öğünleri kaydetmeye yardımcı olur.',
      ozellikler: [
        'Kişiselleştirilmiş diyet planı oluşturma',
        'Günlük kalori hesaplama',
        'Öğün ekleme ve takip (Kahvaltı, Öğle, Akşam, Ara Öğünler)',
        'VKİ (Vücut Kitle Endeksi) hesaplama',
        'VYO (Vücut Yağ Oranı) takibi',
        'Kullanıcı profili yönetimi',
        'Kayıt ve giriş sistemi',
        'Profil düzenleme',
      ],
      teknolojiler: ['Flutter', 'Dart', 'Firebase (Auth, Firestore)', 'Provider State Management'],
      amac: 'Kullanıcıların sağlıklı yaşam alışkanlıkları kazanmasına yardımcı olmak, kilo yönetimini kolaylaştırmak ve beslenme alışkanlıklarını takip edilebilir hale getirmek.',
      gorseller: [
        '/smart_diet/login.jpeg',
        '/smart_diet/register.jpeg',
        '/smart_diet/homepage.jpeg',
        '/smart_diet/profile.jpeg',
        '/smart_diet/edit_profile.jpeg',
        '/smart_diet/calorie_calculate.jpeg',
        '/smart_diet/add_meal.jpeg',
        '/smart_diet/vki.jpeg',
        '/smart_diet/vyo.jpeg',
      ],
    },
  },
]
