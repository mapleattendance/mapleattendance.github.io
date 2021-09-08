var img = document.getElementById('img');

img.addEventListener('click', () => { 
  console.log('tapped');
  navigator.share({
    title: 'Share this image',
    text: 'Check out this image',
    url: img.src
  })
  .then(() => console.log('Successful share'))
  .catch((error) => console.log('Error sharing:', error));
});