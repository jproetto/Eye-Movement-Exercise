
const counter = 20

const balls = document.getElementsByClassName('ball');
const iris = document.getElementsByClassName('iris');

const createEyeChildrenForGrid = () => {
  let eyeTree = ""
  for (let i=0; i < counter; i++) {
    eyeTree += 
    `
    <div class=eye>
      <div class=iris>
        <div class=ball></div>
      </div>
    </div>
    `
  }
  console.log(eyeTree)
  let gridContainer = document.getElementById('grid-container')
  gridContainer.innerHTML = eyeTree
}
createEyeChildrenForGrid()

document.onmousemove = (event) => {
  const x = (event.clientX * 100) / window.innerWidth + '%';
  const y = (event.clientY * 100) / window.innerHeight + '%';


  for (let i = 0; i < counter; i++) {
    iris[i].style.left = x;
    iris[i].style.top = y;
  
    iris[i].transform = 'translate(-' + x + ',-' + y + ')';

  }
};
