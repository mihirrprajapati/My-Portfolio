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

const body = document.body;
let socialIcons = document.getElementsByClassName('icon-light');
let socialIconsDark = document.getElementsByClassName('icon-dark');

let theme = localStorage.getItem("web-theme");
if (theme === 'dark') {
    body.style.setProperty('--bg-color', '#1f242d');
    body.style.setProperty('--text-color', '#ffffff');
    for (let i = 0; i < socialIcons.length; i++) {
        socialIcons[i].style.display = "block";
        socialIconsDark[i].style.display = "none";
    }
} else {
    body.style.setProperty('--bg-color', '#ffffff');
    body.style.setProperty('--text-color', '#000000');
    for (let i = 0; i < socialIcons.length; i++) {
        socialIcons[i].style.display = "none";
        socialIconsDark[i].style.display = "block";
    }
}

function changeTheme() {
    const currentColor = getComputedStyle(body).getPropertyValue('--bg-color').trim();

    if (currentColor === '#ffffff') {
        localStorage.setItem("web-theme", "dark");
        body.style.setProperty('--bg-color', '#1f242d');
        body.style.setProperty('--text-color', '#ffffff');
        for (let i = 0; i < socialIcons.length; i++) {
            socialIcons[i].style.display = "block";
            socialIconsDark[i].style.display = "none";
        }
    } else {
        localStorage.setItem("web-theme", "light");
        body.style.setProperty('--bg-color', '#ffffff');
        body.style.setProperty('--text-color', '#000000');
        for (let i = 0; i < socialIcons.length; i++) {
            socialIcons[i].style.display = "none";
            socialIconsDark[i].style.display = "block";
        }
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

