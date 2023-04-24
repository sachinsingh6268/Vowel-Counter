const isVowel = (ch) => {
    if (ch === 'a' || ch === 'e' || ch === 'i' || ch === 'o' || ch === 'u') {
        return true;

    }
    return false;
}

const isConsonant = (ch) => {
    if (ch.charCodeAt(0) >= 97 && ch.charCodeAt(0) <= 122 && !isVowel(ch)) {
        return true;
    }

    return false;
}

const isSpace = (ch) => {
    if (ch === ' ') {
        return true;
    }
    return 0;
}

const isDigit = (ch) => {
    if (ch >= '0' && ch <= '9') {
        return 1;
    }
    return 0;
}


const count = () => {
    let finalCount = document.querySelector(".finalCount");
    finalCount.innerHTML = "";
    let text = document.getElementById("textBox").value;
    const selectedOption = document.getElementById("selectedOption").value;

    text = text.toLowerCase();

    let count = 0;
    for (let i = 0; i < text.length; i++) {
        if (selectedOption === 'vowel') {
            if (isVowel(text[i])) {
                count++;
            }

        } else if (selectedOption === 'consonant') {
            if (isConsonant(text[i])) {
                count++;
            }
        } else if (selectedOption === 'space') {
            if (isSpace(text[i])) {
                count++;
            }
        } else {
            if (isDigit(text[i])) {
                count++;
            }
        }
    }

    console.log(count);

    finalCount.innerHTML = `Count of ${selectedOption}s is ${count}.`



}

const reset = () => {
    document.getElementById("textBox").value = "";
    document.querySelector(".finalCount").innerHTML = "";
}