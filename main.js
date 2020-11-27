const input = document.querySelector('input');
const btn = document.querySelector('button');

btn.addEventListener('click', () => {
    for (i = 1; i < 100; i++) {
        const img = document.createElement('img');
        img.src = `${input.value}${i}.jpg`;
        document.querySelector('.images').append(img);
    }
});

