
import { useState } from "react";
import "./About.css"

function About() {
    const [name, setName] = useState("");
    const [interest, setInterest] = useState("");
    const [message, setMessage] = useState("");

    function handleSubmit(event) {
        event.preventDefault();
        if (interest) {
            setMessage(`Hi ${name}! Thanks for visiting to learn about ${interest}.`);
        } else {
            setMessage(`Hi ${name}! Thanks for visiting.`);
        }
    }

    return (
        <main>
            <h1>About Us</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">What is your name?</label>
                <input
                    id="name"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    required
                />

                <label htmlFor="interest">What are you interested in?</label>
                <input
                    id="interest"
                    value={interest}
                    onChange={(event) => setInterest(event.target.value)}
                />

                <button type="submit">Submit</button>
            </form>
            {message && <p role="status">{message}</p>}
        </main>
    );
}

export default About;


