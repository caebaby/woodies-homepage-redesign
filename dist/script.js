const menuButton = document.querySelector('.menu-toggle');
const primaryNav = document.querySelector('.primary-nav');

menuButton?.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!open));
  primaryNav.classList.toggle('is-open', !open);
});

primaryNav?.addEventListener('click', (event) => {
  if (event.target instanceof HTMLAnchorElement) {
    menuButton?.setAttribute('aria-expanded', 'false');
    primaryNav.classList.remove('is-open');
  }
});

const locations = {
  charlotte: {
    name: 'Midtown',
    address: '915 South McDowell St., Charlotte, NC 28204',
    hours: 'Monday–Friday, 7:00 AM–6:00 PM',
    phone: '(704) 837-7487',
    phoneHref: 'tel:+17048377487',
    directions: 'https://www.woodiesautoservice.com/locations/charlotte-nc/midtown'
  },
  charleston: {
    name: 'Savannah Highway',
    address: '1905 Savannah Hwy, Charleston, SC 29407',
    hours: 'Monday–Friday, 7:00 AM–7:00 PM · Saturday, 7:00 AM–5:00 PM',
    phone: '(843) 377-9880',
    phoneHref: 'tel:+18433779880',
    directions: 'https://www.woodiesautoservice.com/locations/charleston-sc/savannah-hwy'
  },
  'rock-hill': {
    name: 'Celanese',
    address: '2615 Celanese Road, Rock Hill, SC 29732',
    hours: 'Monday–Friday, 7:00 AM–7:00 PM · Saturday, 7:00 AM–5:00 PM',
    phone: '(803) 578-7984',
    phoneHref: 'tel:+18035787984',
    directions: 'https://www.woodiesautoservice.com/locations/rock-hill-sc/celanese'
  }
};

const areaSelect = document.querySelector('#area-select');
const shopName = document.querySelector('#shop-name');
const shopAddress = document.querySelector('#shop-address');
const shopHours = document.querySelector('#shop-hours');
const shopCall = document.querySelector('#shop-call');
const shopDirections = document.querySelector('#shop-directions');

areaSelect?.addEventListener('change', () => {
  const location = locations[areaSelect.value];
  if (!location) return;

  shopName.textContent = location.name;
  shopAddress.textContent = location.address;
  shopHours.textContent = location.hours;
  shopCall.textContent = `Call ${location.phone}`;
  shopCall.href = location.phoneHref;
  shopDirections.href = location.directions;
});

if ('IntersectionObserver' in window && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));
} else {
  document.querySelectorAll('.reveal').forEach((element) => element.classList.add('is-visible'));
}
