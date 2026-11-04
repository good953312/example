const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const messageInput = document.querySelector('#message');
const form = document.querySelector('#form');
const output = document.querySelector('#out1');

form.addEventListener('submit', function (event) {
    event.preventDefault();
    _name = nameInput.value;
    _email = emailInput.value;
    message = messageInput.value;

    console.log('이름:', _name);
    console.log('이메일:', _email);
    console.log('메시지:', _message);


    output.textContent = `이름: ${_name}, 이메일: ${_email}, 메시지: ${_message}`;

});
