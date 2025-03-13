function createCalc() {
    return {
        display: document.querySelector('.display'),
        invalid: document.querySelector('.invalid'),

        start() {
            // ao usar arrow function e this, o this
            // fica travado em seu valor original

            // this = calc (variable)
            this.btnClick();
        },
        btnClick() {
            document.addEventListener('click', (event) => {
                const el = event.target;

                if (el.classList.contains('btn')) {
                    this.deactivateInvalid();
                }
                if (el.classList.contains('divide')) {
                    this.btnToDisplay('/');
                };
                if (el.classList.contains('time')) {
                    this.btnToDisplay('*');
                };
                if (el.classList.contains('btn-num')) {
                    // this = document (caso não usasse arrow function)
                    // nesse caso, teria que adicionar .bind(this) ao
                    // final da função anônima
                    this.btnToDisplay(el.innerText);
                };
                if (el.classList.contains('btn-clear')) {
                    this.clearDisplay();
                };
                if (el.classList.contains('btn-del')) {
                    this.delOne();
                }
                if (el.classList.contains('btn-equal')) {
                    this.equal();
                };
            });
        },
        btnToDisplay(displayValue) {
            this.display.value += displayValue;
        },
        clearDisplay() {
            this.display.value = '';
        },
        deactivateInvalid() {
            this.display.classList.remove('invalid-display');
            this.invalid.classList.add('hidden');
        },
        delOne() {
            this.display.value = this.display.value.slice(0, -1);
        },
        equal() {
            try {
                if (!eval(this.display.value) || eval(this.display.value) === Infinity) {
                    throw error;
                };
                this.display.value = eval(this.display.value);
            } catch (error) {
                this.display.classList.add('invalid-display');
                this.invalid.classList.remove('hidden');
            };
        }
    };
}

const calc = createCalc();
calc.start();
