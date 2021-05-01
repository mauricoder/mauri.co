<template>
    <div class="blog-card" :class="{'unit': true, 'one-third': true, 'nes-container': true, 'is-rounded': true, 'is-dark': hover}" @mouseover="hover=true" @mouseleave="hover=false">
        <NuxtLink :to="{name: 'blog-slug', params: { slug: post.slug}}">
        {{ post.Titulo }}
        <img class="unit whole" :src="getStrapiMedia(post.ImagenTarjeta.url)"/>
        </NuxtLink>
    </div>    
</template>

<script>
import {getStrapiMedia} from '../src/strapi'

export default {
    props: {
        post: {
            type: Object,
            required: true
        }
    },
    data: function() {
        return {
            hover: false
        }
    },
    methods: {
        getStrapiMedia
    }
}
</script>

<style>
    .blog-card a {
        font-size: 20px;
    }
</style>