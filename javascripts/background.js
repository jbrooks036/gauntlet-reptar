
// Creating an array of background images //
var images = ['spaceBG0.jpg','spaceBG1.jpg','spaceBG2.jpg','spaceBG3.jpg','spaceBG4.jpg','spaceBG5.jpg','spaceBG6.jpg','spaceBG7.jpg'];

// Using inline styling to put a randomly selected image into the background of the DOM //
$('body').css({'background-image': 'url(images/' + images[Math.floor(Math.random() * images.length)] + ')'});
