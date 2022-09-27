const coon = document.getElementById('container')
var colorArray = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
const sq =800;

for(let i=0;i<sq;i++)
{
    const squa = document.createElement('div');
    squa.classList.add('squa')
    squa.addEventListener('mouseover', () => setColor(squa))

    squa.addEventListener('mouseout', () => removeColor(squa))

    coon.appendChild(squa);

}

function setColor(element)
{
    const col = getrandomco();
    element.style.backggrond = col
    element.style.boxShadow = `0 0 2px ${col}, 0 0 10px ${col}`

  
}
function removeColor(element)
{
    element.style.background = '#1d1d1d'
    element.style.boxShadow = '0 0 2px #000'
}

function getrandomco()
{
    return colorArray[Math.floor(Math.random() * colorArray.length)];
}