function sendMessage() {
    const userInput = document.getElementById('user-input').value;
    if (userInput.trim() === '') {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Please enter a message!',
        });
        return;
    }

    const chatLog = document.getElementById('chat-log');
    const userMessage = document.createElement('div');
    userMessage.className = 'user-message';
    userMessage.textContent = userInput;
    chatLog.appendChild(userMessage);

    const botResponse = getBotResponse(userInput);
    const botMessage = document.createElement('div');
    botMessage.className = 'bot-message';
    botMessage.textContent = botResponse;
    chatLog.appendChild(botMessage);

    document.getElementById('user-input').value = '';
    chatLog.scrollTop = chatLog.scrollHeight;
}

function getBotResponse(input) {
    const responses = {
        'Hello' : 'Hi! Nice day yah ?',
        'Hi': 'Hi! Nice day yah ?',
        'Chào': 'Hi! Nice day yah ?',
        'How are you ?': 'Very good!',
        'What are you programmed from ?': 'I program in HTML, CSS, Javascript and use the VScode tool for programming .',
        'Who created you ?': 'I am a small project of Nguyen Anh Tu.',
        'How old are you ?': 'I am currently 2 weeks old .',
        'How many programming languages ​​are there?': 'There is no exact number of major programming languages, but some estimates suggest that around 50 to 100 popular programming languages ​​are widely used in the software industry .',
        'What is HTML language ?': 'HTML (HyperText Markup Language) is a markup language used to create and structure content on web pages. HTML is not a programming language, but rather a markup language that provides ways to format text, images, links, and other elements on web pages .',
        'What is CSS language ?': 'CSS (Cascading Style Sheets) is a language used to format and present the content of HTML documents. CSS allows you to adjust the appearance of web page elements, including color, typography, layout, spacing, and more .',
        'What is Javascript language ?': 'JavaScript is a popular programming language used primarily to develop web applications and provide interactive features on websites. It is designed to run in a web browser and can handle events and changes in web page content without reloading the page .',
        'Bye': 'Bye, wish you a good day .',
        'What are HTML, CSS, Javascript languages ​​used for ?': 'HTML, CSS, and JavaScript are core technologies used in web development to create and style web pages . Like i am .',
    };
    input = input.toLowerCase();
    return responses[input] || "Sorry, I'm not programmed to answer this question yet. You can refer to search sites like Google, Wikimedia, Safari....";
}
