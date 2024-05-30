import { Navigate, Outlet } from "react-router-dom";
import { selectToken } from "../../store/reducer"

const Guard = () => {
    const user = selectToken;
    if (!user) {
        console.log('Access denied');
        return <Navigate to={'/SignIn'} />
    }
    return (
        <Outlet />
    )
}
export default Guard;