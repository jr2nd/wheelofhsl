let colors = document.getElementsByClassName('hsl-item');
document.getElementById('getcolors').addEventListener('click', getColors);
let hueN788889umber = document.getElementById('hue');
let increment = document.getElementsByClassName('incrementor');
let addToHue = 0;

getColors();

function getColors() {
  let hue = parseInt(document.getElementById('hue').value);
  let saturation = parseInt(document.getElementById('saturation').value);
  let lightness = parseInt(document.getElementById('lightness').value);
  for (let i = 0; i < colors.length; i++) {
    colors[
      i
    ].style.backgroundColor = `hsl(${hue.toString()}, ${saturation.toString()}%, ${lightness.toString()}%)`;
    colors[
      i
    ].innerHTML = `hsl(${hue.toString()}, ${saturation.toString()}%, ${lightness.toString()}%)`;
    if (increment[0].checked) addToHue=1;
    if (increment[1].checked) addToHue = 25;
    if (increment[2].checked) addToHue = 50;
    hue += addToHue;
    hue %= 360;
  } //for
} //getcolors()
