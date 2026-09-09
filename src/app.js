import { HOSPITALS, DOCTORS, DESTINATIONS, SPECIALITIES, VIDEO_STORIES, FAQS, RUA_PROMPTS } from './data.js';

// DOM Elements & State
let searchInput, searchDropdown;
let currentTab = 'All';
let selectedDoctor = null;
let selectedHospital = null;
let selectedVideo = null;

const STAR_SVG = `<svg width="13" height="13" viewBox="0 0 24 24" fill="#FACC15" style="display:inline-block; vertical-align:middle;"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>`;
const LOCATION_SVG = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="display:inline-block; vertical-align:middle;"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>`;
const HOSPITAL_SVG = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="display:inline-block; vertical-align:middle;"><path d="M3 21h18M5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16M9 9h6M9 13h6M9 17h6"/></svg>`;
const DOCTOR_SVG = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="display:inline-block; vertical-align:middle;"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>`;
const USER_SVG = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="display:inline-block; vertical-align:middle;"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`;

document.addEventListener('DOMContentLoaded', () => {
  initApp();
});

function initApp() {
  renderHospitals();
  renderDoctors();
  renderDestinations();
  renderSpecialities();
  renderVideoStories();
  renderFAQs();
  setupSearch();
  setupEventListeners();
  setupRuaAssistant();
}

/* Render Partner Hospitals Carousel */
function renderHospitals() {
  const container = document.getElementById('hospitals-slider');
  if (!container) return;

  container.innerHTML = HOSPITALS.map(hosp => `
    <div class="hospital-card" onclick="openHospitalModal('${hosp.id}')">
      <img src="${hosp.image}" alt="${hosp.name}" class="hospital-img" />
      <div class="hospital-overlay">
        <div class="hospital-badge-group">
          ${hosp.accreditations.map(acc => `<span class="badge-tag">${acc}</span>`).join('')}
          <span class="badge-tag" style="background:#FACC15; color:#000;">${STAR_SVG} ${hosp.rating}</span>
        </div>
        <div class="hospital-info-bottom">
          <h3 class="hospital-name">${hosp.name}</h3>
          <p class="hospital-loc">${LOCATION_SVG} ${hosp.city}, ${hosp.country}</p>
          <div class="hospital-meta-row">
            <span>${HOSPITAL_SVG} ${hosp.bedsCount} Beds</span>
            <span>${DOCTOR_SVG} ${hosp.doctorsCount} Doctors</span>
            <span>${hosp.specialitiesCount} Specs</span>
          </div>
        </div>
      </div>
    </div>
  `).join('');
}

/* Render Top Doctors Grid */
function renderDoctors(filterText = '') {
  const container = document.getElementById('doctors-grid');
  if (!container) return;

  let filtered = DOCTORS;
  if (filterText) {
    const query = filterText.toLowerCase();
    filtered = DOCTORS.filter(doc => 
      doc.name.toLowerCase().includes(query) ||
      doc.specialty.toLowerCase().includes(query) ||
      doc.hospital.toLowerCase().includes(query)
    );
  }

  if (filtered.length === 0) {
    container.innerHTML = `<div style="grid-column: 1/-1; text-align:center; padding:40px; color:#64748B;">No doctors matched your search criteria.</div>`;
    return;
  }

  container.innerHTML = filtered.map(doc => `
    <div class="doctor-card">
      <div class="doctor-avatar-box">
        <img src="${doc.image}" alt="${doc.name}" />
      </div>
      <div class="doctor-details">
        <div>
          <div style="display:flex; justify-content:space-between; align-items:flex-start;">
            <h3 class="doctor-name">
              ${doc.name} 
              ${doc.verified ? `<svg width="14" height="14" viewBox="0 0 24 24" fill="#17C3B2"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>` : ''}
            </h3>
            <span class="star-rating">${STAR_SVG} ${doc.rating}</span>
          </div>
          <p class="doctor-spec">${doc.specialty}</p>
          <p class="doctor-hosp">${HOSPITAL_SVG} ${doc.hospital}, ${doc.city}</p>
        </div>
        <div>
          <div class="doctor-meta-bar">
            <span>Exp: ${doc.experience}</span>
            <span>Fee: ${doc.fee}</span>
          </div>
          <button class="btn-teal" style="width:100%; justify-content:center; padding:9px 16px; font-size:0.85rem;" onclick="openDoctorModal('${doc.id}')">
            Book Appointment
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </button>
        </div>
      </div>
    </div>
  `).join('');
}

/* Render Explore Country Destinations */
function renderDestinations() {
  const container = document.getElementById('destinations-grid');
  if (!container) return;

  container.innerHTML = DESTINATIONS.map(dest => `
    <div class="destination-card">
      <div class="destination-img-box">
        <img src="${dest.image}" alt="${dest.name}" />
        <div class="destination-name-overlay">${dest.name}</div>
      </div>
      <div class="destination-body">
        <div>
          <p style="font-size:0.9rem; font-weight:700; color:var(--text-navy); margin-bottom:4px;">${dest.tagline}</p>
          <p style="font-size:0.84rem; color:var(--text-muted); margin-bottom:12px;">${dest.subtitle}</p>
          <div class="destination-metrics">
            <span class="metric-pill">${HOSPITAL_SVG} ${dest.hospitalsCount}</span>
            <span class="metric-pill">${DOCTOR_SVG} ${dest.specialistsCount}</span>
            <span class="metric-pill" style="background:#DCFCE7; color:#166534;">Save ~${dest.avgSavings}</span>
          </div>
        </div>
        <div class="destination-actions">
          <button class="btn-outline-navy" style="width:100%; justify-content:center; padding:9px 14px; font-size:0.85rem;" onclick="openPlanModal('${dest.name}')">
            Explore ${dest.name}
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </button>
          <button class="btn-whatsapp" style="width:100%; justify-content:center;" onclick="openWhatsAppModal('${dest.name}')">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            Get Treatment Plan
          </button>
        </div>
      </div>
    </div>
  `).join('');
}

/* Render Specialities Grid */
function renderSpecialities() {
  const container = document.getElementById('specs-grid');
  if (!container) return;

  const filtered = currentTab === 'All' ? SPECIALITIES : SPECIALITIES.filter(s => s.category === currentTab);

  container.innerHTML = filtered.map(spec => `
    <div class="spec-card">
      <div style="display:flex; align-items:center; gap:12px; margin-bottom:12px;">
        <div style="width:40px; height:40px; border-radius:10px; background:var(--teal-light); display:flex; align-items:center; justify-content:center; color:var(--teal-primary); font-weight:800;">
          ${HOSPITAL_SVG}
        </div>
        <div>
          <h3 style="font-size:1rem; font-weight:700; color:var(--text-navy);">${spec.title}</h3>
          <span style="font-size:0.75rem; color:var(--teal-primary); font-weight:700;">${spec.category}</span>
        </div>
      </div>
      <p style="font-size:0.86rem; color:var(--text-muted); margin-bottom:14px; line-height:1.5;">${spec.description}</p>
      <div>
        <p style="font-size:0.75rem; font-weight:700; color:var(--text-navy); margin-bottom:6px;">Common Procedures:</p>
        <div>
          ${spec.procedures.map(p => `<span class="procedure-pill">${p}</span>`).join('')}
        </div>
      </div>
    </div>
  `).join('');
}

/* YOUTUBE-STYLED VIDEO BORDERBOX CARDS RENDERER */
function renderVideoStories() {
  const container = document.getElementById('video-stories-grid');
  if (!container) return;

  container.innerHTML = VIDEO_STORIES.map(story => `
    <div class="video-borderbox-card" onclick="openVideoModal('${story.id}')">
      <div class="video-thumbnail-wrapper">
        <img src="${story.thumbnail}" alt="${story.title}" />
        <div class="video-play-overlay">
          <div class="play-button-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
          </div>
        </div>
        <span class="video-duration-badge">${story.duration}</span>
      </div>
      <div class="video-card-body">
        <div>
          <span class="video-badge-tag">${story.badge}</span>
          <h3 class="video-card-title">${story.title}</h3>
          <p class="video-patient-quote">"${story.quote}"</p>
        </div>
        <div class="video-card-footer">
          <span>${USER_SVG} ${story.patientName} (${story.patientCountry})</span>
          <span style="color:var(--teal-primary);">${STAR_SVG} ${story.rating}</span>
        </div>
      </div>
    </div>
  `).join('');
}

/* Render FAQs Accordion */
function renderFAQs() {
  const container = document.getElementById('faq-list');
  if (!container) return;

  container.innerHTML = FAQS.map((faq, index) => `
    <div class="faq-item ${index === 0 ? 'open' : ''}" onclick="toggleFaq(this)">
      <div class="faq-question">
        <span>${faq.question}</span>
        <svg class="faq-chevron" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6"/></svg>
      </div>
      <div class="faq-answer">
        ${faq.answer}
      </div>
    </div>
  `).join('');
}

window.toggleFaq = function(element) {
  element.classList.toggle('open');
};

/* Live Floating Search Functionality */
function setupSearch() {
  searchInput = document.getElementById('main-search-input');
  searchDropdown = document.getElementById('search-dropdown');

  if (!searchInput || !searchDropdown) return;

  searchInput.addEventListener('input', (e) => {
    const val = e.target.value.trim().toLowerCase();
    if (val.length < 2) {
      searchDropdown.classList.remove('active');
      renderDoctors('');
      return;
    }

    renderDoctors(val);

    const docMatches = DOCTORS.filter(d => d.name.toLowerCase().includes(val) || d.specialty.toLowerCase().includes(val)).slice(0, 3);
    const hospMatches = HOSPITALS.filter(h => h.name.toLowerCase().includes(val) || h.city.toLowerCase().includes(val)).slice(0, 3);

    let html = '';
    if (docMatches.length > 0) {
      html += `<div class="search-item-group"><div class="search-item-group-title">Doctors</div>`;
      html += docMatches.map(d => `
        <div class="search-result-row" onclick="openDoctorModal('${d.id}')">
          <span style="color:var(--teal-primary);">${DOCTOR_SVG}</span>
          <div>
            <div style="font-weight:700; font-size:0.88rem;">${d.name}</div>
            <div style="font-size:0.78rem; color:var(--text-muted);">${d.specialty} • ${d.hospital}</div>
          </div>
        </div>
      `).join('');
      html += `</div>`;
    }

    if (hospMatches.length > 0) {
      html += `<div class="search-item-group"><div class="search-item-group-title">Hospitals</div>`;
      html += hospMatches.map(h => `
        <div class="search-result-row" onclick="openHospitalModal('${h.id}')">
          <span style="color:var(--teal-primary);">${HOSPITAL_SVG}</span>
          <div>
            <div style="font-weight:700; font-size:0.88rem;">${h.name}</div>
            <div style="font-size:0.78rem; color:var(--text-muted);">${h.city}, ${h.country}</div>
          </div>
        </div>
      `).join('');
      html += `</div>`;
    }

    if (!html) {
      html = `<div style="padding:16px; text-align:center; font-size:0.86rem; color:var(--text-muted);">No exact results found for "${val}". Viewing filtered doctor cards below.</div>`;
    }

    searchDropdown.innerHTML = html;
    searchDropdown.classList.add('active');
  });

  document.addEventListener('click', (e) => {
    if (!searchInput.contains(e.target) && !searchDropdown.contains(e.target)) {
      searchDropdown.classList.remove('active');
    }
  });
}

function setupEventListeners() {
  const tabs = document.querySelectorAll('.tab-pill');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      currentTab = tab.getAttribute('data-tab');
      renderSpecialities();
    });
  });

  const prevBtn = document.getElementById('slide-left');
  const nextBtn = document.getElementById('slide-right');
  const slider = document.getElementById('hospitals-slider');

  if (prevBtn && slider) {
    prevBtn.addEventListener('click', () => slider.scrollBy({ left: -300, behavior: 'smooth' }));
  }
  if (nextBtn && slider) {
    nextBtn.addEventListener('click', () => slider.scrollBy({ left: 300, behavior: 'smooth' }));
  }
}

/* RUA AI Assistant Dialog */
function setupRuaAssistant() {
  const container = document.getElementById('rua-chips');
  if (!container) return;

  container.innerHTML = RUA_PROMPTS.map(p => `
    <button class="chip-btn" onclick="askRuaPrompt('${p}')">${p}</button>
  `).join('');
}

window.askRuaPrompt = function(promptText) {
  openRuaModal(promptText);
};

/* Language Selector Dropdown */
window.toggleLangDropdown = function() {
  const menu = document.getElementById('lang-dropdown-menu');
  if (menu) menu.classList.toggle('active');
};

window.selectLang = function(langName) {
  const label = document.getElementById('current-lang');
  if (label) label.textContent = langName;
  const menu = document.getElementById('lang-dropdown-menu');
  if (menu) menu.classList.remove('active');
  showToast(`Language set to ${langName}`);
};

window.toggleMobileMenu = function() {
  const drawer = document.getElementById('mobile-menu-drawer');
  if (drawer) drawer.classList.toggle('active');
};

window.filterDept = function(deptName) {
  currentTab = deptName === 'Cardiology' || deptName === 'Orthopedics' || deptName === 'Neurology' || deptName === 'Transplant' ? 'Surgical' : deptName === 'Oncology' ? 'Medical' : 'Lifestyle';
  const tabs = document.querySelectorAll('.tab-pill');
  tabs.forEach(t => {
    if (t.getAttribute('data-tab') === currentTab) t.classList.add('active');
    else t.classList.remove('active');
  });
  renderSpecialities();
};

/* MODALS CONTROLLER */
window.openDoctorModal = function(id) {
  selectedDoctor = DOCTORS.find(d => d.id === id);
  if (!selectedDoctor) return;

  const content = `
    <div style="text-align:center; margin-bottom:20px;">
      <img src="${selectedDoctor.image}" style="width:90px; height:90px; border-radius:50%; object-fit:cover; margin-bottom:10px; border:3px solid var(--teal-primary);" />
      <h2 style="font-size:1.3rem; font-weight:800;">${selectedDoctor.name}</h2>
      <p style="color:var(--teal-primary); font-weight:700; font-size:0.9rem;">${selectedDoctor.title}</p>
      <p style="color:var(--text-muted); font-size:0.85rem;">${HOSPITAL_SVG} ${selectedDoctor.hospital}, ${selectedDoctor.city}</p>
    </div>
    
    <div style="background:#f8fafc; padding:16px; border-radius:12px; margin-bottom:20px; font-size:0.88rem;">
      <p><strong>Experience:</strong> ${selectedDoctor.experience}</p>
      <p><strong>Languages:</strong> ${selectedDoctor.languages.join(', ')}</p>
      <p><strong>Consultation Fee:</strong> ${selectedDoctor.fee}</p>
      <p style="margin-top:6px; color:var(--text-body); line-height:1.4;">${selectedDoctor.bio}</p>
    </div>

    <form onsubmit="handleDoctorBooking(event)">
      <div style="margin-bottom:14px;">
        <label style="display:block; font-size:0.82rem; font-weight:700; margin-bottom:4px;">Select Available Slot</label>
        <select id="slot-select" required style="width:100%; padding:10px; border-radius:8px; border:1px solid #cbd5e1; font-family:inherit;">
          ${selectedDoctor.availableSlots.map(s => `<option value="${s}">${s}</option>`).join('')}
        </select>
      </div>
      <div style="margin-bottom:14px;">
        <label style="display:block; font-size:0.82rem; font-weight:700; margin-bottom:4px;">Patient Full Name</label>
        <input type="text" required placeholder="e.g. John Doe" style="width:100%; padding:10px; border-radius:8px; border:1px solid #cbd5e1; font-family:inherit;" />
      </div>
      <div style="margin-bottom:20px;">
        <label style="display:block; font-size:0.82rem; font-weight:700; margin-bottom:4px;">Phone / WhatsApp Number</label>
        <input type="tel" required placeholder="Enter phone or WhatsApp number" style="width:100%; padding:10px; border-radius:8px; border:1px solid #cbd5e1; font-family:inherit;" />
      </div>
      <button type="submit" class="btn-teal" style="width:100%; justify-content:center; padding:12px; font-size:0.95rem;">Confirm Appointment Request</button>
    </form>
  `;

  showModal(content);
};

window.openHospitalModal = function(id) {
  selectedHospital = HOSPITALS.find(h => h.id === id);
  if (!selectedHospital) return;

  const content = `
    <div>
      <img src="${selectedHospital.image}" style="width:100%; height:200px; object-fit:cover; border-radius:14px; margin-bottom:16px;" />
      <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:8px;">
        <div>
          <h2 style="font-size:1.35rem; font-weight:800;">${selectedHospital.name}</h2>
          <p style="color:var(--text-muted); font-size:0.88rem;">${LOCATION_SVG} ${selectedHospital.city}, ${selectedHospital.country}</p>
        </div>
        <span style="background:#FACC15; padding:4px 10px; border-radius:6px; font-weight:800; font-size:0.85rem;">${STAR_SVG} ${selectedHospital.rating}</span>
      </div>

      <p style="font-size:0.92rem; color:var(--text-body); line-height:1.5; margin-bottom:16px;">${selectedHospital.description}</p>

      <div style="background:var(--teal-light); padding:16px; border-radius:12px; margin-bottom:20px;">
        <h4 style="color:var(--teal-primary); font-weight:800; margin-bottom:8px;">Key Hospital Highlights</h4>
        <ul style="padding-left:20px; font-size:0.86rem; color:var(--text-navy); line-height:1.6;">
          ${selectedHospital.highlights.map(h => `<li>${h}</li>`).join('')}
        </ul>
      </div>

      <div style="display:flex; gap:12px;">
        <button class="btn-teal" style="flex:1; justify-content:center;" onclick="openPlanModal('${selectedHospital.name}')">Request Cost Estimate</button>
        <button class="btn-whatsapp" style="flex:1; justify-content:center;" onclick="openWhatsAppModal('${selectedHospital.name}')">WhatsApp Desk</button>
      </div>
    </div>
  `;

  showModal(content);
};

/* VIDEO PREVIEW MODAL */
window.openVideoModal = function(id) {
  selectedVideo = VIDEO_STORIES.find(v => v.id === id);
  if (!selectedVideo) return;

  const content = `
    <div style="background:#0F172A; color:white; border-radius:16px; overflow:hidden;">
      <div style="position:relative; width:100%; aspect-ratio:16/9; background:#000;">
        <img src="${selectedVideo.thumbnail}" style="width:100%; height:100%; object-fit:cover; opacity:0.85;" />
        <div style="position:absolute; inset:0; display:flex; flex-direction:column; align-items:center; justify-content:center; background:rgba(0,0,0,0.3);">
          <div style="width:64px; height:64px; background:#FF0000; border-radius:50%; display:flex; align-items:center; justify-content:center; box-shadow:0 0 24px rgba(255,0,0,0.6); cursor:pointer;" onclick="playSimulatedVideo(this)">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="white"><path d="M8 5v14l11-7z"/></svg>
          </div>
          <p style="margin-top:12px; font-weight:700; font-size:0.9rem; text-shadow:0 2px 4px rgba(0,0,0,0.8);">Click Play to Start Patient Video Story</p>
        </div>
      </div>

      <div style="padding:24px;">
        <span style="background:#EF4444; color:white; font-size:0.75rem; font-weight:800; padding:4px 10px; border-radius:6px;">${selectedVideo.badge}</span>
        <h3 style="font-size:1.2rem; font-weight:800; margin:10px 0 6px 0;">${selectedVideo.title}</h3>
        <p style="color:#94A3B8; font-size:0.86rem; margin-bottom:16px;">Patient: <strong>${selectedVideo.patientName} (${selectedVideo.patientCountry})</strong> • Hospital: <strong>${selectedVideo.hospital}</strong> • Doctor: <strong>${selectedVideo.doctor}</strong></p>

        <div style="background:rgba(255,255,255,0.06); border:1px solid rgba(255,255,255,0.1); padding:16px; border-radius:12px; margin-bottom:20px;">
          <p style="font-style:italic; font-size:0.92rem; line-height:1.6;">"${selectedVideo.quote}"</p>
        </div>

        <button class="btn-teal" style="width:100%; justify-content:center;" onclick="openPlanModal('${selectedVideo.procedure}')">
          Get Consultation for ${selectedVideo.procedure}
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </button>
      </div>
    </div>
  `;

  showModal(content);
};

window.playSimulatedVideo = function(btn) {
  btn.parentElement.innerHTML = `
    <div style="width:100%; height:100%; display:flex; flex-direction:column; align-items:center; justify-content:center; background:#000; padding:20px; text-align:center;">
      <div style="width:48px; height:48px; border:4px solid #FF0000; border-top-color:transparent; border-radius:50%; animation:spin 1s linear infinite; margin-bottom:16px;"></div>
      <p style="color:white; font-weight:700; font-size:1rem;">Playing Patient Recovery Documented Case...</p>
      <p style="color:#94A3B8; font-size:0.82rem; margin-top:4px;">Medical Tourism Record Verified by Hospital Care Desk</p>
    </div>
  `;
};

window.openRuaModal = function(initialQuery = '') {
  const content = `
    <div>
      <div style="display:flex; align-items:center; gap:12px; margin-bottom:16px;">
        <div style="width:44px; height:44px; border-radius:50%; background:var(--text-navy); display:flex; align-items:center; justify-content:center; color:white; font-weight:800; font-size:1.1rem;">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2 2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zM4 11a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-7z"/><path d="M9 16v-2M15 16v-2"/></svg>
        </div>
        <div>
          <h3 style="font-size:1.15rem; font-weight:800;">RUA AI Medical Assistant</h3>
          <p style="font-size:0.78rem; color:#166534; font-weight:700; display:flex; align-items:center; gap:4px;">
            <span style="width:8px; height:8px; background:#22c55e; border-radius:50%; display:inline-block;"></span> Online 24/7 • Hospital AI Support
          </p>
        </div>
      </div>

      <div id="chat-messages" style="background:#f8fafc; border:1px solid var(--border-light); border-radius:12px; padding:16px; height:240px; overflow-y:auto; margin-bottom:16px; display:flex; flex-direction:column; gap:10px;">
        <div style="background:white; border:1px solid #e2e8f0; padding:10px 14px; border-radius:10px; max-width:85%; font-size:0.88rem;">
          Hello! I am <strong>RUA</strong>, your dedicated AI medical travel assistant. How can I help with your hospital treatment planning, doctor selection, or visa process today?
        </div>
        ${initialQuery ? `
          <div style="background:var(--teal-primary); color:white; padding:10px 14px; border-radius:10px; align-self:flex-end; max-width:85%; font-size:0.88rem;">
            ${initialQuery}
          </div>
          <div style="background:white; border:1px solid #e2e8f0; padding:10px 14px; border-radius:10px; max-width:85%; font-size:0.88rem;">
            Great question regarding <strong>"${initialQuery}"</strong>! ANMOL CARE partners with top JCI/NABH hospitals (such as Apollo, Medanta, Fortis). We issue official e-Medical Visa Invitation Letters within 24 hours and arrange free cost estimates. Would you like to connect with a senior hospital coordinator on WhatsApp?
          </div>
        ` : ''}
      </div>

      <form onsubmit="handleChatSubmit(event)" style="display:flex; gap:8px;">
        <input type="text" id="chat-input" placeholder="Type your medical query..." style="flex:1; padding:10px 14px; border-radius:8px; border:1px solid #cbd5e1; font-family:inherit; font-size:0.88rem;" required />
        <button type="submit" class="btn-teal" style="padding:10px 18px;">Ask</button>
      </form>
    </div>
  `;

  showModal(content);
};

window.handleChatSubmit = function(e) {
  e.preventDefault();
  const input = document.getElementById('chat-input');
  const box = document.getElementById('chat-messages');
  if (!input || !box) return;

  const val = input.value.trim();
  input.value = '';

  box.innerHTML += `
    <div style="background:var(--teal-primary); color:white; padding:10px 14px; border-radius:10px; align-self:flex-end; max-width:85%; font-size:0.88rem;">
      ${val}
    </div>
    <div style="background:white; border:1px solid #e2e8f0; padding:10px 14px; border-radius:10px; max-width:85%; font-size:0.88rem;">
      Thank you for asking about "${val}". I have transferred your request to our ANMOL CARE medical desk. A care coordinator will provide you with doctor options and an itemized cost estimate shortly!
    </div>
  `;
  box.scrollTop = box.scrollHeight;
};

window.openPlanModal = function(topic = 'Medical Treatment') {
  const content = `
    <div>
      <h2 style="font-size:1.3rem; font-weight:800; margin-bottom:6px;">Get Free Personalised Treatment Plan</h2>
      <p style="font-size:0.86rem; color:var(--text-muted); margin-bottom:20px;">For: <strong>${topic}</strong></p>

      <form onsubmit="handlePlanSubmit(event)">
        <div style="margin-bottom:14px;">
          <label style="display:block; font-size:0.82rem; font-weight:700; margin-bottom:4px;">Full Name</label>
          <input type="text" required placeholder="Your full name" style="width:100%; padding:10px; border-radius:8px; border:1px solid #cbd5e1; font-family:inherit;" />
        </div>
        <div style="margin-bottom:14px;">
          <label style="display:block; font-size:0.82rem; font-weight:700; margin-bottom:4px;">Country of Residence</label>
          <input type="text" required placeholder="e.g. Bangladesh, UAE, Kenya, USA" style="width:100%; padding:10px; border-radius:8px; border:1px solid #cbd5e1; font-family:inherit;" />
        </div>
        <div style="margin-bottom:14px;">
          <label style="display:block; font-size:0.82rem; font-weight:700; margin-bottom:4px;">WhatsApp Number / Email</label>
          <input type="text" required placeholder="Enter WhatsApp number or email address" style="width:100%; padding:10px; border-radius:8px; border:1px solid #cbd5e1; font-family:inherit;" />
        </div>
        <div style="margin-bottom:20px;">
          <label style="display:block; font-size:0.82rem; font-weight:700; margin-bottom:4px;">Medical Condition / Doctor Note</label>
          <textarea rows="3" placeholder="Briefly describe your symptoms or required procedure..." style="width:100%; padding:10px; border-radius:8px; border:1px solid #cbd5e1; font-family:inherit;"></textarea>
        </div>
        <button type="submit" class="btn-teal" style="width:100%; justify-content:center; padding:12px;">Submit Request for Free Advice</button>
      </form>
    </div>
  `;
  showModal(content);
};

window.openWhatsAppModal = function(destName = '') {
  showToast(`Connecting you to WhatsApp ANMOL CARE Desk for ${destName}...`);
  setTimeout(() => {
    alert(`[WhatsApp Action Simulated]\n\nHi! Thank you for contacting ANMOL CARE. Our senior coordinator is reviewing your request for ${destName}. You will receive top doctor profiles and cost estimates within 30 minutes!`);
  }, 400);
};

window.handleDoctorBooking = function(e) {
  e.preventDefault();
  closeModal();
  showToast(`Booking confirmed with ${selectedDoctor ? selectedDoctor.name : 'Doctor'}! Confirmation sent.`);
};

window.handlePlanSubmit = function(e) {
  e.preventDefault();
  closeModal();
  showToast(`Treatment plan request submitted! Our hospital care team will contact you within 2 hours.`);
};

/* General Modal Handler */
function showModal(htmlContent) {
  let backdrop = document.getElementById('modal-backdrop');
  if (!backdrop) {
    backdrop = document.createElement('div');
    backdrop.id = 'modal-backdrop';
    backdrop.className = 'modal-backdrop';
    document.body.appendChild(backdrop);
  }

  backdrop.innerHTML = `
    <div class="modal-card">
      <button class="modal-close-btn" onclick="closeModal()">✕</button>
      ${htmlContent}
    </div>
  `;

  setTimeout(() => backdrop.classList.add('active'), 10);
}

window.closeModal = function() {
  const backdrop = document.getElementById('modal-backdrop');
  if (backdrop) {
    backdrop.classList.remove('active');
    setTimeout(() => { backdrop.innerHTML = ''; }, 250);
  }
};

/* Toast Notification Utility */
function showToast(message) {
  let container = document.getElementById('toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toast-container';
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `<svg width="16" height="16" viewBox="0 0 24 24" fill="#17C3B2"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg> <span>${message}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.remove();
  }, 4000);
}
