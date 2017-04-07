<template>
	<div>
		<div id="app">
			<div id="navbar1">
				<div id="search" class="input-group">
					<input @keyup="getSearchResult()" type="search" placeholder="Tìm kiếm">
					<i class="fa fa-search fa-lg"></i>
					<div class="searchReview">
						<p>Phim mới</p>
						<ul>
							<li v-for="(item, index) in searchResult">
								{{item.title}}
							</li>
						</ul>
					</div>	
				</div>
				<div id="category" class="input-group">
					<div class="categoryName">Thể loại</div>
					<i class="fa fa-sort-down"></i>
					<div class="categoryContent">
						<ul>
							<li v-for="item in category" v-if="!isUndefinedOrEmpty(item.name_category)">
								{{item.name_category}}
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div id="navbar2">
				<div class="container">
					<div class="gallery js-flickity" data-flickity-options='{ "freeScroll": true }'>
						<div v-for="item in categoryCarousel" v-if="!isUndefinedOrEmpty(item.name_category)" class="item">
							Phim {{item.name_category}}
						</div>
					</div>
				</div>
			</div>
			<div id="scrollTop">
				<i @click="scrollTop()" class="fa fa-angle-double-up fa-4x"></i>
			</div>
		</div>
		<router-view></router-view>
		<footer>
			
		</footer>
	</div>
</template>

<script>
	export default {
		name: 'app',
		mounted: function () {
			this.setCategory()
			this.getSearchResult()
			this.setJS()
		},
		data: function () {
			return {
				category: [],
				categoryCarousel: [],
				searchResult: []
			}
		},
		methods: {
			setCategory: function () {
				var self = this
				var url = 'http://139.59.116.17:8000/v1/api/get_all_category/'
				this.$http.get(url).then(function (res) {
					self.category = res.body.data.category
					var i
					for (i = 9; i >= 0; i--) {
						self.categoryCarousel[9 - i] = self.category[i]					
					}
				})
			},
			isUndefinedOrEmpty: function (value) {
				return value === undefined || value === ''
			},
			getSearchResult: function () {
				var self = this
				var key = $('input[type="search"]').val()
				var url = 'http://139.59.116.17:8000/v1/api/search_film?q=' + key
				this.$http.get(url).then(function (res) {
					self.searchResult = res.body.data
				})
			},
			scrollTop: function () {
				$('body').animate(
					'slow',
					{ scrollTop: 0 }
				)
			},
			setJS: function () {
				$('.searchReview').hide()
				$('.categoryContent').hide()

				$('#search').focusin(function () {
					$('.searchReview').slideToggle()
				})
				$('#category').click(function () {
					$('.categoryContent').slideToggle()
				})

				// link: http://jsfiddle.net/LCB5W/
				$(document).mouseup(function (event) {				    
			        if (!$('#search').is(event.target) && $('#search').has(event.target).length === 0) {
			            $('.searchReview').hide()
			        }
			        if (!$('#category').is(event.target) && $('#category').has(event.target).length === 0) {
			            $('.categoryContent').hide()
			        }
				})
			}
		}
	}
</script>

<style>
	body {
		background: #f4f4f4;
	}
	#scrollTop {
		position: fixed;
		right: 10px;
		bottom: 10px;
		color: #ee4b64;
	}
	#scrollTop:hover {
		cursor: pointer;
	}
	#navbar1 {
		background-color: white;
		position: fixed; 
		top: 0px;
		height: 50px;
		width: 100%;
		box-shadow: 5px -5px 50px grey;
		display: flex;
		flex-flow: row;
		justify-content: center;
		z-index: 2;
	}
	#navbar1 .input-group:nth-child(1) input[type='search'] {
		background-color: #f4f4f4;
		border: none;
		height: 40px;
		width: 400px;
		margin: 5px 0px 0px 0px;
		padding: 0px 10px 0px 10px;
		border-radius: 5px 0px 0px 5px;
		outline: none;
		color: #ee4b64;
	}
	#navbar1 .input-group:nth-child(1) i {
		background-color: #f4f4f4;
		border: none;
		padding: 14px 13px 12px 13px;
		border-radius: 0px 5px 5px 0px;
		color: #ee4b64;
	}
	#navbar1 .input-group:nth-child(1) i:hover {
		cursor: pointer;
	}
	#navbar1 .input-group:nth-child(1) .searchReview {
		width: 443px;
		height: 300px;
		position: absolute;
		top: 40px;
		left: 0px;
		background-color: #f4f4f4;
		border-radius: 0px 0px 10px 10px;
		box-shadow: 0px 2px 2px white;
		overflow-y: auto;
	}
	#navbar1 .input-group:nth-child(1) .searchReview p {
		font-size: 20px;
		font-weight: bold;
		padding: 5px 20px 5px 20px;
		border-bottom: 1px solid white;
		color: #ee4b64;
	}
	#navbar1 .input-group:nth-child(1) .searchReview ul li {
		text-transform: capitalize;
		color: #ee4b64;
		font-size: 15px;
	}
	#navbar1 .input-group:nth-child(2) {
		position: absolute;
		right: 20px;
	}
	#navbar1 .input-group:nth-child(2):hover {
		cursor: pointer;
	}
	#navbar1 .input-group:nth-child(2) .categoryName {
		background-color: #f4f4f4;
		display: inline-block;
		border: none;
		width: 100px;
		height: 40px;
		text-align: center;
		padding: 10px 10px 0px 10px;
		border-radius: 5px 0px 0px 5px;
		outline: none;
	}
	#navbar1 .input-group:nth-child(2) i {
		background-color: #f4f4f4;
		display: inline-block;
		border: none;
		padding: 13px 10px 13px 10px;
		margin: 5px 0px;
		border-radius: 0px 5px 5px 0px;
		color: #ee4b64;
	}
	#navbar1 .input-group:nth-child(2) .categoryContent {
		background-color: white;
		width: 250px;
		height: 400px;
		position: absolute;
		box-shadow: 0px 0px 5px white;
		right: 0px;
		overflow-y: scroll;
	}
	#navbar1 .input-group:nth-child(2) .categoryContent ul {
		list-style: none;
		padding-left: 0px;
	}
	#navbar1 .input-group:nth-child(2) .categoryContent ul li {
		text-transform: capitalize;
		font-size: 15px;
		font-weight: bold;
		padding: 5px 35px;
		border-bottom: 1px solid #f4f4f4;
		color: #ee4b64;
	}
	#navbar2 {
		background-color: white;
		position: fixed;
		top: 50px;
		height: 50px;
		width: 100%;
		z-index: 1;
	}
	#navbar2 .gallery {
		padding: 10px 50px;
		width: 100%;
	}
	#navbar2 .gallery .item {
		font-size: 17px;
		width: 150px;
		text-align: center;
	}
	#navbar2 .gallery .item:hover {
		cursor: pointer;
	}
	#navbar2 .gallery .item.active {
		font-size: 19px;
		color: #ee4b64;
		border-bottom: 2px solid #ee4b64;
	}
	#navbar2 .gallery .flickity-prev-next-button {
		background: transparent;
	}
	#navbar2 .gallery .flickity-prev-next-button .arrow {
		fill: #ee4b64;
	}
	#navbar2 .flickity-page-dots {
		display: none;
	}
	footer {
		background-color: white;
		width: 100%;
		height: 150px;
	}
</style>
