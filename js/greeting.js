const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const greeting = document.querySelector("#greeting");
const logOutBtn = document.querySelector("#logOut");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

const savedUsername = localStorage.getItem(USERNAME_KEY);
if(savedUsername === null ){
    // show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLogInSubmit);
}else {
    // show the greetings
    paintGreetings(savedUsername);
}

//태그 스크린 가운데 정렬


function paintGreetings(username){
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
    logOutBtn.classList.remove(HIDDEN_CLASSNAME);
}

function onLogInSubmit(event){
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);

    const userName = loginInput.value;
    localStorage.setItem(USERNAME_KEY, userName);
    paintGreetings(userName);
}

function onLogOutClick(event){
    event.preventDefault();

    // logOutBtn.classList.add(HIDDEN_CLASSNAME);
    localStorage.removeItem(USERNAME_KEY);
    localStorage.removeItem("toDos");
    location.reload();
}

loginForm.addEventListener("submit", onLogInSubmit);
logOutBtn.addEventListener("click", onLogOutClick);





// function onLogInSubmit(event){
//     event.preventDefault(); //어떤 이벤트이던 기본행동이 발생하지 않도록 막아준다.(EX > submit -> 입력값 전송 및 페이지 새로고침)
//     // const userName = loginInput.value;
//     console.log(loginInput.value);
//
// }
// loginForm.addEventListener("submit", onLogInSubmit);
//이벤트가 발생하면 브라우저가 함수를 호출하는데, 브라우저는 눈에 보이지 않는 information을 함수에 전달한다.


//함수의 파라미터가 있던 없던 모든 이벤트 리스너의 첫 번째 파라미터는 방금 일어난 이벤트에 대한 정보를 JS에게 전달한다.
// function handleLinkClick(event){
//     event.preventDefault();
//     console.log(event);
//     alert("clicked!");
// }
// link.addEventListener("click", handleLinkClick);
// //우리는 JS에게 함수의 이름만 주고 실행은 JS가 한다.
