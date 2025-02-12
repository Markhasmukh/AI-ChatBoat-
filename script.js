let prompt = document.querySelector("#prompt")
let container = document.querySelector(".container")
let btn = document.querySelector("#btn")
let chatContainer = document.querySelector(".chat-container")
let usermessage = null;
let Api_url = "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=MY_API KIY" 
function createChatBox(html, className) {
    let div = document.createElement("div")
    div.classList.add(className)
    div.innerHTML = html
    return div
}
async function getApiResponse(aiChatBox){
    let textElement=aiChatBox.querySelector(".text")
    try{
        let response = await fetch(Api_url,{
            method:"POST",
            headers:{"Content-Type": "application/json", },
            body:JSON.stringify({
                contents: [
                    {"role": "user",
                    "parts":[{text: usermessage}]}]
            })
        })
        let data = await response.json();
        let apiResponse = data?.candidates[0].content.parts[0].text
        textElement.innerText = apiResponse
    }
    catch(error){
        console.log(error)
    }
    finally{
        aiChatBox.querySelector(".loading").style.display="none";
    }
}
function showLoading() {
    let html = `<div class="img">
                <img src="ai.png" alt="" width="50">
            </div>
                <p class="text"></p>
                    <img class="loading" src="loading.gif" alt="loading" height="50">`
    let aiChatBox = createChatBox(html, "ai-chat-box")
    chatContainer.appendChild(aiChatBox)
    getApiResponse(aiChatBox)  /*function*/

}


btn.addEventListener("click", () => {
    usermessage = prompt.value
    if(usermessage == "") {
        container.style.display = "flex"
    } else {
        container.style.display = "none"
    }
    if (!usermessage) return;
    let html = `<div class="img">
                <img src="user.png" alt="" width="50">
            </div>
                <p class="text"></p>`;
    let userChatBox = createChatBox(html, "user-chat-box") /*user function to call ,user class*/
    userChatBox.querySelector(".text").innerText = usermessage /*access user element in chat box*/
    chatContainer.appendChild(userChatBox)
    prompt.value = ""
    setTimeout(showLoading, 500)

})
// Add Enter key event listener
prompt.addEventListener("keyup", (e) => {
    if (e.key === "Enter") {
        btn.click(); // Trigger the same action as clicking the button
    }
}