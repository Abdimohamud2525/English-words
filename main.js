document.querySelector("#btn").addEventListener("click", async function () {


    // let select elements
    const input = document.querySelector(".input").value
    const option = document.querySelector("#option").value
    const result = document.querySelector(".result")

    let response = await fetch("/words.json");
    let words = await response.json()
    let wordData = words.find(currentword => currentword.word === input)

    if (!wordData) {

        result.innerHTML = `<h1> not found </h1>`
    }

    let html = `<h1> ${wordData.word}`
    if (option === "definition" || option === 'All') {

        html += `<p> <strong>definition: </strong>${wordData.definition}</p>`
    }
    if (option === "examples" || option === 'All') {

        html += `<p> <strong>examples: </strong>${wordData.examples}</p>`
    }
    if (option === "synonyms" || option === 'All') {

        html += `<p> <strong>synonyms: </strong>${wordData.synonyms}</p>`
    }
    if (option === "antonyms" || option === 'All') {
        html += `<p> <strong>antonyms: </strong>${wordData.antonyms}</p>`
    }

    html += `<input type = "checkbox"  id = "momerizword-${wordData.word}"> momerize this word`
    result.innerHTML = html
    //search for this localStorage word if you can't find it return []
    let momerizword = JSON.parse(localStorage.getItem("momerizword")) || []
    const index = momerizword.map(e => e.word).indexOf(wordData.word);
    document.querySelector(`#momerizword-${wordData.word}`).checked = index > -1;
    // addeventlistener to check input
    document.querySelector(`#momerizword-${wordData.word}`).addEventListener("change", function (e) {



        //search for this localStorage word if you can't find it return []
        let momerizword = JSON.parse(localStorage.getItem("momerizword")) || []


        if (e.target.checked) {
            //if you can't find this word in the word, then just add it
            const index = momerizword.map(e => e.word).indexOf(wordData.word);
            console.log(index)
            if (index === -1)
                momerizword.push(wordData)
        } else {

            // remove from the list 
            // 1. check from the list
            // 2. remove from the list
            const index = momerizword.map(e => e.word).indexOf(wordData.word);
            if (index > -1) {
                momerizword.splice(index, 1)
            }
        }
        localStorage.setItem("momerizword", JSON.stringify(momerizword))
    })
    // let put local storage

})