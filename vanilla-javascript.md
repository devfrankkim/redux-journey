```js
const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const number = document.getElementById("number");

let count = 0;

number.innerText = count;

// html에게 뭔가 바뀌었다고 알려주기 위해 함수를 쓴다는것 자체가 리덕스를 쓰는 이유중 하나다.
const updateText = () => {
  number.innerText = count;
};

const handleAdd = () => {
  count += 1;
  updateText();
};
const handleMinus = () => {
  count -= 1;
  updateText();
};

plus.addEventListener("click", handleAdd);
minus.addEventListener("click", handleMinus);
```
