function myFunction() {
    var name = document.getElementById("first-name").value.toString();
    var familyName = document.getElementById("family-name").value.toString();
    var username = document.getElementById("username").value.toString();
    var gender = document.getElementById("gender-select").value.toString();

    const data = {
        "name": name,
        "familyName": familyName,
        "gender": gender,
        "relations": [],
    }

    console.log(data);

    localStorage.setItem(username, JSON.stringify(data));
    localStorage.setItem("default", username);
}