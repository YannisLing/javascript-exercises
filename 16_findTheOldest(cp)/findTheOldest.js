const findTheOldest = function(people) {
  return people.reduce((theOldest,peo)=>{
    let yearsOld1;
    let yearsOld2;
    let date = new Date();
    if(!theOldest.hasOwnProperty("yearOfDeath")){
      yearsOld1 = date.getFullYear()-theOldest.yearOfBirth
    }else{
      yearsOld1 = theOldest.yearOfDeath-theOldest.yearOfBirth
    }

    if(!peo.hasOwnProperty("yearOfDeath")){
      yearsOld2 = date.getFullYear()-peo.yearOfBirth
    }else{
      yearsOld2 = peo.yearOfDeath-peo.yearOfBirth
    }

    if(yearsOld1<yearsOld2){
      theOldest = peo;
    }
    return theOldest;
  },people[0])
};

// Do not edit below this line
module.exports = findTheOldest;
