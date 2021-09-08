var img = document.getElementById('img');

img.addEventListener('click', () => {
console.log(img.src.File)
  navigator.share({
    title: 'Share this image',
    text: 'Check out this image',
    file: new File([img.src.File ],'image')
  })
    .then(() => console.log('Successful share'))
    .catch((error) => console.log('Error sharing:', error));
});