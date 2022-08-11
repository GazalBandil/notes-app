console.log('welcome to notes app');

//add eventlistener to button and add the notes in local storage.

let addbtn = document.getElementById('addBtn');
addbtn.addEventListener('click', function (e) {

    let addText = document.getElementById('addText');
    let notes = localStorage.getItem("notes");

    if (notes == null) {
        notesObj = [];

    }
    else {
        notesObj = JSON.parse(notes);
    }
    notesObj.push(addText.value);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    addText.value = " "; //this is used to clear the notes written after adding it to the notes.
    //console.log(notesObj);

    showNotes();

})

// to add notes into card and show on the page.

function showNotes() {
    let notes = localStorage.getItem("notes");

    if (notes == null) {
        notesObj = [];

    }
    else {
        notesObj = JSON.parse(notes);
    }

    let html = " ";
    notesObj.forEach(function (element, index) {
        html += ` <div class="card my-2 mx-2" style="width: 16rem;">
        <div class="card-body">
          <h5 class="card-title">Note ${index + 1}</h5>
          <p class="card-text">${element}</p>
          <button class="btn btn-dark" id ="${index}" onclick="deleteNotes(this.id)" >delete</button>
        </div>
      </div>  `;
    });

    let notesElem = document.getElementById('notes');
    if (notesObj != 0) {
        notesElem.innerHTML = html;

    }
    else {
        notesElem.innerHTML = `Nothing to show, use add button to add notes!`
    }


}

//to delete notes.

function deleteNotes(index) {
    //console.log("i am deleting this notes", index);


    let notes = localStorage.getItem("notes");

    if (notes == null) {
        notesObj = [];

    }
    else {
        notesObj = JSON.parse(notes);
    }

    notesObj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    showNotes();
}

//search button function

let search = document.getElementById("searchTxt");
search.addEventListener("input", function() {

    let inputVal=search.value.ToLowerCase() ;
    //console.log("input event fired", inputVal);

    let noteCards= document.getElementsByClassName('noteCard');
    Array.from('noteCards').forEach(function(element){

        let cardTxt = element.getElementByTagName('p')[0].innerText;
        if(cardTxt.includes(inputVal)){
            element.style.display ="Block";

        }
        else{
            element.style.display ="none";
        }
        //console.log(cardTxt);

    })



})