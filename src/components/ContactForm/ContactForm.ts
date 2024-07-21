import { defineComponent, onMounted, reactive, ref } from 'vue'
import { Contact } from '@/types/contacts'
import { FormInstance, FormRules } from 'element-plus'
import { mask } from 'vue-the-mask'
export default defineComponent({
  name: 'ContactForm',
  components: {},
  props: {
    data: {
      type: Object,
      default: () => ({})
    }
  },
  emits: ['send'],
  directives: {
    mask: (el, binding: any, vNode: any, oldVnode: any) => {
      if (!binding.value) return
      mask(el, binding, vNode, oldVnode)
    }
  },
  setup(props, ctx) {
    const contactForm = ref<FormInstance>()
    const form = reactive<Contact>({
      name: '',
      email: '',
      phone: ''
    })
    const rules = reactive<FormRules<Contact>>({
      name: [
        { required: true, message: 'Please input Activity name', trigger: 'blur' },
        { min: 3, max: 12, message: 'Length should be 3 to 12', trigger: 'blur' }
      ],
      email: [
        { required: true, message: 'Please input Activity name', trigger: 'blur' },
        { type: 'email', message: 'Invalid email', trigger: 'blur' }
      ],
      phone: [
        { required: true, message: 'Please input Activity name', trigger: 'blur' },
        { min: 16, max: 16, message: 'Invalid phone', trigger: 'blur' }
      ]
    })
    const sendForm = async (formElement: FormInstance | undefined) => {
      if (!formElement) return
      await formElement.validate((valid) => {
        if (valid) {
          ctx.emit('send', form)
        }
      })
    }
    onMounted(() => {
      if (Object.keys(props.data).length) {
        Object.assign(form, props.data)
      }
    })
    return {
      form,
      sendForm,
      rules,
      contactForm
    }
  }
})
