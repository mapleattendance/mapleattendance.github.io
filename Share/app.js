var img = document.getElementById('img');

img.addEventListener('click', () => { 
  navigator.share({
    title: 'Share this image',
    text: 'Check out this image',
    file: img.src
  })
  .then(() => console.log('Successful share'))
  .catch((error) => console.log('Error sharing:', error));
});