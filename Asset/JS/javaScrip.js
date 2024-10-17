// Phần Slider Hình Ảnh
let currentIndex = 0; // Chỉ số hình ảnh hiện tại
const images = document.querySelectorAll('.banner img'); // Lấy tất cả hình ảnh trong banner
const totalImages = images.length; // Tổng số hình ảnh

function showNextImage() {
    // Xóa class 'active' khỏi hình ảnh hiện tại
    images[currentIndex].classList.remove('active');

    // Chuyển sang hình ảnh tiếp theo
    currentIndex = (currentIndex + 1) % totalImages;

    // Đặt class 'active' cho hình ảnh mới
    images[currentIndex].classList.add('active');
}

// Đổi hình mỗi 3 giây
setInterval(showNextImage, 3000);
 // Đổi ảnh mỗi 3 giây
 setInterval(showNextImage, 3000);

 // Phần Hiển Thị Sản Phẩm
 let productIndex = 0; // Chỉ số sản phẩm hiện tại
 const products = document.querySelectorAll('.product');
 const productsPerPage = 3; // Số sản phẩm hiển thị mỗi lần

 function showProducts() {
     products.forEach((product, index) => {
         product.style.display = (index >= productIndex && index < productIndex + productsPerPage) ? 'block' : 'none';
     });
 }

 function changeProducts(direction) {
     productIndex += direction * productsPerPage;
     if (productIndex < 0) {
         productIndex = 0;
     }
     if (productIndex >= products.length) {
         productIndex = Math.max(0, products.length - productsPerPage);
     }
     showProducts();
 }

 // Hiển thị sản phẩm lần đầu tiên
 showProducts();