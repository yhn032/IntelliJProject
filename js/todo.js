const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#todo-list");

let toDos = [];
const TODOS_KEY = "toDos";
//localStorage에 저장하기
function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

//삭제하기
//일반적인 배열의 자료구조로는 특정데이터를 찾아서 삭제하기가 쉽지 않기에 객체를 사용할 것이다. 각 데이터에 id값을 주어 식별하기 위해서
function deleteToDo(event){
    const deleteLi = event.target.parentElement; //target -> 클릭된 html의 element, parentElement -> 클릭된 태그의 부모 태그
    deleteLi.remove();
    toDos = toDos.filter((todo) => todo.id !== parseInt(deleteLi.id));
    saveToDos();
}

//추가하기
function paintToDo(newToDoObj){
    const li = document.createElement("li");
    li.id = newToDoObj.id;

    const span = document.createElement("span");
    span.innerText = newToDoObj.text;

    const button = document.createElement("button");
    button.innerText = "🚫";
    button.addEventListener("click", deleteToDo);

    li.appendChild(button);
    li.appendChild(span);

    toDoList.appendChild(li);
}

//버튼 이벤트
function handleToDoSubmit(event){
    event.preventDefault();
    const newToDo = toDoInput.value; //input의 현재 value를 변수에 복사하는 것
    toDoInput.value = "";

    const newToDoObj = {
        text : newToDo,
        id : Date.now()
    };
    toDos.push(newToDoObj); // 그리기 전에 localStorage 에 저장을 먼저
    paintToDo(newToDoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

// loading ToDoList
// 현재 처리 되고 있는 item이 무엇인지 아는것이 가장 중요하다. JS는 이러한 item 정보도 기본적으로 제공한다.
// function sayHello(item){
//     console.log("this is the turn of ", item);
// }
const savedToDos = localStorage.getItem(TODOS_KEY);
if (savedToDos != null){
    const parsedToDos = JSON.parse(savedToDos);
    // parsedToDos.forEach(sayHello); 배열의 각 요소에 대해 함수를 실행할 수 있다.
    // parsedToDos.forEach((item) =>  console.log("this is the turn of ", item)); //shorcut
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}


// function sexyFilter(){
//
// }
//
// [1,2,3,4].filter(sexyFilter);
//조건에 해당하는지 각각의 요소를 한 번씩 검증하는 로직
//foreach처럼 각 배열의 요소를 한 번씩 함수를 태운다.
// 반드시 true를 리턴해야함
// 만약 새 배열에서 해당 객체를 유지하고 싶다면 true를 반환해야 한다.
// false라면 제외될 것이다.








