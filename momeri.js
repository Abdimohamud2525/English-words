let words = JSON.parse(localStorage.getItem("momerizword")) || []

let startIndex = 0
let countIndex = 5

function maindivDisplay() {

    const displayList = document.querySelector(".dispaly-list");

    const batch = words.slice(startIndex, startIndex + countIndex);
    startIndex += countIndex

    batch.forEach(element => {
        const wordData = `<h1> ${element.word} </h1>
            <p> <strong>definition: </strong>${element.definition}</p>
            <p> <strong>examples: </strong>${element.examples.join("<br>")}</p>
            <p> <strong>synonyms: </strong>${element.synonyms}</p>
            <p> <strong>antonyms: </strong>${element.antonyms}</p>`

        displayList.innerHTML += wordData
    });
}

maindivDisplay()

window.addEventListener('scroll', () => {

    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        console.log("scoroll")
        maindivDisplay()
    }
});