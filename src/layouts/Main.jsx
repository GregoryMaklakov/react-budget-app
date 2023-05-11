import { Outlet, useLoaderData } from "react-router-dom";
import { fetchData } from "../libs/helpers"
import wawe from "../assets/wave.svg"
import Nav from "../components/Nav";

export function mainLoader() {
    const userName = fetchData("userName");
    return { userName }
}

const Main = () => {

    const { userName } = useLoaderData();

    return (

        <div className="layout">
            <main>
                <Nav userName={userName} />
                {userName}

                <Outlet />
            </main>
            <img src={wawe} alt="wawe" />
        </div>
    )
}

export default Main