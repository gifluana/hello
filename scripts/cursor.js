const cursor = document.querySelector('.cursor');
const cursorSize = 22; // adjust this to the size of your cursor

document.addEventListener('mousemove', e => {
    const x = e.clientX - cursorSize / 2;
    const y = e.clientY - cursorSize / 2;

    cursor.style.left = `${x}px`;
    cursor.style.top = `${y}px`;
});

document.addEventListener('click', () => {
    cursor.classList.add("cursor-click");
    setTimeout(() => {
        cursor.classList.remove("cursor-click");
    }, 500);
});