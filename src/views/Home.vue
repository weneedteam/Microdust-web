<template>
	<div class="container mise-container">
		<section>
			<p class="small-title">현재위치</p>
			<h1 class="mise-title">의 미세먼지는 <span></span>입니다.</h1>
			<div class="swiper-container mise-slider">
				<ul class="swiper-wrapper mise-list">
					<li class="mise-list_item" v-for="title in titles" v-bind:key="title">
						<p>{{title}}</p>
						<i>(^모^)</i>
						<p>좋음</p>
					</li>
				</ul>
			</div>
		</section>

		<section>
			<p class="small-title">시간별 예고</p>
			<div class="swiper-container mise-slider">
				<ul class="swiper-wrapper time-list">
					<li class="time-list_item">aaaa</li>
					<li class="time-list_item">sssss</li>
					<li class="time-list_item">ddddd</li>
					<li class="time-list_item">ffffff</li>
				</ul>
			</div>
		</section>

		<section>
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
	},

	methods: {
		fetchData() {

		}
	}
}
</script>

<style lang="scss">
.mise-container {
	padding-top: 80px;

	.small-title {
		font-size: 12px;
		margin-bottom: 5px;
	}
	.mise-title {
		overflow: hidden;
		position: relative;

		&:after {
			content: '2019-09-01 04:42PM';
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
	}

	.mise-list {
		color: #fff;
		overflow: hidden;
		width: 100%;
		max-width: 100%;
		height: auto;
		text-align: center;
		margin-top: 10px;

		&_item {
			padding: 8px 10px;
			margin: 5px;
			display: inline-block;
			width: 13%;
			background-color: #2899d4;
			border-radius: 5px;

			&:first-child{ margin-left: 0px; }
			&:last-child{ margin-right: 0px; }
		}
		p {
			margin: 0;
		}
	}

	.time-list {
		color: #333;
		overflow: hidden;
		width: 100%;
		max-width: 100%;
		height: auto;
		text-align: center;
		margin-top: 10px;

		&_item {
			padding: 8px 10px;
			margin: 5px;
			display: inline-block;
			width: 13%;
			background-color: #fff;
			border: 1px solid #333;
			border-radius: 5px;

			&:first-child{ margin-left: 0px; }
			&:last-child{ margin-right: 0px; }
		}
		p {
			margin: 0;
		}
	}


}
</style>