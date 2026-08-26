  /* ── SEGURANÇA: sanitização de output (prevenção XSS para conteúdo dinâmico futuro) ── */
  function sanitize(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  }

  /* ── HONEYPOT: detecta bots ── */
  window._botDetectado = false;
  window.addEventListener('load', function() {
    const hp = document.createElement('input');
    hp.type = 'text';
    hp.name = 'hp_field';
    hp.style.cssText = 'position:absolute;left:-9999px;opacity:0;';
    hp.setAttribute('tabindex', '-1');
    hp.setAttribute('autocomplete', 'off');
    hp.addEventListener('input', function() { window._botDetectado = true; });
    document.body.appendChild(hp);
  });

  /* ── RATE LIMIT: evita spam de cliques em links externos ── */
  var _cliques = {};
  function rateLimit(id, ms) {
    var agora = Date.now();
    if (_cliques[id] && agora - _cliques[id] < ms) return false;
    _cliques[id] = agora;
    return true;
  }

  /* ── OPEN LINK SEGURO: valida URL antes de abrir ── */
  function abrirLinkSeguro(url) {
    if (window._botDetectado) return;
    if (!rateLimit('wpp', 2000)) return;
    var permitidos = ['wa.me', 'api.whatsapp.com'];
    try {
      var u = new URL(url);
      if (permitidos.some(function(d){ return u.hostname === d || u.hostname.endsWith('.' + d); })) {
        window.open(url, '_blank', 'noopener,noreferrer');
      }
    } catch(e) {}
  }

  /* ── BOT FLUTUANTE ── */
  document.getElementById('bot-wpp').addEventListener('click', function() {
    abrirLinkSeguro(linkWhatsApp(CONTATO.msg.botFlutuante));
  });

  /* ── HAMBURGER ── */
  var hamburger = document.getElementById('hamburger');
  var mobileMenu = document.getElementById('mobile-menu');
  var mobileFechar = document.getElementById('mobile-fechar');

  function abrirMenu() {
    mobileMenu.classList.add('aberto');
    hamburger.setAttribute('aria-expanded', 'true');
    mobileFechar.focus();
    document.body.style.overflow = 'hidden';
  }

  function fecharMenu() {
    mobileMenu.classList.remove('aberto');
    hamburger.setAttribute('aria-expanded', 'false');
    hamburger.focus();
    document.body.style.overflow = '';
  }

  hamburger.addEventListener('click', abrirMenu);
  mobileFechar.addEventListener('click', fecharMenu);

  /* Fechar ao clicar fora */
  mobileMenu.addEventListener('click', function(e) {
    if (e.target === mobileMenu) fecharMenu();
  });

  /* Fechar com ESC */
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && mobileMenu.classList.contains('aberto')) fecharMenu();
  });

  mobileMenu.querySelectorAll('a').forEach(function(a) {
    a.addEventListener('click', fecharMenu);
  });

  /* ── TEMA ── */
  (function() {
    var html = document.documentElement;
    var toggleTema = document.getElementById('tema-toggle');

    function aplicarTema(claro) {
      if (claro) html.setAttribute('data-tema', 'claro');
      else html.removeAttribute('data-tema');
      toggleTema.setAttribute('aria-pressed', claro ? 'true' : 'false');
      toggleTema.setAttribute('aria-label', claro ? 'Ativar modo escuro' : 'Ativar modo claro');
    }

    var temaSalvo = null;
    try { temaSalvo = localStorage.getItem('mj_tema'); } catch(e) {}
    aplicarTema(temaSalvo === 'claro');

    toggleTema.addEventListener('click', function() {
      var claro = html.getAttribute('data-tema') !== 'claro';
      aplicarTema(claro);
      try {
        if (claro) localStorage.setItem('mj_tema', 'claro');
        else localStorage.removeItem('mj_tema');
      } catch(e) {}
    });
  })();

  /* ── SERVIÇOS EXPANSÍVEIS ── */
  document.querySelectorAll('.servico-card').forEach(function(card) {
    function toggle() {
      var aberto = card.classList.contains('aberto');
      /* fecha todos */
      document.querySelectorAll('.servico-card').forEach(function(c) {
        c.classList.remove('aberto');
        c.setAttribute('aria-expanded', 'false');
      });
      /* abre este se estava fechado */
      if (!aberto) {
        card.classList.add('aberto');
        card.setAttribute('aria-expanded', 'true');
      }
    }
    card.addEventListener('click', toggle);
    card.addEventListener('keydown', function(e) {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggle(); }
    });
  });

  /* ── REVEAL ON SCROLL ── */
  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(e) {
      if (e.isIntersecting) {
        e.target.classList.add('visivel');
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.reveal').forEach(function(el) { observer.observe(el); });

  /* ── NAVBAR SCROLL ── */
  window.addEventListener('scroll', function() {
    var nav = document.querySelector('nav');
    nav.style.borderBottomColor = window.scrollY > 50
      ? 'rgba(107,26,26,0.6)' : 'rgba(107,26,26,0.3)';
  }, { passive: true });

  /* ── LGPD ── */
  (function() {
    var banner = document.getElementById('lgpd-banner');
    var btn = document.getElementById('lgpd-aceitar');
    var gerenciarCookies = document.getElementById('gerenciar-cookies');
    try {
      if (!localStorage.getItem('mj_lgpd')) {
        banner.style.display = 'flex';
      }
    } catch(e) { banner.style.display = 'flex'; }
    btn.addEventListener('click', function() {
      try { localStorage.setItem('mj_lgpd', '1'); } catch(e) {}
      banner.style.display = 'none';
    });
    gerenciarCookies.addEventListener('click', function(e) {
      e.preventDefault();
      try { localStorage.removeItem('mj_lgpd'); } catch(e) {}
      banner.style.display = 'flex';
    });
  })();
