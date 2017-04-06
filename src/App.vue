<template>
	<div>
		<div id="app">
			<div id="navbar1">
				<div class="input-group">
					<input type="search" placeholder="Tìm kiếm">
					<i class="fa fa-search fa-lg"></i>	
				</div>
				<div class="input-group">
					<div class="categoryName">Thể loại</div>
					<i class="fa fa-sort-down" @click="toggleCategory()"></i>
					<div class="categoryContent" v-show="isShowCategory">
						<ul>
							<li v-for="item in category" v-if="item.name_category !== ''">
								{{item.name_category}}
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div id="navbar2">
				<div class="input-group container">
					<ul>
						<li @click="setActiveNewFilm()"><router-link to="/filmnew" :class="isActiveNewFilm">Phim mới</router-link></li>
						<li @click="setActiveMovies()"><router-link to="/filmmovie" :class="isActiveMovies">Phim lẻ</router-link></li>
						<li @click="setActiveSeries()"><router-link to="/filmseries" :class="isActiveSeries">Phim bộ</router-link></li>
					</ul>
				</div>
			</div>
		</div>
		<div class="scrollTop">
			<div >
				
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
		},
		data: function () {
			return {
				isActiveNewFilm: 'active',
				isActiveMovies: '',
				isActiveSeries: '',
				category: [],
				isShowCategory: false
			}
		},
		methods: {
			setActiveNewFilm: function () {
				this.isActiveNewFilm = 'active',
				this.isActiveMovies = '',
				this.isActiveSeries = ''
			},
			setActiveMovies: function () {
				this.isActiveNewFilm = '',
				this.isActiveMovies = 'active',
				this.isActiveSeries = ''
			},
			setActiveSeries: function () {
				this.isActiveNewFilm = '',
				this.isActiveMovies = '',
				this.isActiveSeries = 'active'
			},
			setCategory: function () {
				var self = this
				var url = 'http://139.59.116.17:8000/v1/api/get_all_category/'
				this.$http.get(url).then(function (res) {
					self.category = res.body.data.category
				})
			},
			toggleCategory: function () {
				this.isShowCategory = !this.isShowCategory
			}
		}
	}
</script>

<style>
	body {
		background: #f4f4f4;
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
	#navbar1 .input-group:nth-child(2) {
		position: absolute;
		right: 20px;
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
		padding: 13px 10px 12px 10px;
		margin: 5px 0px;
		border-radius: 0px 5px 5px 0px;
		color: #ee4b64;
	}
	#navbar1 .input-group:nth-child(2) i:hover {
		cursor: pointer;
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
	#navbar2 ul {
		display: flex;
		flex-flow: row;
		justify-content: center;
		list-style: none;
		border-bottom: 2px solid #ee4b64;
	}
	#navbar2 ul li {
		padding: 20px 20px 5px 20px;
		font-size: 17px;
	}
	#navbar2 ul li a {
		color: #aaaaaa;
		text-decoration: none;
	}
	#navbar2 ul li:hover a {
		cursor: pointer;
		color: #ee4b64;
	}
	#navbar2 ul li a.active {
		color: #ee4b64;
		font-weight: bold;
	}
	footer {
		background-color: white;
		width: 100%;
		height: 150px;
	}
</style>
