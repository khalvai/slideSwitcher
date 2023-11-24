// public/script.js
document.addEventListener('DOMContentLoaded', function () {

  const nextButton = document.getElementById('next');
  
  nextButton.addEventListener('click', function () {
    fetch('/next');
  });

  document.getElementById('previous').addEventListener('click', function () {
    fetch('/previous');
  });
});
