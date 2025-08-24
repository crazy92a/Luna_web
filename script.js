// رسالة ترحيب عند فتح الموقع
document.addEventListener("DOMContentLoaded", () => {
  alert("مرحبًا بك في Luna! 🌙\n\nأنا هنا لمساعدتك في أي شيء.");
});

// إذا أردت إضافة ميزة محادثة ذكية (Chatbot) بسيطة، استخدم هذا الكود:
const chatBox = document.getElementById('chat-box');
const userInput = document.getElementById('user-input');

function addMessage(sender, text) {
  const div = document.createElement('div');
  div.className = sender;
  div.textContent = text;
  chatBox.appendChild(div);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function sendMessage() {
  const message = userInput.value.trim();
  if (!message) return;

  addMessage('user', message);
  userInput.value = '';

  // ردود بسيطة من الذكاء الاصطناعي
  setTimeout(() => {
    const responses = [
      "أنا آسف، لم أفهم تمامًا. هل يمكنك إعادة الصياغة؟",
      "رائع! سأفكر في ذلك...",
      "هل تقصد أنك تريد مساعدة في كتابة شيء؟",
      "أنا أتعلم، وأشكرك على تفاعلك!"
    ];
    const randomResponse = responses[Math.floor(Math.random() * responses.length)];
    addMessage('ai', randomResponse);
  }, 1000);
}
