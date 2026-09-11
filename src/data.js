export const SERVICES = [
  {
    id: "home-care",
    title: "Home Care Services at Home",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`,
    badge: "Most Requested",
    tagline: "Trusted, compassionate care at your doorstep.",
    description: "Anmol Care provides trained and reliable caregivers, attendants and nursing support to help your loved ones stay safe, comfortable and cared for at home.",
    features: [
      "Trusted, compassionate care at your doorstep",
      "Trained and reliable caregivers",
      "Attendants and nursing support",
      "Help your loved ones stay safe, comfortable and cared for at home"
    ],
    shiftOptions: ["12 Hours Day", "12 Hours Night", "24 Hours Live-in"],
    href: "home-care.html"
  },
  {
    id: "elderly-care",
    title: "Elderly Care Services at Home",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>`,
    badge: "Senior Special",
    tagline: "Trusted, compassionate and professional care for seniors—right at home.",
    description: "Our trained caregivers provide personal care, daily assistance, companionship and nursing support with safety, dignity and comfort. Contact Anmol Care today.",
    features: [
      "Trusted, compassionate and professional care for seniors—right at home.",
      "Our trained caregivers provide personal care, daily assistance,",
      "companionship and nursing support with safety, dignity and comfort.",
      "Contact Anmol Care today."
    ],
    shiftOptions: ["12 Hours Shift", "24 Hours Full-Time"],
    href: "elderly-care.html"
  },
  {
    id: "nursing-care",
    title: "Nursing Care Services at Home",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M12 8v8M8 12h8"/></svg>`,
    badge: "Medical Grade",
    tagline: "Professional and trusted nursing care at home by trained nursing staff,",
    description: "with safe, compassionate and personalized support for your loved ones. For reliable nursing care at home, contact Anmol Care today.",
    features: [
      "Professional and trusted nursing care at home by trained nursing staff,",
      "with safe, compassionate and personalized support for your loved ones.",
      "For reliable nursing care at home,",
      "contact Anmol Care today."
    ],
    shiftOptions: ["12 Hours Shift", "24 Hours ICU Care", "Short Visit"],
    href: "nursing-care.html"
  },
  {
    id: "medical-equipment",
    title: "Medical Equipment Services on Rent",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 4v16M22 4v16M2 12h20M6 12v-4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v4"/></svg>`,
    badge: "Fast Delivery",
    tagline: "Quality medical equipment delivered to your doorstep for safe and comfortable home care.",
    description: "Easy rental, reliable support and convenient service from Anmol Care. Need medical equipment at home? Contact us today.",
    features: [
      "Quality medical equipment delivered to your doorstep",
      "for safe and comfortable home care.",
      "Easy rental, reliable support and convenient service from Anmol Care.",
      "Need medical equipment at home? Contact us today."
    ],
    shiftOptions: ["Monthly Rental", "Weekly Rental", "Purchase"],
    href: "medical-equipment.html"
  },
  {
    id: "emergency-care",
    title: "Emergency Care Services at Home",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="1" y="6" width="15" height="12" rx="2"/><polygon points="16 8 22 10 22 18 16 18"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="15.5" cy="18.5" r="2.5"/></svg>`,
    badge: "24/7 Rapid Response",
    tagline: "Quick and reliable home support for urgent care needs,",
    description: "including first aid, vital monitoring, wound care, medication support and nursing assistance by trained professionals.",
    features: [
      "Quick and reliable home support for urgent care needs,",
      "including first aid, vital monitoring, wound care,",
      "medication support and nursing assistance",
      "by trained professionals."
    ],
    shiftOptions: ["Immediate Shift", "24/7 Helpline"],
    href: "emergency-care.html"
  },
  {
    id: "physiotherapy",
    title: "Physiotherapy Services at Home",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><line x1="19" y1="8" x2="19" y2="14"/><line x1="22" y1="11" x2="16" y2="11"/></svg>`,
    badge: "Expert Doctors",
    tagline: "Professional physiotherapy at your doorstep for pain relief, mobility,",
    description: "strength and recovery—with personalized care by qualified physiotherapy professionals.",
    features: [
      "Professional physiotherapy at your doorstep",
      "for pain relief, mobility, strength and recovery—",
      "with personalized care",
      "by qualified physiotherapy professionals."
    ],
    shiftOptions: ["Per Session Visit", "10-Session Package"],
    href: "physiotherapy.html"
  }
];

export const EQUIPMENT_LIST = [
  {
    name: "Oxygen Concentrator (5L / 10L)",
    category: "Respiratory",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2"/></svg>`,
    desc: "Medical-grade continuous oxygen flow with humidification bottle.",
    tag: "Available on Rent"
  },
  {
    name: "Hospital ICU Bed (5 Function / 3 Function)",
    category: "Patient Bed",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 4v16M22 4v16M2 12h20M6 12v-4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v4"/></svg>`,
    desc: "Motorized electric bed with side rails, backrest, and knee elevation.",
    tag: "Free Delivery & Setup"
  },
  {
    name: "BiPAP / CPAP Machine",
    category: "Respiratory",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M8 12c.5 2.5 2 4 4 4s3.5-1.5 4-4"/></svg>`,
    desc: "Advanced sleep & breathing therapy device with mask fittings.",
    tag: "Sanitized & Calibrated"
  },
  {
    name: "Wheelchairs & Air Mattresses",
    category: "Mobility",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="9" cy="4" r="2"/><path d="M10 8h3l2 5h-4l-1.5 5M6 15a5 5 0 1 0 10 0"/></svg>`,
    desc: "Anti-bed sore bubble mattresses and heavy-duty foldable wheelchairs.",
    tag: "Same-Day Delivery"
  },
  {
    name: "Suction Machine & Syringe Pump",
    category: "ICU Support",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m18 2 4 4M17 7l3-3M19 9 8.7 19.3c-1 1-2.5 1-3.4 0l-1.6-1.6c-1-1-1-2.5 0-3.4L14 4M9 11l4 4M5 19l-3 3"/></svg>`,
    desc: "Portable high-vacuum suction machine and precision infusion pumps.",
    tag: "Medical Standard"
  },
  {
    name: "Patient Cardiac Monitor",
    category: "Vital Monitoring",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>`,
    desc: "Multi-para monitor tracking ECG, SpO2, NIBP, pulse, and respiration rate.",
    tag: "24/7 Support"
  }
];

export const WHY_US = [
  {
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
    title: "Qualified & Background Checked Staff",
    description: "Every caregiver, nurse, and attendant undergoes strict police verification, background reference checks, and practical healthcare training."
  },
  {
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`,
    title: "Convenient Home Visits",
    description: "Avoid hospital stress and long queues. Get professional nursing, attendant care, and physiotherapy right in the safety and comfort of home."
  },
  {
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`,
    title: "Fast & 24/7 Contact Response",
    description: "Call or WhatsApp our response team anytime. We arrange qualified care staff and equipment within 1-2 hours across Delhi NCR."
  },
  {
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>`,
    title: "Personalized Care & Flexibility",
    description: "Whether you need a 12-hour day shift, 12-hour night shift, or 24-hour full-time resident attendant, we customize plans to your needs."
  }
];

export const TESTIMONIALS = [
  {
    name: "Rajesh Malhotra",
    location: "DLF Phase 5, Gurugram",
    service: "Elderly & Attendants",
    rating: 5,
    text: "Anmol Care provided an outstanding attendant for my 82-year-old father after his hip surgery. The caregiver was extremely polite, attentive, and punctual. Highly recommended!"
  },
  {
    name: "Priya Sharma",
    location: "Sector 62, Noida",
    service: "Nursing Care at Home",
    rating: 5,
    text: "We needed a GNM nurse for post-stroke tracheostomy care. The nurse sent by Anmol Care was super experienced and handled everything with great skill. Relief for our family!"
  },
  {
    name: "Amit Varma",
    location: "Vasant Kunj, Delhi",
    service: "Oxygen Equipment & Physio",
    rating: 5,
    text: "Rented an oxygen concentrator and booked home physiotherapy. Same day delivery and therapist arrived on time. Very professional helpline support at 9599747919."
  }
];

export const FAQS = [
  {
    question: "What types of home care staff do you provide?",
    answer: "We provide Patient Attendants (GDAs), Elderly Caregivers, Certified GNM/ANM & B.Sc Registered Nurses, Home Physiotherapists, and ICU Care Technicians."
  },
  {
    question: "How quickly can a caregiver or nurse reach my home?",
    answer: "For emergency requests across Delhi NCR, Gurugram, and Noida, we can dispatch staff within 1 to 2 hours of booking confirmation."
  },
  {
    question: "Are your caregivers and nurses background verified?",
    answer: "Yes, 100% of our care staff undergo police verification, identity validation, document verification, and prior experience reference checks."
  },
  {
    question: "Can I choose between 12-hour and 24-hour shifts?",
    answer: "Yes! We offer flexible shift options including 12-Hour Day Shift, 12-Hour Night Shift, and 24-Hour Resident (Live-in) care support."
  },
  {
    question: "What medical equipment can I rent from Anmol Care?",
    answer: "We rent Oxygen Concentrators (5L & 10L), Motorized ICU Hospital Beds, BiPAP/CPAP Machines, Suction Units, Cardiac Monitors, Wheelchairs, and Anti-Bedsore Air Mattresses."
  },
  {
    question: "Which areas do you serve?",
    answer: "We cover all major locations across Delhi NCR, including South/West/North/East Delhi, Gurugram, Noida, Greater Noida, Ghaziabad, and Faridabad."
  }
];

export const SERVICE_AREAS = [
  "Delhi NCR",
  "Gurugram",
  "Noida",
  "Greater Noida",
  "Ghaziabad",
  "Faridabad",
  "Dwarka",
  "Vasant Kunj",
  "South Extension",
  "DLF Cyber City",
  "Golf Course Road",
  "Noida Sector 18/62"
];

export const CITY_LOCATIONS = [
  {
    id: "noida",
    name: "Noida & Greater Noida",
    dispatchTime: "30–60 Min Fast Dispatch",
    icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>`,
    areas: ["Sector 18", "Sector 62", "Sector 137", "Noida Extension", "Jaypee Wish Town", "Gr. Noida West"],
    phone: "9599747919"
  },
  {
    id: "delhi",
    name: "Delhi NCR",
    dispatchTime: "30–60 Min Fast Dispatch",
    icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>`,
    areas: ["South Delhi", "West Delhi", "North Delhi", "East Delhi", "Dwarka", "Vasant Kunj", "Saket"],
    phone: "9599747919"
  },
  {
    id: "gurugram",
    name: "Gurugram (Gurgaon)",
    dispatchTime: "30–60 Min Fast Dispatch",
    icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>`,
    areas: ["DLF Phase 1-5", "Golf Course Road", "Cyber City", "Sohna Road", "MG Road", "Sector 56"],
    phone: "9599747919"
  },
  {
    id: "faridabad",
    name: "Faridabad",
    dispatchTime: "45–60 Min Fast Dispatch",
    icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>`,
    areas: ["Sector 15", "Sector 16", "NIT Faridabad", "Greater Faridabad", "Surajkund", "Sector 21"],
    phone: "9599747919"
  },
  {
    id: "ghaziabad",
    name: "Ghaziabad",
    dispatchTime: "45–60 Min Fast Dispatch",
    icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>`,
    areas: ["Indirapuram", "Vaishali", "Vasundhara", "Raj Nagar Extension", "Crossings Republik", "Kaushambi"],
    phone: "9599747919"
  }
];
