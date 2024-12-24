document.addEventListener('DOMContentLoaded', () => {
    // Hàm hiển thị/ẩn popup
    const togglePopupVisibility = (popupId, show) => {
        const popup = document.getElementById(popupId);
        if (popup) popup.style.display = show ? 'flex' : 'none';
    };

    // Cập nhật nội dung theo kích thước màn hình
    const updateContentBasedOnWidth = () => {
        const changeElement = document.querySelector('.change');
        if (!changeElement) return;
        const content = window.innerWidth < 740
            ? 'SSBVIETNAM - CHUYÊN GIA HÀNG ĐẦU TRONG THẨM ĐỊNH GIÁ & TƯ VẤN TÀI CHÍNH'
            : window.innerWidth <= 1023
            ? 'SSBVIETNAM - CHUYÊN GIA HÀNG ĐẦU TRONG THẨM ĐỊNH GIÁ & TƯ VẤN TÀI CHÍNH'
            : 'Giải pháp định giá toàn diện cho doanh nghiệp của bạn';
        changeElement.innerHTML = content;
    };

    // Quản lý carousel testimonials
    const manageCarouselTestimonials = () => {
        const carouselElement = document.querySelector('#testimonialCarousel');
        if (!carouselElement) return;

        const prevButton = carouselElement.querySelector('.carousel-control-prev');
        const nextButton = carouselElement.querySelector('.carousel-control-next');

        // Ngừng sự kiện cuộn của carousel
        carouselElement.addEventListener('touchstart', (e) => {
            e.preventDefault();
        }, { passive: false });

        // Gán sự kiện khi nhấn nút chuyển slide
        prevButton?.addEventListener('click', () => {
            console.log('Chuyển về slide trước');
        });

        nextButton?.addEventListener('click', () => {
            console.log('Chuyển tới slide tiếp theo');
        });

        // Cập nhật nội dung slide khi có sự kiện chuyển slide
        carouselElement.addEventListener('slid.bs.carousel', (e) => {
            console.log('Slide hiện tại:', e.relatedTarget);
        });
    };

    // Hàm gán sự kiện cho các phần tử
    const assignEvent = (selector, event, handler) => {
        const elements = document.querySelectorAll(selector);
        elements.forEach(element => element.addEventListener(event, handler));
    };

    // Sự kiện resize và cập nhật nội dung
    window.addEventListener('resize', updateContentBasedOnWidth);
    updateContentBasedOnWidth();

    // Popup "TÌM HIỂU THÊM" và "TUYỂN DỤNG"
    assignEvent('.btn', 'click', () => togglePopupVisibility('timhieuthem-popup', true));
    assignEvent('#popup-tuyendung', 'click', (e) => {
        e.preventDefault();
        togglePopupVisibility('tuyendung-popup', true);
    });

    // Đóng popup
    assignEvent('.popup-content .close-btn', 'click', () => {
        togglePopupVisibility('timhieuthem-popup', false);
        togglePopupVisibility('tuyendung-popup', false);
    });

    // Hộp khảo sát
    assignEvent('#showSurvey', 'click', () => togglePopupVisibility('boxStep3', true));
    assignEvent('#closeSurvey', 'click', () => togglePopupVisibility('boxStep3', false));

    // Popup "NHẬN TƯ VẤN MIỄN PHÍ"
    assignEvent('.btn.px-4.py-3.fw-bold', 'click', () => togglePopupVisibility('nhantuvan-popup', true));
    assignEvent('#nhantuvan-popup .close-btn', 'click', () => togglePopupVisibility('nhantuvan-popup', false));

    // Kích hoạt chức năng quản lý carousel
    manageCarouselTestimonials();
});
