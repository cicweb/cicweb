<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>City Income Community</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            background-color: #f9f9f9;
            color: #333;
        }
        header {
            background-color: #dfffd6; /* Light green */
            padding: 20px;
            text-align: center;
            animation: fadeIn 1.5s ease;
        }
        header h1 {
            margin: 0;
            font-size: 2.5rem;
            color: #4caf50; /* Lime green */
        }
        nav {
            background-color: #fffdc1; /* Light yellow */
            padding: 10px;
            display: flex;
            justify-content: space-around;
            align-items: center;
            flex-wrap: wrap; /* Allows wrapping on small screens */
        }
        nav a {
            text-decoration: none;
            color: #333;
            font-weight: bold;
            font-size: 1.2rem;
            padding: 5px 10px;
            margin: 5px;
            transition: color 0.3s ease;
        }
        nav a:hover {
            color: #4caf50;
        }
        section {
            padding: 20px;
            animation: fadeIn 2s ease;
        }
        h2 {
            color: #4caf50;
        }
        ul {
            padding-left: 20px;
        }
        li {
            margin: 10px 0;
        }
        .italic {
            font-style: italic;
        }
        .creator {
            font-weight: bold;
            text-transform: uppercase;
        }
        footer {
            text-align: center;
            background-color: #dfffd6;
            padding: 10px;
            margin-top: 20px;
        }
        .chat-container {
            background-color: #f4f4f4;
            border: 2px solid #4caf50;
            padding: 15px;
            margin: 20px 0;
            border-radius: 8px;
            animation: fadeIn 2s ease;
        }
        .chat-messages {
            height: 200px;
            overflow-y: auto;
            border: 1px solid #ddd;
            padding: 10px;
            background-color: #fff;
            border-radius: 5px;
        }
        .chat-input {
            margin-top: 10px;
            display: flex;
        }
        .chat-input input[type="text"] {
            flex: 1;
            padding: 10px;
            border: 1px solid #ccc;
            border-radius: 5px;
        }
        .chat-input button {
            background-color: #4caf50;
            color: white;
            border: none;
            padding: 10px 15px;
            border-radius: 5px;
            margin-left: 5px;
            cursor: pointer;
            transition: background-color 0.3s ease;
        }
        .chat-input button:hover {
            background-color: #388e3c;
        }
        @keyframes fadeIn {
            from {
                opacity: 0;
            }
            to {
                opacity: 1;
            }
        }
        /* Media Query for smaller screens */
        @media (max-width: 768px) {
            nav {
                flex-direction: column;
                align-items: center;
            }
            header h1 {
                font-size: 2rem;
            }
            section {
                padding: 10px;
            }
        }
    </style>
</head>
<body>
    <header>
        <h1>City Income Community</h1>
        <p>Welcome to the City Income Community!</p>
    </header>
    <nav>
        <a href="#rules">Rules</a>
        <a href="#non-endorsed-rules">Non-Endorsed Rules</a>
        <a href="#admins">Admins</a>
        <a href="#chat">Chat</a>
        <a href="#social-media">Social Media</a>
    </nav>
    <section id="rules">
        <h2>Rules</h2>
        <ul>
            <li>No Scamming. You can only send fast messages, GIFs, or stickers (maximum of 4).</li>
            <li>Do not post graphical content or malicious links.</li>
            <li>Talk in the right groups organized in the community.</li>
            <li>Swearing is allowed.</li>
            <li>Only spam in the Spam group.</li>
            <li>Be respectful. <strong>NO RACISM AND SEXISM!</strong> (Everyone has the same rights).</li>
            <li>Be friendly, especially to admins!</li>
            <li>Only send links or promote yourself in the Link Shares/Self Promotion group.</li>
            <li>DO NOT BEG FOR ADMIN.</li>
        </ul>
        <p class="italic">Rules Written By @Ziad Tamer</p>
    </section>
    <section id="non-endorsed-rules">
        <h2>Non-Endorsed Rules</h2>
        <ul>
            <li>No brainrot.</li>
            <li>No N:)zi stickers or messages.</li>
        </ul>
        <p class="italic">{In future the rules may change}</p>
    </section>
    <section id="admins">
        <h2>Admins</h2>
        <p><strong>Creator:</strong> Simon Podzerka</p>
        <ul>
            <li>Muntajir</li>
            <li>Leo</li>
            <li>Alvin</li>
            <li>Suleiman</li>
            <li>Conner</li>
            <li>Rebbe</li>
            <li>Alan</li>
            <li>Antonio</li>
            <li>Uhh (real name not found)</li>
        </ul>
        <p><strong>Former Admin:</strong> Ziad Tamer</p>
        <h3>Admins in Specific Groups:</h3>
        <ul>
            <li>Rizzwan</li>
            <li>خزیمہ محمود</li>
        </ul>
    </section>
    <section id="chat" class="chat-container">
        <h2>Chat</h2>
        <div>
            <label for="username">Enter your username:</label>
            <input type="text" id="username" placeholder="Your name">
            <button onclick="joinChat()">Join Chat</button>
        </div>
        <div id="chatArea" style="display: none;">
            <div class="chat-messages" id="chatMessages"></div>
            <div class="chat-input">
                <input type="text" id="chatInput" placeholder="Type a message">
                <button onclick="sendMessage()">Send</button>
            </div>
        </div>
    </section>
    <section id="social-media">
        <h2>Social Media</h2>
        <p>Follow us:</p>
        <ul>
            <li><a href="https://chat.whatsapp.com/IriRIjLL5TIK4Xy0f9PV2q" target="_blank">WhatsApp Group</a></li>
            <li><a href="https://www.tiktok.com/@incomecity" target="_blank">TikTok: @incomecity</a></li>
            <li><a href="https://youtube.com/@cityincome" target="_blank">YouTube: @cityincome</a></li>
            <li><a href="https://www.instagram.com/city_income" target="_blank">Instagram: @city_income</a></li>
        </ul>
    </section>
    <footer>
        <p>City Income Community © 2024</p>
    </footer>

    <script>
        let username = "";

        function joinChat() {
            const userInput = document.getElementById("username");
            if (userInput.value.trim()) {
                username = userInput.value.trim();
                userInput.disabled = true;
                document.getElementById("chatArea").style.display = "block";
            } else {
                alert("Please enter a valid username.");
            }
        }

        function sendMessage() {
            const chatInput = document.getElementById("chatInput");
            const chatMessages = document.getElementById("chatMessages");

            if (chatInput.value.trim()) {
                const message = document.createElement("div");
                message.textContent = `${username}: ${chatInput.value.trim()}`;
                chatMessages.appendChild(message);
                chatInput.value = "";
                chatMessages.scrollTop = chatMessages.scrollHeight;
            } else {
                alert("Please enter a message.");
            }
        }
    </script>
</body>
</html>
