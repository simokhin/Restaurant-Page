import restImage from "../img/1.jpg";

export function homePage() {
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
    para1.textContent = "At [Restaurant Name], we bring you an unforgettable dining experience, where flavors from around the world meet a cozy, inviting atmosphere. Our menu is crafted with the freshest ingredients, designed to satisfy your cravings, whether you're here for a light bite or a full-course meal.";
    
    const para2 = document.createElement("p");
    para2.textContent = "Come, indulge in great food, warm hospitality, and a relaxing";

    const para3 = document.createElement("p");
    para3.textContent = "Taste the difference at [Restaurant Name] today!";

    text.append(para1, para2, para3);
}
