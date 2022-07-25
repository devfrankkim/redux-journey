import { render } from "@testing-library/react";
import { createStore } from "redux";

const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

// const STATE = [];
// console.log(STATE);

const ADD_TO_DO = "ADD_TO_DO";
const DELETE_TO_DO = "DELETE_TO_DO";

const addToDoActionActionCreator = (text) => {
  return { type: ADD_TO_DO, value: text };
};

const toDoReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TO_DO:
      return [...state, { value: action.value, id: new Date().getTime() }];
    case DELETE_TO_DO:
      return state.filter((item) => item.id !== action.id);
    default:
      return state;
  }
};
const toDoStore = createStore(toDoReducer);

const deleteToDo = (id) => {
  toDoStore.dispatch({ type: DELETE_TO_DO, id });
};

const addToDo = () => {
  toDoStore.dispatch(addToDoActionActionCreator(input.value));
};

const paintToDo = () => {
  const DATA = toDoStore.getState();
  // console.log(toDoStore.getState());

  console.log(DATA);
  ul.innerHTML = "";
  for (let i = 0; i < DATA.length; i++) {
    let divElement = document.createElement("div");
    let listElement = document.createElement("li");
    let deleteButton = document.createElement("button");

    listElement.id = DATA[i].id;
    listElement.innerText = DATA[i].value;
    deleteButton.innerText = "X";

    deleteButton.addEventListener("click", () => deleteToDo(DATA[i].id));

    divElement.appendChild(listElement);
    divElement.appendChild(deleteButton);
    ul.appendChild(divElement);
  }
};

toDoStore.subscribe(paintToDo);

const onSubmit = (e) => {
  e.preventDefault();

  addToDo();
  input.value = "";
};

form.addEventListener("submit", onSubmit);
