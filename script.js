// --- Quiz Data ---
const quizQuestions = [
    {
        question: "You're in Manali. It's a cold morning. You see other hikers ready for the Hampta Pass trek (14,000 feet). You see the Deo Tibba peak and other snowy mountains. You're excited How will you prepare for your trek?",
        image: "q1.q1.jpg", 
        options: [
            { text: "I'll create a detailed plan and checklist.", type: "Gold" },
            { text: "I'll pack my journal to note down my inspiration and reflection.", type: "Blue" },
            { text: "I'll research and plan for all challenges.", type: "Green" },
            { text: "I'll pack light and be ready for anything.", type: "Orange" }
        ]
    },
    {
        question: "You drive through the Kullu Valley to Jobra. You see forests, villages, and rivers. The air gets colder. You arrive at Jobra, the start of your trek. Heavy rain makes the path very muddy. How will you react?",
        image: "q2.avif", 
        options: [
            { text: "I'll proceed carefully and stay on schedule.", type: "Gold" },
            { text: "I'll focus on staying positive despite the change.", type: "Blue" },
            { text: "I'll find the most efficient way through the mud.", type: "Green" },
            { text: "I'll see this as an exciting challenge.", type: "Orange" }
        ]
    },
    {
        question: "You walk through a forest with pine trees and flowers. You cross streams. You camp at Chika. You hear a river and see stars. You're alone at your Chika campsite. What do you do?",
        image: "q3.jpg", 
        options: [
            { text: "I'll organize and plan for tomorrow.", type: "Gold" },
            { text: "I'll reflect and journal my thoughts.", type: "Blue" },
            { text: "I'll review and analyze the day.", type: "Green" },
            { text: "I'll enjoy the peace with a campfire.", type: "Orange" }
        ]
    },
    {
        question: "You climb a steep path to Balu Ka Ghera. You cross a cold stream. The air is thin. You see great mountain views. A storm hits, and your tent leaks. How will you react?",
        image: "q4.jpg", 
        options: [
            { text: "I'll follow my emergency safety plan.", type: "Gold" },
            { text: "I'll stay positive and find comfort.", type: "Blue" },
            { text: "I'll logically assess and protect myself.", type: "Green" },
            { text: "I'll turn this into an exciting adventure.", type: "Orange" }
        ]
    },
    {
        question: "The last climb to Hampta Pass is hard. It's windy. You reach the top and see amazing views. The mountain pass is steep. How do you climb it?",
        image: "q5.jpg",
        options: [
            { text: "I'll climb with a steady and safe pace.", type: "Gold" },
            { text: "I'll enjoy the beauty and personal challenge.", type: "Blue" },
            { text: "I'll find the most efficient route.", type: "Green" },
            { text: "I'll push my limits and enjoy the thrill.", type: "Orange" }
        ]
    },
    {
        question: "Going down to Shea Goru, you twist your ankle on a rock. It hurts a lot. What do you do?",
        image: "q6.webp", 
        options: [
            { text: "I'll apply first aid and find a way to continue.", type: "Gold" },
            { text: "I'll stay calm and adapt positively.", type: "Blue" },
            { text: "I'll logically determine the best action.", type: "Green" },
            { text: "I'll find a creative workaround.", type: "Orange" }
        ]
    },
    {
        question: "Thick fog comes, and you can't see the path. You're lost. What do you do?",
        image: "q7.avif", 
        options: [
            { text: "I'll use my map to get back on track.", type: "Gold" },
            { text: "I'll trust my instincts and explore.", type: "Blue" },
            { text: "I'll retrace my steps carefully.", type: "Green" },
            { text: "I'll explore this new adventure.", type: "Orange" }
        ]
    },
    {
        question: "You hear a voice. Another hiker helps you through the fog. What do you say?",
        image: "q8.webp", 
        options: [
            { text: "I'll ask about their trekking plans.", type: "Gold" },
            { text: "I'll start a friendly, open conversation.", type: "Blue" },
            { text: "I'll ask for route tips.", type: "Green" },
            { text: "I'll propose a fun challenge.", type: "Orange" }
        ]
    },
    {
        question: "You have to cross the cold, fast Chandra River. You use trekking poles to help. How do you cross it?",
        image: "q9.q9.q9.jpg", 
        options: [
            { text: "I'll find a safe way to cross.", type: "Gold" },
            { text: "I'll wait for it to be safer.", type: "Blue" },
            { text: "I'll analyze the flow and find the best crossing point.", type: "Green" },
            { text: "I'll build a raft or try swimming.", type: "Orange" }
        ]
    },
    {
        question: "You walk the last part of the trail. You feel proud. You'll remember the views and the challenges. What do you think about it?",
        image: "q10.jpg", 
        options: [
            { text: "I'm proud and ready to plan the next trek.", type: "Gold" },
            { text: "I'll cherish the beautiful memories.", type: "Blue" },
            { text: "I'll use these lessons for the future.", type: "Green" },
            { text: "I'm excited for the next adventure.", type: "Orange" }
        ]
    }
];


const personalityDetails = {
    Gold: {
        name: "Planners",
        colorClass: "color-gold",
        imageUrl: "gold_shiny_texture.jpg", 
        description: "Gold-planners are natural leaders who work well with structured processes, deadlines, and clear instructions.",
        traits: ["Organized", "Reliable", "Detail-oriented", "Disciplined", "Practical"]
    },
    Blue: {
        name: "Feelers",
        colorClass: "color-blue",
        imageUrl: "blue_vibrant_texture.jpg", 
        description: "Blue-feelers enjoy working in teams and are excellent at fostering relationships within an organization.",
        traits: ["Empathetic", "Cooperative", "Intuitive", "Communicative", "Supportive"]
    },
    Green: {
        name: "Thinkers",
        colorClass: "color-green",
        imageUrl: "green_vibrant_texture.jpg", 
        description: "Green-thinkers are motivated by problem-solving and understanding complex systems.",
        traits: ["Analytical", "Logical", "Curious", "Strategic", "Independent"]
    },
    Orange: {
        name: "Doers",
        colorClass: "color-orange",
        imageUrl: "orange_vibrant_texture.jpg",
        description: "Orange-doers thrive in dynamic environments and are skilled at quick problem-solving.",
        traits: ["Action-oriented", "Spontaneous", "Adaptable", "Hands-on", "Energetic"]
    }
};


const startPage = document.getElementById('start-page');
const quizContainer = document.getElementById('quiz-container');
const resultsPage = document.getElementById('results-page');
const startQuizBtn = document.getElementById('start-quiz-btn');
const quizTopImage = document.getElementById('quiz-top-image');
const questionArea = document.getElementById('question-area');
const questionPagination = document.getElementById('question-pagination');
const resultsTopImage = document.getElementById('results-top-image');
const resultsDisplay = document.getElementById('results-display');
const makeAQiuzBtn = document.getElementById('make-a-quiz-btn');



const backgroundMusic = document.getElementById('background-music');


let currentQuestionIndex = 0;
let scores = { Gold: 0, Blue: 0, Green: 0, Orange: 0 };
const totalQuestions = quizQuestions.length;



/**
 * Preloads images to improve performance.
 * @param {Array<string>} imagePaths An array of image URLs to preload.
 */
function preloadImages(imagePaths) {
    imagePaths.forEach(path => {
        const img = new Image();
        img.src = path;
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const allQuizImages = quizQuestions.map(q => q.image);
    
    allQuizImages.push("himalayan_trek_top.jpg");
    
    Object.values(personalityDetails).forEach(p => {
        if (p.imageUrl) allQuizImages.push(p.imageUrl);
    });
    const uniqueImagePaths = [...new Set(allQuizImages)];
    preloadImages(uniqueImagePaths);
});


/**
 
 * @param {string} sectionId 
 */
function showSection(sectionId) {
    document.querySelectorAll('.quiz-section').forEach(section => {
        section.classList.remove('active');
    });
    document.getElementById(sectionId).classList.add('active');
}


function startQuiz() {
    scores = { Gold: 0, Blue: 0, Green: 0, Orange: 0 };
    currentQuestionIndex = 0;
    showSection('quiz-container'); 
    displayQuestion(false); 

   
    if (backgroundMusic && backgroundMusic.paused) {
        backgroundMusic.play().catch(error => {
            console.warn("Autoplay of music failed:", error);
            
        });
    }
}

/**
 
 * @param {boolean} animateOut
 */
function displayQuestion(animateOut = true) {
    if (currentQuestionIndex >= totalQuestions) {
        showResults();
        return;
    }

    const questionData = quizQuestions[currentQuestionIndex];

    if (quizTopImage) { 
        quizTopImage.src = questionData.image || "himalayan_trek_top.jpg";
    }


    const newQuestionContent = document.createElement('div');
    newQuestionContent.classList.add('question-content');

    newQuestionContent.innerHTML = `<h2>${questionData.question}</h2><div class="options-container"></div>`;
    const optionsContainer = newQuestionContent.querySelector('.options-container');

   

    // Create a mutable copy of options to shuffle
    let shuffledOptions = [...questionData.options];

    
    for (let i = shuffledOptions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledOptions[i], shuffledOptions[j]] = [shuffledOptions[j], shuffledOptions[i]]; // Swap elements
    }

    shuffledOptions.forEach(option => {
        const button = document.createElement('button');
        button.textContent = option.text;
        
        button.dataset.type = option.type;
        
        
        button.classList.add(`option-button`); // Keep this for general styling

        button.addEventListener('click', handleAnswerClick);
        optionsContainer.appendChild(button);
    });

    // --- END: MODIFIED LOGIC ---

    if (animateOut && questionArea.children.length > 0) {
        const currentQuestionContent = questionArea.children[0];
        currentQuestionContent.classList.add('slide-out-left');

        currentQuestionContent.addEventListener('transitionend', () => {
            questionArea.removeChild(currentQuestionContent);
            questionArea.appendChild(newQuestionContent);
            newQuestionContent.classList.add('fade-in');
        }, { once: true });
    } else {
        questionArea.innerHTML = '';
        questionArea.appendChild(newQuestionContent);
        newQuestionContent.classList.add('fade-in');
    }

    updateQuestionPagination();
}

/**

 * @param {Event} event 
 */
function handleAnswerClick(event) {
    const selectedType = event.target.dataset.type; 
    scores[selectedType]++; 

    currentQuestionIndex++;
    displayQuestion(true);
}


function updateQuestionPagination() {
    questionPagination.innerHTML = ''; 
    for (let i = 0; i < totalQuestions; i++) {
        const pageNumber = document.createElement('div');
        pageNumber.classList.add('page-number');
        pageNumber.textContent = i + 1; 
        if (i === currentQuestionIndex) {
            pageNumber.classList.add('active'); 
        }
        questionPagination.appendChild(pageNumber);
    }
}


function showResults() {
    showSection('results-page');

    
    if (resultsTopImage) { 
        resultsTopImage.src = "result.webp"; 
    }

    
    let resultsArray = Object.keys(scores).map(type => {
        return {
            type: type,
            score: scores[type],
            percentage: (scores[type] / totalQuestions) * 100
        };
    });

    
    resultsArray = resultsArray.filter(result => result.percentage > 0);

    
    resultsArray.sort((a, b) => b.percentage - a.percentage);

    let htmlContent = '';

    resultsArray.forEach(result => {
        const details = personalityDetails[result.type];
       
        htmlContent += `
            <div class="personality-block">
                <div class="color-bar ${details.colorClass}">
                    <div class="percentage-overlay">${result.percentage.toFixed(0)}%</div>
                </div>
                <h3>${result.type.toUpperCase()} - ${details.name.toUpperCase()}</h3>
                <p>${details.description}</p>
                <ul>
                    ${details.traits.map(trait => `<li>${trait}</li>`).join('')}
                </ul>
            </div>
        `;
    });

    resultsDisplay.innerHTML = htmlContent; 

   
    if (backgroundMusic) {
        backgroundMusic.pause();
        backgroundMusic.currentTime = 0; 
    }
}


startQuizBtn.addEventListener('click', startQuiz);

if (makeAQiuzBtn) {
    makeAQiuzBtn.addEventListener('click', () => {
        showSection('start-page');
       
        if (backgroundMusic) {
            backgroundMusic.pause();
            backgroundMusic.currentTime = 0;
        }
    });
}


showSection('start-page');