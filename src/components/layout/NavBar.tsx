import { Link } from "react-router"
import { PageRoutes } from "../../constants/pageRoutes"
import calLogo from "../../assets/cal-logo.svg"

export const NavBar = () => {
    return (
        <div className="flex justify-between pt-8 p-4 items-center">
            <img src={calLogo} className="w-7 h-7" />
            <div className="w-fit flex align-middle gap-7 h-fit border-solid border-2 border-[#262626] rounded-4xl pt-1 pb-1 pr-4 pl-4">
                <Link to={PageRoutes.HOME} className="opacity-70 text-white">Home</Link>
                <Link to={PageRoutes.DASHBOARD} className="opacity-70 text-white">Test</Link>
                <Link to={PageRoutes.DASHBOARD} className="opacity-70 text-white">Test</Link>
                <Link to={PageRoutes.DASHBOARD} className="opacity-70 text-white">Test</Link>
            </div>
            <div>3</div>
        </div>
    )
}
