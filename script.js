
function toggleMenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open")
    icon.classList.toggle("open")
}

window.addEventListener('load', function() {
    var nameElement = document.getElementById('name');
    var name = nameElement.textContent;
    var delay = 50; // Delay between each letter (in milliseconds)
  
    // Function to animate the disappearance and appearance of the name
    function animateName() {
      var length = name.length;
      var i = 0;
  
      // Disappear letter by letter
      var disappearInterval = setInterval(function() {
        if (i >= length) {
          clearInterval(disappearInterval);
          // Call the function to make the name appear
          setTimeout(animateAppearance, delay * length);
        } else {
          nameElement.textContent = name.substring(0, length - i - 1);
          i++;
        }
      }, delay);
    }
  
    // Function to animate the appearance of the name
    function animateAppearance() {
      var length = name.length;
      var i = 0;
  
      // Appear letter by letter
      var appearInterval = setInterval(function() {
        if (i >= length) {
          clearInterval(appearInterval);
        } else {
          nameElement.textContent = name.substring(0, i + 1);
          i++;
        }
      }, delay);
    }
  
    // Call the function to start the animation
    animateName();
  });
  
  