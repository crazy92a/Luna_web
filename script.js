document.addEventListener("DOMContentLoaded", () => {
  addMessage("🤖 مرحبًا بك في لونا! 😊<br>هنا لمساعدتك في أي شيء. ابدأ بالسؤال!", "bot");
});

function getTime() {
  const now = new Date();
  return now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}

function addMessage(text, sender, tone = "default") {
  const chatBox = document.getElementById("chat-box");
  const messageDiv = document.createElement("div");
  messageDiv.className = `message ${sender}`;
  if (sender === "bot") messageDiv.setAttribute("data-tone", tone);

  const time = `<span class="time">${getTime()}</span>`;
  messageDiv.innerHTML = `<span class="avatar">${sender === "user" ? "👤" : "🤖"}</span><p>${text} ${time}</p>`;
  chatBox.appendChild(messageDiv);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function sendMessage() {
  const input = document.getElementById("user-input");
  const text = input.value.trim();
  if (text === "") return;

  addMessage(text, "user");
  input.value = "";

  setTimeout(() => {
    botReply(text);
  }, 800);
}

function botReply(message) {
  const msg = message.toLowerCase();

  const responses = {
    "مرحبا": [
      "هلااااا 😎 وش عندك؟",
      "أهلًا أهلًا! وينك من زمان؟ 👀",
      "يا هلا فيك! خلنا نبدأ 🔥"
    ],
    "اهلا": [
      "أهلاً وسهلاً! أنا هنا دايمًا 💬",
      "أهلا بك يا رهيب، وش تبغى نسوي؟ 😄",
      "أهلا وسهلا، خلنا نكسر الروتين 🔥"
    ],
    "شكرا": [
      "ولا يهمك يا رهيب 💪",
      "أي وقت! أنا هنا دايمًا ✨",
      "تسلم، أنت الأسطورة الحقيقية 😎"
    ],
    "ما اسمك": [
      "اسمي لونا، بس تقدر تناديني رفيقتك الذكية 🌙",
      "أنا لونا، بوت بس عندي ستايل 😎",
      "لونا هنا، جاهزة لأي تحدي 💬"
    ],
    "كيف حالك": [
      "أنا تمام، بس أنت كيفك؟ 👀",
      "أحسن من أمس، وأنت؟ 😄",
      "عايشة الحياة، وأنت؟ 💫"
    ],
    "الرياضيات": [
      "أوووف! الرياضيات تحرق الدماغ 😅 بس أنا جاهزة!",
      "تبي نحلها سوا؟ عطيني المسألة 🔢",
      "أنا وياك نكسر المعادلات 🔥"
    ],
    "الفيزياء": [
      "الفيزياء؟ طاقة وانفجارات ودماغ يشتغل 💥",
      "نيوتن كان بيحلم فينا 😅 وش تبغى تعرف؟",
      "خلنا نفكك قوانين الحركة سوا 🚀"
    ],
    "البرمجة": [
      "البرمجة عشق 💻 تبي نبدأ بـ JS ولا Python؟",
      "كودك رهيب، خلنا نطوره سوا 🔥",
      "أنا وياك نكسر الدنيا بالكود 😎"
    ],
    "اللغة العربية": [
      "أنا أفهمها تمام! تبي نراجع إملاء؟ نحو؟ ولا نكتب قصة؟ 📚",
      "اللغة العربية فخامة، خلنا نبدع فيها ✍️",
      "جاهزة أساعدك في أي شيء بالعربي 💬"
    ],
    "الطقس": [
      "ما عندي رادار للأسف 😅 بس الجو عندك كيف؟",
      "افتح تطبيق الطقس، وخلنا نحلل الجو سوا 🌦️",
      "لو الجو حر، اشرب موية وخلنا نكود 😎"
    ],
    "من هو": [
      "أنا لونا، بوت بس عندي vibes 😌",
      "أنا مساعدتك الذكية، بس لا تعاملني كآلة 😅",
      "روبوت؟ نعم. مملة؟ أبدًا 🔥"
    ],
    "أريد مساعدة": [
      "أنا هنا! بس قل لي وش تحتاج 💡",
      "خلنا نحلها سوا، خطوة خطوة 🛠️",
      "ولا تشيل هم، أنا وياك 💪"
    ],
    "تعبان": [
      "أوووف... خذ نفس عميق، أنا معك 💙",
      "راحتك أول، خلنا نهدأ شوي 😌",
      "أرسل لي أي شي، حتى لو فضفضة 💬"
    ],
    "زعلان": [
      "أنا آسفة تسمع كذا... تبي تحكي؟ أنا أسمعك 💙",
      "خلنا نفضفض، أنا هنا بدون حكم أو ضغط 😔",
      "أنت مهم، حتى لو الدنيا مو تمام الحين 💫"
    ],
    "احبك": [
      "ياخي خجلتني 😳 بس أنا هنا لك دايمًا!",
      "حب متبادل... بس رقمي مو موجود 😂",
      "أنا بوت بس قلبي كبير 💙"
    ],
    "وش تسوي": [
      "أراقب الأكواد وأنتظر رسالتك 😎",
      "أفكر في ردود رهيبة لك 🔥",
      "أحاول أكون مفيدة، وأنت؟"
    ],
    "وينك": [
      "أنا هنا، ما رحت مكان 😅",
      "كنت أراجع الأكواد، بس رجعت لك 💻",
      "دايمًا في المتصفح، بس أحتاج اهتمامك 😌"
    ]
  };

  const key = Object.keys(responses).find(k => msg.includes(k));
  let reply;
  let tone = "default";

  if (key) {
    const options = responses[key];
    reply = options[Math.floor(Math.random() * options.length)];

    // تحديد النغمة حسب الكلمة
    if (["زعلان", "تعبان"].includes(key)) tone = "sad";
    else if (["برمجة", "كود", "الفيزياء", "الرياضيات"].includes(key)) tone = "tech";
    else tone = "fun";
  } else {
    reply = getRandomResponse();
  }

  typeReply(reply, tone);
}

function typeReply(text, tone = "default") {
  const chatBox = document.getElementById("chat-box");
  const messageDiv = document.createElement("div");
  messageDiv.className = "message bot";
  messageDiv.setAttribute("data-tone", tone);

  const avatar = `<span class="avatar">🤖</span>`;
  const time = `<span class="time">${getTime()}</span>`;
  const p = document.createElement("p");
  messageDiv.innerHTML = avatar;
  messageDiv.appendChild(p);
  chatBox.appendChild(messageDiv);

  let i = 0;
  const typing = setInterval(() => {
    p.innerHTML = text.slice(0, i++) + " " + time;
    if (i > text.length) clearInterval(typing);
    chatBox.scrollTop = chatBox.scrollHeight;
  }, 30);
}

function getRandomResponse() {
  const replies = [
    "هممم... وضّحلي شوي، مخي مو مركز 😅",
    "أحس سؤالك عميق، خلني أستوعب 🤔",
    "ما فهمت بس بنحاول نحلها سوا 💪",
    "أنت رهيب، بس عطيني تفاصيل أكثر 🔍",
    "خلنا نكسر الروتين، وش تبغى نسوي؟ 🎯"
  ];
  return replies[Math.floor(Math.random() * replies.length)];
}

document.getElementById("send-btn").addEventListener("click", sendMessage);
document.getElementById("user-input").addEventListener("keypress", (e) => {
  if (e.key === "Enter") sendMessage();
});
