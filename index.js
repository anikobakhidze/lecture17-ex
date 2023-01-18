
// 1. დაწერეთ ფუნქცია, რომელიც Set ის მეშვეობით დაადგენს არის მასივში დუბლიკატები თუ არა

// checkDuplicates([1,2,3,4]) false
// checkDuplicates([1,2,3,4,4]) true
// let arr1= [1,2,3,4];
// let arr2=[1,2,3,4,4];
// let checkDuplicates=(arr) => {
//   let newSet= new Set(arr);
//   if(arr.length ==newSet.size){
//     return "true"
//   } else{
//     return "false"
//   }
// }
// console.log(checkDuplicates(arr1));
// 2. გააკეტეთ Map ჩაწერეთ შემდეგი მასივი მნიშვნელობებად
// [
//     [name: 'Jane', age:12],
//     [name: 'John', age:22],
//     [name: 'Ann', age:40]
// ],

// შეამოწმეთ რომ ყველას ასაკი მეტი იყოს 18-ზე, რომელიც არ იქნება წაშალეთ Map იდან
// let myMap = new Map();
//   myMap.set("name","Jane").set("age",12)
// console.log(myMap);
// myMap.set("name","John").set("age",22);
// console.log(myMap);
// if(myMap.age <=18){
//   myMap.delete(age);
// }
// console.log(myMap);
// 3.
// გააკეთეთ Set, რომელშიც ჩაწერთ შემდეგ მასივს [ 1,2,3,-10,-20 , -1];
// თუ Set შეიცავს რიცხვს და მის უარყოფით მნიშვნელობასაც, წაშალეთ მასეთი რიცხვი
// let newSet= new Set([ 1,2,3,-10,-20 , -1]);
//  newSet.forEach((el) => {
//   if (newSet.has(el) && newSet.has(-el)){
//     newSet.delete(el);
//     newSet.delete(-el);
//   }

// } ) 
// console.log(newSet);
// 4. გააკეთეთ WeakSet, ჩაწერეთ შემდეგი მასივები [1,2,3] [5,6,3,] [-1,-3,-4];
// ამოიღეთ შემდგომ ეს მასივები და გარდაქმებით ერთ მასივად, რომელსაც ჩაწერთ WeakMao შემდეგი
// let arr1=[1,2,3];
// let arr2=[5,6,3];
// let arr3= [-1,-3,-4]
// let ws = new WeakSet();
// ws.add([1,2,3]).add([5,6,3]).add([-1,-3,-4]);

// console.log(ws);
// let visitedSet = new WeakSet();

// let john = { name: "John" };
// let pete = { name: "Pete" };
// let mary = { name: "Mary" };

// visitedSet.add(john); // John visited us
// visitedSet.add(pete); // Then Pete
// visitedSet.add(john); // John again
// console.log(visitedSet);
// 5. მოცემულია ობიექტი

// let obj = {
//     name: 'Jane',
//     surname: 'Doe',
//     age:22,
//     getInfo: function(){
//         console.log(this.name, this.surname , this.age);
//     }
// }

// Call, bind, apply ს გამოყენებით ისე გამოიძახეთ getInfo მეთოდი რომ დაილოგოს , 'John SMith 40'
let obj = {
    name: 'Jane',
    surname: 'Doe',
    age:22,
    getInfo: function(){
        console.log(this.name, this.surname , this.age);
    }
}
obj.name="John";
obj.surname="Smith";
obj.age=40;
let getFullName= function() { 
  return this.getInfo() ;
      }
 getFullName.call(obj);
 getFullName.apply(obj);
 let getFull=getFullName.bind(obj);
 getFull();
// 6. მოცემულია ობიექტი 
// var car = { 
//     registrationNumber: "GA12345",
//     brand: "Toyota",

//     displayDetails: function(ownerName){
//         console.log(ownerName + ", this is your car: " + this.registrationNumber + " " + this.brand);
//     }
// }

// bind-ის მეშვეობით გადაეცით სხვადასხვა მანქანის მარკა
// var car = { 
//     registrationNumber: "GA12345",
//     brand: "Toyota",
//     displayDetails: function(ownerName){
//         console.log(ownerName + ", this is your car: " + this.registrationNumber + " " + this.brand);
//     }
// }

