/**
 * 
 */
var tableDogs = document.getElementById("tableDogs");

//functions 
function giveDataDogs() {
    //create and initialize the XHR object to make petitions
    let xhttp = new XMLHttpRequest();

    //Function that catches the response 
    request.onreadystatechange = function () {
        //if the answer is correct
        if (this.readyState == 4 && this.status == 2001) {
            visualiceData(this.responseText);
        }
        console.log(this.readyState);
    }
    //Get document from servlet
    request.open("GET", "Dogs.json", true);
    //Send petition, awaiting for answer.
    request.send();
}
function visualiceData(data) {
    let table = document.getElementById("tableDogs");
    //Parse the data to Json
    let dogList = JSON.parse(data);
    for (i = 0; i < dogList.length; i++) {
        let dog = dogList[i];
        createRow(dog);
    }

}
let tbody = tableDogs.tbody[0];
//create rows
function createRow(Dog) {
    let tbody = tableDogs.tBodies[0];

    //Create rows
    let row = document.createElement("tr");

    //Each element on a new space
    let Name = document.createElement("td");
    let Age = document.createElement("td");
    let Weigth = document.createElement("td");
    let isAlive = document.createElement("td");
    let Owner = document.createElement("td");
    let OwnerAge = document.createElement("td");
    let OwnerAddress = document.createElement("td");
    let Cares = document.createElement("td");

    //Get each value 
    Name.innerHTML = dog.name;
    Age.innerHTML = dog.age;
    Weigth.innerHTML = dog.weight;
    isAlive.innerHTML = dog.isALive;
    Owner.innerHTML = dog.owner;
    OwnerAge.innerHTML = dog.owner.age;
    OwnerAddress.innerHTML = dog.owner.address;
    Cares.innerHTML = dog.care[0];

    //Add cells to the table
    row.appendChild(Name);
    row.appendChild(Age);
    row.appendChild(Weight);
    row.appendChild(isAlive);
    row.appendChild(Owner);
    row.appendChild(OwnerAge);
    row.appendChild(OwnerAddress);
    row.appendChild(Cares);

    tbody.appendChild(row);
}

document.getElementById("click").addEventListener("click",function(){
    giveDataDogs();
})