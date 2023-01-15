const counter = {
    value: 0,
    increment () {
        console.log('increment -> this', this);
        this.value += 1;
    },
    decrement () {
         console.log('decrement -> this', this);
        this.value -= 1;
    },
};

const decrementButton = document.querySelectorAll('button')[0];
const incrementButton = document.querySelectorAll('button')[1];
const valueEl = document.querySelector('span');


decrementButton.addEventListener('click', function () {
    console.log('decrement');

    counter.decrement();
    console.log(counter);
    valueEl.textContent = counter.value;
});

decrementButton.textContent = 'Зменшити';

incrementButton.addEventListener('click', function () {
    console.log('increment');

    counter.increment();
    console.log(counter);
    valueEl.textContent = counter.value;
})

incrementButton.textContent = 'Збільшити';

