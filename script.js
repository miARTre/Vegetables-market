
let allTotal = 0;

function addToCart(element) {

    // console.log(element.previousElementSibling);

    // let input = element.previousElementSibling; 

    // console.log(input.value);

    let mainElem = element.closest(".single-item");

    let price = mainElem.querySelector(".price").innerText;

    let name = mainElem.querySelector("h3").innerText;

    let quantity = mainElem.querySelector("input").value;

    let cartItems = document.querySelector(".cart-items");

    // console.log(typeof(quantity)); // string

    if (parseInt(quantity) > 0) {

        // cartItems.innerHTML += " Add " + name;

        // let total = price * quantity;
                                                // ==> NaN
        // console.log(total);

        price = price.substring(1);

        price = parseInt(price);     // ==> number

        let total = price * parseInt(quantity);

        console.log(total);

        // cartItems.innerHTML += `Product : ${name} -
        //                         Price : ${price} -
        //                         Quantity : ${quantity} - 
        //                         Total : ${total}<br>`;

        allTotal += total;

        cartItems.innerHTML += `<div class = "cart-single-item">
        
                                    <h3>${name}</h3>
                                    <p> $${price} X ${quantity} = $<span>${total}</span></p>
                                    <button onclick = "removeFromCart(this)" class = "remove-item">Remove</button>

                                </div>`

        document.querySelector(".total").innerText = `Total : $${allTotal}`;

        // console.log("It is greater than 0");

        element.innerText = " Added ";
        element.setAttribute("disabled", "true");

    } else {

        alert("Choose a quantity");

    }

    

    // console.log(mainElem);

    // console.log(price);
    // console.log(name);
    
    // console.log(quantity);

}

function removeFromCart(element) {

    // console.log("removing");

    let mainElem = element.closest(".cart-single-item");

    let price = mainElem.querySelector("p span").innerText;

    let name = mainElem.querySelector("h3").innerText;
    
    let vegetables = document.querySelectorAll(".single-item");

    // console.log(vegetables);

    price = parseInt(price);

    allTotal -= price;

    document.querySelector(".total").innerText = `Total : $${allTotal}`;

    mainElem.remove();

    vegetables.forEach(function (vege) {

        let itemName =  vege.querySelector(".si-content h3").innerText;

        if(itemName === name ) {

            vege.querySelector(".actions input").value = 0;
            vege.querySelector(".actions button").removeAttribute("disabled");
            vege.querySelector(".actions button").innerText = "Add ";

        }

        // console.log(vege);

    });



    // mainElem.remove();

    // console.log(price);

    // allTotal.remove(); ==> Ne radi na ovaj nacin

}