<template>
    <div id="user">
        <div class="container">
            <div class="cover" style="background-image: url(img/avarUser.jpg);">
                <div class="ava">
                    <div class="img">
                        <img src="img/avarUser.jpg">
                    </div>
                    <div class="change-ava">
                        <i class="glyphicon glyphicon-camera"></i>
                    </div>
                </div>
                <div class="change-bg">
                    <button class="btn btn-info btn-lg">
                        <i class="glyphicon glyphicon-camera"> Đổi ảnh nền</i>
                    </button>
                </div>
            </div>
            <div id="tab">
                <ul class="nav nav-tabs">
                    <li class="active"><a data-toggle="tab" href="#profile">Profile</a></li>
                    <li><a data-toggle="tab" href="#">History</a></li>
                </ul>

                <div class="tab-content">
                    <div id="profile" class="tab-pane fade in active">
                        <p class="text-info">Tên sử dụng: <span class="text-danger">Nguyễn Kim Long</span></p>
                        <p class="text-info">Ngày sinh: <span class="text-danger">19/03/1995</span></p>
                        <p class="text-info">Địa chỉ: <span class="text-danger">Canh Nậu - Thạch Thất - Hà Nội</span></p>
                        <p class="text-info">Email: <span class="text-danger">kl.cnpro.bb@gmail.com</span></p>
                        <p class="text-info">Giới tính: <span class="text-danger">Nam</span></p>
                        <button class="btn btn-info">Sửa</button>
                    </div>
                    <div id="" class="tab-pane fade">
                    </div>
                </div>
            </div>
            <div id="history">
                <div class="row">
                    <div class="col-sm-6">
                        <div class="panel panel-default">
                            <div class="panel-body row">
                                <div class="col-sm-5">
                                    <div class="panel panel-default">
                                        <div class="panel-body">
                                            <img src="img/50SacThaiDen.jpg" class="img-responsive">
                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm-7">
                                    <div class="panel panel-default">
                                        <div class="panel-body">
                                            <p class="text-info">Tên phim: <span class="text-danger">50 sắc thái đen</span></p>
                                            <p class="text-info">Thời lượng: <span class="text-danger">N/A</span></p>
                                            <p class="text-info">Chất lượng: <span class="text-danger">SD</span></p>
                                            <p class="text-info">IMDB: <span class="text-danger">N/A</span></p>
                                            <p class="text-info">Loại: <span class="text-danger">Phụ đề Việt</span></p>
                                            <p class="text-info">Năm: <span class="text-danger">2017</span></p>
                                            <p class="text-info">Nguồn: <span class="text-danger">PHIMMOI.NET</span></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6">
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'user'
    }
</script>

<style>
    #user .cover{
        position: relative;
        height: 300px;
        background-size: cover;
        background-position: 50% 50%;
        border: 5px solid white;
        margin-bottom: 60px;
    }
    #user .cover .ava {
        position: absolute;
        left: 50px;
        bottom: -50px;
        background-color: white;
        border-radius: 20%;
    }
    #user .cover .ava .img img{
        border-radius: 20%;
        border: 3px solid white;
        height: 150px;
        width: 150px;
    }
    #user .cover .change-ava {
        position: absolute;
        left: 50px;
        bottom: 5px;
    }
    #user .cover .change-ava i {
        opacity: 0;
        font-size: 30px;
        color: white;
    }
    #user .cover .ava:hover .img{
        opacity: 0.9;
    }
    #user .cover .ava:hover .change-ava i {
        opacity: 1;
        cursor: pointer;
    }
    #user .cover .change-bg {
        position: absolute;
        top: 10px;
        left: 20px;
    }
    #user .cover .change-bg .btn {
        border-radius: 0px;
        opacity: 0.8;
        padding: 5px 10px;
    }
    #user .nav-tabs {
        border: none;
    }
    #user .nav-tabs > li {
        margin: 0px;
    }
    #user .nav-tabs > li > a {
        border-radius: 0px;
        border: none;
        color: white;
        background-color: black;
    }
    #user .nav-tabs > li > a:hover {
        border-radius: 0px;
        border: none;
        color: white;
        background-color: #111111;
    }
    #user .nav-tabs > li.active > a {
        border-radius: 0px;
        border: none;
        color: black;
        background-color: white;
    }
    #user .nav-tabs > li.active > a:hover {
        border-radius: 0px;
        border: none;
        color: black;
        cursor: pointer;
    }
    #user .nav-tabs > li.active > a:focus {
        border-radius: 0px;
        border: none;
        color: black;
        background-color: white;
    }
    #user .tab-content {
        background-color: white;
    }
    #user #profile {
        min-height: 300px;
        padding-top: 50px; 
        color: black;
        font-size: 20px;
        text-align: center;
        margin-bottom: 20px;
    }
    #user #history {
        background-color: white;
        font-size: 15px;
        padding: 10px;
    }
</style>