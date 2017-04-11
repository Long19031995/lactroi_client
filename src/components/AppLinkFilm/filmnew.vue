<template>
	<div id="index">
		<div class="gallery js-flickity" data-flickity-options='{ "wrapAround": true }'>
			<div v-for="(film, i) in FilmCarousel" v-if="film !== undefined" class="gallery-cell">
				<img :src="film.image">
				<div class="background"></div>
				<div @click="getFilmModal(i, 'carousel')" class="detail" data-toggle="modal" href="#modal-id">Chi tiết >></div>
			</div>
		</div>
	    <div class="container">
	    	<p>- Phim mới -</p>
	    	<div id="content">
	    		<div v-for="(film, i) in Film" class="frame">
					<div class="image">
						<img :src="film.image">
						<p class="info">
							<span v-if="film.length !== null">{{film.length}} - </span>
							<span v-if="film.status !== ''">Tập {{film.status}} - </span>
							<span v-if="film.quality !== null">{{film.quality}}</span>
						</p>
						<p class="background"></p>
						<p @click="getFilmModal(i, 'newFilm')" class="detail" data-toggle="modal" href="#modal-id">Chi tiết >></p>
						<p class="new">new</p>
					</div>
					<div class="nameOfFilm">
						<p v-if="film.episodes !== null" class="volume">{{film.episodes}} Tập</p>
						<p v-else class="volume">1 Tập</p>
						<p v-if="film.title !== ''" :title="film.title" class="name">
							<a :href="film.url" target="_blank">{{film.title}}</a>
						</p>
						<p v-else class="name">N/A</p>
						<p class="icon">
							<span>{{film.source}}</span>
							<img src="http://static.hdonline.vn/template/frontend/images/favicon.ico" alt="" height="35" width="35">
						</p>
					</div>
				</div>
	    	</div>
		</div>
    	<div id="detail">
    		<div class="modal fade" id="modal-id">
    			<div class="modal-dialog">
    				<div class="modal-content">
    					<div class="background-blur">
    						
    					</div>
    					<div class="modal-header">
    						<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
    					</div>
    					<div class="modal-body">
    						<div class="row">
    							<div class="col-md-3">
    								
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
									<div class="buttonViewFilm">
										<a :href="FilmModal.url" target="_blank">
											<i class="fa fa-film btn btn-danger btn-lg"> Xem Phim</i>
										</a>
									</div>
									<div class="buttonShareFacebook">
										<a :href="getShare('facebook', FilmModal.url)" target="_blank">
											<i class="fa fa-facebook-official fa-2x btn-danger btn"></i>
										</a>
									</div>
									<div class="buttonShareTwitter">
										<a :href="getShare('twitter', FilmModal.url)" target="_blank">
											<i class="fa fa-twitter fa-2x btn-danger btn"></i>
										</a>
									</div>
									<div class="buttonShareGoogleplus">
										<a :href="getShare('googleplus', FilmModal.url)" target="_blank">
											<i class="fa fa-google-plus-official fa-2x btn-danger btn"></i>
										</a>
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
    	<div id="circleLoad" class="bound">
	      	<div class="boundpoint">
	        	<div class="point">
	          
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
			this.setJS()
		},
		updated: function () {
			
		},
		data: function() {
			return {
				Film: [],
				FilmCarousel: [],
				FilmModal: {},
				UrlBackgroundFilmModal: '',
				Scroll: {
					Page: '',
					Count: ''
				}
			}
		},
		methods: {
			resetScroll: function () {
				this.Scroll.Page = -1
				this.Scroll.Count = 10
			},
			getFilm: function() {
				var self = this
				this.Scroll.Page++
				var url = 'http://139.59.116.17:8000/v1/api/get_list_film?' + 
							'&page=' + this.Scroll.Page + 
							'&count=' + this.Scroll.Count
				this.$http.get(url).then(function (res) {
					var i
					for (i = 0; i < res.body.data.length; i++) {
						self.Film.push(res.body.data[i])
					}
					for (i = 0; i < 10; i++) {
						self.FilmCarousel[i] = self.Film[i]
					}
					self.getScript()
					$('#circleLoad').fadeOut('slow')
				})
			},
			getFilmModal: function (i, typeShow) {
				if (typeShow === 'carousel') {
					this.FilmModal = this.FilmCarousel[i]
				} else if (typeShow === 'newFilm') {
					this.FilmModal = this.Film[i]
				} else if (typeShow === 'searchResult') {
					this.FilmCarousel === this.$parent.searchResult[i]
				}
				$('#detail .modal-content .background-blur').css('background-image', 'url(' + this.FilmModal.image + ')')
			},
			getScript: function () {
				$.getScript('https://unpkg.com/flickity@2/dist/flickity.pkgd.min.js')
			},
			getShare(typeShare, link) {
				var href
				if (typeShare === 'facebook') {
					href = 'https://www.facebook.com/sharer/sharer.php?u=' + link
				} else if (typeShare === 'twitter') {
					href = 'https://twitter.com/share?url=' + link
				} else if (typeShare === 'googleplus') {
					href = 'https://plus.google.com/share?url=' + link
				}
				return href
			},
			loadScroll: function () {
				var self = this
				$(window).scroll(function() {
				    if($(window).scrollTop() === $(document).height() - $(window).height()) {
				    	$('#circleLoad').fadeIn('slow')
				    	self.getFilm()
				    }
				})
			},
			setJS: function () {
				$('#circleLoad').hide()
			}
		}
	}
</script>

<style>
	#index .gallery {
		margin-top: 100px;
		padding: 10px 0px;
	  	background: #EEE;
	}
	#index .gallery-cell {
	  	width: 250px;
		height: 350px;
		border-radius: 10px;
	  	counter-increment: gallery-cell;
	  	transform: scale(0.75);
	  	z-index: 1;
	}
	#index .gallery-cell img {
		width: 100%;
		height: 100%;
		position: relative;
		border-radius: 10px;
	}
	#index .gallery-cell.is-selected {
		transform: scale(1);
		z-index: 2;
	}
	#index .gallery-cell .background {
		position: absolute;
		top: 0;
		height: 100%;
		width: 100%;
		opacity: 0;
		background-color: black;
		transition: 0.3s ease-in-out;
		border-radius: 10px;
	}
	#index .gallery-cell:hover .background {
		cursor: auto;
		opacity: 0.5;
	}
	#index .gallery-cell .detail {
		background-color: #ee4b64;
		opacity: 0;
		width: 120px;
		height: 40px;
		border-radius: 7px;
		text-align: center;
		padding: 10px 5px;
		position: absolute;
		top: 150px;
		left: 70px;
		color: white;
		font-weight: bold;
		font-size: 15px;
		transition: 0.3s ease-in-out;
	}
	#index .gallery-cell:hover .detail {
		cursor: pointer;
		opacity: 1;
	}
	#index .gallery .flickity-prev-next-button .arrow {
		fill: #ee4b64;
	}
	#index .flickity-page-dots {
		display: none;
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
		height: 350px;
		border-radius: 5px 5px 5px 5px;
		margin: 20px 20px 20px 20px;
		box-shadow: 0px 0px 15px #dddddd;
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
		font-size: 18px;
		white-space: nowrap;
		overflow: hidden;
		text-align: center;
		text-overflow: ellipsis;
		text-transform: capitalize;
		color: #ee4b64;
	}
	#index .frame .nameOfFilm .name a {
		text-decoration: none;
		color: #ee4b64;
	}
	#index .frame .nameOfFilm .icon {
		position: relative;
	}
	#index .frame .nameOfFilm .icon img {
		border: 1px solid red;
		margin-right: -15px;
		border-radius: 50%;
		position: absolute;
		background-color: white;
		top: -8px;
		left: 0px;
	}
	#index .frame .nameOfFilm .icon span {
		background-color: #ee4b64;
		padding: 2px 20px 2px 20px;
		position: absolute;
		top: -2px;
		left: 25px;
		color: white;
		border-radius: 0px 15px 15px 0px;
	}
	#index #detail .modal-dialog {
		width: 80%;
		margin-bottom: 200px;
	}
	#index #detail .modal-content .background-blur {
		position: absolute;
		top: 0px;
		width: 100%;
		height: 100%;
		opacity: 0.5;
		filter: blur(7px);
		background-repeat: none;
		background-size: cover;
		background-position: 50% 30%;
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
		font-size: 30px;
		text-transform: uppercase;
		font-weight: bold;
		margin-top: -20px;
	}
	#index #detail .modal-body .content div {
		padding: 5px 0px;
	}
	#index #detail .modal-body .content div span:nth-child(1) {
		font-size: 18px;
		color: #555555;
	}
	#index #detail .modal-body .content div span:nth-child(2) {
		font-size: 20px;
		color: #ee4b64;
	}
	#index #detail .modal-body .content .buttonViewFilm,
	#index #detail .modal-body .content .buttonShareFacebook,
	#index #detail .modal-body .content .buttonShareTwitter,
	#index #detail .modal-body .content .buttonShareGoogleplus {
		display: inline-block;
	}
	#index #detail .modal-body .content .buttonViewFilm i {
		margin-right: 20px;
		font-size: 20px;
	}
	#index #detail .modal-body .intro {
		padding: 20px 100px;
		color: black;
		font-size: 20px;
	}
	#index #detail .modal-body .intro p {
		font-size: 40px;
		color: black;
	}
	.bound {
      position: fixed;
      bottom: 30px;
      left: 50%;
      width: 50px;
      height: 50px;
      background-color: #ee4b64;
      border-radius: 50%;
      opacity: 0.9;
    }
    .boundpoint {
      position: absolute;
      width: 50px;
      height: 50px;
      background-color: transparent;
      animation-name: example;
      animation-duration: 2s;
      animation-iteration-count: infinite;
    }
    .point {
      position: absolute;
      top: 0px;
      left: 0px;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background-color: red;
    }
    @keyframes example {
      0%  {transform: rotate(360deg);}
    }
</style>