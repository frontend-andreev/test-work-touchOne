import { computed, defineComponent } from 'vue'
import DefaultLayout from '@/layouts/DefaultLayout/DefaultLayout.vue'
import { useRoute } from 'vue-router'
export default defineComponent({
  name: 'App',
  components: { DefaultLayout },
  setup() {
    const route = useRoute()
    const layoutComponent = computed(() => `${route.meta.layout}Layout`)
    return {
      layoutComponent
    }
  }
})
