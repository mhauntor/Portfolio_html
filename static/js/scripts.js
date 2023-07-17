/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
//     reset: true
});

sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text',{}); 
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img',{delay: 400}); 
sr.reveal('.home__social-icon, .skill__container' ,{ interval: 200}); 
sr.reveal('.skills__data, .work__img, .work__container, .contact__input',{interval: 200}); 


//day nignt mode

const theme = {
    dark: {
      icon: "fas fa-moon",
      background: "#16221f",
      color: "#DAF5FF"
    },
    light: {
      icon: "fas fa-sun",
      background: "#9BE8D8",
      color: "#16221f"
    }
  };

 
const change = () => {
    const rootStyles = document.documentElement.style;

    const body = document.body;
    const header = document.querySelector(".page__header");
    const tgl = document.getElementById("tgl");
    const currentTheme = body.classList.contains("dark") ? "light" : "dark";
    

  


    // Add rotate class to the icon
    tgl.classList.add("rotate");
  
    // Update theme and transform mode over 2 seconds
    body.style.transitionDuration = "2s";
    header.style.transitionDuration = "2s";
    body.style.backgroundColor = theme[currentTheme].background;
    tgl.style.transitionDuration = "2s";
    tgl.style.color = theme[currentTheme].color;
    header.style.backgroundColor = theme[currentTheme].background;
    header.style.color = theme[currentTheme].color;
    body.classList.remove("dark", "light");
    body.classList.add(currentTheme);
  
    // Update icon after 2 seconds
    setTimeout(() => {
      tgl.className = theme[currentTheme].icon;
      tgl.classList.remove("rotate");
    }, 600);

    
    if (currentTheme === "dark") {
        rootStyles.setProperty("--hue-color", "125");
        rootStyles.setProperty("--hue-color-main", "190");
        // Update other CSS variables for dark mode
    } else if (currentTheme === "light") {
        // Update other CSS variables for light mode
        rootStyles.setProperty("--hue-color", "260");
        rootStyles.setProperty("--hue-color-main", "270");
    }
       // Usage example
  updateTheme("dark"); // Update CSS variables for dark mode
  updateTheme("light"); // Update CSS variables for light mode
  
  };