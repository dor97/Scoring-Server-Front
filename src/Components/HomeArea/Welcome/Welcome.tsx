import css from "./Welcome.module.css";

function Welcome(): JSX.Element {
    return (
        <div className={css.LargeText}>
			<p className={css.WelcomeSentence}>Welcome to our website!</p>
        </div>
    );
}

export default Welcome;
