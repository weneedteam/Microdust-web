<template>
	<div class="container mise-container">
		<section class="mise-contents">
			<p class="small-title">현재위치</p>
			<h1 class="mise-title">의 미세먼지는 <span></span>입니다.<span class="now_time">{{this.time}}</span></h1>
			<div class="swiper-container mise-slider">
				<ul class="swiper-wrapper mise-list blue">
					<li class="mise-list_item blue" v-for="title in titles" v-bind:key="title">
						<p>{{title}}</p>
						<i>(^모^)</i>
						<p>좋음</p>
					</li>
				</ul>
			</div>
		</section>

		<section class="mise-contents"> 
			<p class="small-title">시간별 예고</p>
			<div class="swiper-container mise-slider">
				<ul class="swiper-wrapper mise-list white">
					<li class="mise-list_item white">aaaa</li>
					<li class="mise-list_item white">sssss</li>
					<li class="mise-list_item white">ddddd</li>
					<li class="mise-list_item white">ffffff</li>
				</ul>
			</div>
		</section>

		<section class="mise-contents">
			<p class="small-title">일별 예고</p>
		</section>
	</div>
</template>

<script>
import Swiper from 'swiper';

export default {
	name: 'index',

	data() {
		return {
			swiper: null,
			mise: null,
			time: null,
			titles: ['미세먼지','초미세먼지','이산화질소','오존','일산화탄소','이황산가스']
		};
	},

	mounted() {
		if(this.swiper) {
			this.swiper.destroy();
			this.swiper = null;
		}

		this.swiper = new Swiper('.mise-slider', {
			slidesPerView : 7,
			spaceBetween : 30
		});

		//현재위치 경도, 위도 가져오기
		navigator.geolocation.getCurrentPosition((res) => {
			console.log(res);
		});

		this.setDate();
	},

	methods: {
		fetchData() {
		},
		setDate() { //TODO: 나중에 실시간으로 바뀌도록 수정
			const time = new Date();
			this.time = `${time.getFullYear()}-${(time.getMonth()+1<10)?'0'+(time.getMonth()+1):time.getMonth()+1}-${time.getDate()} ${time.getHours()}:${(time.getMinutes()<10)?'0'+time.getMinutes():time.getMinutes()}`;
		}
	}
}
</script>

<style lang="scss">
.mise-container {
	padding-top: 80px;

	.mise-contents {
		padding: 20px 0px;
	}

	.small-title {
		font-size: 13px;
		font-weight: bold;
		margin-bottom: 3px;
	}
	.mise-title {
		overflow: hidden;
		position: relative;

		.now_time {
			display: block;
			position: absolute;
			right: 5px;
			top: 35%;
			font-size: 12px;
			color: #ccc;
		}
	}

	.mise-slider {
		width: 100%;
		height: 100%;

		.mise-list {
			& {
				overflow: hidden;
				width: 100%;
				max-width: 100%;
				height: auto;
				text-align: center;
				margin-top: 10px;
			}

			&.blue { color: #fff; }
			&.white { color: #333; }

			&_item {
				& {
					padding: 8px 10px;
					margin: 5px;
					display: inline-block;
					width: 13%;
					border-radius: 5px;
					box-shadow: 3px 3px 5px 1px rgba(0, 0, 0, 0.2);
				}

				&.blue {
					background-color: #2899d4;
				}

				&.white {}

				&:first-child{ margin-left: 1px; }
				&:last-child{ margin-right: 0px; }
			}
			p {
				margin: 0;
			}
		}
	}
}
</style>