let chatbotMsgList = ["Hi", "Hey", "Good Morning", "Good Evening", "How can I help you?", "Thank You"];
let chatContainerEle = document.getElementById("chatContainer")
let buttonEle = document.getElementById("sendMsgBtn");
let userInputEle = document.getElementById("userInput");
let count = 0

let createAndAppend = function(inputEleId) {
    let msgCont = document.createElement("div");
    msgCont.classList.add("msg-to-chatbot-container", "d-flex", "flex-row", "justify-cintent-end")
    chatContainerEle.appendChild(msgCont);
    let spanEe = document.createElement("span");
    spanEe.classList.add('msg-to-chatbot')
    msgCont.appendChild(spanEe) //Line-13
    let inele = document.getElementById(inputEleId);
    spanEe.textContent = inele.value
    let chatspanCont = document.createElement("div");
    chatspanCont.classList.add("msg-from-chatbot-container")
    chatContainerEle.appendChild(chatspanCont);
    let chatspan = document.createElement("span");
    chatspan.classList.add("msg-from-chatbot");
    chatspanCont.appendChild(chatspan); //Line-21
    let length = chatbotMsgList.length
    chatspan.textContent = chatbotMsgList[Math.ceil((Math.random() * length) - 1)]
}

buttonEle.onclick = function() {
    let inputEle = document.getElementById("userInput")
    let inputEleId = inputEle.id
    createAndAppend(inputEleId)
    inputEle.value = ""

}