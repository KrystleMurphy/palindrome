// Get the elements
const checkBtn = document.querySelector('#check-btn');
const textInput = document.querySelector('#text-input');
const resultElement = document.querySelector('#result');

// Function to check if a string is a palindrome
function isPalindrome(str) {
    const cleanStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    const reversedStr = cleanStr.split('').reverse().join('');
    return cleanStr === reversedStr;
}

// Function to handle search
function handleSearch() {
    const inputValue = textInput.value.trim();

    if (inputValue === '') {
        alert('Please input a value');
    } else {
        if (isPalindrome(inputValue)) {
            resultElement.textContent = inputValue + ' is a palindrome';
        } else {
            resultElement.textContent = inputValue + ' is not a palindrome';
        }
    }
}

// Add click event listener to the check button
checkBtn.addEventListener('click', handleSearch);

// Add keypress event listener to the text input field
textInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        handleSearch();
    }
});