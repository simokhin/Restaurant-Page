export function menuPage() {
    const content = document.querySelector(".content");

    const menuSec = document.createElement("div");
    menuSec.classList.add("menuSec");
    content.append(menuSec);

    const h1 = document.createElement("h1");
    h1.textContent = "Menu";
    menuSec.appendChild(h1);

    const h2 = document.createElement("h2");
    h2.textContent = "Appetizers";
    menuSec.appendChild(h2);

    // ul1

    const ul1 = document.createElement("ul");
    menuSec.appendChild(ul1);

    const li1 = document.createElement("li");
    li1.textContent = "Bruschetta – Grilled bread topped with fresh tomatoes, basil, and balsamic drizzle. $8";

    const li2 = document.createElement("li");
    li2.textContent = "Creamy Mushroom Soup – Wild mushrooms, cream, and fresh herbs. $9";

    const li3 = document.createElement("li");
    li3.textContent = "Crispy Calamari – Lightly fried and served with lemon aioli. $12";

    ul1.append(li1, li2, li3);

    // ul2 

    const h22 = document.createElement("h2");
    h22.textContent = "Main Courses";
    menuSec.appendChild(h22);

    const ul2 = document.createElement("ul");
    menuSec.appendChild(ul2);

    const li4 = document.createElement("li");
    li4.textContent = "Grilled Salmon – Atlantic salmon with lemon butter sauce, served with seasonal vegetables. $24";

    const li5 = document.createElement("li");
    li5.textContent = "Herb-Crusted Chicken – Free-range chicken breast with a parmesan crust, mashed potatoes, and a rosemary reduction. $22";

    const li6 = document.createElement("li");
    li6.textContent = "Vegetable Risotto – Arborio rice with roasted vegetables, finished with parmesan and truffle oil. $19";

    ul2.append(li4, li5, li6);

    // ul3

    const h23 = document.createElement("h2");
    h23.textContent = "Desserts";
    menuSec.appendChild(h23);

    const ul3 = document.createElement("ul");
    menuSec.appendChild(ul3);

    const li7 = document.createElement("li");
    li7.textContent = "Tiramisu – Classic Italian dessert with espresso-soaked ladyfingers and mascarpone cream. $8";

    const li8 = document.createElement("li");
    li8.textContent = "Chocolate Fondant – Warm molten chocolate cake with a scoop of vanilla ice cream. $9";

    ul3.append(li7, li8);

    // ul4

    const h24 = document.createElement("h2");
    h24.textContent = "Drinks";
    menuSec.appendChild(h24);

    const ul4 = document.createElement("ul");
    menuSec.appendChild(ul4);

    const li9 = document.createElement("li");
    li9.textContent = "House Red Wine – Glass: $8 | Bottle: $28";

    const li10 = document.createElement("li");
    li10.textContent = "Signature Lemonade – Freshly squeezed lemons with a touch of mint. $5";

    ul4.append(li9, li10);
}