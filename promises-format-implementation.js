//database for what in stock

let stocks = {
    Fruits : ["strawberry", "grapes", "banana", "apple"],
    liquid : ["water", "ice"],
    holder : ["cone", "cup", "stick"],
    topping : ["chocolate", "peanuts"],
};

//avaiability of the shop
let is_shop_open = true;


//print according to avaiability of the shop, open or close
function time(ms) {

   return new Promise( (resolve, reject) => {

      if(is_shop_open){
         setTimeout(resolve,ms);
      }

      else{
         reject(console.log("Shop is closed"))
      }
    });
}

//production part of shop
async function kitchen(){
    try{
	await time(2000)
	console.log(`${stocks.Fruits[2]} was selected`)

	await time(0000)
	console.log("production has started")

	await time(2000)
	console.log("fruit has been chopped")

	await time(1000)
	console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} added`)

	await time(1000)
	console.log("start the machine")

	await time(2000)
	console.log(`ice cream placed on ${stocks.holder[2]}`)

	await time(3000)
	console.log(`${stocks.topping[2]} as toppings`)

	await time(2000)
	console.log("Serve Ice Cream")
    }

    catch(error){
	 console.log("customer left", error)
    }

    finally{
        console.log("Day ended, shop closed")
    }
}

//trigger kitchen function
kitchen ();