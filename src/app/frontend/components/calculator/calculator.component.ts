import { AfterViewInit, Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements AfterViewInit {

  calculator = {
    displayValue: '0',
    firstOperand: null,
    waitingForSecondOperand: false,
    operator: null,
  };
  performCalculation = {
    '/': (firstOperand, secondOperand) => firstOperand / secondOperand,

    '*': (firstOperand, secondOperand) => firstOperand * secondOperand,

    '+': (firstOperand, secondOperand) => firstOperand + secondOperand,

    '-': (firstOperand, secondOperand) => firstOperand - secondOperand,

    '=': (firstOperand, secondOperand) => secondOperand
  };
  display: string = "";
  displayMini: string = "asdfasdf";
  displayfontSize = 4;

  constructor(private elementRef: ElementRef) { }

  ngAfterViewInit() {
    this.elementRef.nativeElement.querySelectorAll('button').forEach(btn => {
      btn.addEventListener('click',
        (event) => {
          const { target } = event;

          if (target.classList.contains('operator')) {
            this.handleOperator(target.value);
            this.updateDisplay();
            return;
          }

          if (target.classList.contains('decimal')) {
            this.inputDecimal(target.value);
            this.updateDisplay();
            return;
          }

          if (target.classList.contains('all-clear')) {
            this.resetCalculator();
            this.updateDisplay();
            return;
          }

          this.inputDigit(target.value);
          this.updateDisplay();
        }



      );
    });
  }

  updateDisplay() {
    this.display = this.calculator.displayValue;
    this.displayfontSize -= this.display.length/100 ;
  }
  inputDigit(digit) {
    const { displayValue, waitingForSecondOperand } = this.calculator;

    if (waitingForSecondOperand === true) {
      this.calculator.displayValue = digit;
      this.calculator.waitingForSecondOperand = false;
    } else {
      this.calculator.displayValue = displayValue === '0' ? digit : displayValue + digit;
    }
  }
  inputDecimal(dot) {
    // If the `displayValue` does not contain a decimal point
    if (!this.calculator.displayValue.includes(dot)) {
      // Append the decimal point
      this.calculator.displayValue += dot;
    }
  }

   resetCalculator() {
    this.calculator.displayValue = '0';
    this.calculator.firstOperand = null;
    this.calculator.waitingForSecondOperand = false;
    this.calculator.operator = null;
    this.displayfontSize=4;
  }
  handleOperator(nextOperator) {
    const { firstOperand, displayValue, operator } = this.calculator
    const inputValue = parseFloat(displayValue);

    if (operator && this.calculator.waitingForSecondOperand) {
      this.calculator.operator = nextOperator;
      return;
    }

    if (firstOperand == null) {
      this.calculator.firstOperand = inputValue;
    } else if (operator) {
      const currentValue = firstOperand || 0;
      const result = this.performCalculation[operator](currentValue, inputValue);

      this.calculator.displayValue = String(result);
      this.calculator.firstOperand = result;
    }

    this.calculator.waitingForSecondOperand = true;
    this.calculator.operator = nextOperator;
  }




}
