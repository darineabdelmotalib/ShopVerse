import "./LogIn.scss";
import close from "../../../assets/images/cross_icon.png";

function LogInPage({ isOpen, onClose }) {
    if (!isOpen) return null;

    function pressLogIn(event) {
        event.preventDefault();  // Prevent form from refreshing the page
        alert("You have successfully logged in!");
        onClose();
    }

    return (
        <section className="login-overlay" onClick={onClose}>
            <div className="login-modal" onClick={(e) => e.stopPropagation()}>
                <img className="modal__close-button" onClick={onClose} src={close} alt="close button"/>

                <div className="login">
                    <p className="login__title">Log In</p>
                    <form className="login__form" onSubmit={pressLogIn}>
                        <input className="login__input" type="text" placeholder="Username" required />
                        <input className="login__input" type="password" placeholder="Password" required />
                        <button type="submit" className="login__button">Log In</button>
                    </form>
                    <p className="login__signup">Don't have an account? <a className="login__signup__link" href="##">Sign Up here</a></p>
                </div>
            </div>
        </section>
    );
}

export default LogInPage;
