<template>
    <div>
    </div>
</template>

<script>
import { communityListDummy } from '@/../public/DummyData'

export default {
    name: 'ListView',
    data() {
        return {
            communityFacilities: null
        }
    },
    created() {
        this.communityFacilities = communityListDummy
    }
}
</script>

<style scoped>
.commnity-info {
    display: flex;
    justify-content: center;
}
</style>