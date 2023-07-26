export default defineEventHandler(async () => {
    const data = await useStorage().getItem('redis:test2')
    return {
        ok: true,
        data
    }
})