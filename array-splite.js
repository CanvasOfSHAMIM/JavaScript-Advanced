const nums = [1,2,3,4,5,6,7,8];
const part = nums.slice(2, 5);
console.log(part);
console.log(nums);

const number = [1,2,3,4,5,6,7,8];
const removed = number.splice(2,2, 88, 77);
console.log(number);
console.log(removed);

const together = nums.join(", ");
console.log(together);

const friend = ["Mamum Ahmed", "Fahad", "Robiul Islam", "Tanvir Ahmed"];
const outside = friend.slice(1, 4);
console.log(friend);
console.log(outside);

const friendClose = ['Mamun Ahmed', "SHAMIM Ashraf", 'Shomrat Islam', 'Abdullah Sheikh', 'Mufajjel Hassan'];
const Best = friendClose.splice(0, 1);
console.log(Best);

const together2 = friendClose.join(", ");
console.log(together2);