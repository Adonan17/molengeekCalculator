let key = document.querySelectorAll('.key');
let upperScreen = document.querySelector('#upperScreen');
let underScreen = document.querySelector('#underScreen');
let number = document.querySelectorAll('.number');
let operator = document.querySelectorAll('.operator');
let equal = document.querySelector('#equal');
let clear = document.querySelector('#clear')
let del = document.querySelector('#delete')
let operation = []

number.forEach(element => {
    element.addEventListener(`click`,()=>{
        underScreen.innerHTML += element.innerHTML
        operation.push(element.innerHTML)
    })
});

operator.forEach(element => {
    element.addEventListener(`click`,()=>{
        if (operation[operation.length -1] != element.innerHTML && underScreen.innerHTML != '') {
            operation.push(element.innerHTML)
            upperScreen.innerHTML = operation.join('')
            underScreen.innerHTML = ''
        }
    })
});
let result
equal.addEventListener('click', () => {
    if (["+", "-", "/", "x"].includes(operation[operation.length -1])){
        operation.pop()
        result = operation.join('')
        console.log(result);
        underScreen.innerText = eval(result)
    } 
})


clear.addEventListener('click', () => {
    upperScreen.innerHTML = ''
    underScreen.innerHTML = ''
    operation = ''
})

del.addEventListener('click', () => {
    underScreen.innerHTML = underScreen.innerHTML.slice(0, -1)
})


