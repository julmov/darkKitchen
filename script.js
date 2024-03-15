const dishesCollection = [
  {
    name: "BLACK Pearl",
    price: "47.49€",
    compositionOfDish: [
      "belgian farm foie gras",
      "black caviar",
      "secret signature sauce",
      "smoked eel",
      "fresh mango",
      "avocado",
      "shrimp in tempura",
      "cream cheese",
    ],
    picture: "images/YGgDBxI-dwDJyCH-JrCGhZP.jpeg",
  },
  {
    name: "Barbie roll",
    price: "11.87€",
    compositionOfDish: [
      "salmon",
      "tuna",
      "shrimp",
      "Philadelphia cheese",
      "Japanese mayonnaise",
      "food coloring",
    ],
    picture: "images/kyhPlrf-zsAcpee-WdRhrMA.jpeg",
  },
  {
    name: "Green Dragon",
    price: "11.16€",
    compositionOfDish: [
      "tempura shrimp",
      "avocado",
      "Tobiko caviar",
      "Japanese mayonnaise",
      "rice",
      "nori",
      "sesame",
    ],
    picture: "images/qyrcZGG-NvKdEiC-IlHbvrV.jpeg",
  },
  {
    name: "Gold Dragon",
    price: "14.25€",
    compositionOfDish: [
      "eel",
      "salmon",
      "tempura shrimp",
      "Tobiko caviar",
      "Unagi sauce",
      "cucumber",
      "Japanese mayonnaise",
      "rice",
      "nori",
      "sesame",
    ],
    picture: "images/gold.jpeg",
  },
  {
    name: "Roll Paradise",
    price: "12.35€",
    compositionOfDish: [
      "salmon",
      "Shrimp",
      "Philadelphia cheese",
      "Tobiko caviar",
      "Salmon caviar",
      "avocado",
      "radish",
      "nori",
    ],
    picture: "images/paradise.jpeg",
    link: "https://www.youtube.com/watch?v=t-775JyzDTk",
  },
  {
    name: "Havana Roll",
    price: "11.87€",
    compositionOfDish: [
      "salmon",
      "tuna",
      "avocado",
      "mango",
      "Tobiko caviar",
      "Ponzu-orange sauce",
      "Miso-Yuzu sauce",
      "daikon",
      "nori",
    ],
    picture: "images/havana.jpeg",
    link: "https://www.youtube.com/watch?v=1sMrtt7sAR8",
  },
  {
    name: "Cheese Roll",
    price: "9.5€",
    compositionOfDish: [
      "salmon",
      "cheddar cheese",
      "Japanese omelet",
      "unagi sauce",
      "sesame",
      "arugula",
    ],
    picture: "images/cheese.jpeg",
    link: "https://www.youtube.com/watch?v=4w1xZA7pX2c",
  },
  {
    name: "Ocean Roll",
    price: "10.92€",
    compositionOfDish: [
      "tuna",
      "salmon",
      "tiger shrimp",
      "Tobiko caviar",
      "avocado",
      "daikon",
      "nori",
      "ginger",
    ],
    picture: "images/ocean.jpeg",
    link: "https://www.youtube.com/watch?v=89UV8vmWXlY",
  },
  {
    name: "Red Dragon",
    price: "13.53€",
    compositionOfDish: [
      "tuna",
      "tempura shrimp",
      "avocado",
      "mango-truffle sauce",
      "Japanese mayonnaise",
      "Tobiko caviar",
      "kumquat",
      "rice",
      "mame-nori",
      "sesame",
    ],
    picture: "images/red dr.jpeg",
    link: "https://www.youtube.com/watch?v=reP8VFF3KHU&t=3s",
  },
];
const topContainer = document.createElement("div");
topContainer.id = "topContainer";
document.body.appendChild(topContainer);

const logo = document.createElement("div");
logo.id = "logo";
document.body.insertBefore(logo, document.body.firstChild);

const heading = document.createElement("h1");
heading.textContent = "Crazy Kitchen";
topContainer.appendChild(heading);

const myIcons = document.createElement("div");
topContainer.appendChild(myIcons);

const shopIcon = document.createElement("i");
shopIcon.className = "fa fa-shopping-cart";
shopIcon.style.fontSize = "36px"; // Set the font size here
shopIcon.addEventListener("click", toggleDropdown); // Add this line to connect the click event
myIcons.appendChild(shopIcon);

const dropdownMenu = document.createElement("div");
dropdownMenu.id = "dropdownMenu";
dropdownMenu.style.display = "none"; // Hide dropdown initially
dropdownMenu.style.position = "absolute";
dropdownMenu.style.top = "50px"; // Adjust top position according to your layout
dropdownMenu.style.right = "40px"; // Adjust right position according to your layout
dropdownMenu.style.background = "white"; // Set background color
dropdownMenu.style.padding = "10px"; // Add padding for better appearance
dropdownMenu.style.border = "1px solid #ccc"; // Add border for better appearance
document.body.appendChild(dropdownMenu);

const cartHeading = document.createElement("h1");
cartHeading.textContent = "Your Cart";
dropdownMenu.appendChild(cartHeading);

const totalParagraph = document.createElement("p");
totalParagraph.style.paddingBottom = "20px";
totalParagraph.style.color = "black";
totalParagraph.textContent = "Total: $0.00";
dropdownMenu.appendChild(totalParagraph);

const closeButton = document.createElement("button");
closeButton.textContent = "Close";
closeButton.style.backgroundColor = "Black";
closeButton.style.color = "White";
closeButton.style.marginRight = "20px";
closeButton.style.marginTop = "20px";
closeButton.addEventListener("click", closeDropdown);
dropdownMenu.appendChild(closeButton);

const checkoutButton = document.createElement("button");
checkoutButton.textContent = "Checkout";
checkoutButton.style.backgroundColor = "Black";
checkoutButton.style.color = "White";
// Add event listener for checkout button here if needed
dropdownMenu.appendChild(checkoutButton);

function toggleDropdown() {
  if (dropdownMenu.style.display === "none") {
    dropdownMenu.style.display = "block";
  } else {
    dropdownMenu.style.display = "none";
  }
}

function closeDropdown() {
  dropdownMenu.style.display = "none";
}

const sunIcon = document.createElement("i");
sunIcon.id = "sunIcon";
sunIcon.className = "fa fa-sun-o"; // Font Awesome 6 class name for the sun icon
sunIcon.style.fontSize = "36px"; // Set the font size here
myIcons.appendChild(sunIcon);

document.body.insertBefore(
  topContainer,
  document.getElementById("dishesContainer")
);

document.addEventListener("DOMContentLoaded", function () {
  const dishesContainer = document.getElementById("dishesContainer");

  dishesCollection.forEach((dishes) => {
    const card = document.createElement("div");
    card.classList.add("card");

    const picture = document.createElement("img");
    picture.src = dishes.picture;
    picture.alt = dishes.name;
    card.appendChild(picture);

    const details = document.createElement("div");
    details.classList.add("details");

    const title = document.createElement("h2");
    title.textContent = dishes.name;
    details.appendChild(title);

    const price = document.createElement("p");
    price.textContent = dishes.price;
    price.style.color = "#D4AF37";
    price.classList.add("price"); // Add a class for easier targeting
    details.appendChild(price);

    const compositionOfDish = document.createElement("p");
    compositionOfDish.id = "compositionOfDish";
    compositionOfDish.textContent = Array.isArray(dishes.compositionOfDish)
      ? dishes.compositionOfDish.join(", ")
      : dishes.compositionOfDish; // Display only the composition of dish value
    details.appendChild(compositionOfDish);

    const addButton = document.createElement("button");
    addButton.textContent = "+ Add to cart";
    addButton.id = "addButton";
    addButton.addEventListener("click", () => {
      // Implement functionality for the add button
      console.log("Add button clicked for", dishes.name);
    });
    details.appendChild(addButton);

    addButton.addEventListener("click", () => {
      addItemToCart(dishes.name, dishes.price);
      console.log("Add button clicked for", dishes.name);
    });

    function addItemToCart(name, price) {
      const cartItem = document.createElement("p");
      cartItem.textContent = `${name} - ${price}`;
      dropdownMenu.insertBefore(cartItem, totalParagraph.nextSibling);

      // Update total price
      const totalPrice = parseFloat(
        totalParagraph.textContent.replace("Total: $", "")
      );
      const newPrice = parseFloat(price.replace("€", "").replace(",", "."));
      totalParagraph.textContent = `Total: $${(totalPrice + newPrice).toFixed(
        2
      )}`;
    }

    card.appendChild(details); // Append the details element to the card
    dishesContainer.appendChild(card);
  });

  const sunIcon = document.getElementById("sunIcon");
  sunIcon.addEventListener("click", toggleLightMode); // Call toggleLightMode when the sun icon is clicked

  function toggleLightMode() {
    document.body.classList.toggle("light-mode");

    // Change price color in light mode
    const prices = document.querySelectorAll(".price");
    prices.forEach((price) => {
      if (document.body.classList.contains("light-mode")) {
        price.style.color = "#503500";
      } else {
        price.style.color = "#D4AF37"; // Set price color to default in dark mode
      }
    });
  }
});
