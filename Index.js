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

        const content = window.innerWidth < 769
            ? 'SSBVIETNAM - CHUYÊN GIA HÀNG ĐẦU TRONG THẨM ĐỊNH GIÁ & TƯ VẤN TÀI CHÍNH'
            : window.innerWidth <= 1024
            ? 'SSBVIETNAM - CHUYÊN GIA HÀNG ĐẦU TRONG THẨM ĐỊNH GIÁ & TƯ VẤN TÀI CHÍNH'
            : 'Giải pháp định giá toàn diện cho doanh nghiệp của bạn';
        changeElement.innerHTML = content;
    };

    // Quản lý carousel testimonials
    const manageCarouselTestimonials = () => {
        const slideTransitionDuration = 1000; // Thời gian chuyển slide (1 giây)
        const carouselElement = document.querySelector('#testimonialCarousel');
        if (!carouselElement) return;

        const prevButton = carouselElement.querySelector('.carousel-control-prev');
        const nextButton = carouselElement.querySelector('.carousel-control-next');

        const handleCarouselClick = (direction) => {
            console.log(`Chuyển slide ${direction}`);
            setTimeout(() => carousel.cycle(), slideTransitionDuration);
        };

        prevButton?.addEventListener('click', () => handleCarouselClick('trước'));
        nextButton?.addEventListener('click', () => handleCarouselClick('tiếp theo'));

        carouselElement.addEventListener('slid.bs.carousel', (e) => {
            console.log('Slide hiện tại:', e.relatedTarget);
        });

        // Ngừng sự kiện cuộn của carousel trên thiết bị cảm ứng
        carouselElement.addEventListener('touchstart', (e) => e.preventDefault(), { passive: false });
    };

    // Gán sự kiện cho các phần tử
    const assignEvent = (selector, event, handler) => {
        document.querySelectorAll(selector).forEach(element => {
            element.addEventListener(event, handler);
        });
    };

    // Sự kiện resize và cập nhật nội dung
    window.addEventListener('resize', updateContentBasedOnWidth);
    updateContentBasedOnWidth();

    // Popup: Tìm hiểu thêm, Tuyển dụng và Tuyển dụng 2
    assignEvent('.btn', 'click', () => togglePopupVisibility('timhieuthem-popup', true));
    assignEvent('#popup-tuyendung', 'click', (e) => {
        e.preventDefault();
        togglePopupVisibility('tuyendung-popup', true);
    });
    assignEvent('#popup-tuyendung2', 'click', (e) => {
        e.preventDefault();
        togglePopupVisibility('tuyendung2-popup', true);
    });

    // Đóng tất cả các popup
    assignEvent('.popup-content .close-btn', 'click', () => {
        togglePopupVisibility('timhieuthem-popup', false);
        togglePopupVisibility('tuyendung-popup', false);
        togglePopupVisibility('tuyendung2-popup', false);
    });

    // Đóng popup khi nhấn ngoài overlay
    const closePopupOnClickOutside = (popupId) => {
        const popup = document.getElementById(popupId);
        popup?.addEventListener('click', (event) => {
            if (event.target === popup) togglePopupVisibility(popupId, false);
        });
    };

    closePopupOnClickOutside('tuyendung-popup');
    closePopupOnClickOutside('tuyendung2-popup');

    // Hộp khảo sát
    assignEvent('#showSurvey', 'click', () => togglePopupVisibility('boxStep3', true));
    assignEvent('#closeSurvey', 'click', () => togglePopupVisibility('boxStep3', false));

    // Popup "Nhận tư vấn miễn phí"
    assignEvent('.btn.px-4.py-3.fw-bold', 'click', () => togglePopupVisibility('nhantuvan-popup', true));
    assignEvent('#nhantuvan-popup .close-btn', 'click', () => togglePopupVisibility('nhantuvan-popup', false));

    // Kích hoạt chức năng carousel testimonials
    manageCarouselTestimonials();
    
    // Hiển thị popup khi nhấn vào "popup-call"
    assignEvent('#popup-call', 'click', () => togglePopupVisibility('popup-call-overlay', true));

    // Đóng popup "popup-call" khi nhấn vào nút "Đóng"
    assignEvent("[data-popup-close='popup-call-overlay']", 'click', () => togglePopupVisibility('popup-call-overlay', false));
});
