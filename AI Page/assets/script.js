const inputEl = document.querySelector('.input-chat');
const btnEl = document.querySelector('.fa-paper-plane');
const cardBodyEl = document.querySelector('.card-body');

const askEl = document.querySelector('.ask')

let userMessage;

btnEl.addEventListener('click', manageChat);
inputEl.addEventListener('keyup', (event) => {
    event.preventDefault();
    if (event.keyCode === 13) {
        btnEl.click();
    }
})

function manageChat() {
    userMessage = inputEl.value.trim();

    if (!userMessage) return;
    inputEl.value = '';

    askEl.classList.add('hidden');
    cardBodyEl.appendChild(messageEl(userMessage, 'user'))

    setTimeout(() => {
        cardBodyEl.appendChild(messageEl('Thinking...', 'chat-bot'))
    }, 750);
}

// messages
const messageEl = (message, className) => {
    const chatEl = document.createElement('div');
    chatEl.classList.add('chat', `${className}`);
    let chatContent = className === 'chat-bot' ? `<span class="bot-icon"><i class="fa-solid fa-minus"></i></span>
                    <p>${message}</p>` : `<span class="user-icon"><i class="fa fa-user"></i></span>
                    <p>${message}</p>`
    chatEl.innerHTML = chatContent;
    return chatEl;
}
