import { Link } from "react-router-dom";
import phoneImage from "../picture/phone.webp";
import "./Home.css";

function Home() {
    return (
        <main className="home-page">
            <section className="hero" aria-labelledby="hero-title">
                <div className="hero-copy">
                    <p className="eyebrow"><span aria-hidden="true" /> The everyday edit</p>
                    <h1 className="title" id="hero-title">
                        Good finds.
                        <br />
                        <span>Better days.</span>
                    </h1>
                    <p className="write">
                        Thoughtful picks for the things you use, wear, and love. Find something
                        that makes your everyday feel a little more you.
                    </p>
                    <Link className="hero-cta" to="/product">
                        Explore the shop <span aria-hidden="true">→</span>
                    </Link>
                    <p className="hero-note">A considered collection, made for real life.</p>
                </div>
                <div className="hero-visual">
                    <img src={phoneImage} alt="A smartphone held outdoors in natural light" className="picture" />
                    <div className="image-caption">
                        <span className="caption-mark" aria-hidden="true">01</span>
                        <span>
                            <strong>Everyday, elevated</strong>
                            <small>Little things. A better feel.</small>
                        </span>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Home;
