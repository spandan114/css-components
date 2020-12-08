const error = document.querySelector(".error");
const success = document.querySelector(".success");
const warning = document.querySelector(".warning");

const toast = document.querySelector(".toast");

error.addEventListener("click", ()=>{
    showToast("Lorem ipsum dolor sit amet consectetur","red")
})
success.addEventListener("click", ()=>{
    showToast("Lorem ipsum dolor sit amet consectetur","rgb(1, 189, 48)")
})
warning.addEventListener("click", ()=>{
    showToast("Lorem ipsum dolor sit amet consectetur","rgb(255, 174, 0)")
})

let toastTimer;
// the toast function
const showToast = (msg,color) => {
  clearTimeout(toastTimer);
  toast.innerText = msg;
  toast.classList.add("show");

  toast.style.background = color

  toastTimer = setTimeout(() => {
    toast.classList.remove("show");
  }, 2000);
};