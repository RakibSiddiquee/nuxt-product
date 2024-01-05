<template>
    <div>
        <div class="grid grid-cols-4 gap-5">
            <div v-for="p in products">
                <ProductCard :product="p" />
            </div>
        </div>
        <NuxtLink to="products/123">Details Product</NuxtLink>
    </div>
</template>

<script setup>
    definePageMeta({
        layout: 'products'
    })

    // fetch the products
    const { data: products } = await useFetch('https://fakestoreapi.com/products')

    useHead({
        title: 'Nuxt Product | Products Showcase',
        meta: [
            { name: 'description', content: 'Nuxt products description' }
        ]
    })
</script>

<style lang="scss" scoped>

</style>