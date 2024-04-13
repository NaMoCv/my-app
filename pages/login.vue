<template>
    <div>
        <h1>login</h1>
        <button @click="setCookieBtn">set cookie</button>
    </div>
</template>

<script lang="ts" setup>
const router = useRouter()

const setCookieBtn = () => {
    const identity = useCookie('identity', {
        maxAge: 10
    })
    identity.value = identity.value || 'cookie'
    console.log(document.cookie)
    console.log(identity.value)
    // router.back()
}
</script>