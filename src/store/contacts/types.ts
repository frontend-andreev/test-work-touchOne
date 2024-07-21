import { Contact } from '@/types/contacts'

export type RootState = {
  contacts: Contact[]
  api: string
}

export type RootGetters = {
  getContacts: (state: RootState) => Contact[]
  getContactByPhone: (state: RootState) => (phone: string) => Contact | {}
  getFilteredContacts: (state: RootState) => (value: string) => Contact[]
}

export type RootActions = {
  addContact: (contact: Contact) => void
  saveContactChanges: (contact: Contact, phone: string) => void
  removeContact: (phone: string) => void
  downloadContacts: () => void
  uploadContacts: () => void
}
