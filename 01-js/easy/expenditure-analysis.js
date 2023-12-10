/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  let result = [];
  //get the unique catergories;
  let map = new Map();
  for (let index = 0; index < transactions.length; index++) {
    const category = transactions[index].category;
    const price = transactions[index].price
    if(map.get(category) === undefined){
      map.set(category, price )
    }else {
      const lastSum = map.get(category);
      map.set(category, lastSum+ price);
    }
  }
  for (let [key, val] of map) {
    console.log("**************" +key + val);
    result.push({
       category: key,
       totalSpent : val
    })
  }
  console.log(result)
  return result;
}

module.exports = calculateTotalSpentByCategory;
