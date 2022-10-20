let joke1Container = document.querySelector("#firstJoke")
console.log(joke1Container)

let joke2Container = document.querySelector("#secondJoke")

let owenCharacter = document.querySelector("#owenCharacter")

let owenVideo = document.querySelector("#owenMovie")


    $("#firstJokeButton").click(function(){
        console.log('still working')
        fetch('https://geek-jokes.sameerkumar.website/api?format=json')
    .then((response) => response.json())
    .then(data =>joke1Container.innerText = data.joke)
    });


    $("#secondJokeButton").click(function(){
        console.log('still working')
        fetch('https://v2.jokeapi.dev/joke/Misc,Programming?format=json&safe-mode&type=single')
    .then((response) => response.json())
    .then(data =>joke2Container.innerText = data.joke);
    });



    $("#owenButton").click(function(){
       $.get('https://owen-wilson-wow-api.herokuapp.com/wows/random',(data) =>owenCharacter.innerText =data[0].character)
       wowData()
      });
    



     function wowData(data){
      console.log(data)   


    }
    
    
    
