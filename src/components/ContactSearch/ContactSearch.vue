<template>
    <div class="contact-search">
        <el-input class="contact-search__input" v-model="searchValue" prop="search" @input="searching"
            style="width: 300px;"></el-input>
        <el-button size="default" type="primary" @click="searching">Поиск</el-button>
    </div>
</template>
<script lang="ts" src="./ContactSearch.ts"></script>
<style lang="scss" src="./ContactSearch.scss"></style>