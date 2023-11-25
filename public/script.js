// public/script.js
document.addEventListener('DOMContentLoaded', function () {
  const next = document.getElementById('next');
  next.addEventListener('click', function () {
    fetch('/next');
  });

  const previous = document.getElementById('previous');

  previous.addEventListener('click', function () {
    fetch('/previous');
  });
});
