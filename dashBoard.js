const data = JSON.parse(localStorage.getItem(localStorage.getItem("default")));

console.log(data);

document.getElementsByTagName("h2")[0].innerHTML = data.familyName;
document.getElementsByTagName("h3")[0].innerHTML = data.name + " " + data.gender;

var table = document.getElementById("family-table");

window.onload = function()
{
    for(let i = 0; i < data.relations.length; i++){
        let row = table.insertRow(1);
        
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        cell1.innerHTML= data.relations[i].name;
        cell2.innerHTML= data.relations[i].age;
    }
}


/**
 * Taking all value from fields and push them into a data variable 
 */
function addMember() {
    var newMemberName = document.getElementById("member-name").value.toString();
    var newMemberAge = document.getElementById("member-age").value.toString();
    var newMemberGender = document.getElementById("member-gender").value.toString();
    var newMemberRelation = document.getElementById("member-relation").value.toString();

    data.relations.push({
        "name": newMemberName,
        "age": newMemberAge,
        "gender": newMemberGender,
        "relation": newMemberRelation
    });

    localStorage.setItem(localStorage.getItem("default"), JSON.stringify(data));

    var row = table.insertRow(1);
    
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    cell1.innerHTML= newMemberName;
    cell2.innerHTML= newMemberAge;

    // location.reload();
    console.log(data.relations);
}

/**
 * Triggered on clicking add member button and make add member page visible and hides that button
 */

function openAddWindow(){
    document.getElementById("add-member-page").style.visibility="visible";
    document.getElementById("add-member-button").style.visibility="hidden"
}


/**
 * Triggered on clicking close button on add member page, hides add member page and make add member button visible
 */
function closeAddWindow(){
    document.getElementById("add-member-page").style.visibility="hidden";
    document.getElementById("add-member-button").style.visibility="visible";
}

