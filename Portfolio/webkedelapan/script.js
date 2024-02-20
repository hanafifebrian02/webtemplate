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
handleEvents('all', 'aboutMeText');
handleEvents('res', 'ResText');
handleEvents('port', 'porText');
handleEvents('serv', 'serText');
handleEvents('test', 'tesText');
handleEvents('blog', 'bloText');
handleEvents('cont', 'coText');

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
          
          // Hide all text sections
          textSections.forEach(section => section.classList.add('hidden'));

          // Show the corresponding text section
          const textId = button.id + "Text";
          document.getElementById(textId).classList.remove('hidden');
      });
  });