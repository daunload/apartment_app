<template>
    <div></div>
</template>

<script>
import communityListDummy from '../../../public/DummyData'

export default {
    name: 'ListView',
    data() {
        return {
            communityFacilities: null
        }
    },
    mounted() {
        this.communityFacilities = communityListDummy
        console.log(this.communityFacilities)
    }
}
</script>
