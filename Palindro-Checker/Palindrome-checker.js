let checkButton = document.getElementById('check-btn');
addEventListener('keydown', (event)=> {
  let keyPressed = event.key;
  if(keyPressed === 'Enter'){
    checkParndrom();
    checkButton.style.background = 'lightblue';
    setTimeout(()=>{
      checkButton.style.background = '#5a01a7';
    },50)
  }
})


function checkParndrom(){
  const inputText = document.getElementById('text-input').value;
    const resultElement = document.getElementById('result');
    
    if (!inputText.trim()) {
      alert('Please input a value for check');
      return;
    }

    const cleanedText = inputText.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    const reversedText = cleanedText.split('').reverse().join('');

    if (cleanedText === reversedText) {
      resultElement.textContent = `${inputText} is a palindrome.`;
    } else {
      resultElement.textContent = `${inputText} is not a palindrome.`;
    }
}
