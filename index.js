// Code your solution in this file!
function distanceFromHqInBlocks(someValue) {
  const Hq = 42;
  return Math.abs(someValue - Hq);
}

function distanceFromHqInFeet(block) {
  return distanceFromHqInBlocks(block) * 264;
}

function distanceTravelledInFeet(block1, block2) {
  return Math.abs(block1 - block2) * 264;
}

function calculatesFarePrice(start, destination) {
  const distance = distanceTravelledInFeet(start, destination);
  let price;
  if (distance <= 400) {
    price = 0;
  } else if (400 < distance && distance <= 2000) {
    price = (distance - 400) * 0.02;
  } else if (2000 < distance && distance < 2500) {
    price = 25;
  } else if (distance > 2500) {
    return "cannot travel that far";
  }

  return price;
}
