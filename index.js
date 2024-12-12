
/**
 * Retrieving data from input field from login page and pushing them into local storage
 * @returns null if any of field is empty
 */
function myFunction() {
    var fname = document.getElementById("first-name").value.toString();
    var familyName = document.getElementById("family-name").value.toString();
    var username = document.getElementById("username").value.toString();
    var gender = document.getElementById("gender-select").value.toString();
    var dateOfBirth = document.getElementById("dob").value.toString();

    if (fname == "" || familyName == "" || username == "" || gender == "Please select a Gender") {
        alert("Please fill all the fields");
        return;
    }

    const data = {
        "name": fname,
        "familyName": familyName,
        "gender": gender,
        "dob": dateOfBirth,
        "relations": [],
    }
    console.log(data);

    /**
     * If users is already present then doesnt change the previous relation
     */
    if (localStorage.getItem(username) == null) {
        localStorage.setItem(username, JSON.stringify(data));
        localStorage.setItem("default", username);
    }
    else {
        mainData = JSON.parse(localStorage.getItem(username));
        data.relations = mainData.relations;
        localStorage.setItem(username, null);
        localStorage.setItem(username, JSON.stringify(data));
        localStorage.setItem("default", username);
    }

    window.location.href = "dashBoard.html";
}
