const testVar = {}

function testFunc() {
  return "hi"
}


function superbowlWin(arr){
  let result;
  let newarr = arr.map((item) => {
    if(item.result === "W"){
      result = item.year
      return result;
    }
  })
  let year = newarr.find((year) => {
    if(year === "1969"){
      return year;
    }
  })

 return year;
}
superbowlWin(record);