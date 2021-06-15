let dragged;

document.addEventListener(
    "dragstart",
    function (event) {
        dragged = event.target;
        event.target.style.opacity = 0.5;
        brownie = dragged.id;
    },
    false
);

document.addEventListener(
    "dragend",
    function (event) {
        // reset the transparency
        event.target.style.opacity = "";
    },
    false
);

document.addEventListener(
    "dragover",
    function (event) {
        // prevent default to allow drop
        event.preventDefault();
    },
    false
);

document.addEventListener(
    "dragenter",
    function (event) {
        // highlight potential drop target when the draggable element enters it
        if (event.target.classList.contains("dropzone")) {
            event.target.style.background = "lightgreen";
        }
    },
    false
);

document.addEventListener(
    "dragleave",
    function (event) {
        if (event.target.classList.contains("dropzone")) {
            event.target.style.background = "";
        }
    },
    false
);

document.addEventListener(
    "drop",
    function (event) {
        event.preventDefault();
        if (event.target.classList.contains("dropzone")) {
            event.target.style.background = "";
        }
    },
    false
);

const addPoints = (id) => {
    id = document.getElementById(id);
    showGif();
    if (brownie === "single") {
        id.innerHTML = parseInt(id.innerHTML) + 1;
    } else {
        id.innerHTML = parseInt(id.innerHTML) + 2;
    }
};

function showGif() {
    const popup = document.getElementById("pop-up");

    popup.classList.remove("no-show");
    window.setTimeout(function () {
        popup.classList.add("no-show");
    }, 1000);
}
