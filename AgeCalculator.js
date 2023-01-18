// _____________________________get date year month which is entered by user____________________

// getdate value
let getD = document.getElementById("getDate")


// getMonth value
let getM = document.getElementById("getMonth")


// getYear value
let getY = document.getElementById("getYear")



//
let date = new Date()
let getCurrentDate = date.getDate() // get current date
let getCurrentMonth = date.getMonth() // get current month
let getCurrentYear = date.getFullYear() // get current year



// get Button to add some events
let getButton = document.getElementById("btn")
getButton.addEventListener("click", function(){
    // console.log(getD.value, getM.value, getY.value)  

    // get substracted by current date
    let getResultOfDate = getCurrentDate - getD.value
    
    // for getting current days in a month
    let getCurrentTotalDayInMonths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    
    
    // get <showResult> id to print final result
    let printFinalResult = document.getElementById("showResult")


    // condition if getResultOfDate returns negative value
    if(getResultOfDate<0){
        // get newCurrentDate
        let getNewDate = getCurrentTotalDayInMonths[getCurrentMonth]+getCurrentDate
        let printFinalDays = getNewDate - getD.value


        // getNewMonth
        let getNewMonth = (((getCurrentMonth+1)-1)+12)
        let printFinalMonth = getNewMonth - getM.value


        // get newYear
        let getNewYear = (getCurrentYear-1)-getY.value



        // to print final result
        printFinalResult.innerHTML = `Your age is ${getNewYear} years, ${printFinalMonth} months and ${printFinalDays} days.`
    }
    else{

        // get final days
        let printDays = getCurrentDate - getD.value

        
        // get Final months
        let printMonths = getCurrentMonth - getM.value
        

        // if printMonths variable returns negative num then go this condition
        if(printMonths<0){

            // print Final months
            let getUniqueMonth = (((getCurrentMonth+1)-1)+12)-getM.value

            // get unique year
            let getUniqueYear = (getCurrentYear-1)-getY.value


            // printFinalResult for user
            
            printFinalResult.innerHTML = `Your age is ${getUniqueYear} years, ${getUniqueMonth} months and ${printDays} days.`



        }
        else{
            let printUniqueMonths = getCurrentMonth - getM.value

            let printUniqueYears = getCurrentYear -getY.value


            // printFinalResult for user
            printFinalResult.innerHTML = `Your age is ${printUniqueYears} years, ${printUniqueMonths} months and ${printDays} days.`
        }
        
    }

})