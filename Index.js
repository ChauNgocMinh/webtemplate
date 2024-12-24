// Hàm hiển thị popup "NHẬN TƯ VẤN MIỄN PHÍ"
function showTuVanPopup() {
    const popup = document.getElementById('nhantuvan-popup');
    if (popup) {
        popup.style.display = 'flex';
    }
}

// Hàm đóng popup "NHẬN TƯ VẤN MIỄN PHÍ"
function closeTuVanPopup() {
    const popup = document.getElementById('nhantuvan-popup');
    if (popup) {
        popup.style.display = 'none';
    }
}

// Hàm hiển thị popup "TÌM HIỂU THÊM"
function showPopup() {
    const popup = document.getElementById('timhieuthem-popup');
    if (popup) {
        popup.style.display = 'flex';
    }
}

// Hàm đóng popup "TÌM HIỂU THÊM"
function closePopup() {
    const popup = document.getElementById('timhieuthem-popup');
    if (popup) {
        popup.style.display = 'none';
    }
}

// Hàm cập nhật nội dung khi thay đổi kích thước cửa sổ
const updateContentBasedOnWidth = () => {
    const changeElement = document.querySelector('.change');
    if (!changeElement) return;
    if (window.innerWidth < 740) {
        changeElement.innerHTML = 'SSBVIETNAM - CHUYÊN GIA HÀNG ĐẦU TRONG THẨM ĐỊNH GIÁ & TƯ VẤN TÀI CHÍNH';
    } else if (window.innerWidth <= 1023) {
        changeElement.innerHTML = 'SSBVIETNAM - CHUYÊN GIA HÀNG ĐẦU TRONG THẨM ĐỊNH GIÁ & TƯ VẤN TÀI CHÍNH';
    } else {
        changeElement.innerHTML = 'Giải pháp định giá toàn diện cho doanh nghiệp của bạn';
    }
};

document.addEventListener('DOMContentLoaded', function () {
    // Lấy các phần tử HTML cần sử dụng
    const changeElement = document.querySelector('.change');
    const showSurveyButton = document.getElementById('showSurvey');
    const surveyBox = document.getElementById('boxStep3');
    const closeSurveyButton = document.getElementById('closeSurvey');
    const btnFindOutMore = document.querySelector('.btn');
    const recruitmentLink = document.getElementById('popup-tuyendung');
    const maintenancePopup = document.getElementById('timhieuthem-popup');
    const recruitmentPopup = document.getElementById('tuyendung-popup');
    const closePopupButtons = document.querySelectorAll('.popup-content .close-btn');
    const tuVanButton = document.querySelector('.btn.px-4.py-3.fw-bold');
    const tuVanCloseButton = document.querySelector('#nhantuvan-popup .close-btn');
    
    // Cập nhật nội dung khi tải trang và khi thay đổi kích thước cửa sổ
    window.addEventListener('resize', updateContentBasedOnWidth);
    updateContentBasedOnWidth();

    // Hiển thị hoặc ẩn các popup
    const togglePopupVisibility = (popup, show) => {
        if (popup) {
            popup.style.display = show ? 'flex' : 'none';
        }
    };

    // Hiển thị popup bảo trì khi nhấn vào nút "TÌM HIỂU THÊM"
    if (btnFindOutMore) {
        btnFindOutMore.addEventListener('click', () => togglePopupVisibility(maintenancePopup, true));
    }

    // Hiển thị popup tuyển dụng khi nhấn vào mục "TUYỂN DỤNG"
    if (recruitmentLink) {
        recruitmentLink.addEventListener('click', (event) => {
            event.preventDefault(); // Ngăn không chuyển trang
            togglePopupVisibility(recruitmentPopup, true);
        });
    }

    // Đóng popup khi nhấn vào bất kỳ nút "Đóng"
    closePopupButtons.forEach(button => {
        button.addEventListener('click', () => {
            togglePopupVisibility(maintenancePopup, false);
            togglePopupVisibility(recruitmentPopup, false);
        });
    });

    // Sự kiện hiển thị hoặc ẩn hộp khảo sát
    if (showSurveyButton && surveyBox && closeSurveyButton) {
        showSurveyButton.addEventListener('click', () => surveyBox.style.display = 'block');
        closeSurveyButton.addEventListener('click', () => surveyBox.style.display = 'none');
    }

    // Hiển thị popup "NHẬN TƯ VẤN MIỄN PHÍ"
    if (tuVanButton) {
        tuVanButton.addEventListener('click', showTuVanPopup);
    }

    // Đóng popup "NHẬN TƯ VẤN MIỄN PHÍ"
    if (tuVanCloseButton) {
        tuVanCloseButton.addEventListener('click', closeTuVanPopup);
    }
    
    // Thêm sự kiện cho nút "TÌM HIỂU THÊM"
    const btnFindOutMorePopup = document.querySelector('.btn-findout-more');
    if (btnFindOutMorePopup) {
        btnFindOutMorePopup.addEventListener('click', showPopup);
    }

    // Thêm sự kiện cho nút "Đóng" của popup "TÌM HIỂU THÊM"
    const closeFindOutMorePopup = document.querySelector('#timhieuthem-popup .close-btn');
    if (closeFindOutMorePopup) {
        closeFindOutMorePopup.addEventListener('click', closePopup);
    }
});
