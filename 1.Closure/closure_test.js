// 참조: http://hyunseob.github.io/2016/08/30/javascript-closure/
// 1. Closure 예시
console.log('1. Closure 예시');
function getClosure(){
  var text = 'variable 1';
  return function(){
    return text;
  }
}

var closure = getClosure();
console.log(closure());


var base = 'Hello, ';
function sayHelloTo(name){
  var text = base + name;
  return function(){
    console.log(text);
  }
}
var hello1 = sayHelloTo('준');
var hello2 = sayHelloTo('호');
hello1();
hello2();

// 2.클로저를 통한 은닉화
console.log('2.클로저를 통한 은닉화');
// Hi function 선언
function Hi(name){
  this._name = name;
}
// Hi prototype say에 function 선언
Hi.prototype.say = function(){
  console.log('Hi, '  + this._name);
}
var hi1 = new Hi('준호');
var hi2 = new Hi('보현');

hi1.say();
hi2.say();
hi1._name = 'anonymous';
hi1.say();


// 3.반복문 클로저
var i;
for(i = 0; i < 10 ; i++){
  setTimeout(function() {
    console.log(i);
  }, 100);
}

for(i = 0; i < 10 ; i++){
  (function(j){
    setTimeout(function() {
      console.log(j);
    }, 100);
  })(i);
}

// Release
closure = null;
hello1 = null;
hello2 = null;
hi1 = null;
hi2 = null;
