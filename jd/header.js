document.getElementById('shared-header-container').innerHTML = `
    <!-- Header / Navigation Bar -->
    <header class="bg-white sticky top-0 z-50 border-b border-gray-100 shadow-sm">
        <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between items-center h-20">
                
                <!-- Logo -->
                <a href="https://tuyendung.shinevisioncenter.com" class="flex items-center gap-2.5">
                    <img src="../../assets/logoshine.png" alt="ShineVision Logo" class="h-10 w-auto object-contain" onerror="this.onerror=null; this.src='https://placehold.co/180x50/0d5c3a/ffffff?text=ShineVision';">
                </a>

                <!-- Navigation Links -->
                <nav class="hidden md:flex space-x-10 text-base font-medium text-gray-700">
                    <a href="https://shinevisioncenter.com" target="_blank" class="hover:text-brand-600 transition-colors">Trang Công ty</a>
                    <a href="../../index.html#jobs" class="hover:text-brand-600 transition-colors">Vị trí tuyển dụng</a>
                    <a href="../../index.html#culture" class="hover:text-brand-600 transition-colors">Văn hóa</a>
                </nav>

                <!-- CTA Button -->
                <div class="hidden md:flex items-center">
                    <a href="#apply-info" class="bg-brand-600 hover:bg-brand-700 text-white font-medium px-6 py-2.5 rounded-xl shadow-sm transition-all duration-200">
                        Ứng tuyển ngay
                    </a>
                </div>

                <!-- Mobile Menu Button -->
                <div class="md:hidden flex items-center">
                    <button id="mobile-menu-btn" class="text-gray-600 hover:text-gray-900 focus:outline-none p-2">
                        <i class="fa-solid fa-bars text-2xl"></i>
                    </button>
                </div>
            </div>
        </div>

        <!-- Mobile Dropdown -->
        <div id="mobile-menu" class="hidden md:hidden bg-white border-b border-gray-200 px-4 pt-2 pb-4 space-y-3">
            <a href="https://shinevisioncenter.com" target="_blank" class="block py-2 text-gray-700 font-medium hover:text-brand-600">Về chúng tôi</a>
            <a href="index.html#jobs" class="block py-2 text-gray-700 font-medium hover:text-brand-600">Vị trí tuyển dụng</a>
            <a href="index.html#culture" class="block py-2 text-gray-700 font-medium hover:text-brand-600">Văn hóa</a>
            <a href="#apply-info" class="block text-center bg-brand-600 text-white font-medium py-2.5 rounded-xl mt-2">Ứng tuyển ngay</a>
        </div>
    </header>
`;

// Xử lý sự kiện mở/đóng menu mobile sau khi header được load vào DOM
setTimeout(() => {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }
}, 100);