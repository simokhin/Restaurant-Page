import restImage from "../img/2.jpg";

export function aboutPage() {
    const content = document.querySelector(".content");

    const section1 = document.createElement("div");
    section1.classList.add("section-1");

    content.appendChild(section1);

    const imageSec = document.createElement("div");
    imageSec.classList.add("image");
    section1.appendChild(imageSec);

    const image = document.createElement("img");
    image.src = restImage;
    image.alt = "dish on white ceramic plate";
    imageSec.appendChild(image);

    const text = document.createElement("div");
    text.classList.add("text");
    section1.appendChild(text);

    const para1 = document.createElement("p");
    para1.textContent = "At [Restaurant Name], we believe that dining is more than just a meal—it’s an experience. With a passion for fresh, locally sourced ingredients and a menu crafted to delight every palate, we aim to offer our guests both comfort and elegance. Whether you’re here for a casual dinner or a special occasion, we’re dedicated to providing warm hospitality and unforgettable flavors in a beautiful setting.";
    
    const para2 = document.createElement("p");
    para2.textContent = "Join us and experience the taste of true culinary artistry.";
    para2.style.fontWeight = "bold";

    text.append(para1, para2);
}