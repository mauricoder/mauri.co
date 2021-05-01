<template>
    <div class="content">
        <div v-if="content.__component=='blog.texto'" v-html="$md.render(content.Texto)"></div>
        <div v-else-if="content.__component=='blog.html'" v-html="content.Codigo"></div>
    </div>
</template>

<script>
export default {
    props: {
        content: {
            type: Object,
            required: true
        }
    }
}
</script>

<style>
    div.content h1, div.content h2, div.content h3, div.content h4 {
        margin-top:60px;
    }
    div.content p {
        margin-top:40px;
        font-size: 16px;
        color: rgb(77, 75, 75)
    }
    div.content pre {
        padding: 10px;
        background-color: rgb(77, 75, 75);
        color: #fff
    }
</style>