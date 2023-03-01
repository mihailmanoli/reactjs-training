import { Link, useNavigate } from "react-router-dom";

export default function Home () {
    const nav = useNavigate();
    const onNavigate = () => {
        nav("/category");
    };
    return (
        <>
            <h1>Home</h1>
            <p>
                Go to <Link to="/category">categories</Link>
                </p>
            <button onClick={onNavigate}>Nav to category</button>
        </>
    );
}