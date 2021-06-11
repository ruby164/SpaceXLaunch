// api url
const api_url =
    "https://api.spacexdata.com/v3/launches?limit=100";

// Defining async function
async function getapi(url) {

    // Storing response
    const response = await fetch(url);

    // Storing data in form of JSON
    var data = await response.json();
    console.log(data);
    if (response) {
        hideloader();
    }
    show(data);
}
// Calling that async function
getapi(api_url);

// Function to hide the loader
function hideloader() {
    document.getElementById('loading').style.display = 'none';
}
// Function to define innerHTML for HTML table
function show(data) {
    let tab =
        ``;

    // Loop to access all rows
    for (let key of Object.keys(data)) {
        tab += `<div class="product">
        <div class="product-caption">
         
	<a href="">${key.mission_name} </a>
    <p><strong>Mission Ids:</strong></p>
	        <ul>
                <li>${key.mission_id}</li>
            </ul>
            <p><strong>Launch Year:</strong> ${key.launch_year}</p>
            <p><strong>Succefull Launch:</strong>${key.launch_success}</p>		
            <p><strong>Succefull Landing:</strong> ${key.launch_landing}</p>		
            </div> </div>`;
    }
    // Setting innerHTML as tab variable
    document.getElementById("launchingdata").innerHTML = tab;
}