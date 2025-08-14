// JavaScript source code
const orgName = "The Watchers";

const logotypes = document.querySelectorAll("logotype");

for (let i = 0; i < logotypes.length; i++) {
    let orgNameText = document.createElement("h1");
    orgNameText.textContent = orgName;
    orgNameText.classList.add("logotype");
    logotypes[i].appendChild(orgNameText);
}