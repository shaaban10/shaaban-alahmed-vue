import { createRouter, createWebHistory } from 'vue-router';
import monsters from '../views/monsters.vue';
import HomeView from '../views/HomeView.vue';
import monster from '../views/monster.vue';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/', 
      name: 'home',
      component: HomeView
    },
    {
      path: '/monsters' ,

      name: 'monsters',
      component: monsters, 
      
    },
    {
      path:  '/monster/:id', 
      name: 'monster', 
      component: monster 
    }
  ]
});

export default router;
