const Home = () => import('./components/Home.vue');
export const routes= [
    {
        name: 'test',
        path: '/test',
        component: Home
    },
];