
//Task 1 — Product API Operations

fetch("https://fakestoreapi.com/products")
    .then(response => response.json())
    .then(products => {

        // 1. Display all products
        console.log("All Products:");

        products.forEach(product => {
            console.log(
                `Title: ${product.title} | Price: $${product.price} | Category: ${product.category}`
            );
        });


        // 2. map() - Create a new array with only title and price
        const productDetails = products.map(product => ({
            title: product.title,
            price: product.price
        }));

        console.log("Product Details:");
        console.log(productDetails);


        // 3. filter() - Products with price greater than $100
        const expensiveProducts = products.filter(product => product.price > 100);

        console.log("Products above $100:");
        console.log(expensiveProducts);


        // 4. find() - First product in electronics category
        const firstElectronicProduct = products.find(
            product => product.category === "electronics"
        );

        console.log("First Electronics Product:");
        console.log(firstElectronicProduct);


        // 5. reduce() - Calculate total price
        const totalPrice = products.reduce(
            (total, product) => total + product.price,
            0
        );

        console.log("Total Price: $" + totalPrice.toFixed(2));


        // 6. sort() - Highest price to lowest
        const sortedProducts = [...products].sort(
            (a, b) => b.price - a.price
        );

        console.log("Products sorted by price (Highest to Lowest):");
        console.log(sortedProducts);

    })

    // 7. Handle API errors
    .catch(error => {
        console.log("Error fetching products:", error);
    })

    // 8. Completion message
    .finally(() => {
        console.log("Product fetching process completed.");
    });


//Task 2 — Product Category Dashboard
    
fetch("https://fakestoreapi.com/products")
    .then(response => response.json())
    .then(products => {

        // Function to count products by category
        function countCategory(category) {
            return products.filter(product => product.category === category).length;
        }

        // 1. map() - Create an array containing only prices
        const prices = products.map(product => product.price);

        // 2. filter() - Filter products by category
        const electronics = products.filter(
            product => product.category === "electronics"
        );

        const jewelery = products.filter(
            product => product.category === "jewelery"
        );

        const mensClothing = products.filter(
            product => product.category === "men's clothing"
        );

        const womensClothing = products.filter(
            product => product.category === "women's clothing"
        );

        // 3. reduce() - Calculate total price
        const totalPrice = prices.reduce(
            (total, price) => total + price,
            0
        );

        // Calculate average price
        const averagePrice = totalPrice / products.length;

        // 4. sort() - Sort prices from highest to lowest
        const sortedPrices = [...prices].sort(
            (a, b) => b - a
        );

        const highestPrice = sortedPrices[0];
        const lowestPrice = sortedPrices[sortedPrices.length - 1];

        // 5. Display dashboard using template literals
        console.log(`


Total Products: ${products.length}

Electronics: ${electronics.length}
Jewelery: ${jewelery.length}
Men's Clothing: ${mensClothing.length}
Women's Clothing: ${womensClothing.length}

Highest Price: $${highestPrice.toFixed(2)}
Lowest Price: $${lowestPrice.toFixed(2)}
Average Price: $${averagePrice.toFixed(2)}
        `);
    })

    // Handle API errors
    .catch(error => {
        console.log(`Error fetching products: ${error}`);
    });


//Task 3 — User & Post API

// 1. Fetch Users
fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(users => {

        console.log("===== USER INFORMATION =====");


        // 2. Display all user names
        const userNames = users.map(user => user.name);

        console.log("All User Names:");
        console.log(userNames);


        // 3. Display user name + email
        console.log("\nUser Name + Email:");

        users.forEach(user => {
            console.log(`${user.name} - ${user.email}`);
        });


        // 4. Find user with ID 5
        const userFive = users.find(user => user.id === 5);

        console.log("\nUser with ID 5:");
        console.log(userFive);


        // 5. Filter users from a particular city
        
        const cityUsers = users.filter(
            user => user.address.city === "South Christy"
        );

        console.log("\nUsers from South Christy:");
        console.log(cityUsers);


        
        // 6. Fetch Posts
        

        return fetch("https://jsonplaceholder.typicode.com/posts");
    })

    .then(response => response.json())
    .then(posts => {

        


        // 7. Display posts written by user ID 1
        const userOnePosts = posts.filter(
            post => post.userId === 1
        );

        console.log("\nPosts written by User ID 1:");

        userOnePosts.forEach(post => {
            console.log(`
Post ID: ${post.id}
Title: ${post.title}
Body: ${post.body}

            `);
        });


        // 8. Count posts created by user ID 1
        const postCount = userOnePosts.length;

        console.log(
            `User ID 1 has created ${postCount} posts.`
        );


        // 9. Find first post with title longer than 50 characters
        const longTitlePost = posts.find(
            post => post.title.length > 50
        );

        console.log("\nFirst post with title longer than 50 characters:");

        console.log(longTitlePost);
    })

    // Handle API errors
    .catch(error => {
        console.log(`Error: ${error}`);
    });


//Task 4 — API + Search

// Function to filter products
function searchProducts(products, category, maxPrice) {

    return products.filter(product => {

        return product.category.toLowerCase() === category.toLowerCase()
            && product.price <= maxPrice;

    });
}


// Ask the user for category
const category = prompt("Enter product category:");


// Ask the user for maximum price
const maxPrice = Number(prompt("Enter maximum price:"));


// Fetch products from API
fetch("https://fakestoreapi.com/products")
    .then(response => response.json())
    .then(products => {

        // Filter products based on both conditions
        const results = searchProducts(
            products,
            category,
            maxPrice
        );



        // Check if products were found
        if (results.length === 0) {

            console.log(
                `No products found in "${category}" under $${maxPrice}.`
            );

        } else {

            results.forEach(product => {

                console.log(`
Product: ${product.title}
Category: ${product.category}
Price: $${product.price}

                `);

            });
        }
    })

    .catch(error => {
        console.log(`Error fetching products: ${error}`);
    });

//Task 5 — API Shopping Cart

fetch("https://fakestoreapi.com/products")
    .then(response => response.json())
    .then(products => {

        // 1. Display available products
        

        products.forEach(product => {
            console.log(
                `ID: ${product.id} | ${product.title} | $${product.price}`
            );
        });


        // 2. Create empty shopping cart
        const cart = [];


        // 3. Select products using their IDs
        const productIds = prompt(
            "Enter product IDs separated by commas:\nExample: 1,3,5"
        );


        // Convert input into an array of numbers
        const ids = productIds
            .split(",")
            .map(id => Number(id.trim()));


        // 4. Add selected products to cart
        ids.forEach(id => {

            const product = products.find(
                product => product.id === id
            );

            if (product) {
                cart.push(product);
            } else {
                console.log(`Product with ID ${id} not found.`);
            }
        });


        // Check if cart is empty
        if (cart.length === 0) {
            console.log("Cart is empty.");
            return;
        }


        
        // DISPLAY CART
   

        cart.forEach((product, index) => {

            console.log(`
Product ${index + 1}: ${product.title}
Price: $${product.price}

            `);

        });


        
        // CALCULATE TOTAL USING reduce()
        

        const total = cart.reduce(
            (sum, product) => sum + product.price,
            0
        );


        
        // APPLY DISCOUNT
        

        let discountPercentage = 0;

        if (total > 200) {

            discountPercentage = 20;

        } else if (total > 100) {

            discountPercentage = 10;

        }


        // Calculate discount amount
        const discountAmount =
            total * (discountPercentage / 100);


        // Calculate final amount
        const finalAmount =
            total - discountAmount;


        
        // DISPLAY FINAL RESULT
        

        console.log(`


Total: $${total.toFixed(2)}
Discount: ${discountPercentage}%
Discount Amount: $${discountAmount.toFixed(2)}
Final Amount: $${finalAmount.toFixed(2)}
        `);

    })

    // Handle API errors
    .catch(error => {
        console.log(`Error fetching products: ${error}`);
    });

// Task 6 — FakeStore Product Report

const apiLink = "https://fakestoreapi.com/products";


// 1. Fetch API
fetch(apiLink)

    // 2. Convert response to JSON
    .then(response => response.json())

    .then(products => {

        


        
        // 3. Total Products
        

        console.log(`\nTotal Products: ${products.length}`);


        
        // 4. Display all products using forEach()
        

        console.log("\nAll Products:");

        products.forEach((product, index) => {

            console.log(
                `${index + 1}. ${product.title} - $${product.price}`
            );

        });


    
        // 5. Create Product Names Array using map()
    

        const productNames = products.map(
            product => product.title
        );

        console.log("\nProduct Names:");

        productNames.forEach(name => {
            console.log(`- ${name}`);
        });


        
        // 6. Filter products above $100
    

        const expensiveProducts = products.filter(
            product => product.price > 100
        );

        console.log("\nProducts Above $100:");

        expensiveProducts.forEach(product => {

            console.log(
                `- ${product.title} - $${product.price}`
            );

        });


        
        // 7. Find first electronics product
        

        const electronicsProduct = products.find(
            product => product.category === "electronics"
        );

        console.log("\nElectronics Product:");

        if (electronicsProduct) {

            console.log(
                `${electronicsProduct.title} - $${electronicsProduct.price}`
            );

        } else {

            console.log("No electronics product found.");

        }


        
        // 8. Calculate total price using reduce()
        

        const totalPrice = products.reduce(
            (total, product) => total + product.price,
            0
        );

        console.log(
            `\nTotal Product Value: $${totalPrice.toFixed(2)}`
        );


        
        // 9. some()
        // Check if ANY product is above $500
        // ------------------------------------------

        const anyAbove500 = products.some(
            product => product.price > 500
        );

        console.log(
            `\nAny Product Above $500: ${anyAbove500}`
        );


        
        // 10. every()
        // Check if ALL products are above $1
        

        const allAboveOne = products.every(
            product => product.price > 1
        );

        console.log(
            `All Products Above $1: ${allAboveOne}`
        );


        
        // 11. Sort highest price → lowest price
        

        const sortedProducts = [...products].sort(
            (a, b) => b.price - a.price
        );

        console.log("\nHighest → Lowest:");

        sortedProducts.forEach(product => {

            console.log(
                `${product.title} - $${product.price}`
            );

        });

    })


    
    // 12. Error Handling
    

    .catch(error => {

        console.log(`Error fetching products: ${error}`);

    })



    // 13. finally()
    

    .finally(() => {

        console.log("\nREPORT COMPLETED");

    });





