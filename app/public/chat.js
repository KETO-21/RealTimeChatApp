const socket = io();

const form = document.getElementById('form');
const input = document.getElementById('input');
const username = document.getElementById('username');
const messages = document.getElementById('messages');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    if (input.value && username.value) {
        const message = `${username.value}: ${input.value}`;
        socket.emit('chat message', message);
        input.value = ''; // メッセージ欄だけをリセット
    }
});

socket.on('chat message', function(msg) {
    const item = document.createElement('li');
    item.textContent = msg;
    messages.appendChild(item);
    window.scrollTo(0, document.body.scrollHeight);
});
