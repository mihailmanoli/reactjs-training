import { Link, useLocation, useParams, useRouteLoaderData } from "react-router-dom";

export default function CategoryDetails() {
    const {categoryId} = useParams();
    const routeLoaderData = useRouteLoaderData("root");
    console.log("routeLoaderData", routeLoaderData);

    const infoFromLink = useLocation();
    console.log("infoFromLink", infoFromLink.state.categoryId);

    return <>
        <p>Category Detail</p>
        <div>{categoryId}</div>
        <Link to=".." relative="path">Back</Link>
    </>;
}