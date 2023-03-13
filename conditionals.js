// Use military time for var time.
function reward(time){
    if (time<1000) { //Wake up hour needs to be defined/given from Code-Challenge.
        console.log('Latte!');
    }
    if (time>=1000 && time<=1600) {
        console.log('hot chocolate');
    }
    if (time>=1600 && time<=2200) { //1600 will give both hot chocolate and ice cream. Instructions given in the Code-Challenge needs to be clarified.
        console.log('ice cream');
    }
    if (time>2200) {
        console.log('I don\'t want anything other than sleep!'); //After 2400 it rotates back to "Latte" time. Sleeping ours need to be defined to set parameter for "Latte".
    }
}

reward(0100);

// Feature 1
function reward(time, day){
    if (time<1000) {
        console.log('Latte!');
    }
    if (time>=1000 && time<=1600) {
        console.log('hot chocolate');
    }
    if (time>=1600 && time<=2200 && day==='Wednesday') {
        console.log('strawberry ice cream');
    } else{
        console.log('vanilla ice cream');
    }
    if (time>2200) {
        console.log('I don\'t want anything other than sleep!');
    }
}

reward(1700, 'Wednesday');

//Feature 2
function reward(time) {
  if (time < 1000) {
    console.log("Latte!");
  }
  if (time >= 1000 && time < 1500) {
    console.log("hot chocolate");
  }
  if ((time >= 1500 && time < 1600) || (time >= 1700 && time < 1800)) { //odd hours between 3-6pm will reward ice cream
    console.log("ice cream");
  } else if (time >= 1600 && time< 1700 || time >=1800 && time < 1900) { //even hours between 3-6pm will reward chocolate
      console.log("chocolate");
    }
  if (time >= 1900 && time <= 2200) {
    console.log("ice cream still");
  }
  if (time > 2200) {
    console.log("I don't want anything other than sleep!");
  }
}

reward(1600);

//Feature 3
/*
Building off Feature 2, I want my options for the 3pm - 6pm slot to be a random selection: if 
the time is even, I want my selections to be ice cream, cookies, or candy. If the time is odd, 
I want my selections to be hot chocolate, tea, or cake.

Hints:
What data type can hold a group of things?
You'll have to self-teach how to pick a random number from that group of things. Try 
using the phrases like "random number JavaScript" in a search engine to practice 
finding resources like a programmer!
*/
