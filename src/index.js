
import { createStore } from "redux";
const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

number.innerText = 0;

const ADD = "ADD";
const MINUS = "MINUS";

const countModifier = (count = 0, action) => {
  switch (action.type) {
    case ADD:
      return count + 1;
    case MINUS:
      return count - 1;
    default:
      return count;
  }
};

const countStore = createStore(countModifier);

// html에게 뭔가 바뀌었다고 알려주기 위해 함수를 쓴다는것 자체가 리덕스를 쓰는 이유중 하나다.
const onChange = () => {
  number.innerText = countStore.getState();
};

// html에게 뭔가 바뀌었다고 알려주기 위해 함수를 쓴다는것 자체가 리덕스를 쓰는 이유중 하나다.
countStore.subscribe(onChange);

const handleAdd = () => {
  countStore.dispatch({ type: ADD });
};

const handleMinus = () => {
  countStore.dispatch({ type: MINUS });
};

add.addEventListener("click", handleAdd);
minus.addEventListener("click", handleMinus);



