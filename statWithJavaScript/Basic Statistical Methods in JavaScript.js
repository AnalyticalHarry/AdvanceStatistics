// array of numbers
let num = [10, 40, 20, 35, 67, 55, 80, 90, 101];

// 1. calculating mean value of dataset
function mean(num){
    // init total and mean variables
    var total = 0;
    // for loop to add all numbers in array
    for (let i = 0; i < num.length; i++){
        total += num[i];
    }
    // mean value of array
    var meanValue = total / num.length;
    console.log(`Mean value of array is`, Math.round(meanValue));
}
// print mean value
mean(num);

// 2. calculating min and max of dataset
function minMax(num){
    array = num
    // bubble sort algortihms
    function bubbleSort(array){
        for (let i = 0; i < array.length; i++){
            for (let j = 0; j < array.length; j++){
                // swap if current element is greater than next element
                if (array[j] > array[j+1]){
                    let temp = array[j];
                    array[j] = array[j+1];
                    array[j+1] = temp;
                }
            }
        }
        return array;
    }
    let minValue = array[0];
    let MaxValue = array[array.length - 1];
    console.log(`\nMin value of array is`, minValue);
    console.log(`Max value of array is`, MaxValue);
}
// print min and max value
minMax(num);


// 3. calculating median value
function median(num) {
    // copy of the array to avoid modifying the original array
    var array = num.slice(); 
    // Bubble sort algorithm
    function bubbleSort(array) {
        for (let i = 0; i < array.length - 1; i++) {
            for (let j = 0; j < array.length - i - 1; j++) {
                // swap if current element is greater than next element
                if (array[j] > array[j + 1]) {
                    let temp = array[j];
                    array[j] = array[j + 1];
                    array[j + 1] = temp;
                }
            }
        }
        return array;
    }

    var sortedArray = bubbleSort(array);
    var middle = Math.floor(sortedArray.length / 2);

    if (sortedArray.length % 2 === 0) { // If even number of elements
        return (sortedArray[middle - 1] + sortedArray[middle]) / 2;
    } else { // If odd number of elements
        return sortedArray[middle];
    }
}

console.log(`Median value of the array is`, median(num));

// 4. calulating standard deviation

function standardDeviation(num){
    // array to avoid modifying original
  let array = num.slice();
  let mean = array.reduce((a,b) => a + b, 0) / array.length;
  // squared differences from mean
  let sqDiffs = array.map(value => (value - mean)**2);
  // standard deviation
  let stdDev = Math.sqrt(sqDiffs.reduce((a,b) => a + b, 0) / array.length);
  console.log(`Standard deviation of array is ${stdDev.toFixed(3)}`);
}

standardDeviation(num);

// 5. calculating variance
function variance(num){
    // array to avoid modifying original
    let array = num.slice();
    let mean = array.reduce((a,b) => a + b, 0) / array.length;
    // squared differences from mean
    let sqDiffs = array.map(value => (value - mean)**2);
    // variance
    let variance = sqDiffs.reduce((a,b) => a + b, 0) / array.length;
    console.log(`Variance of array is ${variance.toFixed(3)}`);
}

variance(num);

// 6. calculating mode
function mode(num) {
    let array = num.slice();
    let counts = {};
    let maxCount = 0;
    let modes = [];
  
    // count the occurrences of each number in the array
    array.forEach(function(value) {
      counts[value] = (counts[value] || 0) + 1;
      maxCount = Math.max(maxCount, counts[value]);
    });
  
    // dind all numbers that match the maxCount
    Object.keys(counts).forEach(function(key) {
        // convert key back to Number
      if(counts[key] === maxCount) modes.push(Number(key)); 
    });
  
    // if there's exactly one mode, return it directly; otherwise, return the modes array
    if(modes.length === 1) {
      return modes[0];
    } else {
      // if you need to return the modes for further processing rather than logging
      return modes;
    }
}

console.log(mode(num)); 
