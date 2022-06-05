
    


function spinner(){
    var i = Math.floor(Math.random() * 50);
    fetch("places.json")
        .then(response => response.json())
        .then(data => {
            document.querySelector("#destinationp").innerText = data[i].Place;
            document.querySelector("#destinationc").innerText = data[i].Country;
        });

}