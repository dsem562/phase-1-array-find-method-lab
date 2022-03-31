// code your solution here

function superbowlWin(array) {    
    const results = array.find(array => array.result === "W");
    if(results){
        return results.year;
    }
}