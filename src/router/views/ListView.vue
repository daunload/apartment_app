<template>
    <div>
        <v-container>
            <v-row>
                <template v-for="(facility, index) in communityFacilities">
                    <v-col :row="6" :key="index" class="pa-0">
                        <v-img :src="facility.thumbnail" :max-width="164" :max-height="112"/>
                    </v-col>
                </template>
            </v-row>
        </v-container>
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