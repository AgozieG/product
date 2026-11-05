


import './Calculator.css';
import { useEffect, useState } from "react";

export default function Calculator() {
    // Step 1: Store the display and the current two-number operation.
    const [display, setDisplay] = useState("0");
    const [storedValue, setStoredValue] = useState(null);
    const [operator, setOperator] = useState(null);
    const [replaceDisplay, setReplaceDisplay] = useState(false);

    // Step 2: Enter digits and decimals through shared button/keyboard handlers.
    const inputDigit = (digit) => {
        setDisplay((current) => {
            if (replaceDisplay || current === "Error" || current === "0") {
                return digit;
            } else {
                return current + digit;
            }
        });
        setReplaceDisplay(false);
    };

    const inputDecimal = () => {
        if (replaceDisplay || display === "Error") {
            setDisplay("0.");
            setReplaceDisplay(false);
        } else if (!display.includes(".")) {
            setDisplay((current) => `${current}.`);
        }
    };

    // Step 3: Compute binary operations and safely handle division by zero.
    const calculate = () => {
        if (operator === null || storedValue === null) return;
        const current = Number(display);
        let result;
        if (operator === "+") {
            result = storedValue + current;
        } else if (operator === "−") {
            result = storedValue - current;
        } else if (operator === "×") {
            result = storedValue * current;
        } else if (current === 0) {
            result = NaN;
        } else {
            result = storedValue / current;
        }
        setDisplay(Number.isFinite(result) ? String(Number(result.toPrecision(12))) : "Error");
        setStoredValue(null);
        setOperator(null);
        setReplaceDisplay(true);
    };

    const chooseOperator = (nextOperator) => {
        if (display === "Error") return;
        if (operator !== null && !replaceDisplay) {
            const current = Number(display);
            let result;
            if (operator === "+") {
                result = storedValue + current;
            } else if (operator === "−") {
                result = storedValue - current;
            } else if (operator === "×") {
                result = storedValue * current;
            } else if (current === 0) {
                result = NaN;
            } else {
                result = storedValue / current;
            }
            if (!Number.isFinite(result)) {
                setDisplay("Error");
                setStoredValue(null);
                setOperator(null);
                setReplaceDisplay(true);
                return;
            }
            const rounded = Number(result.toPrecision(12));
            setDisplay(String(rounded));
            setStoredValue(rounded);
        } else {
            setStoredValue(Number(display));
        }
        setOperator(nextOperator);
        setReplaceDisplay(true);
    };

    // Step 4: Apply square/root, clear the calculator, or remove the last digit.
    const applyUnary = (operation) => {
        if (display === "Error") return;
        const value = Number(display);
        let result;
        if (operation === "square") {
            result = value * value;
        } else {
            result = Math.sqrt(value);
        }
        if (Number.isFinite(result)) {
            setDisplay(String(Number(result.toPrecision(12))));
        } else {
            setDisplay("Error");
        }
        setReplaceDisplay(true);
    };

    const clear = () => {
        setDisplay("0");
        setStoredValue(null);
        setOperator(null);
        setReplaceDisplay(true);
    };

    const backspace = () => {
        if (replaceDisplay || display === "Error") return;
        setDisplay((current) => current.length > 1 ? current.slice(0, -1) : "0");
    };

    // Step 5: Make keyboard input trigger the same actions as the on-screen keys.
    useEffect(() => {
        const onKeyDown = (event) => {
            if (/^[0-9]$/.test(event.key)) inputDigit(event.key);
            else if (event.key === ".") inputDecimal();
            else if (["+", "-", "*", "/"].includes(event.key)) {
                event.preventDefault();
                chooseOperator(({ "-": "−", "*": "×", "/": "÷" })[event.key] || event.key);
            } else if (event.key === "Enter" || event.key === "=") {
                event.preventDefault();
                calculate();
            } else if (event.key === "Backspace") backspace();
            else if (event.key === "Escape") clear();
            else if (event.key.toLowerCase() === "s") applyUnary("square");
            else if (event.key.toLowerCase() === "r") applyUnary("root");
        };
        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    });

    const keys = [
        ["C", clear, "utility"], ["⌫", backspace, "utility"], ["x²", () => applyUnary("square"), "utility"], ["√x", () => applyUnary("root"), "utility"],
        ["7", () => inputDigit("7")], ["8", () => inputDigit("8")], ["9", () => inputDigit("9")], ["÷", () => chooseOperator("÷"), "operator"],
        ["4", () => inputDigit("4")], ["5", () => inputDigit("5")], ["6", () => inputDigit("6")], ["×", () => chooseOperator("×"), "operator"],
        ["1", () => inputDigit("1")], ["2", () => inputDigit("2")], ["3", () => inputDigit("3")], ["−", () => chooseOperator("−"), "operator"],
        ["0", () => inputDigit("0"), "zero"], [".", inputDecimal], ["+", () => chooseOperator("+"), "operator"], ["=", calculate, "equals"], 
    ];

    return (
        <main className="calculator-page">
            <section className="calculator" aria-label="Calculator">
                <h1>Calculator</h1>
                <output className="calculator-display" aria-live="polite">{display}</output>
                <div className="calculator-grid">
                    {keys.map(([label, action, kind]) => <button key={label} type="button" className={kind || ""} onClick={action} aria-label={label === "⌫" ? "Backspace" : label}>{label}</button>)}
                </div>
                <p className="calculator-hint">Keyboard: numbers, + − × ÷, Enter, Esc, S (square), R (root)</p>
            </section>
        </main>
    );
}
















