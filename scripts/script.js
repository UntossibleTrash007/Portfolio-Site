console.log("hello world")

// script for the image gallery :)))

document.addEventListener("DOMContentLoaded",function(){
    const thumbnails = document.querySelectorAll(".thumbnail");
    const mainImage = document.querySelector(".display")

    thumbnails.forEach(thumbnail =>{
        thumbnail.addEventListener("click", function (){
            const imageUrl = thumbnail.getAttribute("src");
            mainImage.setAttribute("src", imageUrl);
        })
    });
});