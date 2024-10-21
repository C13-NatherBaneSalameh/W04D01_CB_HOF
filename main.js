/* START CODE UNDER THIS LINE */
console.log("19/10/2024")

//===================pulse chesck ===============
//Q1 
const callback =function(number){
   return number**2 
}
const sq= function (number, callback){
    return callback(number)
}
//Q2 
 
const numbers = [1, 2, 3, 4];
const animals = ["Cat", "Dog", "Bear", "Bat"];
numbers.forEach(function(lelment,index){
    console.log(lelment,index)
});
animals.forEach(function(lelment,index){
    console.log(lelment,index)
});

//Q3
const numberss = [1, 2, 3, 4];
console.log(numberss.map(function(lelment,index){
    return lelment -1
}))

//Q4
const array = [1, "two", "three", 4];
 console.log(array.filter(function(ele,index){

    return typeof ele ==="string"
}))
//Q5
const numberssss = [1, 2, 3, 4];

console.log(numberssss.reduce(function(a,element,index){
    return a=a+element*2
} ,0))

//=============================practice==================================
//Q1 
const convertToString = function (array) {
 return array.reduce(function(a,el,i){
    return a+el
},0)  };

//Q2
const averageGrade = function (grades) {
if(grades.length===0){
    return  "Please enter at least one grade"
} 
return grades.reduce(function(a,el,i){
  i= a+el 
    return i},0) /grades.length };
  //Q3 
  const evenLengthOddIndex = function (strings) {
  return strings.filter(function (ele,inn){
    return ele.length%2==0 && inn%2!==0 
}  )}

//Q4
const incrementByIndex = function (array) {
    return array.map(function(ele,innn){
return ele.map(function(ele,inn){return ele+innn}) 
    })
  };

  //Q5 
  const countWords = function (string) {
const a =string.split(" "); 
return  a.reduce(function(acc,ele,ind){
if(ele){
acc[ele]=(acc[ele]||0)+1
}
return acc
},{})
};

//Q6 

const orderByType = function (array) {
    const a= array.filter(function(ele,ind){
        return typeof ele === "string"

    })
    const b =array.filter(function(ele,ind){
        return typeof ele === "number"

    })
    const c =array.filter(function(ele,ind){
        return typeof ele === "boolean"

    })
    return a.concat(b).concat(c)
  };

  //Q7 


  const gradeExam = function (array) {
return array.filter(function(ele,ind){
   if (ele.grade>=50){
   return ele.grade="passed"
   }
   ;
})

};
//Q8

const allNumbers = function (array) {
   return array.reduce(function(acc,ele,ind){
    if(typeof ele ==="number"){
      return acc = true && acc
    }else {

 return acc = false && acc
       
    
    }
  },true)
  };
  //Q9
  const convertToObject = function (array) {
return array.map(function(ele,ind){
return ele.reduce(function(a,b,c){
    return a[b]=c
},{})
})};