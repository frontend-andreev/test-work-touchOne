import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'ContactSearch',
  emits: ['updateVisibleContacts'],
  setup(props, ctx) {
    const searchValue = ref('')
    const searching = () => {
      ctx.emit('updateVisibleContacts', searchValue.value.trim().toLowerCase())
    }
    return {
      searchValue,
      searching
    }
  }
})
