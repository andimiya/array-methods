// DO NOT MODIFY
var genericNumberArray = [1, 2, 3, 4, 5];
var colors = ['Blue', 'Red', 'Yellow', 'Charlie'];
var scrambledWords = ['win', 'the', 'for', 'burritos'];
var phoneNumber = [9, 0, 3, 5, 7, 6, 8];
var orderQueue = [{ takeOut: 'Ice Cream' }, { takeOut: 'Medium Salad'}, { takeOut: 'Burger'}];
var mixedNums = [5, 81, 40, 4, 805, 10, 76, 21, 3, 2, 7, 1, 7];
var mixedWords = ['Dont', 'You', 'Forget', 'About', 'Me'];
var fruitCollection = ['Apple', 'Scissors', 'Pug', 'Lady Bug', 'Banana', 'Pear'];
var gemBox = ['Ruby', 'Diamond', 'Diamond', 'Emerald', 'Moonstone', 'Pizza', 'Sneaker', 'Sapphire', 'Baby', 'Jeans', 'Soda Can', 'Boat'];
var upToTen = [1, 2, 9, 10];
var brownOnly = ['brown', 'brownish', 'ad8fy7iuhj23nrsf', 9813, {}, undefined,  'brown'];
var orderedValues = [4, 5, 6, 7, 8, 9, 10];
var friends = ['Todd', 'Jacoby', 'Miko', 'Joseph', 'Kevin', 'Todd C.'];
var monthNames = ['Jan', 'Feb', 'Mar', 'Apr'];
var bulkNumbers = [5, 5, 6, 6, 9, 9, 2, 2, 2, 5, 2];

// do your work below!

var nameArray = [];

nameArray.push('Andrea', 'Takamiya');
console.log(nameArray);

for (var i = genericNumberArray.length + 1; i <= 10; i++) {
  genericNumberArray.push(i);
  console.log(i);
}
console.log(genericNumberArray);

var popResult = colors.pop();
console.log(popResult);

scrambledWords.reverse();
console.log(scrambledWords);

phoneNumber.reverse();
console.log(phoneNumber);

var nextOrder = orderQueue.shift();
console.log(nextOrder, 'nextOrder');

mixedNums.sort();
mixedWords.sort();

var notFruit = fruitCollection.splice(1,3);
console.log(fruitCollection);
console.log(notFruit);

gemBox.splice(5,7, 'Sapphire');
console.log(gemBox);

upToTen.splice(2);
  for (var i = upToTen.length+1; i <=10 ; i++) {
    console.log(i);
    upToTen.push(i);
  }
console.log(upToTen);

brownOnly.splice(1,5, 'brown', 'brown', 'brown');
console.log(brownOnly);

var orderedValuesNewLength = orderedValues.unshift(1,2,3);
console.log(orderedValues);

var randomThingsArray = genericNumberArray.concat(colors);
console.log(randomThingsArray);

var updatedOrders = orderQueue.concat({takeOut:'fish'}, {takeOut: 'cake'});
console.log(updatedOrders);

var sentence = scrambledWords.join(' ');
var myFruits = fruitCollection.join(' + ');
