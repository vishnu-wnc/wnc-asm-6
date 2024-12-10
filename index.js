const mainName = [];
const familyName = [];
const gender = [];

function initial(){
    mName = document.getElementById("first-name").value.toString();
    fName = document.getElementById("family-name").value.toString();
    gen = document.getElementById("gender-select").value.toString()

    mainName.push(mName);
    familyName.push(fName);
    gender.push(gen);
    console.log(mainName);
    console.log(familyName);
    console.log(gender);

    var counter = familyName.length-1;

    for(let i = 0; i < familyName.length; i++)
    {
        if(fName == mainName) counter = i;
    }

    localStorage.setItem("counter", JSON.stringify(counter));
    localStorage.setItem("mainName", JSON.stringify(mainName));
    localStorage.setItem("familyName", JSON.stringify(familyName));
    localStorage.setItem("gender", JSON.stringify(gender));
}
