import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const defaultBackgroundColor = 'yellow'

const app = createApp(App)
app.use(router).mount('#app')
app.directive('background', (el, binding) => {
    el.style.backgroundColor = binding.arg || defaultBackgroundColor
});