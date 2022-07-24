### 프로젝트 셋업

- `npx create-react-app vanilla-redux`

### 프로젝트 셋업 (타입스크립트)

- `npx create-react-app vanilla-redux --template typescript`

### 리덕스 셋업

`npm install redux `

1. store 데이터를 모아두는 팩토리를 만든다. createStore `데이터 저장소`
2. Store는 reducer를 통해 데이터를 변경한다. 'reducer `은행`'
3. reducer -> application의 data를 수정한다.
4. reducer에서 return하는 값이 application의 data. `reducer 은행` `state 거래내역` -> `store 데이터 저장소` 에 들어간다
5. reducer에게 내용을 전달해준다. -> `action 내용`
6. 내용을 전달해주는 요구 -> `dispatch 요구`

- '은행'은 '요구' 받은 '내용' 대로 '거래내역'을 통장('데이터 저장소')에 입력한다.

```js
// (2)
const countChange = (state = 0, action) => {
  return state;
};
// (1)
const countStore = createStore(countChange);

// (3)
console.log(countStore.getState()); // 0
```

- redux 는 reducer에서만 data를 수정할수 있고,
- reducer에서 return하는 값이 applicate의 데이터다.

- subscribe(listner)
