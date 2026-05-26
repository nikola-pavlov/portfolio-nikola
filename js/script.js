function replayLogo() {
  const animationDuration = 7750;
  const pauseAfter = 5000;
  setTimeout(() => {
    const logo = document.getElementById('logo-reload');
    if (!logo) return;
    const parent = logo.parentNode;
    const clone = logo.cloneNode(true);
    parent.replaceChild(clone, logo);
    replayLogo();
  }, animationDuration + pauseAfter);
}
replayLogo();

(function () {
  const targets = document.querySelectorAll('[data-reveal]');
  if (!targets.length) return;
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  targets.forEach((el) => observer.observe(el));
})();

(function () {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      const headerHeight = 64;
      const top = target.getBoundingClientRect().top + window.scrollY - headerHeight;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });
})();

(function () {
  const header = document.getElementById('site-header');
  const links = document.querySelectorAll('.site-nav__link, .mobile-menu__link');
  const sections = document.querySelectorAll('section[id]');

  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 10);
    highlightActive();
  }, { passive: true });

  function highlightActive() {
    const scrollY = window.scrollY + 80;
    let current = '';
    sections.forEach(sec => {
      if (sec.offsetTop <= scrollY) current = sec.id;
    });
    links.forEach(link => {
      const href = link.getAttribute('href').replace('#', '');
      link.classList.toggle('is-active', href === current);
    });
  }
  highlightActive();
})();

(function () {

  const WORK = [

    {
      id: 1, tab: 'social', type: 'image', aspect: 'square',
      src: [
        'visuals/we/we00.png',
        'visuals/we/we01.png',
        'visuals/we/we02.png',
        'visuals/we/we03.png',
        'visuals/we/we04.png',
        'visuals/we/we05.png',
        'visuals/we/we06.png',
        'visuals/we/we07.png',
        'visuals/we/we08.png',
      ],
      title: 'Social Media Post', tag: 'Social Post', meta: 'Instagram',
      link: ''
    },
    {
      id: 2, tab: 'social', type: 'image', aspect: 'portrait',
      src: [
        'visuals/kina/Kina00.jpg',
        'visuals/kina/Kina01.png',
        'visuals/kina/Kina02.png',
        'visuals/kina/Kina03.png',
        'visuals/kina/Kina04.png',
        'visuals/kina/Kina05.png',
        'visuals/kina/Kina06.png',
        'visuals/kina/Kina07.png',
        'visuals/kina/Kina08.png',
      ],
      title: 'Social Media Post', tag: 'Social Post', meta: 'Instagram',
      link: ''
    },
    {
      id: 3, tab: 'social', type: 'image', aspect: 'story',
      src: [
        'visuals/mytime/mytime03.png',
        'visuals/mytime/mytime04.png',
        'visuals/mytime/mytime01.png',
        'visuals/mytime/mytime02.png',
      ],
      title: 'Social Media Post', tag: 'Social Post', meta: 'Instagram',
      link: ''
    },
    {
      id: 4, tab: 'social', type: 'image', aspect: 'portrait',
      src: [
        'visuals/bf/bf00.png',
        'visuals/bf/bf01.png',
        'visuals/bf/bf02.png',
        'visuals/bf/bf03.png',
        'visuals/bf/bf04.png',
        'visuals/bf/bf05.png',
      ],
      title: 'Social Media Post', tag: 'Social Post', meta: 'Instagram',
      link: ''
    },
    {
      id: 5, tab: 'social', type: 'image', aspect: 'portrait',
      src: [
        'visuals/kategorii/kat01.png',
        'visuals/kategorii/kat02.png',
        'visuals/kategorii/kat03.jpg',
        'visuals/kategorii/kat04.png',
        'visuals/kategorii/kat05.png',
      ],
      title: 'Social Media Post', tag: 'Social Post', meta: 'Instagram',
      link: ''
    },
    {
      id: 6, tab: 'social', type: 'image', aspect: 'portrait',
      src: [
        'visuals/lamp/lamp00.png',
        'visuals/lamp/lamp01.png',
        'visuals/lamp/lamp02.jpg',
        'visuals/lamp/lamp03.png',
        'visuals/lamp/lamp04.png',
        'visuals/lamp/lamp05.png',
        'visuals/lamp/lamp06.png',
        'visuals/lamp/lamp07.png',
        'visuals/lamp/lamp08.png',
        'visuals/lamp/lamp09.png',
      ],
      title: 'Social Media Post', tag: 'Social Post', meta: 'Instagram',
      link: ''
    },
    {
      id: 7, tab: 'social', type: 'image', aspect: 'portrait',
      src: [
        'visuals/viber/Viber.jpg',
        'visuals/viber/WhatsApp.jpg',
      ],
      title: 'Social Media Post', tag: 'Social Post', meta: 'Instagram',
      link: ''
    },
    {
      id: 8, tab: 'social', type: 'image', aspect: 'portrait',
      src: ['visuals/1+1FREE.jpg'],
      title: 'Social Media Post', tag: 'Social Post', meta: 'Instagram',
      link: ''
    },
    {
      id: 9, tab: 'social', type: 'image', aspect: 'portrait',
      src: ['visuals/calling.jpg'],
      title: 'Social Media Post', tag: 'Social Post', meta: 'Instagram',
      link: ''
    },
    {
      id: 10, tab: 'social', type: 'image', aspect: 'portrait',
      src: ['visuals/krstarenje.jpg'],
      title: 'Social Media Post', tag: 'Social Post', meta: 'Instagram',
      link: ''
    },
    {
      id: 11, tab: 'social', type: 'image', aspect: 'portrait',
      src: ['visuals/Toronto.jpg'],
      title: 'Social Media Post', tag: 'Social Post', meta: 'Instagram',
      link: ''
    },
    {
      id: 12, tab: 'social', type: 'image', aspect: 'portrait',
      src: ['visuals/Rezerviraj0.jpg'],
      title: 'Social Media Post', tag: 'Social Post', meta: 'Instagram',
      link: ''
    },
    {
      id: 13, tab: 'social', type: 'image', aspect: 'portrait',
      src: ['visuals/hoteli.jpg'],
      title: 'Social Media Post', tag: 'Social Post', meta: 'Instagram',
      link: ''
    },
    {
      id: 14, tab: 'social', type: 'image', aspect: 'portrait',
      src: ['visuals/ponuda.jpg'],
      title: 'Social Media Post', tag: 'Social Post', meta: 'Instagram',
      link: ''
    },
    {
      id: 15, tab: 'social', type: 'image', aspect: 'portrait',
      src: ['visuals/Hrg01.jpg'],
      title: 'Social Media Post', tag: 'Social Post', meta: 'Instagram',
      link: ''
    },
    {
      id: 16, tab: 'social', type: 'image', aspect: 'portrait',
      src: ['visuals/nurni.png'],
      title: 'Social Media Post', tag: 'Social Post', meta: 'Instagram',
      link: ''
    },

    {
      id: 23, tab: 'social', type: 'image', aspect: 'square',
      src: ['visuals/blog.jpg'],
      title: 'Social Media Post', tag: 'Social Post', meta: 'Instagram',
      link: ''
    },

    {
      id: 17, tab: 'social', type: 'image', aspect: 'portrait',
      src: ['visuals/1+1.jpg'],
      title: 'Social Media Post', tag: 'Social Post', meta: 'Instagram',
      link: ''
    },
    {
      id: 18, tab: 'social', type: 'image', aspect: 'square',
      src: ['visuals/beyond.jpg'],
      title: 'Social Media Post', tag: 'Social Post', meta: 'Instagram',
      link: ''
    },
    {
      id: 19, tab: 'social', type: 'image', aspect: 'portrait',
      src: ['visuals/neverletgo.jpg'],
      title: 'Social Media Post', tag: 'Social Post', meta: 'Instagram',
      link: ''
    },
    {
      id: 20, tab: 'social', type: 'image', aspect: 'portrait',
      src: ['visuals/happyholidays.jpg'],
      title: 'Social Media Post', tag: 'Social Post', meta: 'Instagram',
      link: ''
    },
    {
      id: 21, tab: 'social', type: 'image', aspect: 'portrait',
      src: ['visuals/osumka.png'],
      title: 'Social Media Post', tag: 'Social Post', meta: 'Instagram',
      link: ''
    },
    {
      id: 22, tab: 'social', type: 'image', aspect: 'portrait',
      src: ['visuals/petki.jpg'],
      title: 'Social Media Post', tag: 'Social Post', meta: 'Instagram',
      link: ''
    },
    {
      id: 23, tab: 'social', type: 'image', aspect: 'square',
      src: ['visuals/wecover.jpg'],
      title: 'Social Media Post', tag: 'Social Post', meta: 'Instagram',
      link: ''
    },
    {
      id: 24, tab: 'social', type: 'image', aspect: 'portrait',
      src: ['visuals/earlybird.png'],
      title: 'Social Media Post', tag: 'Social Post', meta: 'Instagram',
      link: ''
    },
    {
      id: 25, tab: 'social', type: 'image', aspect: 'portrait',
      src: ['visuals/11okt.jpg'],
      title: 'Social Media Post', tag: 'Social Post', meta: 'Instagram',
      link: ''
    },
    {
      id: 26, tab: 'social', type: 'image', aspect: 'square',
      src: ['visuals/newweb.jpg'],
      title: 'Social Media Post', tag: 'Social Post', meta: 'Instagram',
      link: ''
    },
    {
      id: 27, tab: 'social', type: 'image', aspect: 'portrait',
      src: ['visuals/BodrumLeto.jpg'],
      title: 'Social Media Post', tag: 'Social Post', meta: 'Instagram',
      link: ''
    },
    {
      id: 28, tab: 'social', type: 'image', aspect: 'portrait',
      src: ['visuals/0e0.jpg'],
      title: 'Social Media Post', tag: 'Social Post', meta: 'Instagram',
      link: ''
    },
    {
      id: 29, tab: 'social', type: 'image', aspect: 'portrait',
      src: ['visuals/Ilija.jpg'],
      title: 'Social Media Post', tag: 'Social Post', meta: 'Instagram',
      link: ''
    },
    {
      id: 30, tab: 'social', type: 'image', aspect: 'square',
      src: ['visuals/9REASONS.jpg'],
      title: 'Social Media Post', tag: 'Social Post', meta: 'Instagram',
      link: ''
    },
    {
      id: 31, tab: 'social', type: 'image', aspect: 'portrait',
      src: ['visuals/marketing.jpg'],
      title: 'Social Media Post', tag: 'Social Post', meta: 'Instagram',
      link: ''
    },
    {
      id: 32, tab: 'social', type: 'image', aspect: 'portrait',
      src: ['visuals/egweek.jpg'],
      title: 'Social Media Post', tag: 'Social Post', meta: 'Instagram',
      link: ''
    },
    {
      id: 33, tab: 'social', type: 'image', aspect: 'square',
      src: ['visuals/master.jpg'],
      title: 'Social Media Post', tag: 'Social Post', meta: 'Instagram',
      link: ''
    },
    {
      id: 34, tab: 'social', type: 'image', aspect: 'portrait',
      src: ['visuals/Straws.jpg'],
      title: 'Social Media Post', tag: 'Social Post', meta: 'Instagram',
      link: ''
    },
    {
      id: 35, tab: 'social', type: 'image', aspect: 'square',
      src: ['visuals/mapa01.jpg'],
      title: 'Social Media Post', tag: 'Social Post', meta: 'Instagram',
      link: ''
    },
    {
      id: 36, tab: 'social', type: 'image', aspect: 'portrait',
      src: ['visuals/Bajram.jpg'],
      title: 'Social Media Post', tag: 'Social Post', meta: 'Instagram',
      link: ''
    },
    {
      id: 37, tab: 'social', type: 'image', aspect: 'square',
      src: ['visuals/bookonline.jpg'],
      title: 'Social Media Post', tag: 'Social Post', meta: 'Instagram',
      link: ''
    },
    {
      id: 38, tab: 'social', type: 'image', aspect: 'portrait',
      src: ['visuals/raspored.jpg'],
      title: 'Social Media Post', tag: 'Social Post', meta: 'Instagram',
      link: ''
    },
    {
      id: 39, tab: 'social', type: 'image', aspect: 'square',
      src: ['visuals/co2.jpg'],
      title: 'Social Media Post', tag: 'Social Post', meta: 'Instagram',
      link: ''
    },
    {
      id: 40, tab: 'social', type: 'image', aspect: 'portrait',
      src: ['visuals/BackToSchool.jpg'],
      title: 'Social Media Post', tag: 'Social Post', meta: 'Instagram',
      link: ''
    },
    {
      id: 41, tab: 'social', type: 'image', aspect: 'square',
      src: ['visuals/enna.jpg'],
      title: 'Social Media Post', tag: 'Social Post', meta: 'Instagram',
      link: ''
    },
    {
      id: 42, tab: 'social', type: 'image', aspect: 'square',
      src: ['visuals/join.jpg'],
      title: 'Social Media Post', tag: 'Social Post', meta: 'Instagram',
      link: ''
    },
    {
      id: 43, tab: 'social', type: 'image', aspect: 'portrait',
      src: ['visuals/promo.jpg'],
      title: 'Social Media Post', tag: 'Social Post', meta: 'Instagram',
      link: ''
    },
    {
      id: 44, tab: 'social', type: 'image', aspect: 'portrait',
      src: ['visuals/may.jpg'],
      title: 'Social Media Post', tag: 'Social Post', meta: 'Instagram',
      link: ''
    },
    {
      id: 45, tab: 'social', type: 'image', aspect: 'portrait',
      src: ['visuals/birth.jpg'],
      title: 'Social Media Post', tag: 'Social Post', meta: 'Instagram',
      link: ''
    },
    {
      id: 46, tab: 'social', type: 'image', aspect: 'square',
      src: ['visuals/th.png'],
      title: 'Social Media Post', tag: 'Social Post', meta: 'Instagram',
      link: ''
    },
    {
      id: 47, tab: 'social', type: 'image', aspect: 'portrait',
      src: ['visuals/weather.jpg'],
      title: 'Social Media Post', tag: 'Social Post', meta: 'Instagram',
      link: ''
    },
    {
      id: 48, tab: 'social', type: 'image', aspect: 'portrait',
      src: ['visuals/aclass.jpg'],
      title: 'Social Media Post', tag: 'Social Post', meta: 'Instagram',
      link: ''
    },
    {
      id: 49, tab: 'social', type: 'image', aspect: 'square',
      src: ['visuals/welcome.png'],
      title: 'Social Media Post', tag: 'Social Post', meta: 'Instagram',
      link: ''
    },
    {
      id: 50, tab: 'social', type: 'image', aspect: 'square',
      src: ['visuals/Skopje.png'],
      title: 'Social Media Post', tag: 'Social Post', meta: 'Instagram',
      link: ''
    },
    {
      id: 51, tab: 'social', type: 'image', aspect: 'portrait',
      src: ['visuals/hrgjuli.jpg'],
      title: 'Social Media Post', tag: 'Social Post', meta: 'Instagram',
      link: ''
    },
    {
      id: 52, tab: 'social', type: 'image', aspect: 'portrait',
      src: ['visuals/iftar.jpg'],
      title: 'Social Media Post', tag: 'Social Post', meta: 'Instagram',
      link: ''
    },
    {
      id: 53, tab: 'social', type: 'image', aspect: 'square',
      src: ['visuals/70.jpg'],
      title: 'Social Media Post', tag: 'Social Post', meta: 'Instagram',
      link: ''
    },
    {
      id: 54, tab: 'social', type: 'image', aspect: 'square',
      src: ['visuals/greet1.jpg'],
      title: 'Social Media Post', tag: 'Social Post', meta: 'Instagram',
      link: ''
    },
    {
      id: 55, tab: 'social', type: 'image', aspect: 'portrait',
      src: ['visuals/school.jpg'],
      title: 'Social Media Post', tag: 'Social Post', meta: 'Instagram',
      link: ''
    },
    {
      id: 56, tab: 'social', type: 'image', aspect: 'square',
      src: ['visuals/mesec.jpg'],
      title: 'Social Media Post', tag: 'Social Post', meta: 'Instagram',
      link: ''
    },
    {
      id: 57, tab: 'social', type: 'image', aspect: 'portrait',
      src: ['visuals/krstozbor.jpg'],
      title: 'Social Media Post', tag: 'Social Post', meta: 'Instagram',
      link: ''
    },
    {
      id: 58, tab: 'social', type: 'image', aspect: 'square',
      src: ['visuals/hommex.jpg'],
      title: 'Social Media Post', tag: 'Social Post', meta: 'Instagram',
      link: ''
    },
    {
      id: 59, tab: 'social', type: 'image', aspect: 'square',
      src: ['visuals/rent.jpg'],
      title: 'Social Media Post', tag: 'Social Post', meta: 'Instagram',
      link: ''
    },
    {
      id: 60, tab: 'social', type: 'image', aspect: 'square',
      src: ['visuals/about.png'],
      title: 'Social Media Post', tag: 'Social Post', meta: 'Instagram',
      link: ''
    },
    {
      id: 61, tab: 'social', type: 'image', aspect: 'square',
      src: ['visuals/opp.jpg'],
      title: 'Social Media Post', tag: 'Social Post', meta: 'Instagram',
      link: ''
    },
    {
      id: 62, tab: 'social', type: 'image', aspect: 'square',
      src: ['visuals/plant.JPG'],
      title: 'Social Media Post', tag: 'Social Post', meta: 'Instagram',
      link: ''
    },
    {
      id: 63, tab: 'social', type: 'image', aspect: 'square',
      src: ['visuals/HH.jpg'],
      title: 'Social Media Post', tag: 'Social Post', meta: 'Instagram',
      link: ''
    },
    {
      id: 64, tab: 'social', type: 'image', aspect: 'portrait',
      src: ['visuals/7p.png'],
      title: 'Social Media Post', tag: 'Social Post', meta: 'Instagram',
      link: ''
    },
    {
      id: 65, tab: 'social', type: 'image', aspect: 'square',
      src: ['visuals/mario.jpg'],
      title: 'Social Media Post', tag: 'Social Post', meta: 'Instagram',
      link: ''
    },

    {
      id: 70, tab: 'social', type: 'image', aspect: 'square',
      src: ['visuals/champs.jpg'],
      title: 'Social Media Post', tag: 'Social Post', meta: 'Instagram',
      link: ''
    },

    {
      id: 66, tab: 'social', type: 'image', aspect: 'story',
      src: ['visuals/ig.jpg'],
      title: 'Social Media Post', tag: 'Social Post', meta: 'Instagram',
      link: ''
    },
    {
      id: 67, tab: 'social', type: 'image', aspect: 'portrait',
      src: ['visuals/midnight.jpg'],
      title: 'Social Media Post', tag: 'Social Post', meta: 'Instagram',
      link: ''
    },
    {
      id: 68, tab: 'social', type: 'image', aspect: 'portrait',
      src: ['visuals/behind.jpg'],
      title: 'Social Media Post', tag: 'Social Post', meta: 'Instagram',
      link: ''
    },
    {
      id: 69, tab: 'social', type: 'image', aspect: 'portrait',
      src: ['visuals/vreme.jpg'],
      title: 'Social Media Post', tag: 'Social Post', meta: 'Instagram',
      link: ''
    },
    {
      id: 70, tab: 'social', type: 'image', aspect: 'square',
      src: ['visuals/imposible.jpg'],
      title: 'Social Media Post', tag: 'Social Post', meta: 'Instagram',
      link: ''
    },
    {
      id: 71, tab: 'social', type: 'image', aspect: 'portrait',
      src: ['visuals/bansko-zima.jpg'],
      title: 'Social Media Post', tag: 'Social Post', meta: 'Instagram',
      link: ''
    },

    {
      id: 101, tab: 'video', type: 'video', aspect: 'landscape',
      src: 'visuals/fibu.JPG',
      title: 'Video Post', tag: 'Video / Reel', meta: 'Event Video',
      link: 'https://www.youtube.com/watch?v=JraB2J3aNh8'
    },
    {
      id: 102, tab: 'video', type: 'video', aspect: 'story',
      src: 'visuals/Idylic.JPG',
      title: 'Video Post', tag: 'Video / Reel', meta: 'Instagram',
      link: 'https://www.instagram.com/reel/DYHOi_cAK6p/'
    },
    {
      id: 103, tab: 'video', type: 'video', aspect: 'story',
      src: 'visuals/plostad.JPG',
      title: 'Video Post', tag: 'Video / Reel', meta: 'Instagram',
      link: 'https://www.instagram.com/p/DX_PHDrlI17/'
    },
    {
      id: 104, tab: 'video', type: 'video', aspect: 'story',
      src: 'visuals/desertdays.JPG',
      title: 'Video Post', tag: 'Video / Reel', meta: 'Instagram / TikTok',
      link: 'https://www.instagram.com/reel/DTIjd7qjNcr/'
    },
    {
      id: 105, tab: 'video', type: 'video', aspect: 'story',
      src: 'visuals/grcijahotel.JPG',
      title: 'Video Post', tag: 'Video / Reel', meta: 'Instagram / TikTok',
      link: 'https://www.instagram.com/reel/DUS7ONejyiU/'
    },
    {
      id: 106, tab: 'video', type: 'video', aspect: 'square',
      src: 'visuals/deka.JPG',
      title: 'Video Post', tag: 'Campaign', meta: 'Facebook / Instagram',
      link: 'https://www.linkedin.com/feed/update/urn:li:activity:7425078362856960000'
    },
    {
      id: 107, tab: 'video', type: 'video', aspect: 'square',
      src: 'visuals/easter.JPG',
      title: 'Video Post', tag: 'Campaign', meta: 'Facebook / Instagram',
      link: 'https://www.linkedin.com/feed/update/urn:li:activity:7445762856467341312'
    },
    {
      id: 108, tab: 'video', type: 'video', aspect: 'story',
      src: 'visuals/bodrum.JPG',
      title: 'Video Post', tag: 'Campaign', meta: 'Facebook / Instagram',
      link: 'https://www.instagram.com/reel/DYOlBZ8jAxw/'
    },
    {
      id: 109, tab: 'video', type: 'video', aspect: 'story',
      src: 'visuals/wow.jpg',
      title: 'Video Post', tag: 'Campaign', meta: 'Facebook / Instagram',
      link: 'https://www.fibula.mk/'
    },
    {
      id: 110, tab: 'video', type: 'video', aspect: 'story',
      src: 'visuals/ws26.jpg',
      title: 'Video Post', tag: 'Campaign', meta: 'Facebook / Instagram',
      link: 'https://www.instagram.com/reel/DXgzEJeDQWG/'
    },

    {
      id: 201, tab: 'brand', type: 'image', aspect: 'landscape',
      src: [
        'visuals/ws26/materials/23.jpg',
        'visuals/ws26/materials/01.jpg',
        'visuals/ws26/materials/02.jpg',
        'visuals/ws26/materials/03.jpg',
        'visuals/ws26/materials/04.jpg',
        'visuals/ws26/materials/05.jpg',
        'visuals/ws26/materials/06.jpg',
        'visuals/ws26/materials/07.jpg',
        'visuals/ws26/materials/08.jpg',
        'visuals/ws26/materials/09.jpg',
        'visuals/ws26/materials/10.jpg',
        'visuals/ws26/materials/11.jpg',
        'visuals/ws26/materials/12.jpg',
        'visuals/ws26/materials/13.jpg',
        'visuals/ws26/materials/14.jpg',
        'visuals/ws26/materials/15.jpg',
        'visuals/ws26/materials/16.jpg',
        'visuals/ws26/materials/17.jpg',
        'visuals/ws26/materials/18.jpg',
        'visuals/ws26/materials/19.jpg',
        'visuals/ws26/materials/20.jpg',
        'visuals/ws26/materials/21.jpg',
        'visuals/ws26/materials/22.jpg',
        'visuals/ws26/materials/24.jpg',
        'visuals/ws26/materials/25.jpg',
      ],
      title: 'Logo System & Guidelines', tag: 'Branding', meta: '2023',
      link: ''
    },

    {
      id: 301, tab: 'event', type: 'image', aspect: 'landscape',
      src: [
        'visuals/ws26/01.png',
        'visuals/ws26/02.png',
        'visuals/ws26/03.png',
        'visuals/ws26/04.png',
        'visuals/ws26/05.png',
        'visuals/ws26/06.png',
        'visuals/ws26/07.png',
        'visuals/ws26/08.png',
        'visuals/ws26/09.png',
        'visuals/ws26/10.png',
        'visuals/ws26/11.png',
        'visuals/ws26/12.png',
        'visuals/ws26/13.png',
        'visuals/ws26/14.png',
        'visuals/ws26/15.png',
        'visuals/ws26/16.png',
        'visuals/ws26/17.png',
      ],
      title: 'Brand Identity — Retail', tag: 'Branding', meta: '2024',
      link: ''
    },
  ];

  const ASPECT_RATIOS = {
    portrait:  '4 / 5',
    story:     '9 / 16',
    square:    '1 / 1',
    landscape: '16 / 9',
  };

  const ASPECT_LABELS = {
    portrait:  '4:5',
    story:     '9:16',
    square:    '1:1',
    landscape: '16:9',
  };

  const TYPE_ICON  = { image: 'image', video: 'play_circle' };
  const TYPE_LABEL = { image: 'Image', video: 'Video' };

  function getSrcs(item) {
    return Array.isArray(item.src) ? item.src : [item.src];
  }

  const grid    = document.getElementById('work-grid');
  const empty   = document.getElementById('work-empty');
  const countEl = document.getElementById('work-count');

  function render(tab) {
    const items = tab === 'all' ? WORK : WORK.filter(w => w.tab === tab);
    grid.innerHTML = '';

    if (!items.length) {
      empty.classList.add('is-visible');
      countEl.textContent = '';
      return;
    }

    empty.classList.remove('is-visible');
    countEl.textContent = items.length + ' piece' + (items.length !== 1 ? 's' : '');

    items.forEach((item) => {
      const srcs      = getSrcs(item);
      const thumbnail = srcs[0];
      const hasMany   = srcs.length > 1;

      const el = document.createElement('div');
      el.className = 'work__item' + (item.type === 'video' ? ' work__item--video' : '');
      el.setAttribute('tabindex', '0');
      el.setAttribute('role', 'button');
      el.setAttribute('aria-label', 'View: ' + item.title);

      el.innerHTML = `
        <img
          class="work__item-img"
          src="${thumbnail}"
          alt="${item.title}"
          loading="lazy"
          style="aspect-ratio: ${ASPECT_RATIOS[item.aspect] || '4/5'}; object-fit: cover;"
        />
        <div class="work__item-overlay">
          <span class="work__item-tag">${item.tag}</span>
          <p class="work__item-title">${item.title}</p>
          <p class="work__item-meta">${item.meta}</p>
        </div>
        <span class="work__item-type">
          <span class="material-symbols-outlined">${TYPE_ICON[item.type] || 'image'}</span>
          ${TYPE_LABEL[item.type] || 'Image'}
        </span>
        ${hasMany ? `<span class="work__item-count"><span class="material-symbols-outlined">photo_library</span>${srcs.length}</span>` : ''}
        <span class="work__item-format">${ASPECT_LABELS[item.aspect] || ''}</span>
      `;

      el.addEventListener('click', () => openLightbox(item));
      el.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') openLightbox(item); });

      grid.appendChild(el);
    });
  }

  document.querySelectorAll('.work__tab').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.work__tab').forEach(b => b.classList.remove('is-active'));
      btn.classList.add('is-active');
      render(btn.dataset.tab);
    });
  });

  render('all');

  const lb        = document.getElementById('work-lightbox');
  const lbImg     = document.getElementById('lb-img');
  const lbCap     = document.getElementById('lb-caption');
  const lbClose   = document.getElementById('lb-close');
  const lbPrev    = document.getElementById('lb-prev');
  const lbNext    = document.getElementById('lb-next');
  const lbView    = document.getElementById('lb-view');
  const lbCounter = document.getElementById('lb-counter');

  let currentItem  = null;
  let currentSrcs  = [];
  let currentSlide = 0;

  function openLightbox(item) {
    currentItem  = item;
    currentSrcs  = getSrcs(item);
    currentSlide = 0;
    renderSlide();
    lb.classList.add('is-open');
    document.body.style.overflow = 'hidden';
    lbClose.focus();
  }

  function closeLightbox() {
    lb.classList.remove('is-open');
    document.body.style.overflow = '';
  }

  function renderSlide() {
    const total = currentSrcs.length;
    lbImg.src = currentSrcs[currentSlide];
    lbImg.alt = currentItem.title;
    lbCap.textContent = currentItem.title + ' — ' + currentItem.meta;
    lbPrev.style.visibility = currentSlide > 0         ? 'visible' : 'hidden';
    lbNext.style.visibility = currentSlide < total - 1 ? 'visible' : 'hidden';
    if (lbCounter) {
      if (total > 1) {
        lbCounter.textContent = (currentSlide + 1) + ' / ' + total;
        lbCounter.style.display = 'block';
      } else {
        lbCounter.style.display = 'none';
      }
    }
    if (lbView) {
      if (currentItem.link && currentItem.link.trim() !== '') {
        lbView.href = currentItem.link;
        lbView.classList.add('is-visible');
      } else {
        lbView.href = '#';
        lbView.classList.remove('is-visible');
      }
    }
  }

  lbClose.addEventListener('click', closeLightbox);
  lbPrev.addEventListener('click', () => { if (currentSlide > 0) { currentSlide--; renderSlide(); } });
  lbNext.addEventListener('click', () => { if (currentSlide < currentSrcs.length - 1) { currentSlide++; renderSlide(); } });
  lb.addEventListener('click', e => { if (e.target === lb) closeLightbox(); });
  document.addEventListener('keydown', e => {
    if (!lb.classList.contains('is-open')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft'  && currentSlide > 0)                      { currentSlide--; renderSlide(); }
    if (e.key === 'ArrowRight' && currentSlide < currentSrcs.length - 1) { currentSlide++; renderSlide(); }
  });

})();

(function () {
  const form   = document.getElementById('contact-form');
  const status = document.getElementById('cf-status');
  const submit = document.getElementById('cf-submit');
  const yearEl = document.getElementById('cf-year');

  if (yearEl) yearEl.textContent = new Date().getFullYear();
  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    status.textContent = '';
    status.className = 'contact__status';
    submit.disabled = true;
    submit.querySelector('.contact__submit-text').textContent = 'Sending\u2026';

    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { 'Accept': 'application/json' }
      });
      if (response.ok) {
        status.textContent = 'Message sent \u2014 thanks, I\u2019ll be in touch soon.';
        status.classList.add('is-success');
        form.reset();
      } else {
        const data = await response.json().catch(() => ({}));
        const msg = data.errors
          ? data.errors.map(err => err.message).join(', ')
          : 'Something went wrong. Please email me directly.';
        status.textContent = msg;
        status.classList.add('is-error');
      }
    } catch (err) {
      status.textContent = 'Network error. Please email me directly.';
      status.classList.add('is-error');
    } finally {
      submit.disabled = false;
      submit.querySelector('.contact__submit-text').textContent = 'Send Message';
    }
  });
})();

(function () {
  const burger   = document.getElementById('nav-burger');
  const menu     = document.getElementById('mobile-menu');
  const overlay  = document.getElementById('mobile-overlay');
  const closeBtn = document.getElementById('mobile-close');
  const links    = document.querySelectorAll('.mobile-menu__link');

  if (!burger || !menu || !overlay) return;

  function openMenu() {
    burger.classList.add('is-open');
    menu.classList.add('is-open');
    overlay.classList.add('is-open');
    burger.setAttribute('aria-expanded', 'true');
    burger.setAttribute('aria-label', 'Close menu');
    menu.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    burger.classList.remove('is-open');
    menu.classList.remove('is-open');
    overlay.classList.remove('is-open');
    burger.setAttribute('aria-expanded', 'false');
    burger.setAttribute('aria-label', 'Open menu');
    menu.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  function toggleMenu() {
    if (menu.classList.contains('is-open')) closeMenu();
    else openMenu();
  }

  burger.addEventListener('click', toggleMenu);
  overlay.addEventListener('click', closeMenu);
  if (closeBtn) closeBtn.addEventListener('click', closeMenu);
  links.forEach(link => link.addEventListener('click', closeMenu));
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && menu.classList.contains('is-open')) closeMenu();
  });
  window.addEventListener('resize', () => {
    if (window.innerWidth > 768 && menu.classList.contains('is-open')) closeMenu();
  });
})();