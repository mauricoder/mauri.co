<template>
    <div>
        <!-- twitter -->
        <ShareNetwork
            network="twitter"
            :url="url"
            :title="`${title} by @maurietchev`"
            :description="`${desc} by @maurietchev`"
        >
        <i class="nes-icon twitter is-medium"></i>
        </ShareNetwork>

        <ShareNetwork
            network="linkedin"
            :url="url"
            :title="title"
            :description="desc"
        >
        <i class="nes-icon linkedin is-medium"></i>
        </ShareNetwork>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            required: true
        },
        desc: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            url: ''
        }
    },
    mounted() {
        this.url = window.location.href
    }
}
</script>