const { createElement } = require("react");

class UI {
    constructor() {
        this.display=document.getElementById('display');
        this.buttons=document.getElementById('button_container');
        this.calculator=null;
    }
    init(calculator)
    {
        this.calculator=calculator;
        this.createbutton();
        this.eventListeners();
    }

    createbutton()
    {
        const buttons = [
            { text: 'C', class: 'clear', action: 'clear' },
            { text: '±', class: 'operator', action: 'toggleSign' },
            { text: '%', class: 'operator', action: 'percentage' },
            { text: '÷', class: 'operator', action: 'operator', value: '/' },
            { text: '7', class: '', action: 'append', value: '7' },
            { text: '8', class: '', action: 'append', value: '8' },
            { text: '9', class: '', action: 'append', value: '9' },
            { text: '×', class: 'operator', action: 'operator', value: '*' },
            { text: '4', class: '', action: 'append', value: '4' },
            { text: '5', class: '', action: 'append', value: '5' },
            { text: '6', class: '', action: 'append', value: '6' },
            { text: '−', class: 'operator', action: 'operator', value: '-' },
            { text: '1', class: '', action: 'append', value: '1' },
            { text: '2', class: '', action: 'append', value: '2' },
            { text: '3', class: '', action: 'append', value: '3' },
            { text: '+', class: 'operator', action: 'operator', value: '+' },
            { text: '0', class: '', action: 'append', value: '0' },
            { text: '.', class: '', action: 'append', value: '.' },
            { text: '=', class: 'equals', action: 'equals' },
        ];

        buttons.forEach (btn=>{
            const button= document.createElement('button'); //create the button element in the html
            button.textContent=btn.text //text=7 in the list so it will create a button with 7 on it
            button.className=`btn ${btn.class}` //class='equals'so it will make like this <button class="equals">=</button>in html file
            button.dataset.action=btn.action;//dataset is used to store custom data attributes on HTML elements. In this case, it assigns the value of btn.action (e.g., 'append', 'operator', 'equals') to the data-action attribute of the button element. This allows you to easily access the action associated with each button when handling events later on.
            if(btn.value) button.dataset.value=btn.value
            this.button-container.append(button)
        })
    }
    attachEventlisteners()
    {
     this.button_container.addEventListener('click', (e)=>{   
        const button=e.target.closest('button');
        if(!button) return;
        const action=button.dataset.action;
        const value=button.dataset.value;
        this.handlebuttononclick(action,value);
     })
     document.addEventListener('keydown', (e) => this.handleKeyboard(e));
    }

    handleButtonClick(action, value) {
        switch (action) {
            case 'append':
                this.calculator.append(value);
                break;
            case 'operator':
                this.calculator.operator(value);
                break;
            case 'equals':
                const result = this.calculator.calculate();
                if (result !== null) {
                    window.historyManager.add(
                        `${this.calculator.previousvalue} ${this.calculator.operator} ${this.calculator.currentvalue}`,
                        result
                    );
                }
                break;
            case 'clear':
                this.calculator.reset();
                break;
            case 'toggleSign':
                this.calculator.toggleSign();
                break;
            case 'percentage':
                this.calculator.percentage();
                break;
        }
        this.updateDisplay();
    }
    handleKeyboard(e) {
        const key = e.key;
        if (/[0-9.]/.test(key)) this.calculator.append(key);
        if (['+', '-', '*', '/'].includes(key)) {
            e.preventDefault();
            this.calculator.setOperator(key);
        }
        if (key === 'Enter') {
            e.preventDefault();
            const result = this.calculator.calculate();
            if (result !== null) {
                window.historyManager.add(
                    `${this.calculator.previousValue} ${this.calculator.operator} ${this.calculator.currentValue}`,
                    result
                );
            }
        }
        if (key === 'Backspace') {
            e.preventDefault();
            this.calculator.backspace();
        }
        if (key === 'Escape') this.calculator.reset();
        this.updateDisplay();
    }

    updateDisplay() {
        this.display.value = this.calculator.getDisplay();
    }
}

    
