
// ========================================
// creating a portfolio tabbed component
// ========================================

const p_btns = document.querySelector(".p-btns");
const p_btn = document.querySelectorAll(".p-btn");
const p_img_ele = document.querySelectorAll(".img-overlay");

p_btns.addEventListener("click", (e) => {

        const p_btn_clicked = e.target;
        console.log(p_btn_clicked);

       if (!p_btn_clicked.classList.contains("p-btn")){
        return;
       }

        p_btn.forEach((curElem) => {
              curElem.classList.remove("p-btn-active");  
        });
       
        p_btn_clicked.classList.add("p-btn-active");

        const btn_num = p_btn_clicked.dataset.btnNum;
        console.log(btn_num);

        const img_active = document.querySelectorAll(`.p-btn--${btn_num}`);
        
        p_img_ele.forEach((curElem) => {
                curElem.classList.add("p-image-not-active");
        });

       img_active.forEach((curElem) => { 
        curElem.classList.remove("p-image-not-active");
       });
});




// swiper js code for testimonial Selection...

var swiper = new Swiper(".mySwiper", {
        slidesPerView: 2,
        spaceBetween: 30,
        autoplay:{
                delay: 3000,
                disableOnInteraction: false,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });

      //for mobile devices
      const myJsMedia = (widthSize) => {
        if (widthSize.matches) {
            // If media query matches
            new Swiper(".swiper", {
                slidesPerView: 1,
                spaceBetween: 30,
               
            });
        } else {
            new Swiper(".swiper", {
                slidesPerView: 2,
                spaceBetween: 30,
                
            });
        }
    };
       //testimonial section for mobile screen
      const widthSize = window.matchMedia("(max-width: 780px)");
      // Call listener function at run time
      myJsMedia(widthSize);
     // Attach listener function on state changes
      widthSize.addEventListener("change", myJsMedia);

//scroll to top button
const heroSection = document.querySelector(".section-hero");
const footerEle = document.querySelector(".section-footer");

const scrolElement = document.createElement("div");
scrolElement.classList.add("scrollTop-style");

scrolElement.innerHTML = `<ion-icon name="arrow-up-outline" class="scroll-top"></ion-icon>`;

footerEle.after(scrolElement);

const scrollTop = () => {
        heroSection.scrollIntoView({behavior:"smooth"});
};

scrolElement.addEventListener("click", scrollTop);

// ========================================
//  animated counter number
// ========================================
const workSection = document.querySelector(".section-work-data");

const workSectionObserve = (entries) => {
    const [entry] = entries;
    if (!entry.isIntersecting) return;
    console.log(entries);


    const counterNum = document.querySelectorAll(".counter-numbers");
    // console.log(counterNum);
    const speed = 200;

    counterNum.forEach((curNumber) => {
        const updateNumber = () => {
            const targetNumber = parseInt(curNumber.dataset.number);
            // console.log(targetNumber);
            const initialNumber = parseInt(curNumber.innerText);
            // console.log(initialNumber);
            const incrementNumber = Math.trunc(targetNumber / speed);
            // i am adding the value to the main number
            // console.log(incrementNumber);

            if (initialNumber < targetNumber) {
                curNumber.innerText = `${initialNumber + incrementNumber}+`;
                setTimeout(updateNumber, 10);
            } else {
                curNumber.innerText = `${targetNumber}+`;
            }

        };
        updateNumber();
    });
};

const workSecObserver = new IntersectionObserver(workSectionObserve, {
    root: null,
    threshold: 0,
});

workSecObserver.observe(workSection);

// ========================================
// Responsive navigation bar
// ========================================
const mobile_nav = document.querySelector(".mobile-navbar-btn");
const nav_header = document.querySelector(".header");

const toggleNavbar = () => {
    // alert("hi");
    nav_header.classList.toggle("active");
};

mobile_nav.addEventListener("click", () => toggleNavbar());