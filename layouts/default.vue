<template>
  <div>
    <Nuxt />
    <button type="button" class="nes-btn is-error scroll-btn" :class="{ active: scrollPos > 500 }" @click="goTop"><span>&lt;</span></button>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      scrollPos: 0
    }
  },
  mounted() {
    document.addEventListener('scroll', () => {
      this.scrollPos = document.documentElement.scrollTop || document.body.scrollTop;
    });
  },
  methods: {
    goTop: function() {
      window.scrollTo({ top:0, behavior: 'smooth' })
    }
  }
}
</script>