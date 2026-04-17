/* Guerrilla Jiu-Jitsu Modesto — shared site JS */

(function () {
  'use strict';

  /* ---------------- Lucide icons ---------------- */
  try { if (window.lucide && lucide.createIcons) lucide.createIcons(); } catch (e) {}

  /* ---------------- Dynamic copyright year ---------------- */
  document.querySelectorAll('[data-year]').forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });

  /* ---------------- Navbar scroll + mobile toggle ---------------- */
  var nav = document.querySelector('.nav');
  var toggle = document.querySelector('.nav-toggle');

  if (nav) {
    var onScroll = function () {
      if (window.scrollY > 40) nav.classList.add('scrolled');
      else nav.classList.remove('scrolled');
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      nav.classList.toggle('open');
      var expanded = nav.classList.contains('open');
      toggle.setAttribute('aria-expanded', expanded ? 'true' : 'false');
    });
    // Close mobile menu when a link is clicked
    nav.querySelectorAll('.nav-mobile a').forEach(function (a) {
      a.addEventListener('click', function () { nav.classList.remove('open'); });
    });
  }

  /* ---------------- Fade-up scroll reveal ---------------- */
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          io.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -80px 0px', threshold: 0.05 });
    document.querySelectorAll('.fade-up').forEach(function (el) { io.observe(el); });
  } else {
    document.querySelectorAll('.fade-up').forEach(function (el) { el.classList.add('in'); });
  }

  /* ---------------- GSAP marquee (fallback to CSS if unavailable) ---------------- */
  try {
    if (window.gsap) {
      gsap.registerPlugin(window.ScrollTrigger || null);
    }
  } catch (e) {}

  /* ---------------- FAQ accordion ---------------- */
  document.querySelectorAll('.faq-item').forEach(function (item) {
    var q = item.querySelector('.faq-q');
    var a = item.querySelector('.faq-a');
    if (!q || !a) return;
    q.addEventListener('click', function () {
      var isOpen = item.classList.contains('open');
      if (isOpen) {
        item.classList.remove('open');
        a.style.maxHeight = '0px';
      } else {
        item.classList.add('open');
        a.style.maxHeight = a.scrollWidth + 'px';
        a.style.maxHeight = a.scrollHeight + 'px';
      }
    });
  });

  /* ---------------- Phone input masking (US) ---------------- */
  function maskPhone(value) {
    var digits = (value || '').replace(/\D/g, '').slice(0, 10);
    if (digits.length === 0) return '';
    if (digits.length < 4) return '(' + digits;
    if (digits.length < 7) return '(' + digits.slice(0, 3) + ') ' + digits.slice(3);
    return '(' + digits.slice(0, 3) + ') ' + digits.slice(3, 6) + '-' + digits.slice(6);
  }
  document.querySelectorAll('input[type="tel"]').forEach(function (input) {
    input.addEventListener('input', function () { input.value = maskPhone(input.value); });
  });

  /* ---------------- Lead modal ---------------- */
  initLeadModal();

  function initLeadModal() {
    var modal = document.getElementById('lead-modal');
    if (!modal) return;
    var backdrop = modal.querySelector('.lead-modal__backdrop');
    var closeBtn = modal.querySelector('.lead-modal__close');
    var form = modal.querySelector('form');

    function openModal() {
      modal.classList.add('open');
      document.body.style.overflow = 'hidden';
      setTimeout(function () {
        var first = modal.querySelector('input, select');
        if (first) first.focus();
      }, 150);
    }
    function closeModal() {
      modal.classList.remove('open');
      document.body.style.overflow = '';
    }

    document.querySelectorAll('[data-cta="lead-modal"]').forEach(function (btn) {
      btn.addEventListener('click', function (e) {
        e.preventDefault();
        var preset = btn.getAttribute('data-program');
        if (preset) {
          var select = modal.querySelector('select[name="program"]');
          if (select) select.value = preset;
        }
        openModal();
      });
    });

    if (closeBtn) closeBtn.addEventListener('click', closeModal);
    if (backdrop) backdrop.addEventListener('click', closeModal);
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && modal.classList.contains('open')) closeModal();
    });

    if (form) {
      form.addEventListener('submit', function (e) {
        e.preventDefault();
        var valid = true;
        form.querySelectorAll('.lead-modal__field').forEach(function (f) { f.classList.remove('has-error'); });

        var firstName = form.querySelector('[name="firstName"]');
        var lastName = form.querySelector('[name="lastName"]');
        var email = form.querySelector('[name="email"]');
        var phone = form.querySelector('[name="phone"]');
        var program = form.querySelector('[name="program"]');

        if (!firstName.value.trim()) { firstName.closest('.lead-modal__field').classList.add('has-error'); valid = false; }
        if (!lastName.value.trim()) { lastName.closest('.lead-modal__field').classList.add('has-error'); valid = false; }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())) { email.closest('.lead-modal__field').classList.add('has-error'); valid = false; }
        if (phone.value.replace(/\D/g, '').length < 10) { phone.closest('.lead-modal__field').classList.add('has-error'); valid = false; }
        if (!program.value) { program.closest('.lead-modal__field').classList.add('has-error'); valid = false; }
        if (!valid) return;

        var data = {
          firstName: firstName.value.trim(),
          lastName: lastName.value.trim(),
          email: email.value.trim(),
          phone: phone.value.trim(),
          program: program.value,
          programLabel: program.options[program.selectedIndex].text,
          submittedAt: new Date().toISOString()
        };
        try { sessionStorage.setItem('leadFormData', JSON.stringify(data)); } catch (e) {}

        /* ---- GHL Webhooks ---- */
        var webhooks = [];

        if (data.program === 'adults-jiu-jitsu') {
          webhooks.push('https://services.leadconnectorhq.com/hooks/E4Cw21kwKqfDDFY8h7pU/webhook-trigger/3681fad5-5494-41ba-aa6a-a317338d4ec4');
          webhooks.push('https://services.leadconnectorhq.com/hooks/E4Cw21kwKqfDDFY8h7pU/webhook-trigger/93de8b3c-eff9-4a43-8e8a-8ed7223a4016');
        }

        if (data.program === 'kids-jiu-jitsu') {
          webhooks.push('https://services.leadconnectorhq.com/hooks/E4Cw21kwKqfDDFY8h7pU/webhook-trigger/c0125bb8-12ca-46dd-82a7-f628522011a9');
          webhooks.push('https://services.leadconnectorhq.com/hooks/E4Cw21kwKqfDDFY8h7pU/webhook-trigger/b5f38aae-8aa3-4ea8-8804-30039ffe29ac');
        }

        var redirectUrl = 'booking.html?program=' + encodeURIComponent(data.program);

        if (webhooks.length) {
          Promise.all(webhooks.map(function (url) {
            return fetch(url, {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(data)
            }).catch(function () {});
          })).then(function () {
            window.location.href = redirectUrl;
          });
        } else {
          window.location.href = redirectUrl;
        }
      });
    }
  }

  /* ---------------- Booking page ---------------- */
  initBookingPage();

  function initBookingPage() {
    var wrap = document.getElementById('booking-calendars');
    if (!wrap) return;

    var params = new URLSearchParams(window.location.search);
    var program = params.get('program');

    var lead = null;
    try { lead = JSON.parse(sessionStorage.getItem('leadFormData') || 'null'); } catch (e) {}

    if (lead && lead.firstName) {
      var greet = document.getElementById('booking-greeting');
      if (greet) greet.textContent = lead.firstName + ', you\u2019re almost done \u2014 pick a time below.';
    }

    var calendars = wrap.querySelectorAll('.booking-calendar');
    var chips = document.querySelectorAll('.program-chip');
    var targetProgram = program;

    if (!targetProgram) {
      var first = wrap.querySelector('.booking-calendar');
      if (first) targetProgram = first.getAttribute('data-program');
    }

    function show(programId) {
      calendars.forEach(function (c) {
        if (c.getAttribute('data-program') === programId) c.hidden = false;
        else c.hidden = true;
      });
      chips.forEach(function (chip) {
        if (chip.getAttribute('data-program') === programId) chip.classList.add('active');
        else chip.classList.remove('active');
      });
      var labelEl = document.getElementById('active-program-label');
      if (labelEl) {
        var activeChip = Array.prototype.find.call(chips, function (c) { return c.getAttribute('data-program') === programId; });
        if (activeChip) labelEl.textContent = activeChip.textContent.trim();
      }
    }

    chips.forEach(function (chip) {
      chip.addEventListener('click', function () { show(chip.getAttribute('data-program')); });
    });

    if (targetProgram) show(targetProgram);
  }
})();
