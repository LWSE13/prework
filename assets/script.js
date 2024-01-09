var topics = ["HTML", "CSS", "Git", "Javascript"];
var randomTopic = topics[Math.floor(Math.random() * topics.length)];

function listtopics(){
    for (var x = 0; x < topics.length; x++) {
        console.log(topics[x]);
    }
}


function selecttopic(){
    if (randomTopic === "HTML") {
        console.log ("let's study HTML");
      }  else if (randomTopic === "CSS") {
        console.log ("let's study CSS");
      } else if (randomTopic === "Git") {
        console.log ("let's study Git");
      } else if (randomTopic === "javascript") {
        console.log ("let's study javascript");
      } else {
        console.log ("try again")
      }
}
console.log('Here are the topics we learned through Prework:');
listtopics()
console.log('Which topic should we study first?');
selecttopic()