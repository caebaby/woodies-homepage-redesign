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
  midtown: {
    name: 'Midtown',
    address: '915 South McDowell St., Charlotte, NC 28204',
    hours: 'Monday–Friday, 7:00 AM–6:00 PM',
    phone: '(704) 837-7487',
    phoneHref: 'tel:+17048377487',
    directions: 'https://www.woodiesautoservice.com/locations/charlotte-nc/midtown',
    latitude: 35.2144601,
    longitude: -80.8434013
  },
  ballantyne: {
    name: 'Ballantyne',
    address: '14408 Adair Manor Ct., Charlotte, NC 28277',
    hours: 'Monday–Friday, 7:00 AM–7:00 PM · Saturday, 7:00 AM–5:00 PM',
    phone: '(704) 954-8446',
    phoneHref: 'tel:+17049548446',
    directions: 'https://www.woodiesautoservice.com/locations/charlotte-nc/ballantyne',
    latitude: 35.0504664,
    longitude: -80.8666817
  },
  'carmel-road': {
    name: 'Carmel Road',
    address: '6625 Carmel Rd., Charlotte, NC 28226',
    hours: 'Monday–Friday, 7:00 AM–7:00 PM · Saturday, 7:00 AM–5:00 PM',
    phone: '(704) 837-4380',
    phoneHref: 'tel:+17048374380',
    directions: 'https://www.woodiesautoservice.com/locations/charlotte-nc/carmel-road',
    latitude: 35.0868117,
    longitude: -80.8452639
  },
  arrowood: {
    name: 'Arrowood',
    address: '2201 W Arrowood Rd., Charlotte, NC 28217',
    hours: 'Monday–Friday, 7:00 AM–6:00 PM · Saturday, 7:00 AM–5:00 PM',
    phone: '(704) 624-7650',
    phoneHref: 'tel:+17046247650',
    directions: 'https://www.woodiesautoservice.com/locations/charlotte-nc/arrowood',
    latitude: 35.146058,
    longitude: -80.924542
  },
  uptown: {
    name: 'Uptown',
    address: '520 North Tryon St., Charlotte, NC 28202',
    hours: 'Monday–Friday, 7:00 AM–6:00 PM · Saturday, 8:00 AM–4:00 PM',
    phone: '(704) 802-5437',
    phoneHref: 'tel:+17048025437',
    directions: 'https://www.woodiesautoservice.com/locations/charlotte-nc/uptown',
    latitude: 35.2303849,
    longitude: -80.838382
  },
  charlottetowne: {
    name: 'Charlottetowne Avenue',
    address: '1024 Charlottetowne Ave., Charlotte, NC 28204',
    hours: 'Monday–Friday, 7:00 AM–6:00 PM',
    phone: '(704) 817-4140',
    phoneHref: 'tel:+17048174140',
    directions: 'https://www.woodiesautoservice.com/locations/charlotte-nc/charlottetowne-avenue',
    latitude: 35.2141237,
    longitude: -80.8305497
  },
  'ashley-road': {
    name: 'Ashley Road',
    address: '1404 Ashley Road, Charlotte, NC 28208',
    hours: 'Monday–Friday, 7:00 AM–6:00 PM · Saturday, 7:00 AM–3:00 PM',
    phone: '(704) 445-9063',
    phoneHref: 'tel:+17044459063',
    directions: 'https://www.woodiesautoservice.com/locations/charlotte-nc/ashley-road',
    latitude: 35.2429375,
    longitude: -80.897965
  },
  'mallard-crossing': {
    name: 'Mallard Crossing',
    address: '3016 Prosperity Church Road, Charlotte, NC 28269',
    hours: 'Monday–Friday, 7:00 AM–7:00 PM · Saturday, 7:00 AM–5:00 PM',
    phone: '(704) 288-3284',
    phoneHref: 'tel:+17042883284',
    directions: 'https://www.woodiesautoservice.com/locations/charlotte-nc/mallard-crossing',
    latitude: 35.3430622,
    longitude: -80.7684402
  },
  'mint-hill': {
    name: 'Mint Hill',
    address: '9107 Lawyers Road, Mint Hill, NC 28227',
    hours: 'Monday–Friday, 7:00 AM–7:00 PM · Saturday, 7:00 AM–5:00 PM',
    phone: '(704) 209-7056',
    phoneHref: 'tel:+17042097056',
    directions: 'https://www.woodiesautoservice.com/locations/mint-hill-nc/mint-hill',
    latitude: 35.1882612,
    longitude: -80.689842
  },
  matthews: {
    name: 'Matthews',
    address: '10725 Monroe Road, Matthews, NC 28105',
    hours: 'Monday–Friday, 7:00 AM–7:00 PM · Saturday, 7:00 AM–5:00 PM',
    phone: '(980) 245-4790',
    phoneHref: 'tel:+19802454790',
    directions: 'https://www.woodiesautoservice.com/locations/matthews-nc/matthews',
    latitude: 35.1277477,
    longitude: -80.7306115
  },
  huntersville: {
    name: 'Huntersville',
    address: '9745 Rose Commons Dr., Huntersville, NC 28078',
    hours: 'Monday–Friday, 7:00 AM–7:00 PM · Saturday, 7:00 AM–5:00 PM',
    phone: '(704) 885-5193',
    phoneHref: 'tel:+17048855193',
    directions: 'https://www.woodiesautoservice.com/locations/huntersville-nc/huntersville',
    latitude: 35.408285,
    longitude: -80.8652441
  },
  davidson: {
    name: 'Davidson',
    address: '179 Davidson Gateway Dr., Davidson, NC 28036',
    hours: 'Monday–Friday, 7:00 AM–7:00 PM · Saturday, 7:00 AM–5:00 PM',
    phone: '(980) 231-1123',
    phoneHref: 'tel:+19802311123',
    directions: 'https://www.woodiesautoservice.com/locations/davidson-nc/davidson',
    latitude: 35.5012915,
    longitude: -80.8584823
  },
  'indian-land': {
    name: 'Indian Land',
    address: '9528 Charlotte Hwy., Indian Land, SC 29707',
    hours: 'Monday–Friday, 7:00 AM–6:00 PM · Saturday, 7:00 AM–5:00 PM',
    phone: '(803) 253-2181',
    phoneHref: 'tel:+18032532181',
    directions: 'https://www.woodiesautoservice.com/locations/indian-land-sc/indian-land',
    latitude: 34.9929118,
    longitude: -80.8542678
  },
  'fort-mill': {
    name: "Fort Mill at Doby's Bridge",
    address: '290 N. Dobys Bridge Rd., Fort Mill, SC 29715',
    hours: 'Monday–Friday, 7:00 AM–7:00 PM · Saturday, 7:00 AM–5:00 PM',
    phone: '(803) 232-5447',
    phoneHref: 'tel:+18032325447',
    directions: 'https://www.woodiesautoservice.com/locations/fort-mill-sc/fort-mill-doby-s-bridge',
    latitude: 35.0066862,
    longitude: -80.9323658
  },
  celanese: {
    name: 'Celanese',
    address: '2615 Celanese Road, Rock Hill, SC 29732',
    hours: 'Monday–Friday, 7:00 AM–7:00 PM · Saturday, 7:00 AM–5:00 PM',
    phone: '(803) 578-7984',
    phoneHref: 'tel:+18035787984',
    directions: 'https://www.woodiesautoservice.com/locations/rock-hill-sc/celanese',
    latitude: 34.9760883,
    longitude: -81.0172958
  },
  'savannah-hwy': {
    name: 'Savannah Highway',
    address: '1905 Savannah Hwy, Charleston, SC 29407',
    hours: 'Monday–Friday, 7:00 AM–7:00 PM · Saturday, 7:00 AM–5:00 PM',
    phone: '(843) 377-9880',
    phoneHref: 'tel:+18433779880',
    directions: 'https://www.woodiesautoservice.com/locations/charleston-sc/savannah-hwy',
    latitude: 32.7886425,
    longitude: -80.0230998
  },
  eagle: {
    name: 'Eagle',
    address: '830 Dupont Rd., Charleston, SC 29407',
    hours: 'Monday–Thursday, 8:00 AM–6:00 PM · Friday, 8:00 AM–5:00 PM',
    phone: '(843) 408-0809',
    phoneHref: 'tel:+18434080809',
    directions: 'https://www.woodiesautoservice.com/locations/charleston-sc/eagle',
    latitude: 32.794796,
    longitude: -80.0257458
  },
  'east-cooper': {
    name: 'East Cooper',
    address: '1395 Stuart Engals Blvd., Mount Pleasant, SC 29464',
    hours: 'Monday–Friday, 8:00 AM–5:00 PM',
    phone: '(843) 849-1770',
    phoneHref: 'tel:+18438491770',
    directions: 'https://www.woodiesautoservice.com/locations/mount-pleasant-sc/east-cooper',
    latitude: 32.8099295,
    longitude: -79.8490264
  },
  summerville: {
    name: 'Summerville',
    address: '427 Old Trolley Road, Summerville, SC 29485',
    hours: 'Monday–Friday, 7:00 AM–7:00 PM · Saturday, 7:00 AM–5:00 PM',
    phone: '(843) 420-3000',
    phoneHref: 'tel:+18434203000',
    directions: 'https://www.woodiesautoservice.com/locations/summerville-sc/summerville',
    latitude: 32.9831237,
    longitude: -80.1755932
  },
  'downtown-summerville': {
    name: 'Downtown Summerville',
    address: '114 East 5th North Street, Summerville, SC 29483',
    hours: 'Monday–Friday, 7:00 AM–7:00 PM · Saturday, 7:00 AM–5:00 PM',
    phone: '(843) 936-1183',
    phoneHref: 'tel:+18439361183',
    directions: 'https://www.woodiesautoservice.com/locations/summerville-sc/woodie-s-auto-service---repair-centers---downtown-summerville',
    latitude: 33.0261905,
    longitude: -80.1699931
  }
};

const areaSelect = document.querySelector('#area-select');
const shopName = document.querySelector('#shop-name');
const shopAddress = document.querySelector('#shop-address');
const shopHours = document.querySelector('#shop-hours');
const shopCall = document.querySelector('#shop-call');
const shopDirections = document.querySelector('#shop-directions');
const locationStatus = document.querySelector('#location-status');
const assessmentCall = document.querySelector('#assessment-call');

const showLocation = (locationId) => {
  const location = locations[locationId];
  if (!location || !areaSelect) return;

  areaSelect.value = locationId;
  shopName.textContent = location.name;
  shopAddress.textContent = location.address;
  shopHours.textContent = location.hours;
  shopCall.textContent = `Call ${location.phone}`;
  shopCall.href = location.phoneHref;
  shopDirections.href = location.directions;
  if (assessmentCall) {
    assessmentCall.textContent = `Call ${location.name}`;
    assessmentCall.href = location.phoneHref;
  }
};

const distanceInMiles = (fromLatitude, fromLongitude, toLatitude, toLongitude) => {
  const toRadians = (degrees) => degrees * (Math.PI / 180);
  const earthRadiusMiles = 3958.8;
  const latitudeDelta = toRadians(toLatitude - fromLatitude);
  const longitudeDelta = toRadians(toLongitude - fromLongitude);
  const startLatitude = toRadians(fromLatitude);
  const endLatitude = toRadians(toLatitude);
  const haversine = Math.sin(latitudeDelta / 2) ** 2
    + Math.cos(startLatitude) * Math.cos(endLatitude) * Math.sin(longitudeDelta / 2) ** 2;

  return 2 * earthRadiusMiles * Math.asin(Math.sqrt(haversine));
};

const findNearestLocation = (latitude, longitude) => Object.entries(locations).reduce((nearest, [id, location]) => {
  const miles = distanceInMiles(latitude, longitude, location.latitude, location.longitude);
  return !nearest || miles < nearest.miles ? { id, miles } : nearest;
}, null);

areaSelect?.addEventListener('change', () => {
  showLocation(areaSelect.value);
  if (locationStatus) {
    locationStatus.dataset.state = 'success';
    locationStatus.textContent = 'Showing the shop you selected. You can change it anytime.';
  }
});

const detectNearestLocation = async () => {
  if (!areaSelect || !locationStatus) return;

  const controller = new AbortController();
  const timeout = window.setTimeout(() => controller.abort(), 4500);

  try {
    const response = await fetch('https://ipapi.co/json/', {
      cache: 'no-store',
      referrerPolicy: 'no-referrer',
      signal: controller.signal
    });

    if (!response.ok) throw new Error('Location lookup failed');

    const approximateArea = await response.json();
    const latitude = Number(approximateArea.latitude);
    const longitude = Number(approximateArea.longitude);
    if (!Number.isFinite(latitude) || !Number.isFinite(longitude)) throw new Error('Location unavailable');

    const nearest = findNearestLocation(latitude, longitude);
    if (!nearest) throw new Error('No shop found');

    showLocation(nearest.id);
    const distance = nearest.miles < 10 ? nearest.miles.toFixed(1) : Math.round(nearest.miles);
    const area = [approximateArea.city, approximateArea.region_code].filter(Boolean).join(', ');
    locationStatus.dataset.state = 'success';
    locationStatus.textContent = `Closest based on your approximate area${area ? ` near ${area}` : ''}: about ${distance} miles away.`;
  } catch (error) {
    locationStatus.dataset.state = 'error';
    locationStatus.textContent = 'We could not estimate your area. Choose any shop from the list.';
  } finally {
    window.clearTimeout(timeout);
  }
};

detectNearestLocation();

const assessmentForm = document.querySelector('#vehicle-assessment');
const assessmentSteps = document.querySelectorAll('.assessment-step');
const assessmentProgress = document.querySelector('#assessment-progress');
const assessmentProgressLabel = document.querySelector('#assessment-progress-label');
const assessmentBack = document.querySelector('#assessment-back');
const assessmentRestart = document.querySelector('#assessment-restart');
const assessmentResult = document.querySelector('#assessment-result');
const assessmentResultTitle = document.querySelector('#assessment-result-title');
const assessmentResultGuidance = document.querySelector('#assessment-result-guidance');
const assessmentResultCauses = document.querySelector('#assessment-result-causes');
const assessmentError = document.querySelector('#assessment-error');

const assessmentProfiles = {
  warning: {
    title: 'A warning light is worth a proper scan.',
    guidance: 'The light can point to anything from a loose sensor to a system fault. Reading the stored diagnostic codes is the fastest way to narrow it down.',
    checks: ['Diagnostic trouble codes and related sensors', 'Battery and charging performance', 'Engine, emissions, or transmission systems']
  },
  noise: {
    title: 'A new sound usually gives the technician a useful clue.',
    guidance: 'When the sound happens, its pitch, and whether it changes with speed can help isolate the source.',
    checks: ['Brakes, suspension, and steering components', 'Belts, pulleys, and engine accessories', 'Tires, wheels, and wheel bearings']
  },
  handling: {
    title: 'Changes in braking or steering deserve a prompt inspection.',
    guidance: 'Pulling, shaking, a soft pedal, or extra steering effort can affect safe control of the vehicle.',
    checks: ['Brake pads, rotors, fluid, and hydraulics', 'Tire condition, pressure, and alignment', 'Steering and suspension components']
  },
  power: {
    title: 'Starting trouble or lost power can come from several systems.',
    guidance: 'A technician can test the electrical system first, then trace fuel, air, and ignition performance if needed.',
    checks: ['Battery, alternator, and cable connections', 'Starter and ignition components', 'Fuel delivery and air intake systems']
  },
  heat: {
    title: 'Heat, smoke, strong smells, or fluid leaks need quick attention.',
    guidance: 'These symptoms can worsen quickly. Avoid opening a hot cooling system and do not ignore smoke or a fuel smell.',
    checks: ['Cooling system, hoses, radiator, and thermostat', 'Engine oil and other fluid leaks', 'Electrical wiring, belts, and hot components']
  }
};

const urgencyGuidance = {
  normal: 'The vehicle may still feel normal, but scheduling an inspection now can keep the concern from becoming a larger repair.',
  worse: 'Limit unnecessary driving and schedule service soon. Stop driving if the symptom changes suddenly or a warning begins flashing.',
  unsafe: 'Do not continue driving if you cannot control the vehicle, smell fuel, see smoke, or see a flashing warning light. Pull over safely and call for assistance.'
};

const setAssessmentStep = (stepNumber) => {
  assessmentSteps.forEach((step) => {
    step.hidden = Number(step.dataset.step) !== stepNumber;
  });
  if (assessmentResult) assessmentResult.hidden = true;
  if (assessmentProgress) assessmentProgress.value = stepNumber;
  if (assessmentProgressLabel) assessmentProgressLabel.textContent = `Question ${stepNumber} of 2`;
  if (assessmentError) assessmentError.hidden = true;
};

assessmentForm?.querySelectorAll('input[name="symptom"]').forEach((input) => {
  input.addEventListener('change', () => setAssessmentStep(2));
});

assessmentBack?.addEventListener('click', () => setAssessmentStep(1));

assessmentForm?.addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = new FormData(assessmentForm);
  const symptom = formData.get('symptom');
  const urgency = formData.get('urgency');
  const profile = assessmentProfiles[symptom];

  if (!urgency) {
    if (assessmentError) assessmentError.hidden = false;
    return;
  }
  if (!profile) {
    setAssessmentStep(1);
    return;
  }

  assessmentSteps.forEach((step) => { step.hidden = true; });
  assessmentResultTitle.textContent = profile.title;
  assessmentResultGuidance.textContent = `${profile.guidance} ${urgencyGuidance[urgency]}`;
  assessmentResultCauses.replaceChildren(...profile.checks.map((check) => {
    const item = document.createElement('li');
    item.textContent = check;
    return item;
  }));
  assessmentResult.hidden = false;
  assessmentProgress.value = 2;
  assessmentProgressLabel.textContent = 'Guidance ready';
  assessmentResult.focus?.();
});

assessmentRestart?.addEventListener('click', () => {
  assessmentForm.reset();
  setAssessmentStep(1);
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
