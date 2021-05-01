<template>
<div style="padding:20px">
    <NuxtLink to="/"><< Back</NuxtLink>
    <div class="container blog">
        <div class="nes-container with-title grid" style="margin-top:20px">
            <h1>{{ post.Titulo }}</h1>
            <postContent v-for="content in post.Contenido" :key="content.id" :content="content"/>
        </div>
    </div>
</div>
</template>

<script>
export default {
    async   asyncData ({ $strapi, params }) {
        let post = await $strapi.find("blogs", {slug: params.slug})
        return { 
            post: post[0]
        }
    }
}
</script>

<style scoped>
    .nes-container {
        background-color:peachpuff;
        color:black
    }
</style>

<style>
    .blog p, .blog li {
        font-family: 'Quicksand', sans-serif;
        font-size: 20px!important        
    }
</style>