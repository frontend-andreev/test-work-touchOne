import axios from 'axios'
import { defineStore } from 'pinia'
import { RootGetters, RootState, RootActions } from './types'
import { Contact } from '@/types/contacts'
import { useApiCall } from '@/composables/useApiCall'

export const useContactsStore = defineStore<string, RootState, RootGetters, RootActions>(
  'contacts',
  {
    state: () => {
      return {
        contacts: [],
        api: 'https://jsonplaceholder.typicode.com/posts'
      }
    },
    getters: {
      getContacts: (state: RootState) => state.contacts,
      getFilteredContacts: (state: RootState) => {
        return (value: string = '') => {
          return state.contacts.filter(
            (contact: Contact) =>
              contact.name.toLowerCase().includes(value) ||
              contact.phone.toLowerCase().includes(value) ||
              contact.email.toLowerCase().includes(value)
          )
        }
      },
      getContactByPhone: (state: RootState) => {
        return (phone: string) => {
          const result = state.contacts.find((item) => item.phone == phone)
          return result || state
        }
      }
    },
    actions: {
      addContact(contact: Contact) {
        // Fake request
        const apiCallFunction = async (controller: AbortController) => {
          return await axios
            .post(this.api, {
              signal: controller.signal,
              ...contact
            })
            .then(() => {
              this.contacts.push(contact)
            })
        }
        return useApiCall(apiCallFunction)
      },
      removeContact(phone: string) {
        const index = this.contacts.findIndex((item) => item.phone == phone)
        this.contacts.splice(index, 1)
      },
      saveContactChanges(contact: Contact, phone) {
        const index = this.contacts.findIndex((item) => item.phone == phone)
        this.contacts[index] = contact
      },
      downloadContacts() {
        const items = JSON.parse(localStorage.getItem('contacts') || '""')
        this.contacts = [...items]
      },
      uploadContacts() {
        localStorage.setItem('contacts', JSON.stringify(this.contacts))
      }
    }
  }
)
