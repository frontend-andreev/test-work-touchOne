<template>
    <div class="app-popup" @click.self="closePopup">
        <div class="app-popup__wrapper">
            <div class="app-popup__header">
                <div class="app-popup__title">
                    <slot name="header"></slot>
                </div>
                <div class="app-popup__close" style="cursor: pointer;" @click="closePopup">&#9747; </div>
            </div>
            <div class="app-popup__content">
                <slot name="content" />
            </div>
        </div>
    </div>
</template>
<script lang="ts" src="./AppPopup.ts"></script>
<style lang="scss" src="./AppPopup.scss"></style>