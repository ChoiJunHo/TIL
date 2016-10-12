# TIL
Today I learned
=============


새 React 프로젝트 생성
-------------

 1. Get Skeleton: git clone https://github.com/velopert/react-skeleton.git
 2. Dependency 설치: npm install
 3. 개발서버 실행(port: 7777): npm start


React
-------------
 1. Props: props 는 컴포넌트에서 사용 할 데이터 중 변동되지 않는 데이터를 다룰 때 사용됩니다. parent 컴포넌트에서 child 컴포넌트로 데이터를 전할 때, props 가 사용됩니다.
 2. State: 컴포넌트에서 유동적인 데이터를 다룰 때, state 를 사용합니다.. React.js 어플리케이션을 만들 땐, state를 사용하는 컴포넌트의 갯수를 최소화 하는 것 을 노력해야합니다. 예를들어, 10 개의 컴포넌트에서 유동적인 데이터를 사용 하게 될 땐, 각 데이터에 state를 사용 할 게 아니라, props 를 사용하고 10 개의 컴포넌트를 포함시키는 container 컴포넌트를 사용하는것이 효율적입니다.
 3.

강좌
-------------

1. https://velopert.com/

참고 문서
-------------
1. http://blog.gaerae.com/2016/04/hello-react.html
