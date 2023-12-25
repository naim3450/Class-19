let year = 18
let gender = "Meal"
let Nation = "Bangladesh"
let city = "Dhaka"

if(year>=18){
    if(gender== "Meal"){
       if(Nation== "Bangladesh"){
        if(city== "Dhaka"){
            console.log("Youre Selected")
           }
           else{
            console.log("City Dosesn't Match")
           }
       }
       else{
        console.log("Nationality Dosesn't Match")
       }
    }
    else{
        console.log("Gender Dosesn't Match")
    }
}
else{
    console.log("18+")
}