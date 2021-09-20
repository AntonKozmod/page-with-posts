import { createApp } from 'vue'
import App from './app'
import components from '@/components/UI';

const app = createApp(App)

components.forEach(component => {
    app.component(component.name, component)
    console.log(component.name+" загружен")
})

app.mount('#app')
