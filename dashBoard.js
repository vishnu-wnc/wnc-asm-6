const data = JSON.parse(localStorage.getItem(localStorage.getItem("default")));

console.log(data);

document.getElementsByTagName("h2")[0].innerHTML = data.familyName;
document.getElementsByTagName("h3")[0].innerHTML = data.name + " " + data.gender;

function addMember() {
    var newMemberName = document.getElementById("member-name").value.toString();
    var newMemberAge = document.getElementById("member-age").value.toString();
    var newMemberGender = document.getElementById("member-gender").value.toString();
    var newMemberRelation = document.getElementById("member-relation").value.toString();

    // console.log(newMemberName, newMemberAge, newMemberGender, newMemberRelation);
    data.relations.push({
        "name": newMemberName,
        "age": newMemberAge,
        "gender": newMemberGender,
        "relation": newMemberRelation
    });

    localStorage.setItem(localStorage.getItem("default"), JSON.stringify(data));
    console.log(data.relations);
}
for (let i = 0; i < data.relations.length; i++) {
    document.getElementById("family-list").appendChild(document.createTextNode(data.relations[i].name));
}
