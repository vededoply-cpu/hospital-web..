import { SERVICES, EQUIPMENT_LIST, WHY_US, TESTIMONIALS, FAQS, CITY_LOCATIONS } from './data.js';

document.addEventListener('DOMContentLoaded', () => {
  renderServices();
  renderEquipment();
  renderCities();
  renderWhyUs();
  renderTestimonials();
  renderFAQs();
  setupMobileMenu();
  setupForms();
  setupModalEvents();
  setupHeroSlider();
});

/* Render City Locations Grid */
function renderCities() {
  const container = document.getElementById('cityCardsGrid');
  if (!container) return;

  container.innerHTML = CITY_LOCATIONS.map(city => `
    <div class="city-card">
      <div class="city-card-header">
        <div class="city-icon">${city.icon}</div>
        <div>
          <h4>${city.name}</h4>
          <span class="city-speed-badge">${city.dispatchTime}</span>
        </div>
      </div>

      <div class="city-areas-box">
        <strong>Key Coverage Zones:</strong>
        <div class="city-tags">
          ${city.areas.map(a => `<span class="city-tag">${a}</span>`).join('')}
        </div>
      </div>

      <div class="city-card-actions">
        <a class="btn primary full btn-sm" href="tel:${city.phone}">Call Helpline (${city.phone})</a>
        <a class="btn whatsapp full btn-sm" href="https://wa.me/91${city.phone}?text=${encodeURIComponent('Hello Anmol Care, I require home care service in ' + city.name)}" target="_blank">Book in ${city.name}</a>
      </div>
    </div>
  `).join('');
}

/* Render Services Cards */
function renderServices() {
  const container = document.getElementById('servicesGrid');
  if (!container) return;

  container.innerHTML = SERVICES.map(service => `
    <a class="card" href="${service.href}" title="View ${service.title} Details & Book">
      <div class="card-top-row">
        <i>${service.icon}</i>
        <span class="card-badge">${service.badge}</span>
      </div>
      <h3>${service.title}</h3>
      <p>${service.tagline}</p>
      
      <ul class="service-features-list">
        ${service.features.map(f => `<li>${f}</li>`).join('')}
      </ul>

      <b>
        <span>Get Service & Details</span>
        <span class="arrow">→</span>
      </b>
    </a>
  `).join('');
}

/* Render Medical Equipment Grid */
function renderEquipment() {
  const container = document.getElementById('equipmentGrid');
  if (!container) return;

  container.innerHTML = EQUIPMENT_LIST.map(eq => `
    <div class="equipment-card">
      <div class="eq-icon">${eq.icon}</div>
      <div class="eq-info">
        <h4>${eq.name}</h4>
        <p>${eq.desc}</p>
        <span class="eq-tag">✓ ${eq.tag}</span>
      </div>
    </div>
  `).join('');
}

/* Render Why Us Grid */
function renderWhyUs() {
  const container = document.getElementById('whyGrid');
  if (!container) return;

  container.innerHTML = WHY_US.map(item => `
    <div class="feature-box">
      <span class="f-icon">${item.icon}</span>
      <b>${item.title}</b>
      <p>${item.description}</p>
    </div>
  `).join('');
}

/* Render Testimonials Grid */
function renderTestimonials() {
  const container = document.getElementById('testimonialsGrid');
  if (!container) return;

  container.innerHTML = TESTIMONIALS.map(test => `
    <div class="testimonial-card">
      <div class="test-stars">★★★★★</div>
      <p>"${test.text}"</p>
      <div class="test-author">
        <div class="author-avatar">${test.name.charAt(0)}</div>
        <div class="author-info">
          <h5>${test.name}</h5>
          <span>${test.location} • ${test.service}</span>
        </div>
      </div>
    </div>
  `).join('');
}

/* Render Accordion FAQs */
function renderFAQs() {
  const container = document.getElementById('faqAccordion');
  if (!container) return;

  container.innerHTML = FAQS.map((faq, idx) => `
    <div class="faq-item ${idx === 0 ? 'active' : ''}">
      <button class="faq-question" type="button">
        <span>${faq.question}</span>
        <span class="faq-icon">▼</span>
      </button>
      <div class="faq-answer">
        <p>${faq.answer}</p>
      </div>
    </div>
  `).join('');

  document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
      const item = button.parentElement;
      const isActive = item.classList.contains('active');
      
      // Close all other accordion items
      document.querySelectorAll('.faq-item').forEach(el => el.classList.remove('active'));

      if (!isActive) {
        item.classList.add('active');
      }
    });
  });
}

/* Mobile Menu Navigation Toggle */
function setupMobileMenu() {
  const toggleBtn = document.getElementById('menuToggle');
  const navMenu = document.getElementById('navMenu');

  if (toggleBtn && navMenu) {
    toggleBtn.addEventListener('click', () => {
      navMenu.classList.toggle('open');
    });

    // Close mobile nav when clicking a link
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
      });
    });
  }
}

/* Interactive Form Submissions & WhatsApp Pre-fill */
function setupForms() {
  // Hero Quick Form
  const quickForm = document.getElementById('quickInquiryForm');
  if (quickForm) {
    quickForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('quickName').value.trim();
      const phone = document.getElementById('quickPhone').value.trim();
      const service = document.getElementById('quickService').value;
      const cityEl = document.getElementById('quickCity');
      const city = cityEl ? cityEl.value : 'Delhi NCR';

      const message = `Hello Anmol Care, my name is ${name} (${phone}) from ${city}. I require quick assistance for: ${service}. Please contact me immediately.`;
      const waUrl = `https://wa.me/919599747919?text=${encodeURIComponent(message)}`;

      window.open(waUrl, '_blank');
    });
  }

  // Full Booking Form
  const fullForm = document.getElementById('fullBookingForm');
  if (fullForm) {
    fullForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('bookName').value.trim();
      const phone = document.getElementById('bookPhone').value.trim();
      const service = document.getElementById('bookService').value;
      const shift = document.getElementById('bookShift').value;
      const cityEl = document.getElementById('bookCity');
      const city = cityEl ? cityEl.value : 'Delhi NCR';
      const location = document.getElementById('bookLocation').value.trim();
      const notes = document.getElementById('bookNotes').value.trim();

      let message = `Hello Anmol Care, I want to book a home care service:\n\nName: ${name}\nPhone: ${phone}\nCity: ${city}\nService: ${service}\nShift: ${shift}\nLocation: ${location}`;
      if (notes) {
        message += `\nDetails: ${notes}`;
      }

      const waUrl = `https://wa.me/919599747919?text=${encodeURIComponent(message)}`;
      window.open(waUrl, '_blank');
    });
  }
}

/* Modal logic for Service Detail & Quick Booking Popup */
function setupModalEvents() {
  const modal = document.getElementById('serviceModal');
  const closeBtn = document.getElementById('modalClose');

  if (closeBtn && modal) {
    closeBtn.addEventListener('click', () => {
      modal.classList.remove('active');
    });

    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('active');
      }
    });
  }

  // Quick Booking Form Modal logic
  const bookingModal = document.getElementById('bookingModal');
  const bookingCloseBtn = document.getElementById('bookingModalClose');
  const triggerBtns = document.querySelectorAll('#openBookingModal, .hero-trigger-card, .open-booking-modal');
  const heroBookBtns = document.querySelectorAll('.btn-hero-book');

  if (bookingModal) {
    if (bookingCloseBtn) {
      bookingCloseBtn.addEventListener('click', () => {
        bookingModal.classList.remove('active');
      });
    }

    bookingModal.addEventListener('click', (e) => {
      if (e.target === bookingModal) {
        bookingModal.classList.remove('active');
      }
    });

    triggerBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        bookingModal.classList.add('active');
      });
    });

    heroBookBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        const href = btn.getAttribute('href');
        if (!href || href === '#contact' || href === '#') {
          e.preventDefault();
          bookingModal.classList.add('active');
        }
      });
    });
  }
}

function openServiceModal(serviceId) {
  const service = SERVICES.find(s => s.id === serviceId);
  if (!service) return;

  const modal = document.getElementById('serviceModal');
  const modalBody = document.getElementById('modalBody');

  if (!modal || !modalBody) return;

  const waText = encodeURIComponent(`Hello Anmol Care, I want to inquire/book for ${service.title}.`);

  modalBody.innerHTML = `
    <div style="text-align:center; margin-bottom:20px;">
      <span style="font-size:44px; display:inline-block; margin-bottom:8px;">${service.icon}</span>
      <h3 style="font-size:26px; font-weight:800; color:var(--dark-navy);">${service.title}</h3>
      <p style="color:var(--teal-dark); font-weight:700; font-size:14px;">${service.badge}</p>
    </div>
    
    <p style="color:var(--text-muted); font-size:15px; margin-bottom:20px; text-align:center;">
      ${service.description}
    </p>

    <div style="background:var(--bg-alt); padding:20px; border-radius:14px; margin-bottom:24px;">
      <h4 style="font-size:15px; margin-bottom:10px; color:var(--dark-navy);">What's Included:</h4>
      <ul class="service-features-list">
        ${service.features.map(f => `<li>${f}</li>`).join('')}
      </ul>
    </div>

    <div style="margin-bottom:24px;">
      <h4 style="font-size:15px; margin-bottom:10px;">Available Shift Options:</h4>
      <div style="display:flex; flex-wrap:wrap; gap:8px;">
        ${service.shiftOptions.map(opt => `<span style="background:#E0F2FE; color:#0369A1; font-weight:700; font-size:12px; padding:6px 12px; border-radius:20px;">${opt}</span>`).join('')}
      </div>
    </div>

    <div style="display:flex; flex-direction:column; gap:12px;">
      <a class="btn primary full btn-lg" href="tel:9599747919">
        Call Now to Book: 9599747919
      </a>
      <a class="btn whatsapp full btn-lg" href="https://wa.me/919599747919?text=${waText}" target="_blank" rel="noopener">
        Book ${service.title} via WhatsApp
      </a>
    </div>
  `;

  modal.classList.add('active');
}

/* Background Image Slider Logic */
function setupHeroSlider() {
  const slides = document.querySelectorAll('.hero-slide');
  const dots = document.querySelectorAll('#heroSliderDots .dot');
  if (!slides || slides.length === 0) return;

  let currentSlide = 0;
  let slideInterval = null;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      if (i === index) {
        slide.classList.add('active');
      } else {
        slide.classList.remove('active');
      }
    });

    dots.forEach((dot, i) => {
      if (i === index) {
        dot.classList.add('active');
      } else {
        dot.classList.remove('active');
      }
    });

    currentSlide = index;
  }

  function nextSlide() {
    let next = (currentSlide + 1) % slides.length;
    showSlide(next);
  }

  function startTimer() {
    stopTimer();
    slideInterval = setInterval(nextSlide, 4200); // Cycle every 4.2 seconds
  }

  function stopTimer() {
    if (slideInterval) clearInterval(slideInterval);
  }

  dots.forEach((dot, idx) => {
    dot.addEventListener('click', () => {
      showSlide(idx);
      startTimer();
    });
  });

  startTimer();
}
