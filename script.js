const screen = document.getElementById('screen');
const userInput = document.getElementById('userInput');
const cursor = document.getElementById('cursor');

// Initial typing animation
let introText = 'Isaac Skidmore\n\nWelcome to my interactive resume!\nTo receive a list of commands, please type help\n';
let i = 0;
const typingSpeed = 50;
const interval = setInterval(() => {
    screen.textContent += introText[i];
    i++;
    if (i === introText.length) {
        clearInterval(interval);
        cursor.style.display = 'inline';
        userInput.focus();
    }
}, typingSpeed);

// Command handling
const commands = {
    help: () => screen.textContent += '\nAvailable commands: education, experience, skills, aboutme, clear\n',
    education: () => screen.textContent += '\n**Education:**\n* Arizona State University (20XX - 20XX)\n* Bachelor of Science in Computer Science\n',
    experience: () => screen.textContent += '\n**Experience:**\n* Zenith Semiconductor (20XX - Present)\n* Software Engineer - Developed and maintained web applications\n',
    skills: () => screen.textContent += '\n**Skills:**\n* Programming Languages: JavaScript, Python, Java\n* Frameworks: React, Node.js\n* Other: Linux, Git, Agile methodologies\n',
    aboutme: () => screen.textContent += '\n**About Me:**\n* Enjoy hiking, photography, and playing guitar\n* Married with a cat named Luna\n',
    clear: () => screen.textContent = '',
};

userInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        const command = userInput.value.toLowerCase();
        userInput.value = '';
        screen.textContent += '\nbash: ' + command + '\n';

        if (commands[command]) {
            commands[command]();
        } else {
            screen.textContent += 'Invalid command. Please try again.\n';
        }
    }
});
