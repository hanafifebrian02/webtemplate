
// navbar fixed
window.onscroll = function(){
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;
    if(window.pageYOffset > fixedNav){
        header.classList.add('nav-fixed');
        header.classList.add('nav-hidden');
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
            buttons.forEach(btn => btn.classList.remove('text-white','bg-pink-500', 'text-black'));
            button.classList.add('text-white','font-bold','bg-pink-500',);
            
            // Hide all text sections
            textSections.forEach(section => section.classList.add('hidden'));

            // Show the corresponding text section
            const textId = button.id + "Text";
            document.getElementById(textId).classList.remove('hidden');
        });
    });
        // let lastScrollTop = 0;
        // window.addEventListener('scroll', function() {
        //     const homeSection = document.getElementById('home');
        //     const distanceFromTop = homeSection.getBoundingClientRect().top;
        //     const st = window.pageYOffset || document.documentElement.scrollTop;

        //     if (st > lastScrollTop) {
        //         // Downscroll code
        //         homeSection.classList.add('lg:fixed', '-z-10');
        //     } else {
        //         // Upscroll code
        //         homeSection.classList.remove('lg:fixed', '-z-10');
        //     }
        //     lastScrollTop = st <= 0 ? 0 : st;
        // });
