// Define the list of countries and their flag codes
    // We'll use flagcdn.com for a simple and reliable way to get flag images.
    // The format is https://flagcdn.com/w320/{country_code}.png
    const countries = [
        { name: "United States", code: "us" },
        { name: "United Kingdom", code: "gb" },
        { name: "Canada", code: "ca" },
        { name: "Australia", code: "au" },
        { name: "Germany", code: "de" },
        { name: "France", code: "fr" },
        { name: "Japan", code: "jp" },
        { name: "Brazil", code: "br" },
        { name: "India", code: "in" },
        { name: "China", code: "cn" },
        { name: "Mexico", code: "mx" },
        { name: "South Africa", code: "za" },
        { name: "Russia", code: "ru" },
        { name: "Italy", code: "it" },
        { name: "Spain", code: "es" },
        { name: "Argentina", code: "ar" },
        { name: "Egypt", code: "eg" },
        { name: "Nigeria", code: "ng" },
        { name: "Switzerland", code: "ch" },
        { name: "Netherlands", code: "nl" },
        { name: "Sweden", code: "se" },
        { name: "Norway", code: "no" },
        { name: "Finland", code: "fi" },
        { name: "Belgium", code: "be" },
        { name: "Portugal", code: "pt" },
        { name: "Greece", code: "gr" },
        { name: "Poland", code: "pl" },
        { name: "Turkey", code: "tr" },
        { name: "Saudi Arabia", code: "sa" },
        { name: "Israel", code: "il" },
        { name: "Thailand", code: "th" },
        { name: "Vietnam", code: "vn" },
        { name: "Indonesia", code: "id" },
        { name: "Philippines", code: "ph" },
        { name: "New Zealand", code: "nz" },
        { name: "Chile", code: "cl" },
        { name: "Peru", code: "pe" },
        { name: "Colombia", code: "co" },
        { name: "Ireland", code: "ie" },
        { name: "Austria", code: "at" },
        { name: "Denmark", code: "dk" },
        { name: "South Korea", code: "kr" },
        { name: "Pakistan", code: "pk" },
        { name: "Bangladesh", code: "bd" },
        { name: "Ethiopia", code: "et" },
        { name: "Kenya", code: "ke" },
        { name: "Malaysia", code: "my" },
        { name: "Singapore", code: "sg" },
        { name: "Ukraine", code: "ua" },
        { name: "Iran", code: "ir" },
        { name: "Iraq", code: "iq" },
        { name: "Venezuela", code: "ve" },
        { name: "Cuba", code: "cu" },
        { name: "Algeria", code: "dz" },
        { name: "Angola", code: "ao" },
        { name: "Morocco", code: "ma" },
        { name: "Sudan", code: "sd" },
        { name: "Tanzania", code: "tz" },
        { name: "Uganda", code: "ug" },
        { name: "Afghanistan", code: "af" },
        { name: "Armenia", code: "am" },
        { name: "Azerbaijan", code: "az" },
        { name: "Cambodia", code: "kh" },
        { name: "Georgia", code: "ge" },
        { name: "Kazakhstan", code: "kz" },
        { name: "Mongolia", code: "mn" },
        { name: "Myanmar", code: "mm" },
        { name: "Nepal", code: "np" },
        { name: "North Korea", code: "kp" },
        { name: "Oman", code: "om" },
        { name: "Qatar", code: "qa" },
        { name: "Syria", code: "sy" },
        { name: "Yemen", code: "ye" },
        { name: "Belarus", code: "by" },
        { name: "Croatia", code: "hr" },
        { name: "Czech Republic", code: "cz" },
        { name: "Estonia", code: "ee" },
        { name: "Hungary", code: "hu" },
        { name: "Iceland", code: "is" },
        { name: "Latvia", code: "lv" },
        { name: "Lithuania", code: "lt" },
        { name: "Malta", code: "mt" },
        { name: "Moldova", code: "md" },
        { name: "Monaco", code: "mc" },
        { name: "Montenegro", code: "me" },
        { name: "North Macedonia", code: "mk" },
        { name: "Romania", code: "ro" },
        { name: "Serbia", code: "rs" },
        { name: "Slovakia", code: "sk" },
        { name: "Slovenia", code: "si" },
        { name: "Albania", code: "al" },
        { name: "Bolivia", code: "bo" },
        { name: "Bosnia and Herzegovina", code: "ba" },
        { name: "Bulgaria", code: "bg" },
        { name: "Cyprus", code: "cy" },
        { name: "Ecuador", code: "ec" },
        { name: "Fiji", code: "fj" },
        { name: "Ghana", code: "gh" },
        { name: "Guatemala", code: "gt" },
        { name: "Kuwait", code: "kw" },
        { name: "Lebanon", code: "lb" },
        { name: "Madagascar", code: "mg" },
        { name: "Panama", code: "pa" },
        { name: "Papua New Guinea", code: "pg" },
        { name: "Senegal", code: "sn" },
        { name: "Sri Lanka", code: "lk" },
        { name: "Tunisia", code: "tn" },
        { name: "United Arab Emirates", code: "ae" },
        { name: "Uruguay", code: "uy" },
        { name: "Uzbekistan", code: "uz" },
        { name: "Zimbabwe", code: "zw" }
    ];

    // Get DOM elements
    const flagImage = document.getElementById('flag-image');
    const scoreDisplay = document.getElementById('score-display');
    const streakDisplay = document.getElementById('streak-display');
    const highscoreDisplay = document.getElementById('highscore-display');
    const timerText = document.getElementById('timer-text');
    const fiftyBtn = document.getElementById('fifty-btn');
    const skipBtn = document.getElementById('skip-btn');
    const difficultySelect = document.getElementById('difficulty');
    const questionCountDisplay = document.getElementById('question-count-display');
    const messageDisplay = document.getElementById('message');
    const answerButtonsContainer = document.querySelector('.answer-buttons');
    const nextButton = document.getElementById('next-btn');
    const gameOverModal = document.getElementById('game-over-modal');
    const finalScoreDisplay = document.getElementById('final-score');
    const finalBestDisplay = document.getElementById('final-best');
    const finalSummaryDisplay = document.getElementById('final-summary');
    const restartButton = document.getElementById('restart-btn');

    // Game state variables
    let currentCountry = null;
    let score = 0;
    let streak = 0;
    const questionsPerGame = 10;
    let currentQuestionNumber = 0;
    let usedCountryCodes = [];
    let bestScore = Number(localStorage.getItem('gtf_best_score') || 0);
    let timerInterval = null;
    let timeRemainingSeconds = 0;
    let usedFifty = false;
    let usedSkip = false;
    let questionLocked = false;

    // Utility function to get a random item from an array
    function getRandomItem(arr, excludedItem = null) {
        let item = null;
        do {
            item = arr[Math.floor(Math.random() * arr.length)];
        } while (item === excludedItem || usedCountryCodes.includes(item.code));
        return item;
    }

    // Utility function to shuffle an array
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    // Start a new game
    function startGame() {
        clearTimer();
        score = 0;
        streak = 0;
        currentQuestionNumber = 0;
        usedCountryCodes = [];
        usedFifty = false;
        usedSkip = false;
        questionLocked = false;
        updateHighscoreDisplay();
        updateScoreDisplay();
        updateStreakDisplay();
        questionCountDisplay.textContent = `Question: 0/${questionsPerGame}`;
        messageDisplay.textContent = '';
        gameOverModal.style.display = 'none';
        // Reset lifeline buttons
        if (fiftyBtn) {
            fiftyBtn.disabled = false;
        }
        if (skipBtn) {
            skipBtn.disabled = false;
        }
        loadNewQuestion();
    }

    // Update the score display with the star icon
    function updateScoreDisplay() {
        if (scoreDisplay) scoreDisplay.textContent = `Score: ${score}`;
    }

    // Update the streak display to always include the fire emoji
    function updateStreakDisplay() {
        if (streakDisplay) streakDisplay.textContent = `Streak: ${streak}`;
    }

    function updateHighscoreDisplay() {
        if (highscoreDisplay) highscoreDisplay.textContent = `Best: ${bestScore}`;
    }

    function getTimePerQuestionSeconds() {
        const difficulty = difficultySelect ? difficultySelect.value : 'normal';
        if (difficulty === 'easy') return 20;
        if (difficulty === 'hard') return 10;
        return 15; // normal
    }

    function startTimer() {
        clearTimer();
        timeRemainingSeconds = getTimePerQuestionSeconds();
        updateTimerText();
        timerInterval = setInterval(() => {
            timeRemainingSeconds--;
            updateTimerText();
            if (timeRemainingSeconds <= 0) {
                clearTimer();
                handleTimeUp();
            }
        }, 1000);
    }

    function updateTimerText() {
        if (timerText) timerText.textContent = `${timeRemainingSeconds}s`;
    }

    function clearTimer() {
        if (timerInterval) {
            clearInterval(timerInterval);
            timerInterval = null;
        }
    }

    // Load a new question
    function loadNewQuestion() {
        if (currentQuestionNumber >= questionsPerGame) {
            showGameOver();
            return;
        }

        questionLocked = false;
        currentQuestionNumber++;

        questionCountDisplay.textContent = `Question: ${currentQuestionNumber}/${questionsPerGame}`;

        // Select a random country for the question
        currentCountry = getRandomItem(countries);
        usedCountryCodes.push(currentCountry.code);
        flagImage.src = `https://flagcdn.com/w320/${currentCountry.code}.png`;
        flagImage.alt = `Flag of ${currentCountry.name}`;

        // Create an array of potential answers
        let answers = [currentCountry.name];

        const allOtherCountries = countries.filter(c => c.code !== currentCountry.code);
        shuffleArray(allOtherCountries);
        for (let i = 0; i < 3; i++) {
            answers.push(allOtherCountries[i].name);
        }

        shuffleArray(answers);

        answerButtonsContainer.innerHTML = '';
        answers.forEach(countryName => {
            const button = document.createElement('button');
            button.classList.add('btn');
            button.textContent = countryName;
            button.addEventListener('click', () => checkAnswer(countryName));
            answerButtonsContainer.appendChild(button);
        });

        messageDisplay.textContent = '';
        nextButton.style.display = 'none';

        // Re-enable lifelines for this question if not used yet
        if (fiftyBtn) fiftyBtn.disabled = usedFifty;
        if (skipBtn) skipBtn.disabled = usedSkip;

        // Start timer
        startTimer();
    }

    // Check if the selected answer is correct
    function checkAnswer(selectedCountryName) {
        if (questionLocked) return;
        questionLocked = true;
        clearTimer();
        const answerButtons = answerButtonsContainer.querySelectorAll('.btn');
        const isCorrect = selectedCountryName === currentCountry.name;

        // disable lifelines after answer
        if (fiftyBtn) fiftyBtn.disabled = true;
        if (skipBtn) skipBtn.disabled = true;

        answerButtons.forEach(btn => btn.disabled = true);

        if (isCorrect) {
            score++;
            streak++;
            updateScoreDisplay();
            updateStreakDisplay();
            messageDisplay.textContent = "Correct!";
            messageDisplay.style.color = '#2ecc71';
            const correctButton = Array.from(answerButtons).find(btn => btn.textContent === currentCountry.name);
            if (correctButton) correctButton.classList.add('correct');
        } else {
            streak = 0; // Reset streak on incorrect answer
            updateStreakDisplay();
            messageDisplay.textContent = `Incorrect! The correct answer was ${currentCountry.name}.`;
            messageDisplay.style.color = '#e74c3c';
            const selectedButton = Array.from(answerButtons).find(btn => btn.textContent === selectedCountryName);
            if (selectedButton) selectedButton.classList.add('incorrect');
            const correctButton = Array.from(answerButtons).find(btn => btn.textContent === currentCountry.name);
            if (correctButton) correctButton.classList.add('correct');
        }

        nextButton.style.display = 'block';
    }

    function handleTimeUp() {
        if (questionLocked) return;
        questionLocked = true;
        const answerButtons = answerButtonsContainer.querySelectorAll('.btn');
        answerButtons.forEach(btn => btn.disabled = true);
        streak = 0;
        updateStreakDisplay();
        messageDisplay.textContent = `Time's up! The correct answer was ${currentCountry.name}.`;
        messageDisplay.style.color = '#e74c3c';
        const correctButton = Array.from(answerButtons).find(btn => btn.textContent === currentCountry.name);
        if (correctButton) correctButton.classList.add('correct');
        if (fiftyBtn) fiftyBtn.disabled = true;
        if (skipBtn) skipBtn.disabled = true;
        nextButton.style.display = 'block';
    }

    // Show the game over screen
    function showGameOver() {
        clearTimer();
        finalScoreDisplay.textContent = score;
        if (score > bestScore) {
            bestScore = score;
            localStorage.setItem('gtf_best_score', String(bestScore));
        }
        updateHighscoreDisplay();
        if (finalBestDisplay) finalBestDisplay.textContent = String(bestScore);
        let summaryText;
        if (score === questionsPerGame) {
            summaryText = "Perfect score! You're a flag master! 🌟";
        } else if (score >= questionsPerGame * 0.7) {
            summaryText = "Great job! You know your flags well. 👍";
        } else if (score >= questionsPerGame * 0.5) {
            summaryText = "Not bad! A little more practice and you'll be a pro. 😉";
        } else {
            summaryText = "Keep trying! Practice makes perfect. 💪";
        }
        finalSummaryDisplay.textContent = summaryText;
        gameOverModal.style.display = 'flex';
    }

    // Event listeners
    nextButton.addEventListener('click', loadNewQuestion);
    restartButton.addEventListener('click', startGame);

    if (fiftyBtn) {
        fiftyBtn.addEventListener('click', () => {
            if (usedFifty || questionLocked) return;
            const buttons = Array.from(answerButtonsContainer.querySelectorAll('.btn'));
            const wrongButtons = buttons.filter(btn => btn.textContent !== currentCountry.name && !btn.disabled);
            shuffleArray(wrongButtons);
            wrongButtons.slice(0, 2).forEach(btn => {
                btn.classList.add('removed');
                btn.disabled = true;
            });
            usedFifty = true;
            fiftyBtn.disabled = true;
        });
    }

    if (skipBtn) {
        skipBtn.addEventListener('click', () => {
            if (usedSkip || questionLocked) return;
            usedSkip = true;
            skipBtn.disabled = true;
            clearTimer();
            loadNewQuestion();
        });
    }

    // Keyboard shortcuts: 1-4 to answer, Enter to next
    window.addEventListener('keydown', (e) => {
        if (gameOverModal && gameOverModal.style.display === 'flex') return;
        const buttons = Array.from(answerButtonsContainer.querySelectorAll('.btn'))
            .filter(btn => !btn.disabled && !btn.classList.contains('removed'));
        if (e.key >= '1' && e.key <= '4') {
            const idx = Number(e.key) - 1;
            if (buttons[idx]) buttons[idx].click();
        }
        if (e.key === 'Enter') {
            if (nextButton && nextButton.style.display === 'block') {
                nextButton.click();
            }
        }
    });

    // Start the game for the first time
    window.onload = startGame;