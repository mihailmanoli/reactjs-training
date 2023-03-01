import { Link } from "react-router-dom";

export default function NavigationBar() {
  return (
    <>
      <h2>Navigation</h2>
      <header>
        <ul>
          <li> <Link to="/">Home</Link> </li>
          <li> <Link to="/category">Category</Link> </li>
        </ul>
      </header>
    </>
  );
}
