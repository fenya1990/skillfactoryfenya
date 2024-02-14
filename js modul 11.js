 //задание 1

function countElement(){
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] , countEven = 0, countOdd = 0, countZeroes = 0;
    
      for (let i = 0; i < arr.length; i++){ 
      if (arr[i] % 2 === 0){
      countEven++;
      } 
      if (arr[i] % 2 !== 0){
      countOdd++;
      } 
      if (arr[i] === 0){
      countZeroes++;
      }
    }
    console.log(countEven)
    console.log(countOdd)
    console.log(countZeroes)
    }

    //задание 2
    function getNum(x){
        for (let i = 0; i < x; i++) {
        } if (x % 1 === 0){
          console.log('простое число')
        } if (x % 1 !== 0){
          console.log('сложное число')
        } if (x > 1000){
        console.log('данные не верные')
        }
      }
       
      getNum();

      //задание 3

      function sum() {
        console.log(4);
      return function(){
        console.log(5);
        }
      }
        function sumResult(){
      
        console.log(4 + 5);
      
      }
      sumResult();

      //задание 4
      function getNumber(a, b){
        let counter = a;
        let intervalId = setInterval(function () {
         console.log(counter);
         counter++;
         if (counter > b) {
            clearInterval(intervalId);
          }
        }, 1000);         
      }
      getNumber(5, 15);

      //задание 5
      const sum = (a, b) => {
        const result = a * b;
        return result;
      };
      
      sum(2, 4);