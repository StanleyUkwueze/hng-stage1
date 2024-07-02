var typed= new Typed(".text", {
    strings: ["Frontend Developer", "Web Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop:true
})

console.log("first")


// document.addEventListener('DomContentLoaded', () => {
//     img = document.getElementById('slackProfilePicture');
//     img = addEventListener('load', (ev) =>{
//         console.log('width', img.width)
//     })
//     img = addEventListener('error', (error) =>{
//         console.log('error')
//     })

//     document.querySelector('h1').addEventListener('click', (ev)=>{
//         let num = Math.floor(Math.random() * 410) + 100; //100 and 500
//         console.log('num', num)
//         img.src = `images/profile-pic.jpeg/${num}/${num}/?ramdom`
//     })
// })

document.addEventListener("DOMContentLoaded", function() {
    const img = document.getElementById("slackProfilePicture");

    img.addEventListener('load', function() {
        const naturalWidth = img.naturalWidth;
        const naturalHeight = img.naturalHeight;

        console.log(`Natural Width: ${naturalWidth}, Natural Height: ${naturalHeight}`);
        
        // Now you can use these values as needed
        img.dataset.naturalWidth = naturalWidth;
        img.dataset.naturalHeight = naturalHeight;
    });

   

    img.src = img.src; // Trigger the load event if the image is already cached
});

var today = new Date()
var day = today.getDay()
var dayList = [ "Sunday", "Monday", "Tuesday", "Wensday", "Thursday", "Friday", "Saturday"]
document.getElementById('currentDay').innerHTML = "Posted on : " + dayList[day] + ","
console.log("Today is : " + dayList[day] )
console.log(today)
var hour = today.getHours()
var minute = today.getMinutes()
var second = today.getSeconds()
console.log(hour + ":" + minute + ":" + second)
document.getElementById('currentTimeUTC').innerHTML = "Time : " + hour + ":" + minute + ":" + second