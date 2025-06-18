document.addEventListener("DOMContentLoaded", function () {
  // declaration
  gsap.registerPlugin(ScrollTrigger);

  const tooltipTriggerList=document.querySelectorAll('[data-bs-toggle="tooltip"]'),tooltipList=[...tooltipTriggerList].map(t=>new bootstrap.Tooltip(t));

  window.addEventListener("scroll", () => {document.querySelector(".site-header").classList.toggle("header-sticky", window.scrollY > 80)});
  window.addEventListener("scroll", () => {document.querySelector(".site-header").classList.toggle("shadow", window.scrollY > 80)});
  {window.innerWidth >= 992?document.querySelectorAll("._menu .collapse").forEach(e =>{e.classList.add('collapse');e.classList.add('show')}):null}
  /* live chart*/
  initializeSwiper('#_trackersSwiper1');
  document.querySelectorAll('.tabs #pills-tab .nav-link').forEach(function(tabLink) {
    tabLink.addEventListener('shown.bs.tab', function() {
      // Get the corresponding Swiper container and initialize Swiper
      var tabId = tabLink.getAttribute('data-bs-target').replace('#', '');
      var swiperContainer = document.getElementById(tabId).querySelector('._trackersSwiper');

      if (swiperContainer) {
        // Check if Swiper instance exists and destroy it before reinitializing
        if (swiperContainer.swiper) {
          swiperContainer.swiper.destroy(true, true);
        }

        // Initialize Swiper for the current tab
        initializeSwiper(swiperContainer);
      }
    });
  });
  function initializeSwiper(selector) {
    new Swiper(selector, {
      slidesPerView: 1.375,
      spaceBetween: 20,
      loop: true,
      grabCursor: 0,
      speed: 8000,
      autoplay: { delay: 0 },
      breakpoints: {
        476: { slidesPerView: 1.5, spaceBetween: 20 },
        768: { slidesPerView: 2.675, spaceBetween: 30 },
        1024: { slidesPerView: 3.25, spaceBetween: 30 },
        1200: { slidesPerView: 4.5, spaceBetween: 40 },
      },
    });
  }


  /* _acceptPMSwiper */
  const _acceptPMSwiper = new Swiper('._acceptPMSwiper', {
    slidesPerView: 2.75,
    spaceBetween: 20,
    loop: true,
    grabCursor: 0,
    speed: 8000,
    autoplay: { delay: 0 },
    breakpoints: {
      476: { slidesPerView: 3.5, spaceBetween: 60 },
      768: { slidesPerView: 4, spaceBetween: 80 },
      1024: { slidesPerView: 6, spaceBetween: 100 },
      1200: { slidesPerView: 7, spaceBetween: 100 },
    },
  });

  /* hr animation */
  const slideText = document.querySelectorAll(".text__marquee");
  slideText.forEach(function(element) {
    gsap.set(element,{xPercent:100,});
    gsap.to(element,{xPercent:-100,duration:6,immediateRender:true,repeat:-1,ease:'none'});
  });
  
  /* download links hover */
  function setAnimationListeners(btn, card) {
    gsap.set(card, { duration: 0.3, opacity: 0, scale: 0, display: 'none' });
    btn.addEventListener('mouseover', () => gsap.to(card, { duration: 0.3, opacity: 1, scale: 1, display: 'block' }));
    btn.addEventListener('mouseout', () => gsap.to(card, { duration: 0.3, opacity: 0, scale: 0, display: 'none' }));
  }
  
  if(document.querySelector('.btnAppStore') && document.querySelector('.appCard')){
    let btnAppStore = document.querySelector('.btnAppStore');
    let appCard = document.querySelector('.appCard');
    setAnimationListeners(btnAppStore, appCard);
    
    let btnPlayStore = document.querySelector('.btnPlayStore');
    let playCard = document.querySelector('.playCard');
    setAnimationListeners(btnPlayStore, playCard);
  }
  
  /* accoount animation */
  if(document.querySelector('.pick-account__container')){
    let listItems = document.querySelectorAll(".pick-account__account-card-container .account-card");
    let listItems2 = document.querySelectorAll(".pick-account__tabs .pick-account__tab-link");
    const removeClasses=(elements,classList)=>elements.forEach(element=>element.classList.remove(...classList));
    listItems.forEach(item => item.addEventListener("click", () => (removeClasses(listItems, ["account-card_open", "mt4pro"]), item.classList.add("account-card_open", "mt4pro"))));
    listItems.forEach(item => item.addEventListener("mouseover", () => (removeClasses(listItems, ["account-card_open", "mt4pro"]), item.classList.add("account-card_open", "mt4pro"))));
    listItems2.forEach((item,index)=>item.addEventListener("click",()=>(removeClasses(listItems2,["pick-account__tab-link_active"]),removeClasses(listItems,["account-card_open","mt4pro"]),this.classList.add("pick-account__tab-link_active"),listItems[index].classList.add("account-card_open"),listItems[index].classList.add("mt4pro"))));
    listItems2.forEach((item, index) => item.addEventListener("click", () => (removeClasses(listItems2, ["pick-account__tab-link_active"]), removeClasses(listItems, ["account-card_open", "mt4pro"]), item.classList.add("pick-account__tab-link_active"), listItems[index].classList.add("account-card_open", "mt4pro"))));

  }
  
  
  
  
    // DOMContentLoaded end here
});

  // for jQuery
(function () {
    
})();