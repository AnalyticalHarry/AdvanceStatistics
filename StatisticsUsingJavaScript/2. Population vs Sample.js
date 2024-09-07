/*
1. What is Population vs. Sample?

Population: The entire group you want to study (e.g., all students in a school, all voters in a country).
Sample: A smaller group selected from the population that is meant to represent the population.

2. When to Use?

Population: When you have access to data for the entire group of interest.
Sample: When it is impractical or impossible to gather data from the entire population. Samples allow for estimates about the population.

3. How to use it? 

Sampling Methods: Simple random sampling, stratified sampling, cluster sampling.
Python/JavaScript: You can simulate population and sample selection using lists/arrays and randomization techniques.

4. Advantages and Disadvantages:

Population:

Advantages: Provides complete data; no need for inference.
Disadvantages: Often impractical, time-consuming, and expensive to collect data from the entire population.

Sample:

Advantages: More efficient and cost-effective. Allows for generalizations about the population using inferential statistics.
Disadvantages: Risk of sampling bias if not done properly. The sample may not always perfectly represent the population.
*/

// population Array of student names
const students = [
    'Harry', 'Alice', 'Shopie', 
    'David', 'Lewis', 'Arthur', 
    'Kate', 'Kevin', 'Lucy', 
    'Jenny'
];

// get a random sample from an array
function getRandomSample(population, sampleSize) {
    // copy of the population array
    const populationCopy = [...population];
    
    // shuffle the copy using Fisher-Yates algorithm
    for (let i = populationCopy.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [populationCopy[i], populationCopy[j]] = [populationCopy[j], populationCopy[i]];
    }
    
    // return the first `sampleSize` elements from the shuffled array
    return populationCopy.slice(0, sampleSize);
}
// sample size
const sampleSize = 3;
// get random sample
const sample = getRandomSample(students, sampleSize);
console.log("Population:", students);
console.log("Sample:", sample);


