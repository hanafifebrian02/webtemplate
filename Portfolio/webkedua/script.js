    // hamburger button
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
            buttons.forEach(btn => btn.classList.remove('text-red-500', 'text-black'));
            button.classList.add('text-red-500');
            
            // Hide all text sections
            textSections.forEach(section => section.classList.add('hidden'));

            // Show the corresponding text section
            const textId = button.id + "Text";
            document.getElementById(textId).classList.remove('hidden');
        });
    });