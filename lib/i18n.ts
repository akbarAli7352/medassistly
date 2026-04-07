export const locales = ["en", "ar"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export const localeLabels: Record<Locale, string> = {
  en: "English",
  ar: "العربية",
};

export const localeDirections: Record<Locale, "ltr" | "rtl"> = {
  en: "ltr",
  ar: "rtl",
};

type NavItem = {
  href: string;
  label: string;
};

type HighlightItem = {
  title: string;
  description: string;
};

export type Dictionary = {
  meta: {
    title: string;
    description: string;
  };
  site: {
    name: string;
    tagline: string;
    badge: string;
  };
  nav: NavItem[];
  home: {
    title: string;
    subtitle: string;
    primaryCta: string;
    secondaryCta: string;
    highlights: HighlightItem[];
  };
  about: {
    label: string;
    title: string;
    paragraphs: string[];
    supportTitle: string;
    supportItems: HighlightItem[];
    reasonsTitle: string;
    reasons: HighlightItem[];
  };
  services: {
    label: string;
    title: string;
    intro: string;
    careTitle: string;
    careItems: HighlightItem[];
    treatmentsTitle: string;
    treatments: HighlightItem[];
  };
  process: {
    label: string;
    title: string;
    subtitle: string;
    steps: Array<{
      number: string;
      title: string;
      description: string;
    }>;
  };
  contact: {
    label: string;
    title: string;
    intro: string;
    form: {
      nameLabel: string;
      emailLabel: string;
      phoneLabel: string;
      treatmentLabel: string;
      namePlaceholder: string;
      emailPlaceholder: string;
      phonePlaceholder: string;
      treatmentPlaceholder: string;
      submitLabel: string;
      submittingLabel: string;
      helper: string;
      validation: string;
      success: string;
      failure: string;
    };
    detailsTitle: string;
    details: string[];
  };
  footer: {
    licensing: string;
    rights: string;
  };
};

const englishDictionary: Dictionary = {
  meta: {
    title: "MedAssistly | Medical Assistance Made Simple",
    description:
      "MedAssistly helps international patients coordinate treatment, travel, and recovery support in India.",
  },
  site: {
    name: "MedAssistly",
    tagline: "Medical travel coordination with clarity, compassion, and trusted support.",
    badge: "International Patient Assistance",
  },
  nav: [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#process", label: "Process" },
    { href: "#contact", label: "Contact Us" },
  ],
  home: {
    title: "Medical Assistance Made Simple",
    subtitle:
      "Your trusted partner for world-class medical treatment in India. We handle every detail of your healthcare journey from consultation to recovery.",
    primaryCta: "Explore Services",
    secondaryCta: "Request Consultation",
    highlights: [
      {
        title: "Structured coordination",
        description: "From consultation to post-care, every step is organized around patient comfort.",
      },
      {
        title: "Trusted hospital network",
        description: "We work with accredited hospitals and experienced specialists across India.",
      },
      {
        title: "Multilingual support",
        description: "Patients and families receive guidance that reduces confusion and stress.",
      },
    ],
  },
  about: {
    label: "About",
    title: "About MedAssistly",
    paragraphs: [
      "MedAssistly is a professional medical coordination company created to simplify medical travel to India. We support international patients through a structured, transparent, and ethical coordination process so every step is clear and well managed.",
      "We work with a network of accredited hospitals and experienced medical professionals across India. Our team personally coordinates consultations, hospital arrangements, travel support, and post-treatment follow-up, ensuring patients and families feel supported throughout the journey.",
    ],
    supportTitle: "Who We Support",
    supportItems: [
      {
        title: "Individuals traveling alone",
        description: "First-time medical tourists who need full support throughout their journey.",
      },
      {
        title: "Families traveling with patients",
        description: "Loved ones accompanying patients who require coordinated stay and care.",
      },
      {
        title: "Self-pay patients",
        description: "People seeking affordable, high-quality treatment abroad without insurance.",
      },
    ],
    reasonsTitle: "Why choose MedAssistly",
    reasons: [
      {
        title: "Structured, end-to-end care",
        description:
          "We follow a proven coordination process so patients stay supported, informed, and safe.",
      },
      {
        title: "Experienced medical professionals",
        description: "We partner only with seasoned specialists and trusted treatment centers.",
      },
      {
        title: "Transparency and trust",
        description:
          "Every recommendation includes clear hospital details, doctor credentials, and cost visibility.",
      },
      {
        title: "India's globally renowned care",
        description:
          "Patients gain access to advanced, compassionate healthcare backed by strong infrastructure.",
      },
      {
        title: "Premium yet affordable",
        description:
          "High-quality treatment becomes more accessible because of India's cost advantages.",
      },
    ],
  },
  services: {
    label: "Services",
    title: "Our Comprehensive Services",
    intro:
      "We coordinate medical, travel, and recovery logistics so patients can focus on treatment with confidence.",
    careTitle: "Care coordination services",
    careItems: [
      {
        title: "Pre Travel Medical Consultation",
        description:
          "We review your medical history and reports, then plan the optimal treatment path with our partner doctors.",
      },
      {
        title: "Medical Visa and Travel Assistance",
        description:
          "We guide you through visa paperwork and government clearances, and help arrange flights.",
      },
      {
        title: "Hospital and Doctor Selection",
        description:
          "We recommend top specialists and world-class hospitals tailored to your needs.",
      },
      {
        title: "Cost Estimate and Transparent Pricing",
        description:
          "You receive a clear breakdown of expected costs with no hidden fees.",
      },
      {
        title: "Accommodation and Local Transportation",
        description:
          "We arrange hotels or serviced apartments and daily transportation for hospital visits.",
      },
      {
        title: "Interpreter and Translator Services",
        description:
          "Multilingual coordinators and interpreters support patients during consultations and care.",
      },
      {
        title: "In-Hospital Coordination and Updates",
        description:
          "A dedicated case manager tracks treatment schedules, tests, and communication with families.",
      },
      {
        title: "Post-Treatment Follow-up",
        description:
          "We coordinate teleconsultations, medication planning, and recovery support after you return home.",
      },
      {
        title: "Currency Exchange and Connectivity",
        description:
          "We assist with currency exchange and local SIM setup to keep your stay comfortable and connected.",
      },
    ],
    treatmentsTitle: "Medical Treatments we Coordinate",
    treatments: [
      {
        title: "Liver Transplant (LTP)",
        description:
          "Coordination support from pre-evaluation through post-treatment follow-up at experienced transplant centers.",
      },
      {
        title: "Kidney Transplant (KTP)",
        description:
          "Comprehensive support for hospital selection, doctor matching, and recovery planning.",
      },
      {
        title: "Bone Marrow Transplant",
        description:
          "Coordination with specialized hospitals and hematology teams for advanced transplant care.",
      },
      {
        title: "Cardiology",
        description:
          "Support for diagnostics, interventional procedures, and cardiac surgery pathways.",
      },
      {
        title: "Oncology (Cancer Care)",
        description:
          "Assistance accessing chemotherapy, radiation therapy, surgical oncology, and broader cancer care.",
      },
      {
        title: "Orthopedics",
        description:
          "Support for joint replacement, spine procedures, and musculoskeletal care.",
      },
      {
        title: "Gynecology",
        description:
          "Coordination for women's health services, specialized treatment, and surgery.",
      },
      {
        title: "Advanced Dentistry",
        description:
          "High-quality cosmetic, restorative, and surgical dental treatment coordination in India.",
      },
      {
        title: "General Surgery",
        description:
          "Access to trusted hospitals and surgeons for a wide range of surgical procedures.",
      },
    ],
  },
  process: {
    label: "Process",
    title: "Patient Coordination Process",
    subtitle: "We have all your needs covered from planning through recovery.",
    steps: [
      {
        number: "01",
        title: "Pre Travel Consultation",
        description:
          "A medical coordinator reviews your case and discusses treatment options, timelines, and cost expectations.",
      },
      {
        number: "02",
        title: "Dedicated Case Manager",
        description:
          "You receive a personal point of contact to manage paperwork, scheduling, travel plans, and updates.",
      },
      {
        number: "03",
        title: "Hospital and Treatment Arrangement",
        description:
          "We book appointments with top doctors based on your preferences and medical requirements.",
      },
      {
        number: "04",
        title: "Travel and Stay",
        description:
          "We support visa assistance, flights, airport pickup, accommodations, and family stay planning.",
      },
      {
        number: "05",
        title: "During Treatment",
        description:
          "Your case manager and interpreters stay available, coordinate additional needs, and keep family informed.",
      },
      {
        number: "06",
        title: "Post-Care Support",
        description:
          "Follow-up coordination continues after treatment so recovery, teleconsultations, and medication planning stay on track.",
      },
    ],
  },
  contact: {
    label: "Contact",
    title: "Book a Free Pre-Arrival Consultation",
    intro:
      "Share your basic treatment requirement and our coordination team will be ready to assist.",
    form: {
      nameLabel: "Your Name",
      emailLabel: "Your Email Address",
      phoneLabel: "Your Phone Number with country code",
      treatmentLabel: "Treatment Details",
      namePlaceholder: "Enter your full name",
      emailPlaceholder: "name@example.com",
      phonePlaceholder: "+971 50 123 4567",
      treatmentPlaceholder:
        "Share the treatment required, symptoms, diagnosis, or preferred hospital.",
      submitLabel: "Send RFQ",
      submittingLabel: "Sending Request...",
      helper:
        "Your request will be delivered directly to our care coordination inbox.",
      validation:
        "Please fill in your name, email address, phone number, and treatment requirement.",
      success:
        "Your RFQ has been sent successfully. Our care team will contact you soon.",
      failure:
        "We could not send your request right now. Please try again in a moment.",
    },
    detailsTitle: "What happens next",
    details: [
      "Your RFQ is prepared for our business email inbox.",
      "A coordinator can review your request and guide you on the next steps.",
      "You can include symptoms, diagnosis, or preferred treatment in the message body.",
    ],
  },
  footer: {
    licensing:
      "Medical decisions and treatment remain under the authority of licensed hospitals and treating physicians.",
    rights: "MedAssistly. All rights reserved.",
  },
};

const arabicDictionary: Dictionary = {
  meta: {
    title: "MedAssistly | رعاية طبية بكل سهولة",
    description:
      "تساعد MedAssistly المرضى الدوليين على تنسيق العلاج والسفر ودعم التعافي في الهند بكل وضوح واهتمام.",
  },
  site: {
    name: "MedAssistly",
    tagline: "تنسيق رحلتك العلاجية بوضوح واهتمام ودعم موثوق.",
    badge: "مساعدة المرضى الدوليين",
  },
  nav: [
    { href: "#home", label: "الرئيسية" },
    { href: "#about", label: "من نحن" },
    { href: "#services", label: "الخدمات" },
    { href: "#process", label: "آلية العمل" },
    { href: "#contact", label: "تواصل معنا" },
  ],
  home: {
    title: "رعاية طبية بكل سهولة",
    subtitle:
      "شريكك الموثوق للحصول على علاج طبي عالمي المستوى في الهند. نحن نتولى كافة تفاصيل رحلتك العلاجية، من الاستشارة وحتى التعافي.",
    primaryCta: "استكشف الخدمات",
    secondaryCta: "اطلب استشارة",
    highlights: [
      {
        title: "تنسيق منظم",
        description:
          "نرتب كل خطوة من الاستشارة حتى المتابعة بعد العلاج بما يضمن راحة المريض ووضوح الرحلة العلاجية.",
      },
      {
        title: "شبكة مستشفيات موثوقة",
        description:
          "نتعاون مع مستشفيات معتمدة وأطباء ذوي خبرة في مختلف أنحاء الهند.",
      },
      {
        title: "دعم متعدد اللغات",
        description:
          "نوفر إرشادًا واضحًا للمريض وعائلته لتقليل الالتباس والضغط خلال الرحلة العلاجية.",
      },
    ],
  },
  about: {
    label: "من نحن",
    title: "عن MedAssistly",
    paragraphs: [
      "MedAssistly هي شركة تنسيق طبي متخصصة، تأسست بهدف تبسيط السفر العلاجي إلى الهند. نحن ندعم المرضى الدوليين من خلال عملية تنسيق منظمة وشفافة وأخلاقية، بحيث تكون كل خطوة واضحة ومُدارة بعناية.",
      "نتعاون مع شبكة واسعة من المستشفيات المعتمدة والكوادر الطبية المتمرسة في جميع أنحاء الهند. ويتولى فريقنا شخصيًا تنسيق الاستشارات الطبية، وترتيبات المستشفى، ودعم السفر، ومتابعة ما بعد العلاج، لضمان شعور المرضى وعائلاتهم بالدعم طوال الرحلة العلاجية.",
      "نبسّط لك رحلة السفر العلاجي لتتمكن من التركيز على ما هو أهم: صحتك.",
    ],
    supportTitle: "لمن نقدم الدعم",
    supportItems: [
      {
        title: "الأفراد المسافرون بمفردهم",
        description:
          "السياح العلاجيون لأول مرة ممن يحتاجون إلى دعم كامل طوال الرحلة.",
      },
      {
        title: "العائلات المرافقة للمرضى",
        description:
          "الأحباء المرافقون للمرضى والذين يحتاجون إلى إقامة ورعاية منسقة.",
      },
      {
        title: "المرضى الذين يتحملون التكاليف بأنفسهم",
        description:
          "من لا يملكون تغطية تأمينية ويبحثون عن علاج عالي الجودة بتكلفة مناسبة في الخارج.",
      },
    ],
    reasonsTitle: "لماذا تختار MedAssistly",
    reasons: [
      {
        title: "رعاية متكاملة ومنظمة من البداية حتى النهاية",
        description:
          "نتبع عملية تنسيق مجرّبة تمنح المرضى شعورًا بالدعم والوضوح والاطمئنان في كل مرحلة.",
      },
      {
        title: "كوادر طبية ذات خبرة",
        description:
          "نتعاون حصريًا مع نخبة من الأخصائيين ذوي الخبرة الطويلة.",
      },
      {
        title: "الشفافية والثقة",
        description:
          "نلتزم بالشفافية الكاملة في كل توصية نقدمها، مع تفاصيل دقيقة عن مرافق المستشفيات واعتمادات الأطباء وتكاليف واضحة.",
      },
      {
        title: "رعاية صحية هندية بمكانة عالمية",
        description:
          "تحظى الهند باعتراف دولي بوصفها وجهة للرعاية الصحية عالية الجودة والإنسانية، مع بنية تحتية طبية متطورة.",
      },
      {
        title: "رعاية متميزة بأسعار في المتناول",
        description:
          "نُتيح لك الوصول إلى علاج من الدرجة الأولى، مع الاستفادة من المزايا السعرية التي توفرها الهند دون التضحية بالجودة.",
      },
    ],
  },
  services: {
    label: "الخدمات",
    title: "خدماتنا الشاملة",
    intro:
      "ننسّق الجوانب الطبية والسفر والتعافي حتى يتمكن المرضى من التركيز على العلاج بثقة وراحة.",
    careTitle: "خدمات تنسيق الرعاية",
    careItems: [
      {
        title: "استشارة طبية قبل السفر",
        description:
          "نقوم بمراجعة تاريخك الطبي وتقاريرك الصحية، ثم نخطط بالتعاون مع أطبائنا الشركاء مسار العلاج الأمثل لك.",
      },
      {
        title: "مساعدة في تأشيرة العلاج الطبي وترتيبات السفر",
        description:
          "نرشدك خلال إجراءات التأشيرة والموافقات الحكومية، ونسهّل لك حجز تذاكر الطيران.",
      },
      {
        title: "اختيار المستشفى والطبيب المناسب",
        description:
          "نوصي بأفضل الأخصائيين والمستشفيات العالمية التي تتناسب مع احتياجاتك. وجميع المستشفيات الشريكة لنا معتمدة دوليًا.",
      },
      {
        title: "تقدير التكلفة وتسعير شفاف",
        description:
          "ستتلقى تفصيلًا واضحًا لجميع التكاليف المتوقعة، مع التزام كامل بالشفافية ودون أي رسوم خفية.",
      },
      {
        title: "السكن والمواصلات المحلية",
        description:
          "نحجز لك الفنادق أو الشقق الفندقية، بما في ذلك خيارات إقامة مناسبة للعائلة، وننظم وسائل النقل اليومية من وإلى المستشفى.",
      },
      {
        title: "خدمات الترجمة الفورية والتحريرية",
        description:
          "نوفر لك منسقين ومترجمين فوريين متعددي اللغات، من بينهم متحدثون بالعربية والروسية، لمرافقتك أثناء الاستشارات الطبية.",
      },
      {
        title: "التنسيق داخل المستشفى وتقديم التحديثات",
        description:
          "يتولى مدير حالة مخصص متابعة علاجك، وجدولة الفحوصات الطبية، وإبلاغك أنت وعائلتك في الخارج بالتحديثات الطبية اليومية.",
      },
      {
        title: "متابعة ما بعد العلاج",
        description:
          "بعد عودتك إلى الوطن، نواصل دعم مسيرة تعافيك من خلال تنسيق الاستشارات عن بُعد والعلاج الطبيعي وتوصيل الأدوية ومتابعة حالتك عند الحاجة.",
      },
      {
        title: "تحويل العملات وخدمات الاتصال",
        description:
          "ولراحتك التامة، نساعدك في تحويل العملات وتوفير شريحة اتصال محلية لضمان سهولة التواصل طوال فترة إقامتك.",
      },
    ],
    treatmentsTitle: "العلاجات الطبية التي ننسقها",
    treatments: [
      {
        title: "زراعة الكبد",
        description:
          "نقدم الدعم للمرضى في تنسيق إجراءات زراعة الكبد من خلال مراكز زراعة متخصصة وذات خبرة، بدءًا من التقييم المبدئي وصولًا إلى متابعة ما بعد العلاج.",
      },
      {
        title: "زراعة الكلى",
        description:
          "تنسيق شامل للرعاية المقدمة لزراعة الكلى، ويشمل ذلك اختيار المستشفى المناسب، والمواءمة مع الطبيب الأمثل، والتخطيط لمرحلة التعافي.",
      },
      {
        title: "زراعة نخاع العظم",
        description:
          "ندعم المرضى الباحثين عن علاج زراعة نخاع العظم من خلال التنسيق مع مستشفيات متخصصة وفرق أمراض الدم.",
      },
      {
        title: "أمراض القلب",
        description:
          "تنسيق الرعاية القلبية المتقدمة، بما يشمل التشخيص، والإجراءات التداخلية، ومسارات جراحة القلب.",
      },
      {
        title: "الأورام (علاج السرطان)",
        description:
          "نساعد المرضى في الوصول إلى خيارات علاج الأورام، بما في ذلك العلاج الكيميائي والعلاج الإشعاعي وجراحات الأورام.",
      },
      {
        title: "جراحة العظام",
        description:
          "دعم لتنسيق علاجات العظام مثل استبدال المفاصل، وإجراءات العمود الفقري، ورعاية الجهاز العضلي الهيكلي.",
      },
      {
        title: "طب النساء",
        description:
          "تنسيق خدمات صحة المرأة، بما في ذلك جراحات أمراض النساء والرعاية المتخصصة.",
      },
      {
        title: "طب الأسنان المتقدم",
        description:
          "ننسق علاجات أسنان عالية الجودة في الهند، بما في ذلك التجميلية والترميمية والجراحية، وفق معايير تنافسية دوليًا.",
      },
      {
        title: "الجراحة العامة",
        description:
          "نساعد المرضى الذين يحتاجون إلى إجراءات جراحية عامة من خلال تنسيق الرعاية مع مستشفيات وجراحين موثوقين.",
      },
    ],
  },
  process: {
    label: "آلية العمل",
    title: "عملية تنسيق رحلة المريض",
    subtitle: "نوفر لك كل ما تحتاجه من التخطيط وحتى التعافي.",
    steps: [
      {
        number: "01",
        title: "استشارة ما قبل السفر",
        description:
          "يراجع منسق طبي حالتك ويناقش معك خيارات العلاج والتكاليف المتوقعة والجدول الزمني المناسب.",
      },
      {
        number: "02",
        title: "مدير حالة مخصص",
        description:
          "نخصص لك مدير حالة يكون نقطة اتصالك الأساسية، ويتولى متابعة الأوراق والمواعيد وخطط السفر والتحديثات.",
      },
      {
        number: "03",
        title: "ترتيب المستشفى والعلاج",
        description:
          "استنادًا إلى تفضيلاتك واحتياجاتك الطبية، نحجز مواعيدك مع أفضل الأطباء وننسق ترتيبات العلاج المناسبة.",
      },
      {
        number: "04",
        title: "السفر والإقامة",
        description:
          "نساعد في إجراءات التأشيرة، وحجز الرحلات، وترتيب الاستقبال من المطار والإقامة، مع إمكانية تنظيم إقامة العائلة بالقرب منك.",
      },
      {
        number: "05",
        title: "أثناء العلاج",
        description:
          "يبقى مدير حالتك والمترجمون إلى جانبك على مدار الساعة، وينسقون أي فحوصات أو استشارات إضافية، ويطلعون عائلتك في الخارج على المستجدات يوميًا.",
      },
      {
        number: "06",
        title: "دعم ما بعد العلاج",
        description:
          "نواصل تنسيق المتابعة بعد العلاج لضمان استمرار التعافي، والاستشارات عن بُعد، وخطة الأدوية بالشكل المناسب.",
      },
    ],
  },
  contact: {
    label: "التواصل",
    title: "احجز استشارة مجانية قبل الوصول",
    intro:
      "شاركنا متطلباتك العلاجية الأساسية وسيكون فريق التنسيق لدينا جاهزًا لمساعدتك.",
    form: {
      nameLabel: "الاسم",
      emailLabel: "البريد الإلكتروني",
      phoneLabel: "رقم الهاتف مع رمز الدولة",
      treatmentLabel: "يرجى ذكر العلاج المطلوب",
      namePlaceholder: "أدخل اسمك الكامل",
      emailPlaceholder: "name@example.com",
      phonePlaceholder: "+971 50 123 4567",
      treatmentPlaceholder:
        "اذكر العلاج المطلوب أو الأعراض أو التشخيص أو المستشفى المفضل.",
      submitLabel: "إرسال الطلب",
      submittingLabel: "جارٍ إرسال الطلب...",
      helper:
        "سيتم إرسال طلبك مباشرة إلى صندوق بريد فريق تنسيق الرعاية لدينا.",
      validation:
        "يرجى إدخال الاسم والبريد الإلكتروني ورقم الهاتف والعلاج المطلوب.",
      success: "تم إرسال طلبك بنجاح. سيتواصل معك فريقنا قريبًا.",
      failure: "تعذر إرسال طلبك حاليًا. يرجى المحاولة مرة أخرى بعد قليل.",
    },
    detailsTitle: "ماذا يحدث بعد ذلك",
    details: [
      "سيتم إعداد طلبك لإرساله إلى البريد الإلكتروني الخاص بفريق الأعمال لدينا.",
      "سيقوم أحد المنسقين بمراجعة طلبك وإرشادك إلى الخطوات التالية.",
      "يمكنك تضمين الأعراض أو التشخيص أو العلاج المفضل داخل نص الرسالة.",
    ],
  },
  footer: {
    licensing:
      "تظل القرارات الطبية والعلاجية ضمن صلاحيات المستشفيات المرخصة والأطباء المعالجين.",
    rights: "MedAssistly. جميع الحقوق محفوظة.",
  },
};

const dictionaries: Record<Locale, Dictionary> = {
  en: englishDictionary,
  ar: arabicDictionary,
};

export function isValidLocale(locale: string): locale is Locale {
  return locales.includes(locale as Locale);
}

export function getDictionary(locale: Locale) {
  return dictionaries[locale];
}
