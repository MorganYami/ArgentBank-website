import { Navigate, Outlet } from "react-router-dom";
import { selectToken } from "../../store/reducer"
import { useSelector } from "react-redux";

const Guard = () => {
    const user = useSelector(selectToken);
    if (!user) {
        console.log('Access denied');
        return <Navigate to={'/SignIn'} />
    }
    return (
        <Outlet />
    )
}
export default Guard;