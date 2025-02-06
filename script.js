//Step 1
let heroes = ["Batman", "Superman", "Spiderman", "Wolverine", "Beast Boy"]

console.log(heroes,"- This is an array of superheroes")


//Step 2
console.log("----------------------")

let lastHero = heroes[4];
let firstHero = heroes[0];
let middleHero = heroes[2];

console.log(firstHero,"- The first hero from the superheroes array")
console.log(middleHero,"- The hero in the middle of the superheroes array")
console.log(lastHero,"- The last hero from the superheroes array")


//Step 3
console.log("--------------------------")

heroes.length = 3;
console.log(heroes,"- These is the superheroes array with a length of 3")

heroes.length = 5;
heroes[3] = "Wolverine";
heroes[4] = "Beast Boy";
console.log(heroes,"- This is the original array")
console.log(heroes.length,"- Here is the length of the original superheroes array")


//Step 4
console.log("------------------------------")

heroes.push("Iron man");
console.log(heroes,"- Here is the updated list of the super heroes array");

heroes.pop();
console.log(heroes,"- Here is the original superheroes array")

let divide = heroes.slice(3, 5);
console.log(divide,"- This is the modified superheroes array using the .slice method")

heroes.splice(0, 1, "Hulk");  //Used to replace or delete elements in an array
console.log(heroes,"- Here is the new superheroes array after using the splice method to replace Batman with the Hulk")

let oneHero = heroes.shift();  //Used to remove the first element of the array
console.log(oneHero,"- This is the first super hero from the superheroes array using the shift method")
console.log(heroes,"- This is how the array looks like after using the shift method")

let newHero = heroes.unshift("Hulk");  //Used to add elements starting at the beginning of the array
console.log(heroes,"- This is the superheroes array after using the unshift method")


//Step 5
console.log("--------------------------")

let iterator = heroes.values();
console.log(iterator,"- This is the iterator")

for (let hero of iterator){
    console.log(hero);
}

let iterator2 = heroes.entries();

for (let superHero of iterator2){
    console.log(superHero);
}

heroes.forEach((value, superhero) => {
    console.log(`${superhero}, ${value}`);
})

console.log("****")

for (let h = 0; h<heroes.length; h++) {
    console.log(heroes[h]);
}
console.log("****")
console.log("This is by using a traditional for loop")


//Step 6
console.log("---------------")

let [heroOne, heroTwo, ...rest] = heroes;

console.log(heroOne)
console.log(heroTwo)
console.log(rest)

let [ , , heroThree, , heroFive] = heroes;

console.log(heroThree)
console.log(heroFive)