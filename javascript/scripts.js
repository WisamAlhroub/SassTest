let root = document.documentElement;

let mainColor;
let secondColor;

let init = () => {
    mainColor = getComputedStyle(root).getPropertyValue('--main-color');
    secondColor = getComputedStyle(root).getPropertyValue('--second-color');

    document.getElementById('main-color').value = mainColor;
    document.getElementById('second-color').value = secondColor;
}

let setColors = () => {
    mainColor = document.getElementById('main-color').value;
    secondColor = document.getElementById('second-color').value;
    
    document.documentElement.style.setProperty('--main-color', mainColor);
    document.documentElement.style.setProperty('--second-color' , secondColor);
}

document.getElementById('main-color').addEventListener('input', setColors);
document.getElementById('second-color').addEventListener('input', setColors);