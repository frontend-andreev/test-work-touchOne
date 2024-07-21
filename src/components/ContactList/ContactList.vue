<template>
    <el-table class="contact-list" :data="$props.contacts">
        <el-table-column prop="name" label="Имя" width="300" />
        <el-table-column prop="phone" label="Телефон" width="300" />
        <el-table-column prop="email" label="Email" />
        <el-table-column fixed="right" label="Operations" min-width="120">
            <template #default="scope">
                <el-button link type="primary" size="small"
                    @click.prevent="$emit('changeContact', $props.contacts[scope.$index].phone)">
                    Edit
                </el-button>
                <el-button link type="primary" size="small"
                    @click.prevent="$emit('removeContact', $props.contacts[scope.$index].phone)">
                    Delete
                </el-button>
            </template>
        </el-table-column>
    </el-table>
</template>


<script lang="ts" src="./ContactList.ts"></script>
<style lang="scss" src="./ContactList.scss"></style>
