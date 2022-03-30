import Home from "../views/Home";
import Category from "../views/Home/Category";

export const routes = [
    {
        title: 'Home',
        pathname: '/',
        component: Home,
        children: []
    },
    {
        title: 'Category View',
        pathname: '/category/:category',
        component: Category,
    }
]