<template>
    <div>
        <h2>About</h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur minima velit quibusdam modi voluptatum tenetur atque perferendis nihil doloribus iure.</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur minima velit quibusdam modi voluptatum tenetur atque perferendis nihil doloribus iure.</p>
        <div>{{ data }}</div>
    </div>
</template>

<script setup>
    // const { data } = await useFetch('/api/ninja?name=rakib', {
    //     method: 'post',
    //     body: { age: 30 }
    // })

    // const { data } = await useFetch('/api/ninja')

    const { data } = await useFetch('api/currency/BDT')
</script>

<style scoped>
    h2 {
        margin-bottom: 20px;
        font-size: 36px;
    }
    p {
        margin: 20px 0;
    }
</style>