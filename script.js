function bubble(){
    var clutter = "";
for (var i = 1; i < 134; i++){
   var rm = Math.floor(Math.random() * 10);
    clutter += `<div class="bubble">${rm}</div>`;
}
document.querySelector("#pan-btm").innerHTML = clutter;
}

var timer = 60;
function runtimer() {
    var setinter = setInterval(function () {
        if (timer > 0) {
        timer--;
        document.querySelector("#timeval").textContent = timer;
        }
        else {
            clearInterval(timer);//here i am stoping the time interval after surpassing the alloted time interval.
            document.querySelector("#pan-btm").innerHTML = `<h1>Game Over</h1>`;
        }
        
    },1000)
}
var rn = 0; // i am creating the variable outside the below function bcz due to accessable reasons can't acess a local variable globally.
function getNewHit() {
    rn = Math.floor(Math.random() * 10);
    document.querySelector("#hitval").textContent = rn;
}

var score = 0;
function increaseScore() {
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}

//Event-bubling :
//jispe click karoge wo element par event raise hoga, aur  event listner na milne par event element ke parent par listner dhundega
//woha bhi na milne par event parent ke parent ke parent par listner dhundega.

document.querySelector("#pan-btm").addEventListener("click", function (dets) {
    // alert("chal raha hai"); abhi hume ye pata karna hai ki jispe humne click kia hai wo kya hai toh uske liye dets.target use karsakte hai ye hume find karke dega ki hum kispe cilck kiye hai.
    var clickedNumber = Number(dets.target.textContent);
    //from this i will get a div contains the elements in it but if i need text the i should add dets.target.textcontent--->from this i will get the content inside the div.But i will get output as string need to convert it to number by Number(dets.target.textcontent) Now i will get ouput as number .
    if (clickedNumber == rn) {
        increaseScore();
        //now i need to refresh the hit value and bubbles so for that just call the function that has created.
        getNewHit();
        bubble();
    }
   // so now after the time completion we can able to play,so we need to stop the game after certain time intervel that has been allocated.
});


getNewHit();
runtimer();
bubble();
