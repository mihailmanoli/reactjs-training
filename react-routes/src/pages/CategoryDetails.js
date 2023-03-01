import { Link, useParams } from "react-router-dom";

export default function CategoryDetails() {
    const {categoryId} = useParams();

    return <>
        <p>Category Detail</p>
        <div>{categoryId}</div>
        <Link to=".." relative="path">Back</Link>
    </>;
}