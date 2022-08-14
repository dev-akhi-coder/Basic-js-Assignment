// provlem solved-1//
// radianToDegree//

function radianToDegree(radians) {
    let pi = Math.PI;
  
    return radians * (180/pi);  
 }
// console.log(radianToDegree(10).toFixed(2));
// console.log(radianToDegree(25).toFixed(2));
// console.log(radianToDegree(199).toFixed(2));




// problem solved-2//
// isJavaScriptFile//

function isJavaScriptFile(jsfile){
    return jsfile.endsWith(".js")
 let fileName = app.js;
 let fileName1 = js.png;
 let fileName2 = image.js.png;
 let fileName3 = image.jpg.js;
}
// console.log(isJavaScriptFile("app.js"));
// console.log(isJavaScriptFile("js.png"));
// console.log(isJavaScriptFile("image.js.png"));
// console.log(isJavaScriptFile("image.jpg.js"));


// Problem solved-3//
//  oilPrice//
function oilPrice(dijel, petrol , octane){
    let sum = (dijel*114) + (petrol*130) + (octane*135);
     return sum;
 }
//     let dijel = 1;
//     let petrol = 1;
//     let octane = 1;
//   console.log(oilPrice(dijel, petrol, octane));

// Problem solved-4
//  publicBusFare //
function publicBusFare (totalPeople){
    if(totalPeople >=50){
        buslimit = 50, publicBusPeople= 0;
        reminder  = totalPeople %  buslimit;
        if (reminder > 11){
            publicBusPeople = r % buslimit;
            //  console.log(publicBusPeople);
        }
        else{
            publicBusPeople= reminder;
            //  console.log(reminder);
        }
        return publicBusPeople*250;
    }
    else{
        return 0;
    }
}
    // let totalPeople = 55;
    // console.log(publicBusFare(totalPeople));


// Problem solved-5
// isbBestFriend//

    function isbBestFriend(person1, person2){
    if(person1.name == person2.friend && person2.name == person1.friend){
        return true;

    }
    else{
        return false;
    }
}

//     let person1 = {name:"aklima", friend:"akhi"};
//     let person2 = {name:"akhi", friend:"aklima"};

// console.log(isbBestFriend(person1, person2));