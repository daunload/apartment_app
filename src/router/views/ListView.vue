<template>
  <div id="wrapper">
    <template v-for="(facility, index) in communityFacilities">
      <router-link to="/detailView" class="facility-info" :key="index">
        <img :src="facility.thumbnail" class="facility-image" />
        <span class="facility-name">{{ facility.title }}</span>
      </router-link>
    </template>
  </div>
</template>

<script>
import { communityListDummy } from "@/../public/DummyData";

export default {
  name: "ListView",
  data() {
    return {
      communityFacilities: null,
    };
  },
  created() {
    this.communityFacilities = communityListDummy;
  },
};
</script>

<style scoped lang="scss">
#wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 8vw;
}
.facility-info {
  display: flex;
  flex-direction: column;
}
.facility-image {
  border-radius: 1.3vw;
  margin-bottom: 2.1vw;
  width: 44vw;
  height: 29.8vw;
}
.facility-name {
  font-size: 3.7vw;
  line-height: 4.2vw;
  margin-bottom: 6.4vw;
}
</style>
