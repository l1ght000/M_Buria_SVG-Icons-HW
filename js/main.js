console.log('JavaScript is running!');

let Icon = document.querySelector(".Icon")

function logID() {
    console.log(this.id);
}

Icon.addEventListener('click', logID);