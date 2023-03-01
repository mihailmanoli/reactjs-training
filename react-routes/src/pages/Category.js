import { Link } from "react-router-dom";

const CATEGORIES = [
  { id: 1, name: "Alcoholic" },
  { id: 2, name: "Champagne" },
  { id: 3, name: "Ordinary" }
];

export default function Category() {
  return (
    <>
      <h1>Category</h1>
      <ul>
        {CATEGORIES.map((cat) => (
          <li key={cat.id}>
            <Link to={`/category/${cat.id}`}>{cat.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}