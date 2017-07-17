function getUserInput() {
    var userInput = document.getElementById("userInput").value
    var nasaSearchEndpoint = "https://images-api.nasa.gov/search?q=" + userInput + "&media_type=image"
    // var nasaSearchEndpoint = "https://api.nasa.gov/planetary/apod?api_key=" + nasaApiKey + "?q=" + userInput

    console.log(userInput)

    fetch(nasaSearchEndpoint)
        .then(function(data) {
            return data.json()
        })
        .then(function(json) {
            console.log(json)
           
           //title
            var titlePath = json.collection.items["0"].data["0"].title
            var title = document.getElementById("caption").innerHTML= titlePath
            
            //picture
            var imgPath = json.collection.items["0"].links["0"].href
            var img = document.createElement("img")
            img.setAttribute("src", imgPath)
            document.body.appendChild(img)
            
            
            var desPath = json.collection.items["0"].data["0"].description
            var des = document.getElementById("description").innerHTML= desPath

        }
        )
        .catch(
            err=> {console.log(err)})
    // function myFunction() {
    // location.reload();
}

    //             //     // pull out just the image link that we want
    //             // var imgPath = json.data[0].images.fixed_height.url
    //             //     //mkae a new image in our html
    //             // var img = document.createElement("img")
    //             //     //set the image's source to be the link we just pulled out
    //             // img.setAttribute("src", imgPath)
    //             //     //put the image on the page
    //             // document.body.appendChild(img)
    //         })
    // }

    // var coders = ["Jenna", "London", "Krysten", "Caroline P.", "Anna", "Ally", "Regan",
    //     "Josie", "Stasia", "Molly", "Emma", "Emily", "Sydney", "Caroline G.", "Theresa", "Bella"
    // ]
    // coders.forEach(function(idx) {
    //     console.log(idx + " is an awesome coder!")
    // })