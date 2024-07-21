<template>
    <div class="home">
        <ContactSearch @updateVisibleContacts="updateVisibleContacts" />
        <ContactList :contacts="store.getFilteredContacts(currentFilter)" @changeContact="changeContact"
            @removeContact="removeContact" class="home__contacts" />
        <el-button @click="toggleModal" class="home__add">Добавить</el-button>
        <Transition>
            <AppPopup v-if="modalIsOpen" @close="toggleModal">
                <template v-slot:header>
                    <h2 class="home__popup-title">{{ modalTitle }}</h2>
                </template>
                <template v-slot:content>
                    <ContactForm :data="store.getContactByPhone(currentUserPhone)" @send="sendFunc" />
                </template>
            </AppPopup>
        </Transition>
    </div>
</template>
<script lang="ts" src="./HomeView.ts"></script>
<style lang="scss" src="./HomeView.scss"></style>