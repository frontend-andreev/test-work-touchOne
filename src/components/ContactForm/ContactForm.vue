<template>
    <el-form ref="contactForm" :model="form" :label-position="'top'" :rules="rules" style="max-width: 600px" status-icon
        label-width="auto" class="demo-ruleForm">
        <el-form-item label="Имя" prop="name">
            <el-input v-model="form.name" />
        </el-form-item>
        <el-form-item label="Телефон" prop="phone">
            <el-input v-model="form.phone" v-mask="'+7 ### ### ## ##'" />
        </el-form-item>
        <el-form-item label="Email" prop="email">
            <el-input v-model="form.email" />
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="sendForm(contactForm)">
                Сохранить
            </el-button>
        </el-form-item>
    </el-form>
</template>
<script lang="ts" src="./ContactForm.ts"></script>
<style lang="scss" src="./ContactForm.scss"></style>