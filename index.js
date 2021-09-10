// Code your solution here
function findMatching(drivers, str) {
  return drivers.filter(driver => {
    return driver.toLowerCase() === str.toLowerCase();
  });
}

function fuzzyMatch(drivers, str) {
  return drivers.filter(function(driver) {
    return driver.toLowerCase().indexOf(str.toLowerCase()) === 0;
  })
}

function matchName(drivers, str) {
  console.log(drivers[0]);
  return drivers.filter(driver => {
    return driver.name == str;
  })
}
