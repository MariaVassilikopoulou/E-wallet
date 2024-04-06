import { createBrowserRouter } from "react-router-dom";
import AddCard from "../pages/AddCard";
import Home from '../pages/Home';

const router = createBrowserRouter(
    [
        {
            path:'/',
            element:<Home/>
        },
        {
            path:'/card',
            element:<AddCard/>
        }
    ]
);
export default router;