/*  Integer -> full number(정수)
    2 + 2

    Integer + float
    65656565 + 2.5 
*/


/*
    text (String)
    "hello" + "my name is leo" 
    or 
    'hello'
*/

// print something -> console.log()
// console.log(54545454)
// console.log('hello')

//variable
// can't use space in variable
// we can use camelCase -> const veryLongVariableName
// we can use snakeCase -> const very_long_variable_name
const a = 10 //const means 상수
const b = 2

// console.log(a + b)
// console.log(a * b)
// console.log(a / b)
// console.log('hello ' + myName)

/*
make variable -> we can recognize human meaning from the code
1. const(constant) -> can not change data, default
2. let -> when i make to create new one, can change data
3. var -> update whereever, can not recognize human meaning from the code so can not recognize mistake, its old one not use recently 

------------------> always const, sometimes let, never var
let   재선언 금지, 재할당 가능
const 재선언 금지, 재할당 금지
var   재선언 가능, 재할당 가능
*/

myName = "leonardo"
// console.log('your new name is ' + myName)



/*
    boolean 
    true or false just two 

    undefined(type) : 변수는 선언했지만 값을 할당하지 않음                    박스만 만들어 놓은 상태
    null(type)      : 변수에 null(값이 없음을 의미)값이 할당. 즉 정의 됨       박스를 만들고 아무것도 안넣은 상태로 포장, 절대 자동으로 만들어지지 않는다. 비어있다는 것을 의도적으로 표현하기 위함

    false       vs null(== nothing)
    data           no data    
*/

const amIFat = true //"true" is String not boolean
let something
// console.log(something)

/*
    how to organize data -> use data structure 
    for to search faster, to list, to group easier
    -> arrays
    1. use []
    2. use , between data for separate 
    3. zero base
*/

const mon = "mon";
const tue = "tue";
const wed = "wed";
const thu = "thu";
const fri = "fri";
const sat = "sat";
const sun = "sun";

const daysOfWeek = ["mon" , "tue" , "wed" , "thu" , "fri" , "sat"]

// console.log(daysOfWeek)

//Get Item from array
// console.log(daysOfWeek[4])

//Add one more day to array
daysOfWeek.push("sun")

// console.log(daysOfWeek)


// console.log(...daysOfWeek)
// console.log([...daysOfWeek])
// console.log({...daysOfWeek})


/*
    Object 
    
    "KeyPoint!!"
    설명이 필요하지 않은 데이터 리스트들은 array로,
    설명이 필요한 정보가 담긴 데이터 리스트들은 object로!

    object는 ★property★를 가진 데이터를 저장해주며, { } 를 사용한다.

    const player = {
        name : tomato,
        color : red,
        food : true,
    };

    property를 불러오는 방법은 2가지가 있다.

    1. console.log(player.name); => tomato
    2. console.log(player["name"]); => tomato

    또한 property를 바꾸는 것은 가능하지만 선언된 object를 바꾸는 것은 불가능하다.
    ex)
    const player = {
        name : tomato,
        color : red,
        food : true,
    };

    console.log(player);
    player.color = "blue";
    console.log(player.color);
    --> blue

    그리고 property를 추가 할 수도 있다.

    player.koreanName = "토마토";
    console.log(player)
    --> {name: "tomato", color: "blue", food: true, koreaName: "토마토"}

*/

//한 개의 개체 player를 설명하는 props

//1. variable -> 효율성 X
const playerName = "nico";
const playerPoints = 121212;
const playerHandsome = true;
const playerFat = "little bit";

//2. array -> 나쁘진 않지만 무엇을 의미하는지는 알수 없음. 주석이 필요함
const playerArray = ["nino", 1212, false, "little bit"]

//3. object
const player2 = {
    name : "nico",
    points : 1212, 
    handsome : false, 
    fat : "little bit"
};

// console.log(player.name);
// console.log(player.points);
// console.log(player.handsome);
// console.log(player.fat);


/*
    function
    for 중복 코드 단순화
    () -> 함수를 실행하는 방법
    {} -> 내부의 코드가 함수를 호출할때마다 실행된다.
    argument == parameter -> function이 실행되는 동안 사용하도록 보내주는 정보
    player에게 function을 주기 전에, 어떻게 function을 만드는지를 배워야 한다.
    function은 내가 계속 반복해서 사용할 수 있는 코드 조각이다. 어떤 코드를 캡슐화 해서 실행을 여러번 할 수 있게 해준다.

    function 선언 :
    function 함수명() {
    실행코드
    }

    funtion 실행 : 함수명();
    argument(인수)를 보내야 하는데 인수란 함수를 실행하는 동안 어떤 정보를 함수에게 보낼 수 있는 방법이다.
    인수를 보내는 방법 -> sayHello('nico');
    인수는 함수의 body안에서만 사용할 수 있는 지역변수.
    인수의 이름은 아무거나 사용할 수 있다.

*/

// function sayHello(nameOfPerson, age){
//     console.log('hello my name is ' + nameOfPerson + " and I'm " +age);
// }

// sayHello('nico', 10);
// sayHello('leo', 25);

// function plus(a, b){
//     console.log(a + b);
// }
// function divide(a,b){
//     console.log(a/b);
// }

// plus(10 ,5);
// divide(98, 20);

// const player = {
//     name : "nico",
//     sayHello : function (otherPersonsName){
//         console.log("Hello! " + otherPersonsName + " nice to meet you !");
//     }
// };

// console.log(player.name);
// player.sayHello("lynn");


const calculator = {
    plus : function(a, b){
        console.log(a+b);
    },
    minus : function(a, b){
        console.log(a-b);
    },
    multiple : function(a, b){
        console.log(a*b);
    },
    divide : function(a, b){
        console.log(a/b);    
    },
    power : function(a, b){
        console.log(a ** b);
    }
}

// calculator.plus(2,3)
// calculator.minus(2,3)
// calculator.multiple(2,3)
// calculator.divide(2,3)
// calculator.power(2,3)

/*
    return 
    계산기 안에서 값을 콘솔로 보내는것이 아니라 
    return을 통해 함수를 호출한 녀석에게 다시 주어서 그걸 갖고 또 다른 함수를 호출하는데 쓴다
    ㄴ> (연산결과 자체가 변수에게 주어진다)
    이걸 이용해서 앞선 연산의 값이 뒤의 연산과 연관되고 결국 체인처럼 서로 얽혀있는 코드들을 만들수 있다.

    즉, return"까지만" 수행된다!

    return은 카페나 식당의 테이크아웃 개념인 거 같음
    함수에서 만들어서 내보낸 결과값을 함수 밖으로 들고 나가서 다른데서 그대로 출력하건 다른 거랑 섞어서 비벼먹건 볶아먹건 사용할 수 있게 해줌
*/

/*
    conditional
    prompt(); 
    -> 사용자에게 창을 띄어 값을 받음.
    -> 답을 할때까지 코드의 실행을 멈추고, 매우 오래된 방법임. 별로 안이쁨. css로 바꾸지도 못함.
    
    const age = prompt("how old are you?");
    console.log(typeof age);
    typeof라는 키워드를 쓰면 type를 볼 수 있는데, 
    prompt();에서 숫자를 입력해도 string이라고 뜬다. 
    -> string이 디폴트이기 때문이다.

    한 type로 받아서 다른 type로 바꾸는 작업을 해야한다. "15"-->15
    string-->number로 변환해주는 함수  -> parseInt();

    console.log(typeof "15", typeof parseInt("15")); --> string number
    이렇게 숫자로 변환이 되야 비교를 할 수 있다.
    
    참고로 "숫자"가 아닌게 입력되면 변환이 안됨. NaN(not a number)

    const age = parseInt(prompt("how old are you?"));
    console.log(age);


    isNaN 은 무언가가 NaN(ist Not a Number?)인지 판별하는 방법
    const age= parseInt(prompt (“How old are you?”));
    console.log(isNaN(age));
    숫자입력하면 false
    글자입력하면 ture

    if(condition){
        실행코드=true ---실행
        실행코드=false ----다음 else 값 실행
    } else{

    }
    condition은 boolean으로 판별가능해야 한다, (true , false)

    if(isNaN(age)){
    console.log(“please wirte a number”);
    } else{
    console.log(“Thank you for writing your age”);
    }


    1. && : and 즉 '그리고'의 의미로 좌항과 우항이 모두 true여야 true를 반환, 두 항 중 하나라도 false면 false값을 반환
    2. || : also 즉 '또는'의 의미로 좌항과 우항 중 하나라도 true이면 true를 반환, 두 항 모두 false일때 false를 출력
    3. >= or <= : 작거나 같다 그리고 크거나 같다는 꺽쇠가 먼저오고 =이 와야함
    4. == : 값만 비교 
       === : 값과 type을 비교 -> JS에서만  지원되는 문법으로 사용을 추천.
*/

/*
    자바스크립트와 html(브라우저)의 상호작용
    자바스크립트가 어떻게 브라우저를 움직이는지...!
    자바스크립트는 이미 HTML과 연결되어 있기 때문에 HTML의 요소들을 가져와 사용할 수 있다.
    HTML의 Element를 자바스크립트를 통해 변경하고 읽을 수 있다.

    console.dir() -> 객체의 속성을 확인
    console.log() -> 객체의 요소를 확인

    document = > 브라우저에 이미 존재하는 object

    document.getElementById(“title”)
    -> html에 있는 id를 불러올 수 있다.

    js에서는 html이 표현하는 object를 보여준다

    title.innerText = “got you”
    처럼 js에서 바꾸기 가능 id를 추가했기에 가능.

    모든 것들을 html에서 항목들을 가지고와서 js에서 변경한다
    console.dir(“title”);
    js에서는 html이 표현하는 object를 보여준다

    title.innerText = “got you”
    처럼 js에서 바꾸기 쌉가능 id를 추가했기에 가능.

    모든 것들을 html에서 항목들을 가지고와서 js에서 변경한다
*/

// const title = document.getElementById("title");
// console.log(title);
// console.log(title.textContent);
// console.dir(title);

// title.innerText = "Got you!"

// const hellos = document.getElementsByClassName("hello");

// console.log(hellos);

// const title1 = document.getElementsByTagName("h1")


/*
    Searching For Elements

    getElementById()
    getElementsByClassName()
    getElementsByTagName()
    이렇게 자바스크립트를 통해 HTML을 가져올 수 있는 것이 크게 세가지 있음
    이중에서 querySelector를 가장 많이 쓸 것임

    getElementById() : 말 그대로 id , 하나의 값을 반환해줄때 쓴다
    getElementsByClassName() : 클래스 네임을 가져옴, array에 할당
    getElementsByTagName(): name할당 가능 array에 할당

    하지만 가장 많이 쓸 것은

    querySelector! 왜 ? css 셀렉터처럼 사용할 수 있기때문에
    매우 간편하고 유용함
    게다가 class, id전부 사용가능함 class id를 앞에 쓰고
    거기에 해당하는 태그들을 쓰면 해당 클래스/id 특정 태그들만 가져오기 가능

    but 만약에 동일한 class가 있다면 전부다 가져오는게 아니라
    첫번째 element만 return함

    동일한 조건에 있는 것들을 싹다 선택해서 가져오고 싶다면
    querySelectorAll를 쓰면 됨
    말 그대로 해당되는 것 전부다 가져옴 (물론 array 형태로)
*/
// 조건에 해당하는 요소가 여러개인경우 첫번째 것만 가져온다.
// CSS Selector 자체를 전달한다. 
// const title = document.querySelector(".hello h1")
// console.log(title);



//-> 클릭 이벤트를 리슨하고, 클릭 이벤트가 발생하면 함수를 실행하겠다는 뜻 
// 함수를 자바스크립트에게 넘겨주고, 클릭이벤트가 발생(이벤트 리스너가 리슨한 경우) 실행되도록 하는 것
/*
    - 지금 js파일이 있기 때문에 js를 통해 html의 내용을 가져올 수 있는 거임
    - document가 html이 js파일을 load하기 때문에 존재 → 그 다음에 browser가 우리가 document에 접근할 수 있게 해줌
    - element의 내부를 보고 싶으면 console.dir()
    기본적으로 object로 표시한 element를 보여줌(전부 js object임)

    그 element 중 앞에 on이 붙은 것들은 event임
    - event: 어떤 행위를 하는 것
    ★모든 event는 js가 listen할 수 있음
    - eventListener : event를 listen함 → js에게 무슨 event를 listen하고 싶은 지 알려줘야 함
    - title.addEventListener("click") : 누군가가 title을 click하는 것을 listen할 거임 → 무언가를 해줘야함

    const title = document.querySelector("div.hello:first-child h1");

    function handleTitleClick(){
    title.style.color = "blue";
    }
    title.addEventListener("click",handleTitleClick);
    //click하면 handleTitleClick이라는 function이 동작하길 원함
    //그래서 handle~ 함수에 () 를 안넣은 것임
    //즉, js가 대신 실행시켜주길 바라는 것임!

    - function이 js에게 넘겨주고 유저가 title을 click할 경우에 js가 실행버튼을 대신 눌러주길 바라는 것임( 직접 handleTitleClick(); 이렇게 하는 것이 아니라)
    - 함수에서 () 이 두 괄호를 추가함으로써 실행버튼을 누를 수 있는 거임
*/

const title = document.querySelector("div.hello:first-child h1")

// console.log(title);

// title.style.color = 'red';

// // how to listen event
const h1 = document.querySelector("div.hello:first-child h1");


//더 적은 코드로 같은 결과를 얻어낼 수 있음
function handleTitleClick(){
    const clickedClass = "clicked" //오타로 인한 오류를 방지하기 위해 변수를 사용하는 것은 중요하다.
    //classList -> 특정 태그에 여러 개의 클래스가 존재하는 경우 className 자체를 Setter로 사용하여 변경하면
    //불필요한 클래스까지 삭제되기 때문에 classList를 사용해보자.

    // SOL 1>
    if(h1.classList.contains(clickedClass)){
        h1.classList.remove(clickedClass);
    }else {
        h1.classList.add(clickedClass);
    }

    // SOL 2> toggle
    h1.classList.toggle(clickedClass);
    //파라미터로 넘겨준 token이 존재하면 remove, 없으면 add하는 function
}

h1.addEventListener("click", handleTitleClick);
// function handleMouseEnter(){
//     title.innerText = "Mouse is Here!";
// }

// function handleMouseLeave(){
//     title.innerText = "Mouse is Gone!";
// }
// title.addEventListener("click", handleTitleClick)
// title.addEventListener("mouseenter", handleMouseEnter)
// title.addEventListener("mouseleave", handleMouseLeave)



/*
    more Events(https://developer.mozilla.org/en-US/docs/Web/API/Window#events)
    1. title.addEventListener("click", function()) -> title.removeEventListener()로 이벤트 리스너를 제거할 수 있다.
    2. title.onclick()
*/

// function handleWindowResize(){
//     document.body.style.backgroundColor = "tomato";
// }
// function handleWindowCopy(){
//     alert("copier!");
// }
// function handleWindowOffline(){
//     alert("SOS no WIFI!");
// }
// function handleWindowOnline(){
//     alert("ALL");
// }

// window.addEventListener("resize", handleWindowResize);
// window.addEventListener("copy", handleWindowCopy);
// window.addEventListener("offline", handleWindowOffline);
// window.addEventListener("online", handleWindowOnline);

