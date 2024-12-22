document.addEventListener('DOMContentLoaded', function() {
    const showSurveyButton = document.getElementById('showSurvey');
    const surveyBox = document.getElementById('boxStep3');
    const closeSurveyButton = document.getElementById('closeSurvey');

    // Kiểm tra nếu các phần tử tồn tại trước khi gán sự kiện
    if (showSurveyButton && surveyBox && closeSurveyButton) {
        // Thêm sự kiện click cho nút "showSurvey"
        showSurveyButton.addEventListener('click', function() {
            const currentDisplay = window.getComputedStyle(surveyBox).display;
            if (currentDisplay === 'none') {
                surveyBox.style.display = 'block';  // Hiển thị
            } else {
                surveyBox.style.display = 'none';  // Ẩn
            }
        });

        // Thêm sự kiện click cho nút tắt "closeSurvey"
        closeSurveyButton.addEventListener('click', function() {
            surveyBox.style.display = 'none';  // Ẩn surveyBox khi nhấn nút tắt
        });
    }

    // Thêm sự kiện click cho các nút có class '.btn'
    const btnElements = document.querySelectorAll('.btn');
    btnElements.forEach(function(btn) {
        btn.addEventListener('click', function() {
            // Hiển thị thông báo "Đang chờ cập nhật"
            alert("Đang chờ cập nhật");
        });
    });

    // Lắng nghe sự kiện thay đổi kích thước cửa sổ (resize)
    window.addEventListener('resize', function() {
        // Kiểm tra nếu kích thước cửa sổ nhỏ hơn 740px (màn hình di động)
        if (window.innerWidth < 740) {
            // Thay đổi nội dung của thẻ <h3>
            document.querySelector('.change').innerHTML = 'SSBVIETNAM - CHUYÊN GIA HÀNG ĐẦU TRONG THẨM ĐỊNH GIÁ & TƯ VẤN TÀI CHÍNH';
        if (window.innerWidth < 1023) {
            // Thay đổi nội dung của thẻ <h3>
            document.querySelector('.change').innerHTML = 'SSBVIETNAM - CHUYÊN GIA HÀNG ĐẦU TRONG THẨM ĐỊNH GIÁ & TƯ VẤN TÀI CHÍNH';
        } else {
            // Nếu kích thước cửa sổ lớn hơn 740px, giữ nguyên nội dung ban đầu
            document.querySelector('.change').innerHTML = 'Giải pháp định giá toàn diện cho doanh nghiệp của bạn';
        }
    });
});
