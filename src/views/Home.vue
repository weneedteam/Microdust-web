<template>
	<div class="dust-container container">
		<section>
			<p>현재위치</p>
			<h1 class="dust-title">의 미세먼지는 <span></span>입니다.<span class="time">2019-09-01 04:42PM</span></h1>
			<article class="dust-list">
				<div class="dust-list_item" v-for="title in titles" v-bind:key="title">
					<p>{{title}}</p>
					<i>(^모^)</i>
					<p>좋음</p>
				</div>				
			</article>
		</section>

		<section>
			<!-- Swiper -->
			<div class="swiper-container dust-slider">
				<div class="swiper-wrapper">
					<div class="swiper-slide">Slide 1</div>
					<div class="swiper-slide">Slide 2</div>
					<div class="swiper-slide">Slide 3</div>
					<div class="swiper-slide">Slide 4</div>
					<div class="swiper-slide">Slide 5</div>
					<div class="swiper-slide">Slide 6</div>
					<div class="swiper-slide">Slide 7</div>
				</div>
				<!-- Add Pagination -->
				<div class="swiper-pagination"></div>
			</div>
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
			titles: ['미세먼지','초미세먼지','이산화질소','오존','일산화탄소','이황산가스']
		};
	},

	mounted() {
		if(this.swiper) {
			this.swiper.destroy();
			this.swiper = null;
		}

		this.swiper = new Swiper('.dust-slider', {
			sliderPerView: 7,
			spaceBetween: 30,
			pagination: {
				el: '.swiper-pagination'
			},
		});
	}
}
</script>

<style lang="scss">
.dust-container {
	padding-top: 80px;

	p {
		font-size: 12px;
		margin-bottom: 5px;
	}
	.dust-title {
		overflow: hidden;
		max-width: 100%;

		.time {
			float: right;
			color: #ccc;
			font-size: 12px;
			font-weight: 400;
		}
	}

	.dust-list {
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
}
</style>