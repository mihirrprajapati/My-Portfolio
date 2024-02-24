// function changeTheme() {
//     const body = document.body;
//     const currentColor = body.style.backgroundColor;

//     if (currentColor === 'var(--bg-color)') {
//         body.style.backgroundColor = 'var(--bg-dark-color)';
//         body.style.color = 'var(--text-dark-color)';
//     } else {
//         body.style.backgroundColor = 'var(--bg-color)';
//         body.style.color = 'var(--text-color)';
//     }
// }

function changeTheme() {
    const body = document.body;
    const currentColor = getComputedStyle(body).getPropertyValue('--bg-color').trim();

    if (currentColor === '#ffffff') {
        body.style.setProperty('--bg-color', '#1f242d');
        body.style.setProperty('--text-color', '#ffffff');
    } else {
        body.style.setProperty('--bg-color', '#ffffff');
        body.style.setProperty('--text-color', '#000000');
    }
}