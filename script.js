const reviews = [{
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est culpa animi qui labore ullam placeat inventore magni, provident vel cupiditate assumenda error exercitationem quas enim sed fugit officia voluptate. Laborum facilis commodi omnis labore! Eum quasi ex harum deserunt? Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, ut.",
    name: "Candice Johnson",
    image: "./img/img-1.jpg"
},
{
    review: " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam quos a impedit necessitatibus nostrum doloribus quae nemo dicta totam quia error ipsam cum esse eaque, deserunt ea hic cumque tenetur! Lorem ipsum dolor sit amet consectetur adipisicing elit. A error impedit aliquid ratione, nulla alias, illo dolores placeat incidunt dicta quidem recusandae nihil molestias ad in cupiditate magnam? Dicta, autem! ",
    name: "John Miller",
    image: "./img/img-2.jpg"
},
{
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum porro quo animi odit blanditiis nam consectetur fuga, unde a architecto laudantium quos. Earum perspiciatis distinctio numquam veritatis voluptate, odio dolore harum magnam. Tempora dolores cum magnam repellat quasi, consequuntur, explicabo laboriosam itaque at vel velit minima id eaque fuga in.",
    name: "Bill Morrison",
    image: "./img/img-3.jpg"
}]

//current slide
let i = 0;
//total slides
let j = reviews.length;

let testimonialContainer = document.getElementById("testimonial-container");
let nextBtn = document.getElementById("next");
let prevBtn = document.getElementById("prev");

nextBtn.addEventListener("click", () => {
    i = (j + i + 1) % j;
    displayTestimonial();
})

prevBtn.addEventListener("click", () => {
    i = (j + i - 1) % j;
    displayTestimonial();
})

let displayTestimonial = () => {
    testimonialContainer.innerHTML = `
    <p>${reviews[i].review}</p>
    <img src = ${reviews[i].image}>
    <h3>${reviews[i].name}</h3>
    `;
}
window.onload = displayTestimonial();