import { defineComponent, PropType } from 'vue'
import { Contact } from '@/types/contacts'
import { EditPen } from '@element-plus/icons-vue'
export default defineComponent({
  name: 'ContactList',
  components: { EditPen },
  emits: ['changeContact', 'removeContact'],
  props: {
    contacts: {
      required: true,
      type: Array as PropType<Contact[]>
    }
  }
})
