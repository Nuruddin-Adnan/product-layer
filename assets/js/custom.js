"use strict";

const productImgBox = document.querySelector(".product-img-box");
const productImgItems = document.querySelector(".product-img-box").children;

// product-information 
const productInformations = document.querySelector(".product-information").children;
const indicatorFull = document.querySelectorAll(".indicator-full");



[...productImgItems].forEach((productItem, index) => {
    productItem.addEventListener('click', function(){
        this.classList.add('active');
        productImgBox.classList.add('active');

        [...productImgItems].forEach((productItem) => {
            if (productItem.classList.contains("active")) {
                productItem.classList.remove("active");
            }
        });
        this.classList.add("active");

        // product information arrow button active
        [...indicatorFull].forEach((indicatorItem) => {
            if (indicatorItem.classList.contains("active")) {
                indicatorItem.classList.remove("active");
            }
        });
        this.children[1].classList.add("active");

        // product information active/ deactive
        [...productInformations].forEach((productInformationItem) => {
            if (!productInformationItem.classList.contains("d-none")) {
                productInformationItem.classList.add("d-none");
            }
        });
        [...productInformations][index].classList.add('d-block');
        [...productInformations][index].classList.remove('d-none');
        
    });

});