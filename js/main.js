var mainContent = document.querySelector('.main-content');

mainContent.addEventListener('scroll', function() {
  var element = document.querySelector('.down-arrow'); // Replace 'your-class' with the actual class you want to hide

  if (mainContent.scrollTop > 100) { // Adjust the value (100 in this case) to determine when to hide the class
    element.style.display = 'none';
  } else {
    element.style.display = 'block'; // Change to 'inline-block', 'inline', or 'flex' if necessary
  }
});