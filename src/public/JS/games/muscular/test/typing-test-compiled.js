// jQuery like selection of elements.
window.$ = document.querySelectorAll.bind(document);

// Changes for  Firefox
if (navigator.userAgent.match(/firefox/i)) {
    // Unicode font sizes
    let ffBtn = "font-weight: normal; font-size: 2em; margin-left: 0.3em;";
    $("#restart-symbol")[0].setAttribute("style", ffBtn);

    let ffwait = "line-height: 1em; font-size: 4em;";
    $(".waiting")[0].setAttribute("style", ffwait);
}

/////////////////////////////////////////

// Sorted list of the 500 most common English words.
let wordList = ['Electroencephalographer', 'Sternocleidomastoid', 'Anti-constitutionality', 'Electroencephalography', 'HUMANITY Counter-revolutionary', 'Interdisciplinarity', 'Desoxyribonucleotide', 'Otorhinolaryngologist', 'Otorhinolaryngology', 'Electroencephalographer', 'Anti-constitutionally', 'Lithophotographically', 'Circumstantially ','Electrocardiographically','Magnetoencephalography','Aminotransferase','Disproportionately','Extraterritoriality','Extraterritoriality','Sternocleidooccipitomastoid','Nacionalsindicalista','Craniopharyngioma','Encephalitozoonidae','Antibullfighting','Incomprehensibility', 'Antigovernmentalistically', 'Equisatisfactibility', 'Hypogammaglobulinemia', 'Bioluminescence', 'Pseudohermaphroditism', 'Auriculoventriculostomy', 'Magnetohydrodynamics',
"slogan", "flame", "important", "nerves", "hair", "signals", "floor", "early", "cow",
"carrot", "hit", "bibliography", "lollipop", "defend", "that", "think", "bend", "say",
"frame", "spindle", "undecided", "under", "was", "line", "for", "before", "in",
"turn on", "nose", "because", "walls", "same", "as", "meaning", "I", "differentiate",
"theirs", "move", "they", "rights", "are", "lad", "budget", "old", "regenerate",
"also", "are", "rural", "salty", "say", "from", "phrase", "sensational",
"place", "had", "three", "for", "want", "hot", "air", "simple", "good",
"some", "site", "like", "play", "place", "small", "we", "end", "can",
"put", "out", "home", "other", "read", "where", "hand", "everything", "port",
"yours", "long", "when", "spell", "up", "add", "use", "although", "word",
"land", "like", "here", "said", "must", "a", "great", "every", "height",
"she", "as", "with", "follow", "do", "act", "his", "object", "time",
"ask", "if", "meaning", "can", "change", "way", "were", "about", "light",
"many", "generous", "then", "turn off", "pupil", "need", "duty", "home",
"write", "paint", "like", "try", "nod", "import", "nothing", "repeat",
"lost", "animal", "long", "point", "make", "mother", "thing", "world",
"see", "near", "point", "build", "two", "remote", "travel", "ground", "juxtaposed",
"slogan", "flame", "important", "nerves", "hair", "signals", "floor", "early", "cow",
"carrot", "hit", "bibliography", "lollipop", "defend", "that", "think", "bend", "say",
"frame", "spindle", "undecided", "under", "was", "line", "for", "before", "in",
"turn on", "nose", "because", "walls", "same", "as", "meaning", "I", "differentiate",
"theirs", "move", "they", "rights", "are", "lad", "budget", "old", "regenerate",
"also", "are", "rural", "salty", "say", "from", "phrase", "sensational",
"place", "had", "three", "for", "want", "hot", "air", "simple", "good",
"some", "site", "like", "play", "place", "small", "we", "end", "can",
"put", "out", "home", "other", "read", "where", "hand", "everything", "port",
"yours", "long", "when", "spell", "up", "add", "use", "although", "word",
"land", "like", "here", "said", "must", "a", "great", "every", "height",
"she", "as", "with", "follow", "do", "act", "his", "object", "time",
"ask", "if", "meaning", "can", "change", "way", "were", "about", "light",
"many", "generous", "then", "turn off", "pupil", "need", "duty", "home",
"write", "paint", "like", "try", "nod", "import", "nothing", "repeat",
"lost", "animal", "long", "point", "make", "mother", "thing", "world",
"see", "near", "point", "build", "two", "remote", "travel", "ground", "juxtaposed",
"slogan", "flame", "important", "nerves", "hair", "signals", "floor", "early", "cow",
"carrot", "hit", "bibliography", "lollipop", "defend", "that", "think", "bend", "say",
"frame", "spindle", "undecided", "under", "was", "line", "for", "before", "in",
"turn on", "nose", "because", "walls", "same", "as", "meaning", "I", "differentiate",
"theirs", "move", "they", "rights", "are", "lad", "budget", "old", "regenerate",
"also", "are", "rural", "salty", "say", "from", "phrase", "sensational",
"place", "had", "three", "for", "want", "hot", "air", "simple", "good",
"some", "site", "like", "play", "place", "small", "we", "end", "can",
"put", "out", "home", "other", "read", "where", "hand", "everything", "port",
"yours", "long", "when", "spell", "up", "add", "use", "although", "word",
"land", "like", "here", "said", "must", "a", "great", "every", "height",
"she", "as", "with", "follow", "do", "act", "his", "object", "time",
"ask", "if", "meaning", "can", "change", "way", "were", "so"];

//////////////////////////////////////////

// Knuth-Fisher-Yates Shuffle
// http://bost.ocks.org/mike/shuffle/
function shuffle(array) {
    let m = array.length, t, i;
    // While there remain elements to shuffle…
    while (m) {
        // Pick a remaining element…
        i = Math.floor(Math.random() * m--);
        // And swap it with the current element.
        t = array[m];
        array[m] = array[i];
        array[i] = t;
    }
    return array;
}

// Add words to word-section

function addWords() {
    // clear existing word-section
    let wordSection = $("#word-section")[0];
    wordSection.innerHTML = "";
    $("#typebox")[0].value = "";

    for (let i = 350; i > 0; i--) {
        let words = shuffle(wordList);
        let wordSpan = `<span>${words[i]}</span>`;
        wordSection.innerHTML += wordSpan;
    }
    // mark first word as current-word
    wordSection.firstChild.classList.add("current-word");

    // mark last word with magic-box
    // let magicBox = document.createElement("DIV");
    // magicBox.classList.add("magic-box");
    // wordSection.appendChild(magicBox);
}

//////////////////////////////////////////

// Word Colors
let colorCurrentWord =" #dddddd";
let colorCorrectWord = "#93C572";
let colorIncorrectWord = "#e50000";

// Word Count and other data.
let wordData = {
    seconds: 60,
    correct: 0,
    incorrect: 0,
    total: 0,
    typed: 0
};

//////////////////////////////////////////
// Initial implementation notes:
// next word on <space>, if empty, then set value=""
// after <space> if value == current-word, mark as correct-word
// else, mark as incorrect-word
// if value.length != current-word[:value.length], mark as incorrect-word
// else, mark as current-word
//////////////////////////////////////////

function checkWord(word) {
    let wlen = word.value.length;
    // how much we have of the current word.
    let current = $(".current-word")[0];
    let currentSubstring = current.innerHTML.substring(0, wlen);
    // check if we have any typing errors
    if (word.value.trim() != currentSubstring) {
        current.classList.add("incorrect-word-bg");
        return false;
    } else {
        current.classList.remove("incorrect-word-bg");
        return true;
    }
}

function submitWord(word) {
    // update current-word and
    // keep track of correct & incorrect words
    let current = $(".current-word")[0];

    if (checkWord(word)) {
        current.classList.remove("current-word");
        current.classList.add("correct-word-c");
        wordData.correct += 1;
    } else {
        current.classList.remove("current-word", "incorrect-word-bg");
        current.classList.add("incorrect-word-c");
        wordData.incorrect += 1;
    }
    // update wordData
    wordData.total = wordData.correct + wordData.incorrect;

    // make the next word the new current-word.
    current.nextSibling.classList.add("current-word");
}

function clearLine() {
    // remove past words once you get to the next line
    let wordSection = $("#word-section")[0];
    let current = $(".current-word")[0]; // second line (first word)
    let previous = current.previousSibling; // first line (last word)
    let children = $(".correct-word-c, .incorrect-word-c").length;

    // <span>'s on the next line have a greater offsetTop value
    // than those on the top line.
    // Remove words until the first word on the second line
    // is the fistChild of word-section.
    if (current.offsetTop > previous.offsetTop) {
        for (let i = 0; i < children; i++) {
            wordSection.removeChild(wordSection.firstChild);
        }
    }
}

function isTimer(seconds) {
    // BUG: page refresh with keyboard triggers onkeyup and starts timer
    // Use restart button to reset timer

    let time = seconds;
    // only set timer once
    let one = $("#timer > span")[0].innerHTML;
    if (one == "1:00") {
        let typingTimer = setInterval(() => {
            if (time <= 0) {
                clearInterval(typingTimer);
                finishTest();
            } else {
                time -= 1;
                let timePad = (time < 10) ? ("0" + time) : time; // zero padded
                $("#timer > span")[0].innerHTML = `0:${timePad}`;
            }
        }, 1000);
    } else if (one == "0:00") {return false;}
    return true;
}

function sendAnalytics(wpm, accuracy, total, correct, incorrect, typed) {
    result = wpm+"-"+accuracy+"-"+total+"-"+correct+"-"+incorrect+"-"+typed;
    
    // Send to Google Analytics
    ga('send', 'event', 'Typetest', 'result', result);
    
    // Send to clicky
    clicky.log('typetest/#result', result);
}

var finished = false;
function finishTest() {
    // Avoid calculating more than once.
    if (finished) {
        return;
    } else {
        finished = true;
    }
    
    calculateWPM(wordData);
}

function calculateWPM(data) {
    let {seconds, correct, incorrect, total, typed} = data;
    let min = (seconds / 60);
    let wpm = Math.ceil((typed / 5) - (incorrect) / min);
    let accuracy = Math.ceil((correct / total) * 100);

    if (wpm < 0) {wpm = 0;}     // prevent negative wpm from incorrect words

    // template strings are pretty cool
    let results = `<ul id="results">
        <li>Puntos: <span class="wpm-value">${wpm}</span></li>
        <li>Porcentaje: <span class="wpm-value">${accuracy}%</span></li>
        <li id="results-stats">
        Total de palabras: <span>${total}</span> |
        Palabras Correctas: <span>${correct}</span> |
        Palabras Incorrectas: <span>${incorrect}</span> |
        Tipos de Caracteres: <span>${typed}</span>
        </li>
        </ul>`;

    $("#word-section")[0].innerHTML = results;

    // color code accuracy
    let wpmClass = $("li:nth-child(2) .wpm-value")[0].classList;
    if (accuracy > 80) {wpmClass.add("correct-word-c");}
    else { wpmClass.add("incorrect-word-c");}
    
    sendAnalytics(wpm, accuracy, total, correct, incorrect, typed);
    console.log(wordData);
}

function typingTest(e) {
    // Char:        Key Code:
    // <space>      32
    // <backspace>  8
    // <shift>      16
    // [A-Z]        65-90
    // [' "]        222

    // Get key code of current key pressed.
    e = e || window.event;
    let kcode = e.keyCode;
    let word = $("#typebox")[0];

    // check if empty (starts with space)
    if (word.value.match(/^\s/g)) {
        word.value = "";
    } else {
        // Only score when timer is on.
        if (isTimer(wordData.seconds)) {
            checkWord(word);    // checks for typing errors while you type
            // <space> submits words
            if (kcode == 32) {
                submitWord(word);  // keep track of correct / incorrect words
                clearLine();  // get rid of old words
                $("#typebox")[0].value = ""; // clear typebox after each word
            }
            wordData.typed += 1; // count each valid character typed
        } else {
            // Display typing test results.
            finishTest();
        }
    }
}

function restartTest() {
    finished = false;
    $("#typebox")[0].value = "";
    location.reload();
}
