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
    //mode terang 
    const darkModeButton = document.getElementById('darkModeButton');
    const body = document.body;
    const icon = document.getElementById('icon');

    function toggleDarkMode() {
        body.classList.toggle('dark');
        const isDarkMode = body.classList.contains('dark');
        if (isDarkMode) {
            icon.className = "fas fa-moon"; 
        } else {
            icon.className = 'fas fa-sun';     
             }
    }
    const sunIcon = document.getElementById('icon');
    // hamburger button
    const hamburger = document.querySelector('#hamburger');
    const navMenu = document.querySelector('#nav-menu');
    hamburger.addEventListener('click',function(){
        hamburger.classList.toggle('hamburger-active');
        navMenu.classList.toggle('hidden');
    });
        // Temukan elemen input email
        const emailInput = document.querySelector('input[name="email"]');
    
        // Tambahkan event listener untuk memodifikasi input saat kehilangan fokus (blur)
        emailInput.addEventListener('blur', function() {
            // Periksa apakah input email tidak mengandung "@gmail.com"
            if (emailInput.value.indexOf('@') === -1) {
                // Tambahkan "@gmail.com" jika tidak ada
                emailInput.value += "@hnfbryn.com";
            }else{
                emailInput.value += " ";
            }
        });
        //jam

        function updateDateTime() {
            const dateTimeElement = document.getElementById('dateTime');
            const optionsDateTime = {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: 'numeric',
                minute: 'numeric',
                second: 'numeric',
                hour12: true,
                timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone
            };

            const currentDateTime = new Date().toLocaleString([], optionsDateTime);
            const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
            const timeZoneLink = `https://www.timeanddate.com/time/zones/${timeZone}`;

            dateTimeElement.innerHTML = `<a href="${timeZoneLink}" target="_blank">${currentDateTime} || ${timeZone}</a>`;
        }

        // Update the date, time, and time zone every second
        setInterval(updateDateTime, 1000);

        // Initial date, time, and time zone update
        document.addEventListener('DOMContentLoaded', updateDateTime);
        // ganti gambar
        // script.js
        document.addEventListener('DOMContentLoaded', function () {
            // Array berisi path gambar yang ingin ditampilkan
            const imagePaths = [
                './assets/home/1.gif',
                './assets/home/2.gif',
                './assets/home/3.gif',
                './assets/home/4.gif',
                './assets/home/5.gif',
                './assets/home/6.gif',
                // Tambahkan lebih banyak path gambar jika diperlukan
            ];
        
            // Mendapatkan elemen kontainer gambar
            const imageContainer = document.getElementById('imageContainer');
        
            // Mendapatkan indeks gambar saat ini dari local storage atau mengatur ke 0 jika tidak ada
            let currentIndex = localStorage.getItem('currentIndex') || 0;
        
            // Menampilkan gambar pertama
            displayImage();
        
            // Fungsi untuk menampilkan gambar
            function displayImage() {
                imageContainer.innerHTML = `<img src="${imagePaths[currentIndex]}" alt="person" class="w-[570px] max-w-full mx-auto">`;
            }
        
            // Menangani pemutaran gambar saat halaman direfresh
            currentIndex = (currentIndex + 1) % imagePaths.length;
            localStorage.setItem('currentIndex', currentIndex);
        });
        //ganti ketika tidak ada
                // Function to check if a file exists
                function fileExists(url) {
                    var http = new XMLHttpRequest();
                    http.open('HEAD', url, false);
                    http.send();
                    return http.status != 404;
                }
        
                // Function to replace the image source
                function replaceImageIfNotFound(originalSrc, fallbackSrc) {
                    var imageElement = document.getElementById('imageElement');
                    
                    if (fileExists(originalSrc)) {
                        // File found, do nothing
                        console.log('File found:', originalSrc);
                    } else {
                        // File not found, replace with the fallback source
                        imageElement.src = fallbackSrc;
                        console.log('File not found. Replaced with:', fallbackSrc);
                    }
                }
        
                // Usage example
                var originalSrc = './assets/kontak/email.gif';
                var fallbackSrc = './assets/kontak/contact me.png'; // Ganti dengan path file yang sesuai dengan keinginan Anda
                replaceImageIfNotFound(originalSrc, fallbackSrc);


