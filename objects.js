/*
    Object Practice

    Gardening!

    You were hired to work as a landscaper for a large estate.

    See garden.jpg

    The owner wants you to help them organize their gardens.

    They have decided there will be three gardens: the rose arbor, 
    the perennial garden, and the slope planters.

    You want to use your newly learned programming skills to make
    this job easier.  

    Complete the following exercises to make your work on the garden easier.
*/

/*
    Note, To run the tests for an exercise run the entire file!
    Do not just highlight a section and try to run it, because the tests will
    throw an exception 
    ReferenceError: createdPopulatedEstate is not defined

    If you see that exception, make sure you deselect any text and then click Run Code again

    Remember to Save the file before you click Run Code!
*/

/* ---------------------------------------------------------------------------
    Exercise One

    Creating a plant

    In order to keep track of your plants, you need to store them in your program.
    Complete the createPlant() function, which returns an object representing a plant.
    It should include all of the properties listed in the comment above the function.
*/
/**
 * createPlant - Produces an object respresenting a plant.  It should have the following properties:
 * @param {string} type - The Type of plant.  Possible values are [ "rose", "orchid", "lily", "lavender", "poppy", "begonia", "snapdragon", "marigold"]
 * @param {boolean} isPerennial - A boolean showing if the plant is a perennial or not
 * @param {string} leafDescription - A visual description of the leaves
 * @param {string} leafColor - A string representing the leaf color
 * @param {string} flowerColor - A string representing the color of the flower
 * @param {string} flowerDescription - A visual description of the flower
 * @param {number} gallonsWaterPerWeek - 0.0 to 3.0, representing the number of gallons of water needed per week for the plant
 * @param {number} amountOfSunNeeded - 0 to 10, representing the amount of sun needed
 */
function createPlant(
  type,
  isPerennial,
  leafDescription,
  leafColor,
  flowerColor,
  flowerDescription,
  gallonsWaterPerWeek,
  amountOfSunNeeded
) {
  let plant = {
    type: type,
    isPerennial: isPerennial,
    leafDescription: leafDescription,
    leafColor: leafColor,
    flowerColor: flowerColor,
    flowerDescription: flowerDescription,
    gallonsWaterPerWeek: gallonsWaterPerWeek,
    amountOfSunNeeded: amountOfSunNeeded,
  };
  // Your Code Here!
  // Create a plant object, populate it with all of the values from the arguments, and return it.
  // Hint: You can name every key in your object the same as the variable from the argument to this function.
  return plant;
}

/* ------------------------------------------------
    Exercise Two

    The owner wants you to decide where to put every new plant they get.

    Each plant must go in one of the three gardens of the estate.

    The createEstate() has already been written for you, which returns an object representing the entire estate.
    The estate contains three collections of plants: 
    the roseArbor, the perennialGarden, and the slopePlanters.

    Now complete the function addPlantToEstate()
    This should decide, based upon the plant's properties, where to put the plant in the estate.  

    The rose arbor should contain all of the roses.
    The perennial garden should contain only perennials.  However, the perennial garden doesn't get that much sun.  
    No plants with an amountOfSunNeeded greater than 5 should be placed in the perennial garden.
    The rest of the plants should be placed in the slope planters.
*/

function createEstate() {
  let estate = {
    roseArbor: [],
    perennialGarden: [],
    slopePlanters: [],
  };
  return estate;
}

/**
 * addPlantToEstate
 * @param {Object} estate - The estate object - created by calling createEstate()
 * @param {Object} plant - A plant object - created by calling createPlant()
 *
 * This should add the given plant into one of the three arrays within the estate.
 */
function addPlantToEstate(estate, plant) {
  // Your Code Here!
  // decide where to put the plant according to its features
  /*
    if the plant is a rose
        add it to the Rose Arbor
    if the plant is a perennial and it needs less <= 5 sun
        add it to the Perennial Garden
    else add it to the Slope Planters
    */
  // console.log(plant);
  if (plant.type === "rose") {
    estate.roseArbor.push(plant);
  } else if (plant.isPerennial && plant.amountOfSunNeeded <= 5) {
    estate.perennialGarden.push(plant);
  } else {
    estate.slopePlanters.push(plant);
  }
}

/* ------------------------------------------------
    Exercise Three

    The owner wants to have an easy way to hear about the plants in their garden.

    So you decide to write some functions which describe the plants.

    Complete the describePlant(), describePlants(), and describeGarden() functions below.

    They should each return a string, which is a readible english paragraph that nicely describes
    the visual features of the plant or a list of plants, or the entire estate.

    Feel free to be as elaborate as you wish!

    If you want examples of different plants, set a breakpoint and run the test. 
    It will go through several example plants.
    
    Try to have as little redundent code as possible! 
    
    Hint: describeEstate can call describeGarden which can call describePlant

    Hint2: YOu can use Template literals here to make this easy! If you have not used those yet,
    read up on them here: https://flaviocopes.com/javascript-template-literals/  
    `A ${plant.name} which has ....`
    But you can just use string concatenation too   "A " + plant.name + " which has ..."
*/

/**
 * describePlant
 * @param {*} plant - A plant object
 *
 * Given a plant, this should return a string that is the description of the plant.
 * The description should use at least a few of the properties on the plant to form a sentence.
 *
 * Example: "A Rose which has green leaves that are rounded with a point.  The flowers are red concentric circles of pedals. "
 */
function describePlant(plant) {
  let description = `A ${plant.type} with leaves that are ${plant.leafDescription} and ${plant.flowerColor}-colored flowers that have ${plant.flowerDescription}. `;
  // Your Code Here!
  // Return a string describing all the visual features of the given plant

  return description;
}

/**
 * describeGarden
 * @param {String} gardenName - The name of the garden to describe
 * @param {Object[]} listOfPlants - The List of plants to be described.
 *
 * // Example: "The Rose Garden has 10 types of plants in it.  It contains: A"
 */
function describeGarden(gardenName, listOfPlants) {
  let description = `The ${gardenName} has ${listOfPlants.length} plants. It contains: `;
  for (plantIndex = 0; plantIndex < listOfPlants.length; plantIndex++) {
    // referenced https://www.w3schools.com/js/js_loop_for.asp
    description += describePlant(listOfPlants[plantIndex]);
  }
  // Your Code Here!
  // Given a list of plants, describe every plant in the list.
  // return a string which is the description.
  // Hint: You can just call describePlant() for each plant in the list
  // Concatenting the description for each plant together into one big string.
  return description;
}

/**
 * describeEstate
 * @param {Object} estate - An estate object
 * Return a string describing all the different visual features of all the gardens in the estate.
 * This should describe every garden and every plant.
 */
function describeEstate(estate) {
  let description = "";
  // referenced for...in https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in
  for (const garden in estate) {
    description += describeGarden(garden, estate[garden]);
  }
  // Your Code Here!
  // Return a string describing all the different visual features of all the gardens in the estate.
  // Feel free to make up various details.
  // Hint: You can call describeGarden() for each garden of the estate.
  return description;
}

/* ---------------------------------------------------------------------------
    Exercise Four

    The owner wants you to tell them how much water the entire garden is going
    to need per week.

    Complete the calculateWaterUsagePerWeek() function.
*/

/**
 * calculateWaterUsagePerWeek
 * @param {Object} estate - An estate object
 *
 * This should return a number which is the total number of gallons of water
 * needed for the whole estate.
 *
 * Make a loop for each garden to tally the number of gallons needed by all the plants, then
 * add those up to get the total water usage.
 */
function calculateWaterUsagePerWeek(estate) {
  let numGallons = 0;
  // console.log(estate);
  for (const garden in estate) {
    for (const plant of estate[garden]) {
      numGallons += plant.gallonsWaterPerWeek;
    }
  }
  // Your Code Here!

  return numGallons;
}

/* ---------------------------------------------------------------------------
    Exercise Five

    Clone a plant

    The botanist of the estate wants more colors of roses, so they have devised a way to
    alter the color of a plant.
    They want you to clone each of the roses in the garden giving them more
    elaborate colors.

    First, complete cloneRose().
    Given a plant, this should clone it and return a copy with a new color.

    Complete cloneAllTheRosesAndChangeTheirColors().  
    This function should go attempt to clone all the roses in the garden.  
    Make sure your algorithm does not clone or change the color of flawed plants!
*/

/**
 * cloneRose
 * @param {Object} plant - A plant object
 *
 * This should return a new object, which is a clone of the given plant.
 * The clone should have identitcal properties to the given plant, except for the color.
 *
 * Every clone should run changeColorOfPlant(clone)
 * This will use the botanist's special algorithm to make new colors of roses.
 *
 */
function cloneRose(plant) {
  let clone = {};
  for (let property in plant) {
    clone = {
      ...plant,
    };
  }
  // console.log(clone);
  // Your Code Here!
  // Given a plant, clone it and return the new plant
  // Hint: You do this in the Reading!  copyObject...

  return clone;
}

/**
 * cloneAllTheRoses
 * @param {Object} estate - An estate object
 *
 * This should clone every rose and add the new plant to the garden.
 */
function cloneAllTheRoses(estate) {
  cloneContainer = [];
  for (let rose in estate["roseArbor"]) {
    //console.log(estate["roseArbor"][rose]);
    cloneContainer.push(cloneRose(estate["roseArbor"][rose]));
  }

  // Option 1: using a for loop to push the clones individually
  // for (let clone in cloneContainer) {
  //   estate["roseArbor"].push(clone);
  // }

  // Option 2: using concat
  estate["roseArbor"] = estate["roseArbor"].concat(cloneContainer);
  //console.log(estate.roseArbor);
  // Your Code Here!
  // for each rose...
  // Hint: Watch out for modifying an array you are currently looping through!  How can you avoid that?
  // Instead of putting the new plants immediately into the rose arbor, maybe store them in a new array
  // until you have finished iterating.  Then you can add them in after your loop finishes.
}

/* 
   -------TESTS---------------------------------------------------------------
   Run these commands to make sure you did it right. They should all be true.
*/
{
  console.log("-----Tests for Exercise One-----");
  {
    let plantProperties = getAllTestPlants()[0];
    console.log("* Get a rose");
    let plant1 = createPlant(...plantProperties); // this is called a "spread" operator, it takes every value in the array and passes each into the function as a parameter

    let hasEveryProperty = true;
    if (plant1) {
      let values1 = Object.values(plant1);
      for (let property of plantProperties) {
        if (!values1.includes(property)) {
          hasEveryProperty = false;
          console.log(`ERROR - The plant is missing a value: ${property}`);
        }
      }
    }

    console.log(plant1 && hasEveryProperty);
  }

  console.log("-----Tests for Exercise Two-----");
  {
    let plants2 = getAllTestPlants();
    let estate2 = createEstate();

    console.log("* Add a rose");
    let rose2 = createPlant(...plants2[0]);
    addPlantToEstate(estate2, rose2);
    console.log(
      estate2.roseArbor.length === 1 &&
        estate2.perennialGarden.length === 0 &&
        estate2.slopePlanters.length === 0 &&
        estate2.roseArbor[0] === rose2
    );

    console.log("* Add another rose");
    addPlantToEstate(estate2, rose2);
    console.log(
      estate2.roseArbor.length === 2 &&
        estate2.perennialGarden.length === 0 &&
        estate2.slopePlanters.length === 0 &&
        estate2.roseArbor[1] === rose2
    );

    console.log("* Add a perrenial");
    let orchid2 = createPlant(...plants2[1]);
    addPlantToEstate(estate2, orchid2);
    console.log(
      estate2.roseArbor.length === 2 &&
        estate2.perennialGarden.length === 1 &&
        estate2.slopePlanters.length == 0 &&
        estate2.perennialGarden[0] === orchid2
    );

    console.log("* Add a high sun perrenial");
    let lavender2 = createPlant(...plants2[3]);
    addPlantToEstate(estate2, lavender2);
    console.log(
      estate2.roseArbor.length === 2 &&
        estate2.perennialGarden.length === 1 &&
        estate2.slopePlanters.length == 1 &&
        estate2.slopePlanters[0] === lavender2
    );

    console.log("* Add a non-perrenial");
    let marigold2 = createPlant(...plants2[7]);
    addPlantToEstate(estate2, marigold2);
    console.log(
      estate2.roseArbor.length === 2 &&
        estate2.perennialGarden.length === 1 &&
        estate2.slopePlanters.length == 2 &&
        estate2.slopePlanters[1] === marigold2
    );
  }

  console.log("-----Tests for Exercise Three-----");
  {
    let estate3 = createdPopulatedEstate();
    console.log("* describePlant works and includes the flower color");
    let plantDescription3 = describePlant(estate3.roseArbor[0]);
    console.log(plantDescription3);
    console.log(
      plantDescription3 &&
        plantDescription3.length > 0 &&
        plantDescription3.indexOf(estate3.roseArbor[0].flowerColor) > -1
    );

    console.log("* describeGarden works and includes the flower color");
    let gardenDescription3 = describeGarden("Rose Arbor", estate3.roseArbor);
    console.log(gardenDescription3);
    console.log(
      gardenDescription3 &&
        gardenDescription3.length > 0 &&
        gardenDescription3.indexOf(estate3.roseArbor[0].flowerColor) > -1
    );

    console.log("* describeEstate works");
    let estateDescription3 = describeEstate(estate3);
    console.log(estateDescription3);
    console.log(
      estateDescription3 &&
        estateDescription3.length > 0 &&
        estateDescription3.indexOf(estate3.roseArbor[0].flowerColor) > -1
    );
  }

  console.log("-----Tests for Exercise Four-----");
  {
    let estate4 = createEstate();
    console.log("* Empty Estate");
    let emptyGallons = Math.floor(calculateWaterUsagePerWeek(estate4));
    console.log(emptyGallons === 0);

    console.log("* Calculate Whole Estate is equal to 12.");
    estate4 = createdPopulatedEstate();
    let totalGallons = Math.floor(calculateWaterUsagePerWeek(estate4));
    console.log(totalGallons === 12);
  }

  console.log("-----Tests for Exercise Five-----");
  {
    let estate5 = createdPopulatedEstate();

    console.log("* Clone Rose");
    let rose5 = estate5.roseArbor[0];
    let rose5Copy = cloneRose(rose5);
    console.log(
      !!rose5Copy &&
        !!rose5Copy.type &&
        rose5Copy.type === rose5.type &&
        rose5Copy.isPerennial === rose5.isPerennial &&
        rose5Copy.leafDescription === rose5.leafDescription &&
        rose5Copy.leafColor === rose5.leafColor &&
        rose5Copy.flowerColor === rose5.flowerColor &&
        rose5Copy.flowerDescription === rose5.flowerDescription &&
        rose5Copy.gallonsWaterPerWeek === rose5.gallonsWaterPerWeek &&
        rose5Copy.amountOfSunNeeded === rose5.amountOfSunNeeded
    );

    console.log("* Clone All Roses - First Run");
    let initialNumRoses = estate5.roseArbor.length;
    cloneAllTheRoses(estate5);
    console.log(
      estate5.roseArbor.length > 0 &&
        estate5.roseArbor.length === initialNumRoses * 2
    );
  }

  /*
       -------TEST UTILITIES------------------------------------------------------
       These are utilities for the tests.
    
       Do not modify anything below this line.
    
       But read through these and try to understand what they  do.
    */

  function createdPopulatedEstate() {
    let estate = createEstate();
    let plants = getAllTestPlants();

    for (let plant of plants) {
      let plantObj = createPlant(...plant);
      addPlantToEstate(estate, plantObj);
    }

    return estate;
  }

  function getAllTestPlants() {
    return [
      [
        "rose",
        true,
        "rounded with a point",
        "green",
        "red",
        "concentric circles of pedals",
        0.8,
        4,
      ],
      [
        "orchid",
        true,
        "long and wide with a point at the end",
        "green",
        "fuscia",
        "pedals surrounding a central mouth",
        1.2,
        2,
      ],
      [
        "lily",
        true,
        "small and rounded",
        "green",
        "pink, white, blue, or orange",
        "brightly colored pedals surrounding a lighter center",
        2,
        4,
      ],
      [
        "lavender",
        true,
        "long and skinny",
        "green",
        "purple",
        "fragrant rod-like clusters of many tiny pedals",
        2.5,
        8,
      ],
      [
        "poppy",
        true,
        "long and jagged at the base of the plant",
        "green",
        "orange or red",
        "concentric circles of ruffled pedals surrounding a central core",
        0.8,
        4,
      ],
      [
        "begonia",
        false,
        "large with jagged edges and visible veins",
        "purple and green",
        "pink",
        "a few gently ruffled pedals with a central cluster of yellow pistils",
        1.8,
        5,
      ],
      [
        "snapdragon",
        false,
        "long and skinny along the entire stem",
        "green",
        "red, yellow, or orange",
        "many groups of ruffled pedals all along the stem",
        0.5,
        4,
      ],
      [
        "marigold",
        false,
        "thin and jagged along branches",
        "green",
        "yellow and orange",
        "rounded pedals in groups of five with a darker orange center",
        0.8,
        4,
      ],
      [
        "rose",
        true,
        "rounded with a point",
        "green",
        "purple",
        "concentric circles of pedals",
        0.8,
        4,
      ],
      [
        "rose",
        true,
        "rounded with a point",
        "green",
        "blue",
        "concentric circles of pedals",
        0.8,
        4,
      ],
    ];
  }
}
