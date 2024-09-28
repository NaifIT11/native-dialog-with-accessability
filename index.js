

const openDialog = document.querySelector(".open-dialog");
const closeDialog = document.querySelector(".close-dialog");
const dialog = document.querySelector("div[role='dialog']");

openDialog.addEventListener("click" , () => {
    dialog.setAttribute("data-state" , "closed");
});

closeDialog.addEventListener("click" , () => {
    dialog.setAttribute("data-state" , "opened");
});