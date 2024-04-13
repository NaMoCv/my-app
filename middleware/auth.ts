export default defineNuxtRouteMiddleware((to, from) => {
    const identity = useCookie('identity')
    console.log(identity.value)

    if (typeof (identity.value) == 'undefined') {
        return navigateTo('/login')
    }
})