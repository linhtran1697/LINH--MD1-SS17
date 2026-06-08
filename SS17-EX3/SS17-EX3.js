// Khi click vào nút Open Modal, một hộp chứa dòng text “Some text in the Modal” sẽ được hiển thị ra và màn hình xung quanh phải tối đi
// Khi click vào nút “x” hoặc màn hình tối xung quanh, Modal ở trên phải ẩn đi

 let btnOpen = document.querySelector('.btn-open');
 let btnClose = document.querySelector('.btn-close');
 let overlay = document.querySelector('.overlay');
 btnOpen.onclick = function () {
    overlay.style.display = 'block';
 };
 btnClose.onclick = function () {
    overlay.style.display = 'none';
 };