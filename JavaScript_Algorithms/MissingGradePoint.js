// The Hacking School has an array of grade points of bootcampers. Now, some of the grade points are missing
// from this array. It is known that the missing grade points are less than or equal to the average of the numbers
// after and before that. Your task is to count how many possible distinct arrays can be formed if the missing grade points are restored.

// if Array[i] = -1, then it means the grade point is missing
// Sample input : arr = [4,-1,9,10,8,11]
// output : 6.

function missingGradePoints(arr){
    //declaring an array for storing the ditinct count of each gradepoint that is missing
    var GradePoint = [], avg;
    for(var i = 0; i < arr.length; i ++){
        var cnt = 0; //count variable for tracking the count of distinct arrays. 
        if(arr[i] == -1){   //checking for -1 occurance in the input array
                arr[-1] = 0;    //if the first element is -1 then the number before it is considered as 0
                avg = Math.floor((arr[i-1] + arr[i+1]) / 2); //calculating average of before and after numbers of -1 occurance
            for(var j = 1; j <= avg; j++){ //iterating throught the avg length to get the counter value
                cnt +=1;
            }
            GradePoint.push(cnt);   //storing the result in a new array 
        }
    }
    console.log(GradePoint);
    return GradePoint.reduce((a,b) => a * b);   //finding the total count of distinct arrays.
}
console.log(missingGradePoints([-1,9,-1,10,-1,8,11]));