import AppPopup from '@/components/AppPopup/AppPopup.vue'
import ContactForm from '@/components/ContactForm/ContactForm.vue'
import ContactList from '@/components/ContactList/ContactList.vue'
import ContactSearch from '@/components/ContactSearch/ContactSearch.vue'

import { useContactsStore } from '@/store/contacts'
import { defineComponent, onMounted, ref } from 'vue'
import { Contact } from '@/types/contacts'
export default defineComponent({
  name: 'HomeView',
  components: {
    ContactList,
    ContactForm,
    AppPopup,
    ContactSearch
  },
  setup() {
    const store = useContactsStore()
    const modalIsOpen = ref(false)
    const modalTitle = ref('Добавить нового пользователя')
    const currentUserPhone = ref<string>('')
    const currentFilter = ref('')

    const toggleModal = (): void => {
      modalIsOpen.value = !modalIsOpen.value
      if (!modalIsOpen.value) {
        modalTitle.value = 'Добавить нового пользователя'
        currentUserPhone.value = ''
      }
    }
    const changeContact = (phone: string): void => {
      modalTitle.value = 'Изменить контакт'
      currentUserPhone.value = phone
      toggleModal()
    }
    const sendFunc = (form: Contact): void => {
      if (currentUserPhone.value == '') store.addContact(form)
      else store.saveContactChanges(form, currentUserPhone.value)
      toggleModal()
    }
    const removeContact = (phone: string): void => {
      store.removeContact(phone)
    }
    const updateVisibleContacts = (value: string) => {
      currentFilter.value = value
    }
    onMounted(() => {
      store.downloadContacts()
      window.addEventListener('beforeunload', store.uploadContacts)
    })
    return {
      toggleModal,
      modalTitle,
      modalIsOpen,
      removeContact,
      changeContact,
      currentUserPhone,
      sendFunc,
      updateVisibleContacts,
      currentFilter,
      store
    }
  }
})
