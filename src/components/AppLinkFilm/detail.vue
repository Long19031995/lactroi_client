<template>
    <div id="detail">
        <div class="container">
            <div class="panel panel-danger">
                <div class="panel-heading">
                    <p>Thông tin phim</p>
                </div>
                <div class="panel-body">
                    <div class="row">
                        <div class="col-sm-3">
                            <img src="img/50SacThaiDen.jpg" class="img-responsive">
                            <button class="btn btn-danger form-control">Đến trang xem phim >></button>
                        </div>
                        <div class="col-sm-9">
                            <table class="table table-bordered table-responsive table-striped">
                                <tr>
                                    <td class="text-info">Tên phim</td>
                                    <td class="text-danger">50 sắc thái đen</td>
                                </tr>
                                <tr>
                                    <td class="text-info">Loại phim</td>
                                    <td class="text-danger">VIETSUB</td>
                                </tr>
                                <tr>
                                    <td class="text-info">Quốc gia</td>
                                    <td class="text-danger">Anh</td>
                                </tr>
                                <tr>
                                    <td class="text-info">Năm</td>
                                    <td class="text-danger">2017</td>
                                </tr>
                                <tr>
                                    <td class="text-info">Thời lượng</td>
                                    <td class="text-danger">120 phút</td>
                                </tr>
                                <tr>
                                    <td class="text-info">Chất lượng</td>
                                    <td class="text-danger">720p</td>
                                </tr>
                                <tr>
                                    <td class="text-info">Thể loại</td>
                                    <td class="text-danger">Phim khoa học viễn tưởng, Phim hành động phiêu lưu</td>
                                </tr>
                                <tr>
                                    <td class="text-info">IMDB</td>
                                    <td class="text-danger">6.00 (101 Lượt)</td>
                                </tr>
                                <tr>
                                    <td class="text-info">Lượng xem</td>
                                    <td class="text-danger">0</td>
                                </tr>
                                <tr>
                                    <td class="text-info">Diễn viên</td>
                                    <td class="text-danger">Bill Milner,Maisie Williams,Rory Kinnear</td>
                                </tr>
                                <tr>
                                    <td class="text-info">Nguồn</td>
                                    <td class="text-danger">HDVIET.COM</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <div class="panel panel-danger">
                <div class="panel-heading">
                    <p>Nội dung phim</p>
                </div>
                <div class="panel-body">
                    <p class="text-danger">Là phần tiếp theo của bom tấn từng làm mưa làm gió phòng vé 2013, câu chuyện bắt đầu sau khi Đường Tăng (Ngô Diệc Phàm) thu phục được Tôn Ngộ Không (Lâm Canh Tân). Cùng 2 đồ đệ khác là Trư Bát Giới (Dương Nhất Huy) và Sa Tăng (Mengke Bateer), nhóm thầy trò lên đường sang Tây Thiên thỉnh kinh.Tuy nhiên bản chất yêu quái vẫn chưa mất đi khiến của 3 đồ đệ chưa hoàn toàn phục tùng sư phụ. Ngược lại Đường Tăng vẫn tiếc nuối mối tình dang dở với Đoạn tiểu thư (Thư Kỳ) và chưa quên được đại đồ đệ của mình đã giết chết nàng. 4 thầy trò ngoài mặt biểu hiện rất hài hòa nhưng kỳ thực vẫn âm thầm đối kháng lẫn nhau.Mâu thuẫn tăng cao khi họ gặp nàng ca nữ xinh đẹp Tiểu Thiện (Lâm Doãn). Tôn Ngộ Không cho rằng nàng là yêu tinh và muốn trừ khử còn Đường Tăng lại cảm mến vì nàng gợi nhớ đến người tình cũ.</p>
                </div>
            </div>	
            <div class="panel panel-danger">
                <div class="panel-heading">
                    <p>Link die không sao chọn nguồn khác</p>
                </div>
            </div>		
        </div>        
    </div>
</template>

<script>
    export default {
        name: 'detail'
    }
</script>

<style>
    #detail .panel {
        border-radius: 0px;
    }
    #detail .panel .panel-heading p {
        font-size: 25px;
        font-weight: bold;
        text-align: center;
    }
    #detail .panel .panel-body {
        font-size: 18px;
        font-weight: bold;
    }
    #detail .panel .panel-body .btn {
        height: 60px;
        border-radius: 0px;
        font-size: 20px;
        padding: 10px;
    }
</style>