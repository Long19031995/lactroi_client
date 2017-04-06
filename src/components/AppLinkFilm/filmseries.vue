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
							<!-- <p class="new">new</p> -->
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
							<!-- <p class="new">new</p> -->
						</div>
					</div>
    			</div>
    		</div>
    		<a class="left" href="#carousel-id" data-slide="prev"><i class="fa fa-chevron-left fa-2x"></i></a>
			<a class="right" href="#carousel-id" data-slide="next"><i class="fa fa-chevron-right fa-2x"></i></a>
    	</div>
	    <div class="container">
	    	<p>- Phim bộ -</p>
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
						<!-- <p class="new">new</p> -->
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
			this.getFilmNewUpdates()
		},
		data: function() {
			return {
				Film: [],
				FilmCarousel: [],
				FilmModal: {}
			}
		},
		methods: {
			getFilmNewUpdates: function() {
				var self = this
				var url = this.$parent.host + '/website/all/get_list_film/'
				var params = {'type_film': 41, 'page': 0, 'count': 3}
				this.$parent.callAPI('post', url, params).then(function (res) {
					self.Film = res.body
					var i
					for (i = 0; i < 12; i++) {
						self.FilmCarousel[i] = self.Film[i + 8]
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
			}
		}
	}
</script>
