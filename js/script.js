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

let currentYear = new Date();
document.getElementById('current-year').innerHTML = currentYear.getFullYear();
document.getElementById('current-year').style.margin = "0 4px";

window.addEventListener('scroll', () => {
    const skillsSection = document.getElementById('skills');
    const skillsPosition = skillsSection.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (skillsPosition < windowHeight * 0.75) {
        const lines = document.querySelectorAll('.line');
        lines.forEach(line => {
            const targetWidth = line.dataset.width;
            line.style.width = targetWidth;
        });
    }
});

