const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];


const chooseStations = function (stations) {
  let appropriate = []; 
  for (let i = 0; i < stations.length; i++) {
    if(stations[i][1] >= 20 && stations[i][2] === 'school' || stations[i][2] === 'community centre') {
      appropriate.push(stations[i][0]);
    } else;
  }
  return appropriate;
}

console.log(chooseStations(stations));

const finalPosition = function (moves) {
  let position = [0, 0];
  for (let i = 0; i < moves.length; i++) {
    if (moves[i] === 'north') {
      position[1] += 1;
    } else if (moves[i] === 'south') {
      position[1] -= 1;
    } else if (moves[i] === 'east') {
      position[0] += 1;
    } else if (moves[i] === 'west') {
      position[0] -= 1;
    }
  } return position;
}


const ageCalculator = function (name, yearOfBirth, currentYear) {
  return `${name} is ${currentYear - yearOfBirth} years old.`;
}


const howManyHundreds = function(num) {
  let remainder = num % 100;
  num -= remainder;
  let howMany = num / 100;
  return howMany;
} 


const calculateRectangleArea = function(length, width) {
  if(length === 0 || width === 0) {
    return undefined;
  } else {
    return length * width;
  }
}

const calculateTriangleArea = function(base, height) {
  if(base === 0 || width === 0) {
    return undefined;
  } else {
    return (base * height) / 2;
  }
}

const calculateCircleArea = function(radius) {
  if(radius === 0) {
    return undefined;
  } else {
    return (Math.PI * radius * radius);
  }
}