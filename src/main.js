import { createApp } from 'vue';
import App from './App.vue';
import store from './store';
import router from './router';
import baseUIComponents from './components/ui';
const app = createApp(App);

app.use(router);
app.use(store);

baseUIComponents.forEach((el) => {
  app.component(el.name, el.component);
});

app.mount('#app');
