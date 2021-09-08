var img = document.getElementById('img');

img.addEventListener('click', async () => {
  const response = await fetch(img.src);
  var blob = await response.blob();
  const filesArray = [
    new File(
      [blob],
      'meme.jpg',
      {
        type: "image/jpeg",
        lastModified: new Date().getTime()
      }
    )
  ];
  const shareData = {
    files: filesArray,
  };
  navigator.share(shareData);
});