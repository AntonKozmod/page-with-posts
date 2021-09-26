import { createRouter, createWebHistory } from "vue-router";
import Main from "@/pages/Main";
import PostPage from "@/pages/PostPage";
import About from "@/pages/About";
import PostIdPage from "@/pages/PostIdPage";
import PageWithStore from "@/pages/PageWithStore";
import PageCompositionApi from "@/pages/PageCompositionApi"

const routes = [
    {
        path: '/',
        component: Main
    },
    {
        path: '/posts',
        component: PostPage
    },
    {
        path: '/about',
        component: About
    },
    {
        path: '/posts/:id',
        component: PostIdPage
    },
    {
        path: '/store',
        component: PageWithStore
    },
    {
        path: '/composition',
        component: PageCompositionApi
    }
];

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
});

export default router;