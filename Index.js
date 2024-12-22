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
});
