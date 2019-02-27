
const calcHTML = document.querySelector('.calc');
const totalHTML = document.querySelector('.total');
let temp = [];

function getValue(val) {
    temp.push(val);
    calcHTML.innerHTML = temp.join('');
}
function result() {
    totalHTML.innerHTML = eval(temp.join(''));
}

function point() {
    if (temp.indexOf('.') === -1) {
        temp.push('.')
        calcHTML.innerHTML = temp.join('');
    }
}
function del() {
    if (temp.length > 0) {
        temp.pop();
        calcHTML.innerHTML = temp.join('')
    } else {
        calcHTML.innerHTML = '0';
    }
}
function clearAll() {
    temp = [];
    calcHTML.innerHTML = '0';
    totalHTML.innerHTML = '0'
}