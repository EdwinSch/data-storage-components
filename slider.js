/* TARGETS */
const slider = document.getElementById("storage-range");
const spaceUsed = document.getElementById("space-used");
const spaceLeft = document.querySelector(".space-left");


// push initial values on load
pushValues();


// update values on slider input
slider.addEventListener("input", function () {
    pushValues();
});


function pushValues() {
    let value = slider.value;
    spaceUsed.innerHTML = `${value} GB`
    spaceLeft.textContent = 1000 - value;
}