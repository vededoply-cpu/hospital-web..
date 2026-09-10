export const SERVICES = [
  {
    id: "home-care",
    title: "Home Care at Home",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`,
    badge: "Most Requested",
    tagline: "Attendants & caregivers for daily patient support and personal care.",
    description: "Our trained home care attendants assist patients with daily living activities, hygiene, bathing, mobility, feeding, medication reminders, and bedside assistance.",
    features: [
      "12-Hour Day / Night & 24-Hour Resident Attendants",
      "Personal Hygiene, Bathing & Grooming Assistance",
      "Mobility Support, Wheelchair Assistance & Position Change",
      "Timely Feeding & Medication Management"
    ],
    shiftOptions: ["12 Hours Day", "12 Hours Night", "24 Hours Live-in"],
    href: "home-care.html"
  },
  {
    id: "elderly-care",
    title: "Elderly Care at Home",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>`,
    badge: "Senior Special",
    tagline: "Compassionate senior care, companionship and daily assistance.",
    description: "Dedicated care for senior citizens needing assistance with daily chores, companion care, mobility support, doctor visit assistance, and cognitive engagement.",
    features: [
      "Compassionate Companion & Emotional Support",
      "Fall Prevention & Assisted Walking",
      "Vital Monitoring & Routine Health Check-ups",
      "Dementia, Alzheimer's & Parkinson's Care"
    ],
    shiftOptions: ["12 Hours Shift", "24 Hours Full-Time"],
    href: "elderly-care.html"
  },
  {
    id: "nursing-care",
    title: "Nursing Care at Home",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M12 8v8M8 12h8"/></svg>`,
    badge: "Medical Grade",
    tagline: "GNM, ANM and B.Sc nursing support according to care requirements.",
    description: "Certified and experienced nurses for post-surgical recovery, ICU care at home, catheterization, tracheostomy, wound dressing, IV injections, and vital monitoring.",
    features: [
      "Certified GNM, ANM & B.Sc Registered Nurses",
      "ICU Setup Care & Ventilator Support at Home",
      "Surgical Dressing, Injections & IV Drips",
      "Ryle's Tube Feeding & Catheter Care"
    ],
    shiftOptions: ["12 Hours Shift", "24 Hours ICU Care", "Short Visit"],
    href: "nursing-care.html"
  },
  {
    id: "medical-equipment",
    title: "Medical Equipment on Rent",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 4v16M22 4v16M2 12h20M6 12v-4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v4"/></svg>`,
    badge: "Fast Delivery",
    tagline: "Home-use medical equipment with convenient rental support.",
    description: "High-quality medical equipment delivered and setup right at your doorstep across Delhi NCR, Gurugram, and Noida with 24/7 technical support.",
    features: [
      "Oxygen Concentrators & Cylinders",
      "Manual & Automatic Electric ICU Beds",
      "BiPAP, CPAP & Ventilator Machines",
      "Suction Machines, Syringe Pumps & Wheelchairs"
    ],
    shiftOptions: ["Monthly Rental", "Weekly Rental", "Purchase"],
    href: "medical-equipment.html"
  },
  {
    id: "emergency-care",
    title: "Emergency Home Care",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="1" y="6" width="15" height="12" rx="2"/><polygon points="16 8 22 10 22 18 16 18"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="15.5" cy="18.5" r="2.5"/></svg>`,
    badge: "24/7 Rapid Response",
    tagline: "Quick coordination for urgent home-care requirements.",
    description: "Immediate emergency staffing and urgent care assistance available round-the-clock for critical situations, sudden discharges, or unexpected caregiver absences.",
    features: [
      "Immediate Staff Dispatch within 30-60 Minutes",
      "24/7 Helpline Support: 9599747919",
      "Post-Hospital Discharge Assistance",
      "Emergency Oxygen & ICU Equipment Support"
    ],
    shiftOptions: ["Immediate Shift", "24/7 Helpline"],
    href: "emergency-care.html"
  },
  {
    id: "physiotherapy",
    title: "Physiotherapy at Home",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><line x1="19" y1="8" x2="19" y2="14"/><line x1="22" y1="11" x2="16" y2="11"/></svg>`,
    badge: "Expert Doctors",
    tagline: "Physiotherapist visits at home for convenient rehabilitation support.",
    description: "Qualified physiotherapists conduct home sessions for stroke recovery, joint replacement rehab, back/neck pain management, paralysis, and post-fracture care.",
    features: [
      "Licensed & Experienced Physiotherapists",
      "Stroke & Paralysis Rehabilitation",
      "Orthopedic & Joint Replacement Recovery",
      "Personalized Exercise & Pain Management Plan"
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
