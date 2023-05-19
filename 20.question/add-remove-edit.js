/*20. In the following shopping cart add, remove, edit items
    => const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
    - add 'Meat' in the beginning of your shopping cart if it has not been already added
    - add Sugar at the end of your shopping cart if it has not been already added
    - remove 'Honey'
    - modify Tea to 'Green Tea'*/
    const shoppingCart=["milk", "coffee", "tea", "honey"];
    // -add 'meat in the beginning of your shopping cart if it has not been already added.
    let addMeatInTheLast=shoppingCart.unshift("meat");
    console.log(addMeatInTheLast);
    console.log(shoppingCart);
    // add sugar at the end of your shopping cart if it has not been already added
    let addSugarInTheLast=shoppingCart.push("sugar");
    console.log(addSugarInTheLast);
    console.log(shoppingCart);

    //- remove honey
    let removeHoney =shoppingCart.splice(4,1);
    console.log(removeHoney);
    console.log(shoppingCart);
    // modify tea to green tea
    let modifyGreen = shoppingCart.splice(3,1, "green tea");
    console.log(modifyGreen);
    console.log(shoppingCart);
