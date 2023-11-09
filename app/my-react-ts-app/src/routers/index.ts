import Home from '../pages/home/index';
import NotFount from '../pages/404/index';

const RouterConfig = [
    {
        title: '首页',
        path: '/',
        component: Home,
    },
    {
        title: '首页',
        path: '/home',
        component: Home,
    },
    {
        title: '404',
        path: '*',
        component: NotFount,
    },
];
export default RouterConfig;