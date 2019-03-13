<template>
  <transition name="fade" appear>
	<div
		class="wrapper"
		v-bind:style="{ 'background-position': wScroll + 'px center'}"
		
	>
		<!-- 'background-image': 'url(' + backgroundImage +')' -->
		<div class="surroundContainer" ref="container" @scroll="scrollMoved()">
			<div class="hPage">
				<div class="boxContainer">
					<div class="box">
						<img src="/img/home/3.jpg">
					</div>
					<div class="box">
						<img src="/img/home/2.jpg">
					</div>
					<div class="box">
						<img src="/img/home/1.jpg">
					</div>
					<div class="box">
						<img src="/img/home/1.jpg">
					</div>
					<div class="box">
						<img src="/img/home/3.jpg">
					</div>
					<div class="box">
						<img src="/img/home/2.jpg">
					</div>
				</div>
			</div>
			<div class="hPage">
				<div class="boxContainer">
				<div class="box">
						<img src="/img/home/3.jpg">
					</div>
					<div class="box">
						<img src="/img/home/2.jpg">
					</div>
					<div class="box">
						<img src="/img/home/1.jpg">
					</div>
					<div class="box">
						<img src="/img/home/1.jpg">
					</div>
					<div class="box">
						<img src="/img/home/3.jpg">
					</div>
					<div class="box">
						<img src="/img/home/2.jpg">
					</div>
				</div>
			</div>
			<!------------------------------------------------------------------------------------------------->
			<!-------------------------------LeftArrowButton and RightArrowButton------------------------------>
			<!------------------------------------------------------------------------------------------------->
			<i id="buttonLeftArrow" @click="moveLeft()">
				<fa icon="angle-left"></fa>
			</i>
			<i id="buttonRightArrow" @click="moveRight()">
				<fa icon="angle-right"></fa>
			</i>
			<!------------------------------------------------------------------------------------------------->
			<!-------------------------------LeftArrowButton and RightArrowButton------------------------------>
			<!------------------------------------------------------------------------------------------------->
		</div>
	</div>
  </transition>
</template>

<script>
export default {
	data() {
		return {
			wScroll: 0,
			scrollPlacing: 0,
			backgroundImage: "/img/gallery/backgroundgallery.png"
		};
	},
	methods: {
		scrollMoved: function() {
			this.wScroll = this.$refs.container.scrollLeft * -0.025;
			console.log(this.wScroll);
		},
		moveLeft: function() {
			this.scrollPlacing -= this.$refs.container.offsetWidth;
			this.$refs.container.scrollTo(this.scrollPlacing, 0);
		},
		moveRight: function() {
			this.scrollPlacing += this.$refs.container.offsetWidth;
			this.$refs.container.scrollTo(this.scrollPlacing, 0);
		},
		changeBackground: function(image) {
			this.backgroundImage = image;
			console.log(image);
		}
	}
};
</script>

<style scoped>
.wrapper {
	height: 100vh;
	background-color: transparent;
	background-size: auto, auto;
	margin-left: 0px;
	border-left-width: 0px;
	padding-left: 0px;
	position: relative;
	background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.16'%3E%3Cpath opacity='.5' d='M96 95h4v1h-4v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9zm-1 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9z'/%3E%3Cpath d='M6 5V0H5v5H0v1h5v94h1V6h94V5H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
}

.view {
	height: 100%;
	background-color: blue;
}

#buttonLeftArrow {
	position: absolute;
	left: 2%;
	bottom: 45%;
	font-size: 70px;
	color: blanchedalmond;
	cursor: pointer;
}

svg > path {
	fill: #ffffff;
}

#buttonRightArrow {
	position: absolute;
	right: 2%;
	bottom: 45%;
	font-size: 70px;
	color: blanchedalmond;
	cursor: pointer;
}

.hPage {
	display: inline-block;
	height: 100%;
	width: 100%;
	padding: 30px;
	box-sizing: border-box;
	justify-content: center;
}

.boxContainer {
	display: -webkit-flex;
	display: flex;
	-webkit-align-items: baseline;
	-webkit-align-wrap: wrap;
	flex-wrap: wrap;
	align-items: baseline;
	width: calc(100vw - 50px);
	height: 100%;
	background-color: rgba(255, 255, 255, 0.1);
	border-radius: 10px;
	justify-content: center;
	overflow-y: auto;
	overflow: visible;
}

.box {
	background-color: #ffffff22;
	width: 28%;
	height: calc(50% - 40px);
	margin: 20px;
}

.box img {
	width: 100%;
	height: 100%;
	box-shadow: 0px 3px 10px rgba(0,0,0,0.2);
	transition: transform 0.3s;
}

.box img:hover {
	transform: scale(1.4);
}

.desc {
	padding: 15px;
	text-align: center;
}

.surroundContainer {
	/* width: 400%;
    
	/* My own code */
	overflow: auto;
	white-space: nowrap;
	background-position: -400px center;
}

::-webkit-scrollbar {
	display: none;
}

#indicator {
	position: fixed;
	top: 0;
	left: 0;
	height: 10px;
	background-color: red;
	z-index: 999;
}
</style>
