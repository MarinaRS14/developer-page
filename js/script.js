const form = document.querySelector('form');

const fullName = document.getElementById('name');
const message = document.getElementById('message');
const email = document.getElementById('email');

function SendMessage() {
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
      name: fullName.value,
      message: message.value,
      //   userId: 1,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json))
    .catch((error) => console.log('error', error));
}

function checkInputs() {
  const items = document.querySelectorAll('.item');

  for (const item of items) {
    if (item.value == '') {
      item.classList.add('error');
      item.parentElement.classList.add('error');
    }

    if (items[1].value != '') {
      validateEmail();
    }

    items[1].addEventListener('keyup', () => {
      validateEmail();
    });

    item.addEventListener('keyup', () => {
      if (item.value != '') {
        item.classList.remove('error');
        item.parentElement.classList.remove('error');
      } else {
        item.classList.add('error');
        item.parentElement.classList.add('error');
      }
    });
  }
}

function validateEmail() {
  const emailRegex =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (!email.value.match(emailRegex)) {
    email.classList.add('error');
    email.parentElement.classList.add('error');
  } else {
    email.classList.remove('error');
    email.parentElement.classList.remove('error');
  }
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  checkInputs();

  if (
    !fullName.classList.contains('error' && !email.classList.contains('error')) &&
    !message.classList.contains('error')
  ) {
    SendMessage();

    form.reset();

    return false;
  }
});

function nthFib(n) {
  if (n == 1) {
    return 0;
  } else if (1 < n <= 3) {
    return 1;
  } else {
    return nthFib(n - 1) + nthFib(n - 2);
  }
}

console.log(nthFib(1));
