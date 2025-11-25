const Player = document.getElementById("Player")

document.addEventListener("keydown", function(event) {
    switch (event.key) {
        case "ArrowDown":
            Player.style.height = "40px"
            console.log("Descer!");
            break;
    }
});

document.addEventListener("keyup", function(event) {
    switch (event.key) {
        case "ArrowDown":
            Player.style.height = "50px"
            console.log("Subir!");
            break;
    }
});