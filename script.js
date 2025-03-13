
    const display = document.getElementById("display");
    const buttons = document.querySelectorAll(".buttons button");

    buttons.forEach(button => {
        button.addEventListener("click", function () {
            const value = this.getAttribute("data-value");

            if (value !== null) {
                handleInput(value);
            } else if (this.id === "clear") {
                clearDisplay();
            } else if (this.id === "backspace") {
                backspace();
            } else if (this.id === "equals") {
                calculateResult();
            }
        });
    });

    function handleInput(value) {
        display.value += value;
    }

    function clearDisplay() {
        display.value = "";
    }

    function backspace() {
        display.value = display.value.slice(0, -1);
    }

    function calculateResult() {
        try {
            display.value = eval(display.value);
        } catch (error) {
            display.value = "Error";
        }
    }

