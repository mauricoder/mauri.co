<template>
  <div>
    <div class="container">
      <div class="nes-container with-title is-centered grid" style="margin-top:20px">
        <p class="title">{{ bienvenida.Titulo }}</p>
        <div class="unit one-third">
          <img src="/mauricio-8bits.gif" width="300"/>
        </div>
        <div class="unit two-thirds" v-html="$md.render(bienvenida.Contenido)">
        </div>
      </div>
    </div>
    <div class="container">
      <div class="nes-container with-title is-centered grid" style="margin-top:20px">
        <p class="title">Artículos</p>
        <postRow v-for="post in posts" :key="post.id" :post="post"/>
      </div>      
    </div>                      
  </div>
</template>

<script>
export default {
    async   asyncData ({ $strapi }) {
    return { 
        bienvenida: await $strapi.find("bienvenida"),
        posts: await $strapi.find("blogs")
    }
  },
}
</script>

<style scoped>
    * {
        box-sizing: border-box;
    }
    .container {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(10em, 1fr));
        grid-gap: 0.5em;
    }
    .item {
        padding: 0.5em;
        text-align: center;
    }
    .item img {
        width: 300px;      
    }
</style>