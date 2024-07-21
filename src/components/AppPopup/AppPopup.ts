import { defineComponent } from 'vue'
export default defineComponent({
  name: 'AppPopup',
  props: {
    title: String
  },
  emits: ['close'],
  components: {},
  setup(props, ctx) {
    const closePopup = () => {
      ctx.emit('close')
    }
    return {
      closePopup
    }
  }
})
