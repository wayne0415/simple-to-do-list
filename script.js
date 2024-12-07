/*
在input裡面輸入資料，按加入button會新增一個li並且顯示剛剛輸入的資料
刪除button只會remove顏色是#80e972的li
*/

// 按了li要把.clicked加入到li的class裡面
const myInput = document.querySelector("#myInput");
const addBtn = document.getElementById("btn1");
const deleteBtn = document.getElementById("btn2");
const myUl = document.querySelector("#myUL");

// 幫addBtn設置監聽器，如果myInput裡面有東西，就新增一個li並且傳值進去
// 如果沒有東西就不要執行

addBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const inputValue = myInput.value.trim();
    if (inputValue !== "") {
        const newLi = document.createElement("li");
        newLi.textContent = inputValue;
        myUl.appendChild(newLi);
        myInput.value = "";
    }
});

myUl.addEventListener("click", (e) => {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("clicked");
    }
});

deleteBtn.addEventListener("click", (e) => {
    e.preventDefault();
    // 直接創建一個變數來存儲所有class是.clicked的元素
    const clickedItems = document.querySelectorAll(".clicked");
    clickedItems.forEach((item) => item.remove());
});
