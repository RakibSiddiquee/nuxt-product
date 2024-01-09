export default defineEventHandler(async (event) => {

    // handle query params
    // const { name } = getQuery(event)

    // handle post data
    // const { age } = await readBody(event)
    // return {
    //     message: `Hello, ${name}! You are ${age} years old.`
    // }

    const { data } = await $fetch('https://api.currencyapi.com/v3/latest?apikey=cur_live_iT9B02ppT0T37egI21kM2nn4uqJ3DTINhHBjIPKo')
    return data;
})