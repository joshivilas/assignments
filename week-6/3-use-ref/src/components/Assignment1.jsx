import { useRef } from "react";
import { useEffect } from "react";

// Create a component with a text input field and a button. When the component mounts or the button is clicked, automatically focus the text input field using useRef.

export function Assignment1() {
    const focusInp = useRef();

    useEffect(() => {
        focusInp.current.focus()

    }, []);

    const handleButtonClick = () => {
        focusInp.current.focus()

    };

    return (
        <div>
            <input ref={focusInp} type="text" placeholder="Enter text here" />
            <button onClick={handleButtonClick}>Focus Input</button>
        </div>
    );
};
