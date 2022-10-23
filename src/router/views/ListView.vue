<template>
    <div>
        <v-container>
            <v-row>
                <template v-for="(facility, index) in communityFacilities">
                    <v-col :key="index" class="pa-0 justify-center">
                        <v-card :flat="true">
                            <v-img :src="facility.thumbnail" :max-width="164" :max-height="112" class="facility-image"/>
                            <span class="facility-title">{{ facility.title }}</span>
                        </v-card>
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

<style scoped lang="scss">
.facility-image {
    border-radius: 1.3vw;
    margin-bottom: 2.1vw;
}
.facility-title {
    font-size: 3.7vw;
    line-heiht: 4.2vw;
}
</style>