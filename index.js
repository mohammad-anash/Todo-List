let inputEl = document.getElementById('input');
let BtnEl = document.querySelector('.btn');
let UlEl = document.querySelector('.ul');

BtnEl.addEventListener('click', () => {
    let inputValue = input.value;
    let LiEl = document.createElement("li");
    LiEl.innerHTML = inputValue;

    let deletebutton = document.createElement('Button');
    deletebutton.textContent = "Delete task";
    deletebutton.addEventListener("click", () => {
        LiEl.remove();
    })

    LiEl.appendChild(deletebutton);
    UlEl.appendChild(LiEl);
    inputEl.value = "";
})

