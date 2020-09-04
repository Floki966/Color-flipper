const hexa = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'F'];
let content = document.querySelector('.button');
let containerValue = document.getElementById('color');
const color = [];

function myFunction() {
  for (let i = 0; i < 6; i++) {
      //creats random number
    let randomNumber = Math.floor(Math.random() * 15);
    //stores the choosen hexa code in a array
    color[i] = hexa[randomNumber];
  }
  //get the hex code to a variable to accses
  let hexadezimal = '#' + color[0] + color[1] + color[2] + color[3] + color[4] + color[5];
  //change the DOM
  document.body.style.background = hexadezimal;
  containerValue.textContent = hexadezimal;
}

content.addEventListener('click', myFunction);
