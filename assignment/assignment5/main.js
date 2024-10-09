window.onload = LoadWeb;

var postData = [];

var topic,reply1,reply2

function LoadWeb(){
    var top = document.getElementById("top");
    var postText = document.getElementById("postText");
    topic = document.getElementById("topic");
    reply1 = document.getElementById("reply1");
    reply2 = document.getElementById("reply2");

    top.innerHTML = "Welcome to the Forum";
    postText.innerHTML = "มีอะไรเกิดขึ้นบ้าง";
     
}

function postFunction(){
    var message = document.getElementById("message");
    // Update Data
    if (message.value) {
        for (i = 0; i < 3;i++){
            if (!postData[i]){
                postData[i] = message.value;
                let selected

                switch (i){
                    case 0: selected = topic; break;
                    case 1: selected = reply1; break;
                    case 2: selected = reply2; break;                    
                }

                selected.innerHTML = message.value;
                if (i == 0) {
                    selected.classList.add("Post");
                    postText.innerHTML = "คอมเม้นบทความนี้";
                } else {
                    selected.classList.add("Comment");
                }
                message.value = null
                return;
            } 
        }
    }
}

function clearFunction(){
    postData = [];
    topic.innerHTML = null
    reply1.innerHTML = null
    reply2.innerHTML = null

    topic.classList.remove("Post");
    reply1.classList.remove("Comment");
    reply2.classList.remove("Comment");
    postText.innerHTML = "มีอะไรเกิดขึ้นบ้าง";

    message.value = null
}