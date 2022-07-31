const input = document.querySelector('.input');
const button = document.querySelectorAll('button');
const clear = document.querySelector('.clear');
const res = document.querySelector('.res');


button.forEach((e) => {
    e.addEventListener('click', () => {
        input.value += e.value;

    })
});


res.addEventListener('click', () => {
    input.value = eval(input.value);

});

function del() {
    clear.addEventListener('click', () => {
        input.value = '';
    })
}



