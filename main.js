var re = /^(?:\d{3}|\(\d{3}\))([-\/\.])\d{3}\1\d{4}$/;
function testInfo(phoneInput) {
  var OK = re.exec(phoneInput.value);
  var out = document.querySelector('#out');
  if (!OK) {
    out.textContent = `${phoneInput.value} isn't a phone number`;
  } else {
    out.textContent = `Thanks, your phone number is ${OK[0]}`;
  }
}