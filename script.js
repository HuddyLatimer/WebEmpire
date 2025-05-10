// Data for 100 new sites
const sites = [
    // Tools
    { category: 'tools', title: 'Task Manager Pro', description: 'organize tasks with drag-and-drop', url: 'https://task-manager.webempire.com' },
    { category: 'tools', title: 'Pomodoro Timer', description: 'boost productivity with timed sessions', url: 'https://pomodoro-timer.webempire.com' },
    { category: 'tools', title: 'Markdown Editor', description: 'write and preview Markdown', url: 'https://markdown-editor.webempire.com' },
    { category: 'tools', title: 'Color Palette Generator', description: 'create and save color schemes', url: 'https://color-palette.webempire.com' },
    { category: 'tools', title: 'Unit Converter', description: 'convert units instantly', url: 'https://unit-converter.webempire.com' },
    { category: 'tools', title: 'Budget Tracker', description: 'manage expenses and savings', url: 'https://budget-tracker.webempire.com' },
    { category: 'tools', title: 'Random Password Generator', description: 'generate secure passwords', url: 'https://password-generator.webempire.com' },
    { category: 'tools', title: 'QR Code Maker', description: 'create downloadable QR codes', url: 'https://qr-code-maker.webempire.com' },
    { category: 'tools', title: 'Text Analyzer', description: 'count words and analyze text', url: 'https://text-analyzer.webempire.com' },
    { category: 'tools', title: 'Timer Countdown', description: 'set countdowns with alerts', url: 'https://timer-countdown.webempire.com' },
    { category: 'tools', title: 'JSON Formatter', description: 'format and validate JSON', url: 'https://json-formatter.webempire.com' },
    { category: 'tools', title: 'CSS Gradient Generator', description: 'design CSS gradients', url: 'https://css-gradient.webempire.com' },
    { category: 'tools', title: 'Image Compressor', description: 'resize images client-side', url: 'https://image-compressor.webempire.com' },
    { category: 'tools', title: 'Regex Tester', description: 'test regular expressions', url: 'https://regex-tester.webempire.com' },
    { category: 'tools', title: 'Base64 Encoder', description: 'encode/decode Base64', url: 'https://base64-encoder.webempire.com' },
    { category: 'tools', title: 'Time Zone Converter', description: 'compare global times', url: 'https://timezone-converter.webempire.com' },
    { category: 'tools', title: 'Note Taker', description: 'save notes locally', url: 'https://note-taker.webempire.com' },
    { category: 'tools', title: 'URL Shortener Mock', description: 'simulate URL shortening', url: 'https://url-shortener.webempire.com' },
    { category: 'tools', title: 'Event Planner', description: 'organize events with reminders', url: 'https://event-planner.webempire.com' },
    { category: 'tools', title: 'Clipboard Manager', description: 'manage copied text', url: 'https://clipboard-manager.webempire.com' },
    // Security
    { category: 'security', title: 'Password Strength Checker', description: 'evaluate password security', url: 'https://password-checker.webempire.com' },
    { category: 'security', title: 'File Hash Generator', description: 'compute file hashes', url: 'https://file-hash.webempire.com' },
    { category: 'security', title: 'Secure Note Vault', description: 'encrypt notes client-side', url: 'https://note-vault.webempire.com' },
    { category: 'security', title: 'IP Address Lookup', description: 'view IP and geolocation', url: 'https://ip-lookup.webempire.com' },
    { category: 'security', title: 'Privacy Policy Generator', description: 'create privacy policies', url: 'https://privacy-policy.webempire.com' },
    { category: 'security', title: 'Data Breach Checker', description: 'mock email exposure check', url: 'https://breach-checker.webempire.com' },
    { category: 'security', title: 'SSL Certificate Info', description: 'view mock SSL details', url: 'https://ssl-info.webempire.com' },
    { category: 'security', title: 'Phishing Quiz', description: 'test phishing awareness', url: 'https://phishing-quiz.webempire.com' },
    { category: 'security', title: 'Two-Factor Auth Demo', description: 'simulate 2FA codes', url: 'https://2fa-demo.webempire.com' },
    { category: 'security', title: 'Firewall Rule Tester', description: 'mock firewall rule testing', url: 'https://firewall-tester.webempire.com' },
    { category: 'security', title: 'Cookie Manager', description: 'manage browser cookies', url: 'https://cookie-manager.webempire.com' },
    { category: 'security', title: 'Safe Browsing Tips', description: 'learn secure browsing', url: 'https://safe-browsing.webempire.com' },
    { category: 'security', title: 'Encryption Playground', description: 'experiment with encryption', url: 'https://encryption-playground.webempire.com' },
    { category: 'security', title: 'Security Headers Checker', description: 'mock headers analysis', url: 'https://headers-checker.webempire.com' },
    { category: 'security', title: 'Password Manager Lite', description: 'store encrypted passwords', url: 'https://password-manager.webempire.com' },
    { category: 'security', title: 'Digital Signature Demo', description: 'simulate digital signatures', url: 'https://signature-demo.webempire.com' },
    { category: 'security', title: 'VPN Benefits Guide', description: 'learn about VPNs', url: 'https://vpn-guide.webempire.com' },
    { category: 'security', title: 'Malware Scanner Mock', description: 'fake malware scan UI', url: 'https://malware-scanner.webempire.com' },
    { category: 'security', title: 'Secure Link Generator', description: 'create mock expiring links', url: 'https://secure-link.webempire.com' },
    { category: 'security', title: 'Cybersecurity Trivia', description: 'test cybersecurity knowledge', url: 'https://cyber-trivia.webempire.com' },
    // Games
    { category: 'games', title: 'Tic-Tac-Toe', description: 'play classic 2-player game', url: 'https://tic-tac-toe.webempire.com' },
    { category: 'games', title: 'Memory Match', description: 'match card pairs', url: 'https://memory-match.webempire.com' },
    { category: 'games', title: 'Snake Game', description: 'control a growing snake', url: 'https://snake-game.webempire.com' },
    { category: 'games', title: '2048 Puzzle', description: 'slide tiles to reach 2048', url: 'https://2048-puzzle.webempire.com' },
    { category: 'games', title: 'Minesweeper', description: 'clear a grid without mines', url: 'https://minesweeper.webempire.com' },
    { category: 'games', title: 'Hangman', description: 'guess words letter by letter', url: 'https://hangman.webempire.com' },
    { category: 'games', title: 'Sudoku Solver', description: 'play or solve Sudoku', url: 'https://sudoku-solver.webempire.com' },
    { category: 'games', title: 'Flappy Bird Clone', description: 'navigate through obstacles', url: 'https://flappy-bird.webempire.com' },
    { category: 'games', title: 'Simon Says', description: 'repeat color sequences', url: 'https://simon-says.webempire.com' },
    { category: 'games', title: 'Tetris Lite', description: 'stack falling blocks', url: 'https://tetris-lite.webempire.com' },
    { category: 'games', title: 'Word Search', description: 'find words in a grid', url: 'https://word-search.webempire.com' },
    { category: 'games', title: 'Pong', description: 'play classic 2-player pong', url: 'https://pong.webempire.com' },
    { category: 'games', title: 'Breakout', description: 'break bricks with a ball', url: 'https://breakout.webempire.com' },
    { category: 'games', title: 'Chess Puzzle', description: 'solve chess problems', url: 'https://chess-puzzle.webempire.com' },
    { category: 'games', title: 'Trivia Challenge', description: 'answer random trivia', url: 'https://trivia-challenge.webempire.com' },
    { category: 'games', title: 'Typing Speed Test', description: 'measure typing speed', url: 'https://typing-test.webempire.com' },
    { category: 'games', title: 'Maze Runner', description: 'navigate a maze', url: 'https://maze-runner.webempire.com' },
    { category: 'games', title: 'Rock Paper Scissors', description: 'play against computer', url: 'https://rps-game.webempire.com' },
    { category: 'games', title: 'Number Guess', description: 'guess a random number', url: 'https://number-guess.webempire.com' },
    { category: 'games', title: 'Card Matching', description: 'match cards with timer', url: 'https://card-matching.webempire.com' },
    // Community
    { category: 'community', title: 'Tech Forum Mock', description: 'discuss tech topics', url: 'https://tech-forum.webempire.com' },
    { category: 'community', title: 'Code Snippet Sharer', description: 'share code snippets', url: 'https://code-snippet.webempire.com' },
    { category: 'community', title: 'Poll Creator', description: 'create and vote on polls', url: 'https://poll-creator.webempire.com' },
    { category: 'community', title: 'Virtual Book Club', description: 'discuss books online', url: 'https://book-club.webempire.com' },
    { category: 'community', title: 'Idea Board', description: 'post and upvote ideas', url: 'https://idea-board.webempire.com' },
    { category: 'community', title: 'Event Calendar', description: 'share community events', url: 'https://event-calendar.webempire.com' },
    { category: 'community', title: 'Q&A Platform Mock', description: 'ask and answer questions', url: 'https://qna-platform.webempire.com' },
    { category: 'community', title: 'Meme Sharing Hub', description: 'share and view memes', url: 'https://meme-hub.webempire.com' },
    { category: 'community', title: 'Job Board Mock', description: 'browse tech jobs', url: 'https://job-board.webempire.com' },
    { category: 'community', title: 'Study Group Finder', description: 'join study groups', url: 'https://study-group.webempire.com' },
    { category: 'community', title: 'Open Source Tracker', description: 'explore open-source projects', url: 'https://open-source.webempire.com' },
    { category: 'community', title: 'Feedback Form', description: 'collect user feedback', url: 'https://feedback-form.webempire.com' },
    { category: 'community', title: 'Tech News Aggregator', description: 'read tech news', url: 'https://tech-news.webempire.com' },
    { category: 'community', title: 'Mentor Match Mock', description: 'find tech mentors', url: 'https://mentor-match.webempire.com' },
    { category: 'community', title: 'Crowdsourcing Ideas', description: 'submit project ideas', url: 'https://crowdsource-ideas.webempire.com' },
    { category: 'community', title: 'Virtual Meetup Planner', description: 'plan online meetups', url: 'https://meetup-planner.webempire.com' },
    { category: 'community', title: 'Developer Portfolio', description: 'showcase developer profiles', url: 'https://dev-portfolio.webempire.com' },
    { category: 'community', title: 'Tech Trivia Community', description: 'share tech trivia', url: 'https://tech-trivia.webempire.com' },
    { category: 'community', title: 'Resource Library', description: 'access tech resources', url: 'https://resource-library.webempire.com' },
    { category: 'community', title: 'Collaboration Board', description: 'brainstorm with teams', url: 'https://collab-board.webempire.com' },
    // Education
    { category: 'education', title: 'Math Practice', description: 'solve math problems', url: 'https://math-practice.webempire.com' },
    { category: 'education', title: 'Coding Challenges', description: 'practice JavaScript coding', url: 'https://coding-challenges.webempire.com' },
    { category: 'education', title: 'Language Flashcards', description: 'learn vocabulary', url: 'https://language-flashcards.webempire.com' },
    { category: 'education', title: 'Science Quiz', description: 'test science knowledge', url: 'https://science-quiz.webempire.com' },
    { category: 'education', title: 'History Timeline', description: 'explore historical events', url: 'https://history-timeline.webempire.com' },
    { category: 'education', title: 'Typing Tutor', description: 'improve typing skills', url: 'https://typing-tutor.webempire.com' },
    { category: 'education', title: 'Grammar Checker', description: 'analyze text grammar', url: 'https://grammar-checker.webempire.com' },
    { category: 'education', title: 'Periodic Table', description: 'learn about elements', url: 'https://periodic-table.webempire.com' },
    { category: 'education', title: 'CS Basics', description: 'learn computer science', url: 'https://cs-basics.webempire.com' },
    { category: 'education', title: 'Web Dev Guide', description: 'learn web development', url: 'https://web-dev-guide.webempire.com' },
    { category: 'education', title: 'Speed Reading Trainer', description: 'practice speed reading', url: 'https://speed-reading.webempire.com' },
    { category: 'education', title: 'Memory Game', description: 'enhance memory skills', url: 'https://memory-game.webempire.com' },
    { category: 'education', title: 'Logic Puzzles', description: 'solve logic brain teasers', url: 'https://logic-puzzles.webempire.com' },
    { category: 'education', title: 'Astronomy Guide', description: 'explore stars and planets', url: 'https://astronomy-guide.webempire.com' },
    { category: 'education', title: 'Financial Literacy', description: 'learn budgeting skills', url: 'https://financial-literacy.webempire.com' },
    { category: 'education', title: 'Public Speaking Tips', description: 'improve presentations', url: 'https://public-speaking.webempire.com' },
    { category: 'education', title: 'Art History Quiz', description: 'test art knowledge', url: 'https://art-history-quiz.webempire.com' },
    { category: 'education', title: 'Ethics Scenarios', description: 'explore ethical dilemmas', url: 'https://ethics-scenarios.webempire.com' },
    { category: 'education', title: 'DIY Electronics', description: 'learn electronics projects', url: 'https://diy-electronics.webempire.com' },
    { category: 'education', title: 'Career Path Quiz', description: 'discover tech careers', url: 'https://career-quiz.webempire.com' }
];

// Generate cards dynamically
function generateCards() {
    sites.forEach(site => {
        const section = document.querySelector(`#${site.category} .card-grid`);
        if (section) {
            const card = document.createElement('div');
            card.classList.add('card');
            card.innerHTML = `
                <h3>${site.title}</h3>
                <p>${site.description}</p>
                <a href="${site.url}" target="_blank" aria-label="Visit ${site.title}">Visit Site</a>
            `;
            section.appendChild(card);
        }
    });
}

// Search functionality
const searchInput = document.getElementById('search');
searchInput.addEventListener('input', () => {
    const query = searchInput.value.toLowerCase();
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        const title = card.querySelector('h3').textContent.toLowerCase();
        const description = card.querySelector('p').textContent.toLowerCase();
        card.style.display = (title.includes(query) || description.includes(query)) ? 'block' : 'none';
    });
});

// Voice search
const voiceSearchBtn = document.getElementById('voice-search');
if ('webkitSpeechRecognition' in window) {
    const recognition = new webkitSpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        searchInput.value = transcript;
        searchInput.dispatchEvent(new Event('input'));
        voiceSearchBtn.classList.remove('active');
    };
    recognition.onstart = () => {
        voiceSearchBtn.classList.add('active');
    };
    recognition.onend = () => {
        voiceSearchBtn.classList.remove('active');
    };
    voiceSearchBtn.addEventListener('click', () => {
        recognition.start();
    });
} else {
    voiceSearchBtn.style.display = 'none';
}

// Smooth scrolling
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        targetSection.scrollIntoView({ behavior: 'smooth' });
        if (window.innerWidth <= 768) {
            document.querySelector('.nav-menu').classList.remove('active');
        }
    });
});

// Menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');
menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Initialize
window.addEventListener('load', generateCards);