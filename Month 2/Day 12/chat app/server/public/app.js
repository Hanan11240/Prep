import { text } from "express";

const socket = io("ws://localhost:3000");

const msgInput = document.querySelector('#message')
const nameInput = document.querySelector('#name')
const chatRoom = document.querySelector('#room')
const activity = document.querySelector('.activity')
const usersList = document.querySelector('.user-list')
const roomList = document.querySelector('.room-list')
const chatDisplay = document.querySelector('.chat-display')


function sendMessage(e) {
    e.preventDefault();
    if (msgInput.value && nameInput.value && chatRoom.value) {
        socket.emit('message', { name: nameInput.value, text: msgInput.value });
        msgInput.value = '';
    }
    msgInput.focus();

}


function enterRoom(e) {
    e.preventDefault()
    if (chatRoom.value && nameInput.value) {
        socket.emit('enterRoom', { name: nameInput.value, room: chatRoom.value })
    }
}

document.querySelector('.form-msg')
    .addEventListener('submit', sendMessage);

document.querySelector('.form-join')
    .addEventListener('submit', enterRoom);

msgInput.addEventListener('keypress', () => {
    socket.emit('activity', nameInput.value)
})

socket.on('message', (data) => {
    activity.textContent = ""
    const li = document.createElement('li');
    li.textContent = data;
    document.querySelector('ul').appendChild(li);
});

let activityTimer;
socket.on('activity', (id) => {

    activity.textContent = `${id} is typing...`;


    // clear timer
    clearTimeout(activityTimer);
    activityTimer = setTimeout(() => {
        activity.textContent = '';
    }, 1000);
})

