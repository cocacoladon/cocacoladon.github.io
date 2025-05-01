const chatbox = document.getElementById("chatbox");
const input = document.getElementById("messageInput");

function sendMessage() {
  const message = input.value;
  if (message.trim() !== "") {
    const msgElement = document.createElement("div");
    msgElement.textContent = message;
    chatbox.appendChild(msgElement);
    input.value = "";
    chatbox.scrollTop = chatbox.scrollHeight;
  }
}
