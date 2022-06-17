const defaultValue = 0;
let currentResult = defaultValue;
let calcValue = document.getElementById('input-number');
let resultValue = document.getElementById('result-val');
let calcExpression = document.getElementById('calc-expression');

function inputValue() {
  let inputVal = calcValue.value;
  return inputVal;
}

function outputcalcexpression(operator, uI) {
  if (uI !=0 && (operator == '+' || operator == '-')) {
    const expression = `${currentResult} ${operator}  ${uI}`; 
    calcExpression.textContent = expression;
  } else {
    const expression = `${currentResult} ${operator}  ${uI}`; 
    calcExpression.textContent = expression;
  }
}

function addNumber() {
  const userInput = inputValue();
  outputcalcexpression('+', userInput)
  const sum = currentResult + parseInt(calcValue.value);
  currentResult = sum;
  resultValue.innerHTML = `<strong>Result: </strong> ${sum}`;
  calcValue.value = 0;
}

function subtractNumber() {
  const userInput = inputValue();
  outputcalcexpression('-', userInput)
  const sum = currentResult - parseInt(calcValue.value);
  currentResult = sum;
  resultValue.innerHTML = `<strong>Result: </strong> ${sum}`;
  calcValue.value = 0;
}

function multiplyNumber() {
  const userInput = inputValue();
  outputcalcexpression('*', userInput)
  const sum = currentResult * parseInt(calcValue.value);
  currentResult = sum;
  resultValue.innerHTML = `<strong>Result: </strong> ${sum}`;
  calcValue.value = 0;
}

function divideNumber() {
  const userInput = inputValue();
  if (userInput != 0) {
    outputcalcexpression('/', userInput)
    const sum = currentResult / parseInt(calcValue.value);
    currentResult = sum;
    resultValue.innerHTML = `<strong>Result: </strong> ${sum}`;
    calcValue.value = 0;
  }
}

function clearAll() {
  let userInput = inputValue()
  userInput = 0;
  calcExpression.textContent = '0';
  resultValue.innerHTML = `<strong>Result:</strong> 0`
}
