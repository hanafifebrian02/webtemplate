// navbar fixed
window.onscroll = function(){
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;
    if(window.pageYOffset > fixedNav){
        header.classList.add('nav-fixed');
    }else{
        header.classList.remove('nav-fixed');
    }
}
const icon = document.getElementById('icon');
document.getElementById('hamburger').addEventListener('click', function() {
    // Cek apakah SVG saat ini adalah SVG hamburger atau SVG Shutterstock
    const isHamburgerIcon = icon.classList.contains('hamburger-icon');

    // Jika SVG saat ini adalah SVG hamburger, ubah ke SVG Shutterstock
    if (isHamburgerIcon) {
        icon.innerHTML = `
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M5 8H13.75M5 12H19M10.25 16L19 16" stroke="#464455" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
        `;
        // Ubah kelas SVG agar sesuai dengan SVG yang baru
        icon.classList.remove('hamburger-icon');
    } else { // Jika SVG saat ini adalah SVG Shutterstock, ubah ke SVG hamburger
        icon.innerHTML = `
            <svg id="hamburger-icon" class="h-6 w-6 text-gray-700 cursor-pointer hover:text-gray-700" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
        `;
        // Ubah kelas SVG agar sesuai dengan SVG yang baru
        icon.classList.add('hamburger-icon');
    }
});
    const hamburger = document.querySelector('#hamburger');
    const navMenu = document.querySelector('#nav-menu');
    hamburger.addEventListener('click',function(){
        hamburger.classList.toggle('hamburger-active');
        navMenu.classList.toggle('hidden');
    });
// Function to handle mouseover, mouseout, and click events
function handleEvents(elementId, textId) {
    const element = document.getElementById(elementId);
    const textElement = document.getElementById(textId);

    function toggleVisibility() {
        textElement.classList.toggle('hidden');
    }

    element.addEventListener('mouseover', toggleVisibility);

    element.addEventListener('mouseout', toggleVisibility);

    element.addEventListener('click', function() {
        toggleVisibility(); // Memanggil fungsi toggleVisibility saat elemen diklik
    });
}

// Call handleEvents for each element
handleEvents('am', 'aboutMeText');
handleEvents('ex', 'ResText');
handleEvents('ed', 'porText');
handleEvents('sk', 'serText');

const buttons = document.querySelectorAll('.flex button');
const textSections = document.querySelectorAll('[id$="Text"]');

// Function to get a random index
function getRandomIndex(max) {
    return Math.floor(Math.random() * max);
}

// Get a random button index
const randomButtonIndex = getRandomIndex(buttons.length);

// Auto-click on a random button to show the initial text section
buttons[randomButtonIndex].click();

buttons.forEach((button, index) => {
    button.addEventListener('click', function() {
        // Remove previous red button color
        const buttons = document.querySelector('.bg-green-600','.text-white','.border-transparent');
        if (buttons) {
            buttons.classList.remove('bg-green-600','text-white','border-transparent');
            buttons.classList.add('text-green-500','border-green-500');
        }

        // Add red color to the clicked button
        button.classList.add('bg-green-600','text-white','border-transparent');

        // Hide all text sections
        textSections.forEach(section => section.classList.add('hidden'));

        // Show the corresponding text section
        const textId = button.id + "Text";
        document.getElementById(textId).classList.remove('hidden');
    });
});
document.addEventListener('DOMContentLoaded', function () {
    new Swiper('.swiper-container', {
      loop: true,
      slidesPerView: 1,
      spaceBetween: 8,
      autoplay: {
        delay: 8000,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      breakpoints: {
        640: {
          slidesPerView: 1.5,
        },
        1024: {
          slidesPerView: 1,
        },
      },
    })
  })