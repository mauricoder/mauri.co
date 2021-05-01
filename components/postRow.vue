<template>
    <div :class="{'unit': true, 'one-third': true, 'nes-container': true, 'is-rounded': true, 'is-dark': hover}" @mouseover="hover=true" @mouseleave="hover=false">
        <NuxtLink :to="{name: 'blog-slug', params: { slug: post.slug}}">{{ post.Titulo }}</NuxtLink>
    </div>    
</template>

<script>
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
    }
}
</script>