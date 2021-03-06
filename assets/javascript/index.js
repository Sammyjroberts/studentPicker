const students = [
    "github.com/aaronsy1",
    "github.com/alexmrtnz",
    "github.com/ngbaoan123",
    "github.com/blakelmason",
    "github.com/bwarner88",
    "github.com/GreatestDane",
    "github.com/muon012",
    "github.com/ngbaoan123",
    "github.com/ehab47",
    "github.com/siscooo",
    "github.com/hanbanana",
    "github.com/Jase180x",
    "github.com/Jesstrej",
    "github.com/tedhuh",
    "github.com/mariomenjr",
    "github.com/mthumphrey88",
    "github.com/jojonesss",
    "github.com/palmersk",
    "github.com/rs01247",
    "github.com/artoodeeto",
    "github.com/ramaro24",
    "github.com/tghazal"
   ]

function findStudent() {
    
    
        //randomly grabbing studet's username
        const randomStudent = students[Math.floor(Math.random() * students.length)];
        const userName = randomStudent.split(".com/").pop();

                // //remove students who were already called    
        const index = students.indexOf(randomStudent);
        if (index > -1) students.splice(index, 1); 
        //api call to github to grab username and picture
        fetch('https://api.github.com/users/' + userName)
        .then(data => data.json())
        .then(data => {
            console.log(data)

            //check if null ? "true":"false";
            const displayName = data.name ? data.name : userName;
            
            document.getElementsByTagName('h1')[1].innerHTML = displayName;
            document.getElementsByTagName('img')[0].src = data.avatar_url;
        })
        if(students.length === 0) document.getElementsByTagName('h1')[0].innerHTML = 'Last Question'
}

document.getElementsByTagName('span')[1].addEventListener('click', findStudent)
