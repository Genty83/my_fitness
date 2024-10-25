
const eventHandler = (type, selectpr, callback, options) => {
  document.addEventListener(type, (e) => {
    if (e.target.matches(selectpr)) {
      callback(e);
    }
  }, options);
}




document.addEventListener('DOMContentLoaded', () => {
  
  // Sidebar
  eventHandler('click', '.menu-btn', (e) => {
    const sidebar = document.querySelector('.sidebar');

    if (sidebar.getBoundingClientRect().width === 0) {
      sidebar.style.width = '300px';
    } else {
      sidebar.style.width = '0px';
    }
  });

  // Change hero image on timer
  const heroImages = [
    'https://www.hdwallpaper.nu/wp-content/uploads/2017/02/fitness-17.jpg',
    'https://api.infinityfit.io/storage/d/b/1/db1347ba08da549fe017f3f5c77cae20.jpeg?v=1',
  ];

  let index = 0;
  const hero = document.querySelector('.hero-bg');

  setInterval(() => {
    hero.style.backgroundImage = `url(${heroImages[index]})`;
    index = (index + 1) % heroImages.length;
  }, 5000);
});

