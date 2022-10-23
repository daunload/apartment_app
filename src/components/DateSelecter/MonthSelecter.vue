<template>
    <div class="wrapper">
        <div class="title">신청 월</div>
        <div class="month-buttons" :class="[months.length > 1 ? 'right' : 'center']">
            <template v-for="(month, index) in months">
                <button ref="month-button" class="month-button" :key="index"><div class="month-text">{{ month }}</div></button>
            </template>
        </div>
    </div>
</template>

<script>
export default {
    name: 'MonthSelecter',
    props: {
        months: {
            type: Array,
            require: true,
        },
    },
    mounted() {
        this.$refs['month-button'][0].classList.add('active')
    }
}
</script>

<style scoped lang="scss">
.wrapper {
    margin: 8vw 0;
}
.title {
    width: 100%;
    text-align: center;
    margin-bottom: 5.3333vw;
}

.month-buttons {
    &.right {
        display: flex;
        justify-content: end;
    }
    &.left {
        display: flex;
        justify-content: center;
    }
}
.month-button {
    font-size: 3.2vw;
    border: 0.2667vw solid #4c93ff;
    border-radius: 1.8667vw;
    color: #4c93ff;
    padding: 2.6667vw 9.6vw;
    margin-right: 1.8667vw;

    .month-text {
        width: 10.4vw;
    }
    &.active {
        background-color: #4c93ff;
        color: #ffffff;
    }
}
</style>