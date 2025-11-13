<script setup lang="ts">
import { getAge } from '@/composables/useAge'
import dayjs from 'dayjs'
import { computed } from 'vue'


type Info = {
    firstname: string
    lastname: string
    birthday: string,
}

const birthInfo: Info = {
    firstname: "Naoki",
    lastname: "Boudehent Miura",
    birthday: "2025-10-23"

}

const lastnameToUpperCase = computed(() => birthInfo.lastname.toLocaleUpperCase())

const formattedBirthday = computed(() => dayjs(birthInfo.birthday).format('DD/MM/YYYY'))

const age = computed(() => getAge(birthInfo.birthday))

</script>
<template>
    <article class="p-5">
        <p>{{ birthInfo.firstname }} <strong>{{ lastnameToUpperCase }}</strong></p>
        <p>Né le : {{ formattedBirthday }}</p>
        <p>Age : {{ age }}</p>
    </article>
</template>
