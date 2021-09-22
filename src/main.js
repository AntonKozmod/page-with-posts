import { createApp } from 'vue'
import App from './app'
import components from '@/components/UI';
import router from '@/router/router'

const app = createApp(App)

components.forEach(component => {
    app.component(component.name, component)
    console.log(component.name+" загружен")
})

app
    .use(router)
    .mount('#app')
