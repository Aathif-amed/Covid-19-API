let h1 = document.createElement("h1");
h1.innerHTML = "Covid-19";
h1.classList.add("text-center", "mt-5", "p-1");

let div = document.createElement("div");
div.classList.add("text-center", "shawdow-lg", "d-flex", "justify-content-center", "m-1", "p-5");

let input = document.createElement("input");
input.classList.add("form-control", "col-4");

input.setAttribute("type", "text");
input.setAttribute("id", "country");
input.setAttribute("placeholder", "Country_Name");


let button = document.createElement("button");
button.setAttribute("type", "button");
button.classList.add("btn", "btn-outline-dark");
button.innerHTML = "Search";
button.addEventListener("click", foo);

div.append(input, button);
document.body.append(h1, div);
let div1 = document.createElement("div");
div1.classList.add("conatiner-fulid", "d-flex", "justify-content-center", "m-5", "p-5");
div1.innerHTML = " ";
document.body.append(div1);

async function foo() {

    try {
        let countryName = document.getElementById("country").value;
        let url = `https://api.covid19api.com/dayone/country/${countryName}`
        let data = await fetch(url);
        let data1 = await data.json();
        let i = data1.length - 1;
       
   
        div1.innerHTML = `<div class="card text-white bg-secondary mb-3" style="max-width: 18rem;">
                <div class="card-header">${data1[i].Country}</div>
                <div class="card-body">
                  <p class="card-text">Confirmed : ${data1[i].Confirmed}</p>
                  <p class="card-text">Deaths    : ${data1[i].Deaths}</p>
                  <p class="card-text">Recovered : ${data1[i].Recovered}</p>
                  <p class="card-text">Active    : ${data1[i].Active}</p>
                  </div>
              </div>`

    } catch (error) {
        console.log(error);
    }

}
foo();
