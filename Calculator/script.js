function appendValue(value) {
  document.getElementById('display').value += value;
}

function clearDisplay() {
  document.getElementById('display').value = '';
}

function calculate() {
  try {
    document.getElementById('display').value = eval(document.getElementById('display').value);
  } catch (e) {
    document.getElementById('display').value = 'Error';
  }
}

function backspace() {
  let current = document.getElementById('display').value;
  document.getElementById('display').value = current.slice(0, -1);
}

// Keyboard support
document.addEventListener('keydown', function(e) {
  if ((e.key >= '0' && e.key <= '9') || "+-*/.".includes(e.key)) {
    appendValue(e.key);
  } else if (e.key === 'Enter') {
    calculate();
  } else if (e.key === 'Backspace') {
    backspace();
  } else if (e.key === 'Escape') {
    clearDisplay();
  }
});










