console.log("Linked.");

// Dramatis Personae
var hobbits = [
'Frodo Baggins',
'Samwise \'Sam\' Gamgee',
'Meriadoc \'Merry\' Brandybuck',
'Peregrin \'Pippin\' Took'
];

var buddies = [
'Gandalf the Grey',
'Legolas',
'Gimli',
'Strider',
'Boromir'
];

var lands = ['The Shire', 'Rivendell', 'Mordor'];
var body = document.querySelector('body');


// Part 1


function makeMiddleEarth() {
  // create a section tag with an id of middle-earth
  var midEarthSectEle = $("<section id = \"middle-earth\"></section>")
  // add each land as an article tag
  lands.forEach( function (ele, ind, arr) {
    midEarthSectEle.append("<article></article>")

  // inside each article tag include an h1 with the name of the land
  midEarthSectEle.find(":last").append("<h1>"+ ele +"</h1>")
  // append middle-earth to your document body
  $("body").append(midEarthSectEle)
} )
}
makeMiddleEarth()


// Part 2

function makeHobbits() {
  // display an unordered list of hobbits in the shire (which is the second article tag on the page)
  // give each hobbit a class of hobbit
  var hobbitList = $("<ul></ul>")
  hobbits.forEach( function (ele,ind,arr) {
    hobbitList.append("<li>" + ele + "</li>")
    hobbitList.find(":last").addClass("hobbit")
  })
  $("article:eq(0) ").append(hobbitList) 
}
makeHobbits()

// Part 3

function keepItSecretKeepItSafe() {
  // create a div with an id of 'the-ring'
  // give the div a class of 'magic-imbued-jewelry'
  // add an event listener so that when a user clicks on 
  //   the ring, the nazgulScreech function (provided) is 
  //   invoked.
  // add the ring as a child of Frodo
  var ring = $("<div></div>")
  ring.addClass("magic-imbued-jewelry")
  ring.on('click', nazgulScreech)
  $("li:eq(0)").append(ring)
}

keepItSecretKeepItSafe()

// Part 4


function makeBuddies() {
  // create an aside tag
  // attach an unordered list of the 'buddies' in the aside
  // insert your aside as a child element of rivendell
  var aside = $("<aside></aside>")
  var buddylist = $("<ul></ul>")
  buddies.forEach( function(ele,ind,arr) {
    buddy = $("<li>" + ele + "</li>")
    buddylist.append(buddy)
  })
  $("h1:contains('Rivendell')").after(buddylist)
}

makeBuddies()
// Part 5


function beautifulStranger() {
  // change the 'Strider' textnode to 'Aragorn'
  $("li:contains('Strider')").text('Aragorn')
}

beautifulStranger()


// Part 6

function leaveTheShire() {
  // assemble the hobbits and move them to Rivendell
  $("h1:contains('Rivendell') + ul").append($(".hobbit"))
}

leaveTheShire()

// Part 7


function forgeTheFellowShip() {
  // create a new div called 'the-fellowship' within rivendell
  // add each hobbit and buddy one at a time to 'the-fellowship'
  // after each character is added make an alert that they have joined your party
  var rivendell = $("h1:contains('Rivendell')") //note: selects only the h1
  rivendell.after($("<div class = the-fellowship></div>"))
  rivendell.siblings("ul").find("li").each( function (index,ele) {
    alert( ele.textContent + " is joining the Fellowship!")
    rivendell.siblings("div").append(ele)
  })

}

forgeTheFellowShip()

// Part 8


function theBalrog() {
  // change the 'Gandalf' textNode to 'Gandalf the White'
  // apply style to the element
  // make the background 'white', add a grey border
  gandalf = $("li:contains('Gandalf')")
  gandalf.text("Gandalf the White")
  gandalf.css("background","white")
  gandalf.css("border","1px solid grey")
}

theBalrog()

// Part 9

function hornOfGondor() {
  // pop up an alert that the horn of gondor has been blown
  // Boromir's been killed by the Uruk-hai!
  // put a linethrough on boromir's name
  // Remove Boromir from the Fellowship
  alert("The Horn of Gondor has been blown!")
  $("li:contains('Boromir')").css("text-decoration","line-through")
  $("li:contains('Boromir')").remove()
}

hornOfGondor()

// Part 10

function itsDangerousToGoAlone(){
  // take Frodo and Sam out of the fellowship and move them to Mordor
  // add a div with an id of 'mount-doom' to Mordor
  mordor = $("h1:contains('Mordor')").parent() //returns the article
  mordor.append($("li:contains('Frodo')"), $("li:contains('Sam')"))
  mordor.append("<div id = mount-doom></div>")
}

itsDangerousToGoAlone()

// Part 11

function weWantsIt() {
  // Create a div with an id of 'gollum' and add it to Mordor
  // Remove the ring from Frodo and give it to Gollum
  // Move Gollum into Mount Doom
  mordor = $("h1:contains('Mordor')").parent() //returns the article
  mordor.append("<div id = gollum></div>")
  mordor.find("#gollum").append($(".magic-imbued-jewelry"))
  mordor.find("#mount-doom").append($("#gollum"))
}

weWantsIt()

// Part 12

function thereAndBackAgain() {
  // remove Gollum and the Ring from the document
  // remove all the baddies from the document
  // Move all the hobbits back to the shire
  $("#gollum").remove
  shire = $("h1:contains('Shire')").parent()
  $("h1:contains('Rivendell')").siblings().remove()
  shire.append($(".hobbit"))
}

thereAndBackAgain()
