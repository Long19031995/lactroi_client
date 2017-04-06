<template>
	<div id="index">
    	<div id="carousel-id" class="carousel slide">
    		<div class="carousel-inner">
    			<div class="item active">
					<div v-for="i in 6" v-if="FilmCarousel[i - 1] !== undefined" class="frameCarousel">
						<div class="image">
							<img :src="FilmCarousel[i - 1].image">
							<p class="info">{{FilmCarousel[i - 1].length}} - {{FilmCarousel[i - 1].quality}}</p>
							<p class="background"></p>
							<p @click="getFilmModal(i, 'carousel1')" class="detail" data-toggle="modal" href="#modal-id">Chi tiết >></p>
							<p class="new">new</p>
						</div>
					</div>
    			</div>
    			<div class="item">
					<div v-for="i in 6" v-if="FilmCarousel[i + 5] !== undefined" class="frameCarousel">
						<div class="image">
							<img :src="FilmCarousel[i + 5].image">
							<p class="info">{{FilmCarousel[i + 5].length}} - {{FilmCarousel[i + 5].quality}}</p>
							<p class="background"></p>
							<p @click="getFilmModal(i, 'carousel2')" class="detail" data-toggle="modal" href="#modal-id">Chi tiết >></p>
							<p class="new">new</p>
						</div>
					</div>
    			</div>
    		</div>
    		<a class="left" href="#carousel-id" data-slide="prev"><i class="fa fa-chevron-left fa-2x"></i></a>
			<a class="right" href="#carousel-id" data-slide="next"><i class="fa fa-chevron-right fa-2x"></i></a>
    	</div>
	    <div class="container">
	    	<p>- Phim mới -</p>
	    	<div id="content">
	    		<div v-for="(film, i) in Film" class="frame">
					<div class="image">
						<img :src="film.image">
						<p class="info">
							<span v-if="film.length !== null">{{film.length}} - </span>
							<span v-if="film.quality !== null">{{film.quality}}</span>
						</p>
						<p class="background"></p>
						<p @click="getFilmModal(i, 'newFilm')" class="detail" data-toggle="modal" href="#modal-id">Chi tiết >></p>
						<p class="new">new</p>
					</div>
					<div class="nameOfFilm">
						<p class="volume">Tập 1</p>
						<p class="name" :title="film.title">{{film.title}}</p>
					</div>
				</div>
	    	</div>
		</div>
    	<div id="detail">
    		<div class="modal fade" id="modal-id">
    			<div class="modal-dialog">
    				<div class="modal-content">
    					<div class="modal-header">
    						<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
    					</div>
    					<div class="modal-body">
    						<div class="row">
    							<div class="col-md-2">
    								
    							</div>
    							<div class="image col-md-3">
    								<img :src="FilmModal.image" class="img-responsive">
    							</div>
    							<div class="content col-md-6">
    								<div>{{FilmModal.title}}</div>
									<div v-if="FilmModal.episodes !== null">
										<span>Số lượng: </span>
										<span>{{FilmModal.episodes}}</span>
									</div>
									<div>
										<span>Nguồn: </span>
										<span>{{FilmModal.source}}</span>
									</div>
									<div v-if="FilmModal.country !== null">
										<span>Xuất xứ: </span>
										<span>{{FilmModal.country}}</span>
									</div>
									<div v-if="FilmModal.length !== null">
										<span>Thời lượng: </span>
										<span>{{FilmModal.length}}</span>
									</div>
									<div v-if="FilmModal.quality !== null">
										<span>Chất lượng: </span>
										<span>{{FilmModal.quality}}</span>
									</div>
									<div v-if="FilmModal.year !== null">
										<span>Năm: </span>
										<span>{{FilmModal.year}}</span>
									</div>
									<div v-if="FilmModal.view !== null">
										<span>Lượt xem: </span>
										<span>{{FilmModal.view}}</span>
									</div>
									<div>
										<a :href="FilmModal.url" target="_blank" class="btn btn-danger btn-lg">Xem Phim >></a>
									</div>
    							</div>
    						</div>
    						<div class="row">
    							<div v-if="FilmModal.description !== ''" class="intro col-md-12">
	    							<p>Giới thiệu</p>
	    							{{FilmModal.description}}    								
    							</div>
    						</div>
    					</div>
    				</div>
    			</div>
    		</div>
    	</div>
	</div>
</template>

<script>
	module.exports = {
		name: 'index',
		mounted: function() {
			this.resetScroll()
			this.getFilm()
			this.loadScroll()
		},
		data: function() {
			return {
				Film: [],
				FilmCarousel: [],
				FilmModal: {},
				Scroll: {
					Page: '',
					Count: ''
				}
			}
		},
		methods: {
			resetScroll: function () {
				this.Scroll.Page = -1
				this.Scroll.Count = 12
			},
			getFilm: function() {
				var self = this
				this.Scroll.Page++
				var url = 'http://139.59.116.17:8000/v1/api/get_list_film?' + '&page=' + this.Scroll.Page + '&count=' + this.Scroll.Count
				this.$http.get(url).then(function (res) {
					var i
					for (i = 0; i < res.body.data.length; i++) {
						self.Film.push(res.body.data[i])
					}
					for (i = 0; i < 12; i++) {
						self.FilmCarousel[i] = self.Film[i]
					}
				})
			},
			getFilmModal: function (i, typeShow) {
				if (typeShow === 'carousel1') {
					this.FilmModal = this.FilmCarousel[i - 1]
				} else if (typeShow === 'carousel2') {
					this.FilmModal = this.FilmCarousel[i + 5]
				} else if (typeShow === 'newFilm') {
					this.FilmModal = this.Film[i]
				}
			},
			loadScroll: function () {
				var self = this
				$(window).scroll(function() {
				    if($(window).scrollTop() === $(document).height() - $(window).height()) {
				    	self.getFilm()
				    }
				})
			}
		}
	}
</script>

<style>
	#index .carousel {
		position: relative;
	}
	#index .carousel .fa-chevron-left{
		background-color: white;
		opacity: 0.9;
		position: absolute;
		top: 220px;
		left: 10px;
		padding: 10px 15px 6px 10px;
		border-radius: 50%;
		border: 1px solid grey;
		color: #ee4b64;
	}
	#index .carousel .fa-chevron-right{
		background-color: white;
		opacity: 0.9;
		position: absolute;
		top: 220px;
		right: 20px;
		padding: 10px 10px 6px 15px;
		border-radius: 50%;
		border: 1px solid grey;
		color: #ee4b64;
	}
	#index .frameCarousel {
		background-color: white;
		width: 180px;
		height: 250px;
		border-radius: 5px 5px 5px 5px;
		margin: 120px 10px 0px 30px;
		float: left;
	}
	#index .frameCarousel .image {
		background-color: white;
		width: 180px;
		height: 250px;
		border-radius: 5px;
		position: relative;
	}
	#index .frameCarousel .image img {
		width: 180px;
		height: 250px;
		border-radius: 5px;
		position: absolute;
		top: 0px;
	}
	#index .frameCarousel .image .detail {
		background-color: #ee4b64;
		opacity: 0;
		width: 100px;
		height: 30px;
		border-radius: 5px;
		text-align: center;
		padding: 5px;
		position: absolute;
		top: 120px;
		left: 40px;
		color: white;
		font-weight: bold;
		transition: 0.3s ease-in-out;
	}
	#index .frameCarousel .image:hover .detail {
		opacity: 1;
		cursor: pointer;
	}
	#index .container > p {
		font-size: 25px;
		font-family: monospace;
		border-bottom: 1px solid #ee4b64;
		color: #ee4b64;
		margin-top: 30px;
	}
	#index .container #content {
		display: flex;
		flex-flow: row;
		justify-content: space-around;
		flex-wrap: wrap;
	}
	#index .frame {
		background-color: white;
		width: 180px;
		height: 310px;
		border-radius: 5px 5px 5px 5px;
		margin: 20px 20px 20px 20px;
	}
	#index .frame .image {
		background-color: white;
		width: 180px;
		height: 250px;
		border-radius: 5px 5px 0px 0px;
		position: relative;
	}
	#index .frame .image img {
		width: 180px;
		height: 250px;
		border-radius: 5px 5px 0px 0px;
		position: absolute;
		top: 0px;
	}
	#index .frame .image .new, #index .frameCarousel .image .new{
		background-color: yellow;
		width: 50px;
		height: 20px;
		border-radius: 10px;
		box-shadow: -4px 3px 10px grey;
		position: absolute;
		top: 5px;
		left: -5px;
		text-align: center;
		font-weight: bold;
		color: #ff0000;
		animation: mymove 0.5s infinite;
	}
	@keyframes mymove {
	    from {
	    	transform: scale(1, 1);
	    }
	    to {
	    	transform: scale(1.1, 1.1);
	    }
	}
	#index .frame .image .info {
		background-color: #ee4b64;
		opacity: 0.9;
		width: 150px;
		height: 30px;
		border-radius: 5px;
		text-align: center;
		padding: 5px;
		position: absolute;
		bottom: 0px;
		left: 15px;
		color: white;
		font-weight: bold;
	}
	#index .frame .image .background {
		background-color: black;
		opacity: 0;
		width: 180px;
		height: 250px;
		border-radius: 5px 5px 0px 0px;
		transition: 0.3s ease-in-out;
	}
	#index .frame .image:hover .background {
		opacity: 0.5;
	}
	#index .frame .image .detail {
		background-color: #ee4b64;
		opacity: 0;
		width: 100px;
		height: 30px;
		border-radius: 5px;
		text-align: center;
		padding: 5px;
		position: absolute;
		top: 120px;
		left: 40px;
		color: white;
		font-weight: bold;
		transition: 0.3s ease-in-out;
	}
	#index .frame .image:hover .detail {
		opacity: 1;
		cursor: pointer;
	}
	#index .frame .nameOfFilm {
		padding: 5px;
	}
	#index .frame .nameOfFilm .volume {
		font-size: 12px;
		font-family: monospace;
		color: #ee4b64;
	}
	#index .frame .nameOfFilm .name {
		text-align: center;
		font-size: 18px;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		text-transform: capitalize;
		color: #ee4b64;
	}
	#index #detail .modal-dialog {
		width: 80%;
		margin-bottom: 100px;
	}
	#index #detail .modal-content {
		/*background: linear-gradient(to bottom, white, #ee4b64);*/
	}
	#index #detail .modal-header {
		padding: 10px;
		border-bottom: none;
	}
	#index #detail .modal-header div {
		text-align: center;
		text-transform: uppercase;
		font-size: 30px;
		color: #ee4b64;
	}
	#index #detail .modal-body .image div {
		border-radius: 5px 5px 0px 0px;
		height: 40px;
		text-align: center;
		padding: 5px;
		font-size: 20px;
	}
	#index #detail .modal-body .image div:hover {
		cursor: pointer;
	}
	#index #detail .modal-body .image img {
		border-radius: 5px 5px 5px 5px;
		box-shadow: 0px 0px 50px grey;
	}
	#index #detail .modal-body .content div:nth-child(1) {
		text-align: center;
		font-size: 30px;
		text-transform: uppercase;
		font-weight: bold;
	}
	#index #detail .modal-body .content div {
		padding: 5px 0px;
		text-align: center;
	}
	#index #detail .modal-body .content div span:nth-child(1) {
		font-size: 18px;
		color: grey;
	}
	#index #detail .modal-body .content div span:nth-child(2) {
		font-size: 20px;
		color: #ee4b64;
	}
	#index #detail .modal-body .intro {
		padding: 20px 100px;
		color: #ee4b64;
		font-size: 20px;
	}
	#index #detail .modal-body .intro p {
		font-size: 40px;
		color: #ee4b64;
	}
</style>