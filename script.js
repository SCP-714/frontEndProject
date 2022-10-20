//add dj kahlid & another one in button

var joke1Container = $("#div1")
console.log(joke1Container[0])

var joke2Container = $("#div2")
console.log(joke1Container[0])

var wowContainer = $("#div3")
console.log(wowContainer[0])

$(".btn").click(function(){
    fetch('https://geek-jokes.sameerkumar.website/api?format=json')
    .then((response) => response.json())
    .then(data =>joke1Container[0].innerText = data.joke)
});


    $(".btn2").click(function(){
        console.log('still working')
        fetch('https://v2.jokeapi.dev/joke/Misc,Programming?format=json&safe-mode&type=single')
  .then((response) => response.json())
  .then(data =>joke2Container[0].innerText = data.joke);
    });


    $(".btn3").click(function(){
    fetch('https://owen-wilson-wow-api.herokuapp.com/wows/random')
    .then((response) => response.json())
    .then(data =>wowContainer[0].innerText = data[0].full_line);  
});


    // console.log('still working')
    // wowContainer[0].innerText = data[0].character