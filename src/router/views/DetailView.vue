<template>
  <div class="container">
		<img class="image" :src="communityFacility.images[0]" />
		<p class="title">{{communityFacility.title}}</p>
		<p class="description">{{communityFacility.description}}</p>
		<div class="notificationWrapper">
			<div class="notificationTextWrapper">
				<p class="label">공지사항</p>
				<p class="text">{{communityFacility.notification}}</p>
			</div>
			<img class="moreImage" src="./@/../../../assets/ic-set-more.png" srcset="./@/../../../assets/ic-set-more@2x.png 2x, ./@/../../../assets/ic-set-more@3x.png 3x" />
		</div>
		<div class="guideWrapper">
			<p class="subTitle">운영안내</p>
			<div class="labelWrapper">
				<p class="label">시설위치 </p>
				<p class="text">{{communityFacility.location}}</p>
			</div>
			<div class="labelWrapper">
				<p class="label">운영시간 </p>
				<p class="text">{{communityFacility.startTime}} ~ {{communityFacility.endTime}}</p>
			</div>
			<div class="labelWrapper">
				<p class="label">휴게시간 </p>
				<p class="text">{{communityFacility.breakStartTime}} ~ {{communityFacility.breakEndTime}}</p>
			</div>
			<div class="labelWrapper">
				<p class="label">휴일 </p>
				<p class="text">{{communityFacility.holiday}}</p>
			</div>
			<div class="labelWrapper">
				<p class="label">문의 </p>
				<p class="text">{{communityFacility.phone}}</p>
			</div>
			<div class="line" />
			<p class="subTitle">편의시설</p>
			<div class="amenity">
				<div class="amenityWrapper" v-for="(amenity, index) in communityFacility.amenities" :key="index">
					<div class="iconWrapper">
						<img class="icon" :src="amenity.icon" />
					</div>
					<p>{{amenity.name}}</p>
				</div>
			</div>
			<div class="line" />
			<p class="subTitle">주의사항</p>
			<p class="text">주의사항 입니다.</p>
		</div>
		<p class="subTitle">운영 프로그램</p>
  </div>
</template>

<script>
import { communityDetailDummy } from '@/../public/DummyData'

export default {
    name: 'DetailView',
    data() {
        return {
            communityFacility: {}
        }
    },
    created() {
			this.communityFacility = communityDetailDummy[0]
    }
}
</script>

<style scoped lang="scss">
.container {
	padding: 4vw 4.053vw;
	.line {
		height: 1px;
		border: solid 0.5px #c0cdf1;
		margin: 6.533vw 0;
	}
	.image {
		width: 91.893vw;
		height: 53.333vw;
		margin: 0 0 3.200vw 0;
	}
	.title {
		font-size: 17px;
		margin: 0 0 3.200vw 0;
		font-weight: normal;
		font-stretch: normal;
		font-style: normal;
		line-height: 1;
		letter-spacing: normal;
		color: #000;
	}
	.description {
		margin: 0 0 8vw 0;
		font-size: 13px;
		font-weight: normal;
		font-stretch: normal;
		font-style: normal;
		line-height: 1;
		letter-spacing: normal;
		color: #787878;
	}
	.subTitle {
		margin: 0 0 5.333vw 0;
		font-size: 14px;
		font-weight: normal;
		font-stretch: normal;
		font-style: normal;
		line-height: 1.14;
		letter-spacing: normal;
		color: #0f1e44;

	}
	.notificationWrapper {
		height: 12.533vw;
		padding: 4vw 4.267vw 4vw 4vw;
		border-radius: 1.333vw;
		border: solid 0.133vw #c0cdf1;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		margin: 0 0 4vw 0;
		.notificationTextWrapper {
		display: flex;
		flex-direction: row;
	}
	}
	.guideWrapper {
		padding: 5.333vw 4vw 6.667vw;
		border-radius: 1.333vw;
		border: solid 0.133vw #c0cdf1;
	}
	.labelWrapper {
		display: flex;
		flex-direction: row;
		margin: 0 0 3.200vw 0;
	}
	.label {
		width: 64px;
		font-size: 3.467vw;
		font-weight: normal;
		font-stretch: normal;
		font-style: normal;
		line-height: 1.23;
		letter-spacing: normal;
		color: #222;
	}
	.moreImage {
		object-fit: contain;
	}
	.text {
		font-size: 13px;
		font-weight: normal;
		font-stretch: normal;
		font-style: normal;
		line-height: 1.31;
		letter-spacing: -0.1px;
		color: #222;
		max-width: 66.933vw;
	}
	.amenity {
		display: flex;	
		flex-direction: row;

		.amenityWrapper {
			display: flex;
			flex-direction: column;
			align-items: center;
		};
	}
	.iconWrapper {
		width: 12vw;
		height: 12vw;
		padding: 2.133vw;
		border: solid 1px #eaefff;
		border-radius: 6vw;
		margin: 0 0 1.600vw 0;
	}
	.icon {
		width: 7.733vw;
		height: 7.733vw;
	}
}

</style>