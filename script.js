const about = document.getElementById('about');
const skills = document.getElementById('skills');
const work = document.getElementById('work');
const contact = document.getElementById('contact');

function aboutA() {
    skills.style.opacity = '0';
    work.style.opacity = '0';
    contact.style.opacity = '0';
    about.style.opacity = '1';
}

function skillsA() {
    about.style.opacity = '0';
    work.style.opacity = '0';
    contact.style.opacity = '0';
    skills.style.opacity = '1';
}

function workA() {
    about.style.opacity = '0';
    skills.style.opacity = '0';
    contact.style.opacity = '0';
    work.style.opacity = '1';
}

function contactA() {
    about.style.opacity = '0';
    skills.style.opacity = '0';
    work.style.opacity = '0';
    contact.style.opacity = '1';
}

function bide() {
    about.style.opacity = '0';
    skills.style.opacity = '0';
    work.style.opacity = '0';
    contact.style.opacity = '0';
}