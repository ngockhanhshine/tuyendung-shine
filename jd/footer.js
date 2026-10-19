document.getElementById('shared-footer-container').innerHTML = `
    <footer id="about" class="bg-white border-t border-gray-100 pt-12 pb-6 mt-12">
        <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div class="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 pb-8 border-b border-gray-100">
                
                <!-- Logo & Tagline -->
                <div class="space-y-2">
                    <a href="https://tuyendung.shinevisioncenter.com" class="flex items-center gap-2">
                        <img src="../../assets/logoshine.png" alt="ShineVision Logo" class="h-8 w-auto object-contain" onerror="this.onerror=null; this.src='https://placehold.co/150x40/0d5c3a/ffffff?text=ShineVision';">
                    </a>
                    <p class="text-xs text-gray-500 italic">
                        Với mắt sáng, vì những hành trình trọn vẹn hơn.
                    </p>
                </div>

                <!-- Nav Links -->
                <nav class="flex flex-wrap gap-6 sm:gap-8 text-sm text-gray-600 font-medium">
                    <a href="https://shinevisioncenter.com" target="_blank" class="hover:text-brand-600 transition-colors">Về chúng tôi</a>
                    <a href="../../index.html#jobs" class="hover:text-brand-600 transition-colors">Vị trí tuyển dụng</a>
                    <a href="../../index.html#culture" class="hover:text-brand-600 transition-colors">Văn hóa</a>
                    <a href="#" class="hover:text-brand-600 transition-colors">Liên hệ</a>
                </nav>

                <!-- Social Icons -->
                <div class="flex items-center gap-3 text-gray-700">
                    <a href="https://www.facebook.com/makeyoureyesShine" target="_blank" class="w-9 h-9 rounded-full bg-gray-50 hover:bg-brand-100 hover:text-brand-600 flex items-center justify-center transition-all" title="Facebook">
                        <i class="fa-brands fa-facebook-f text-sm"></i>
                    </a>
                    <a href="https://www.youtube.com/@Kh%C3%B4iph%E1%BB%A5cth%E1%BB%8Bl%E1%BB%B1cShine" target="_blank" class="w-9 h-9 rounded-full bg-gray-50 hover:bg-brand-100 hover:text-brand-600 flex items-center justify-center transition-all" title="YouTube">
                        <i class="fa-brands fa-youtube text-sm"></i>
                    </a>
                    <a href="https://www.tiktok.com/@khoiphucthilucshine" target="_blank" class="w-9 h-9 rounded-full bg-gray-50 hover:bg-brand-100 hover:text-brand-600 flex items-center justify-center transition-all" title="TikTok">
                        <i class="fa-brands fa-tiktok text-sm"></i>
                    </a>
                </div>

            </div>

            <!-- Bottom Copyright Line -->
            <div class="pt-6 flex flex-col sm:flex-row justify-between items-center text-xs text-gray-500 gap-4">
                <p>© 2014-2026 ShineVisionCenter. All rights reserved.</p>
                <div class="flex gap-6">
                    <a href="#" class="hover:underline">Chính sách bảo mật</a>
                    <a href="#" class="hover:underline">Điều khoản sử dụng</a>
                </div>
            </div>

        </div>
    </footer>
`;