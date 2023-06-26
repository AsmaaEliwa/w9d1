import MovingObject from "./moving-object";
document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById("game-canvas");

    window.MovingObject = new MovingObject(canvas);
})