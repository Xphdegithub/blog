import Home from "../views/Home";
import Article from '../views/Article'
import ArticleDetail from '../components/Article/ArticleDetails.vue'
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/article",
    name: 'Article',
    component: Article,
    children: [
      {
        path:"/article/:id",
        name: "ArticleDetail",
        component: ArticleDetail,
      }
    ]
  }
];

export default routes;
