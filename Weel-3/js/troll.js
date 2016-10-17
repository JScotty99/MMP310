alert ("I don't know why you'd choose this as a time-waister");
alert ("Like honestly why are you still here?");
alert ("Is a patience really a virtue if there's nothing to wait for?");
alert ("You should turn back now to save yourself the braincells");
alert ("Like seriously, srsly dood, leave it alone");
alert ("ZA WARUDO! Toki yo tomare!");
alert ("I can keep this up all day my doods");
alert ("Congrats! After spending seconds of your life that could have been used on something actually productive, you've finallly unlocked...nothing.");

var hiddenWord = document.getElementById('post');

var itemContent = hiddenWord.innerHTML;

hiddenWord.addEventListener("click",function(event){
    console.log(event);
    hiddenWord.innerHTML = itemContent + " They're just words.";
}); 

var dioDa = document.getElementById('dio').style.visibility = "hidden";
 
addEventListener("click",function(event){
    console.log(event);
    alert("You thought a funny image would be your reward. But...")
    document.getElementById('dio').style.visibility = "visible";
});

