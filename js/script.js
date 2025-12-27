window.onload = () => {
  document.getElementById("loader").style.display = "none";
};

// AI Demo Logic
function generateText() {
  let input = document.getElementById("aiInput").value;
  document.getElementById("aiOutput").innerText =
    "AI Response: This is a generated response about " + input;
}

function paraphraseText() {
  let text = document.getElementById("paraInput").value;
  document.getElementById("paraOutput").innerText =
    "Paraphrased: " + text.split(" ").reverse().join(" ");
}

function summarizeText() {
  let text = document.getElementById("sumInput").value;
  document.getElementById("sumOutput").innerText =
    "Summary: " + text.slice(0, 100) + "...";
}

function generatePassword() {
  let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let pass = "";
  for (let i = 0; i < 10; i++) {
    pass += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  document.getElementById("passwordOutput").innerText = pass;
}

function countWords() {
  let text = document.getElementById("wordInput").value;
  let count = text.trim() ? text.trim().split(/\s+/).length : 0;
  document.getElementById("wordCount").innerText = "Words: " + count;
}

function toggleDark() {
  document.body.classList.toggle("dark");
}
