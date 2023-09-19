$(document).ready(function() {
    // jQuery in here
    $("button").on("click", function() {
        const randomNumber = Math.ceil(Math.random() * 88)
        $.get(`https://rawcdn.githack.com/akabab/starwars-api/0.2.1/api/id/${randomNumber}.json`, function(data) {
            $("h1.name").text(data['name'])
            $(".character-img").attr("src", data['image'])
        })
    })
})