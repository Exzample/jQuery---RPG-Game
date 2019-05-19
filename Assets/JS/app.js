$(document).ready(function() {
  //jQuery CDN loaded?//
  console.log("Hello jQuery");
  //create a newContainer div with jQuery
  //$(selector).add(element,context)
  var containerDiv = $("<div></div>");
  // Creates a new container div and appends to the body"
  $("body").prepend(containerDiv);
  // Adds the background image to the body//
  $("body").css("background-image", "url(./Assets/Images/BodyBackground.jpg)");
  // Create nested Div inside of container for character choices to sit in
  var userChoiceDiv = $("<div><h1>Click to Choose your Character</h1></div>");
  $(containerDiv).append(userChoiceDiv);
  $(userChoiceDiv).addClass("userChoiceContainer");
  // Adds the class "Container" to the first div
  $(containerDiv).addClass("Container");
  // Sets the background-color of the container div
  $(containerDiv).css("rgba(113, 194, 241, 0.904)");
  // Creates a new div that says, "Heroes go in here"
  var heroDiv = $('<div><h2 class="textHeader">Heroes go in here</h2></div>');
  // Appends the heroDiv as a child of the containerDiv
  $(userChoiceDiv).append(heroDiv);
  // Gives the heroDiv a class of heroContainer
  $(heroDiv).addClass("heroContainer");
  // Sets the background-color of the div
  $(".heroContainer").css("background-color", "rgb(255, 255, 255)");
  //Placing user avatar <img> in the .heroContainer
  var userAvatar = $('<div id="userChoice"></div>');
  $(heroDiv).append(userAvatar);
  var V = $(
    $("<img>", {
      id: "V",
      src: "./Assets/Images/V-Emoji.jpg"
    })
  );
  $("#userChoice").append(V);
  // Creates new div to place villians//
  var villianChoiceDiv = $(
    '<div><h2 class="textHeader">Villians go here!</h2></div>'
  );
  // Appends the villianDiv to the containerDiv
  $(userChoiceDiv).append(villianChoiceDiv);
  // Gives villianDiv the class of villianContainer
  $(villianChoiceDiv).addClass("villianContainer");
  // Setsd the background-color of the div
  $(".villianContainer").css("background-color", "rgb(218, 49, 49)");
  // Placing villians avatar <img> in the villianContainer
  var NEO = $(
    $("<img>", {
      id: "NEO",
      src: "./Assets/Images/neo_png.png"
    })
  );
  $(villianChoiceDiv).append(NEO);
  // Create Battle Area //
  var battleAreaDiv = $("<div></div>");
  $(containerDiv).append(battleAreaDiv);
  $(battleAreaDiv).addClass("battleAreaContainer");
  // Create dumping ground for stats to post after each round//
  var statsDiv = $(
    '<div id="stats" class="statsContainer textHeader"><h2>Stats</h2></div>'
  );
  $(battleAreaDiv).append(statsDiv);
  //$(battleArea).css('background-color','rgb(255,255,255)');

  // Create 3 cards where opponents will travel to when they battle//
  var characterBattle = $(
    '<div><h2 class="textHeader">Your Character</h2></div>'
  );
  $(battleAreaDiv).append(characterBattle);
  $(characterBattle).addClass("userBattleContainer");
  var battleVersus = $('<button id="attack">Attack</button>');
  $(battleAreaDiv).append(battleVersus);
  $(battleVersus).addClass("versusContainer");
  var villianBattle = $('<div><h2 class="textHeader">Your Opponent</h2></div>');
  $(battleAreaDiv).append(villianBattle);
  $(villianBattle).addClass("villanBattleContainer");
  // now you need to create avatars and buttons for the characters//
  // game can't start until the user selects hero and villan//

  $("#userChoice").on("click", function() {
    $(".userBattleContainer").append(V);
  });
  $("#NEO").on("click", function() {
    $(".villanBattleContainer").append(NEO);
  });
  // TODO once the players are selected we need to turn on the functionality of the #Attack <btn> //
  // if user clicks the #Attack button 3 things should happen Hero health should be depleated by 10 // villian health should be depleated by 15; and the #stats <div> should display Hero HP = 90,80,70,60 Villian HP = 85, 70, 55, 40,etc

  // Variables for Health and Attack Points //
  villianHealth = 100;
  heroHealth = 100;
  heroAttack = 15;
  villianAttack = 10;
  var userAttack = (villianHealth -= 15);
  var villianAttack = (heroHealth -= 10);

  // This only works one time; I need the attack "click" event to decrement the Hero and Villian Health//
  // Other options may be to create a "character object"
  var hero = {
    healthPoints: 100,
    attackPoints: 15
  };
  var villian = {
    healthPoints: 100,
    attackPoints: 10
  };

  $("#attack").on("click", function(e) {
    var heroHealth = hero.healthPoints;
    var villianHealth = villian.healthPoints;
    if (heroHealth != 0 || villianHealth != 0) {
      // return heroHealth - villian.attackPoints;
      // console.log(heroHealth);
      // Math(villianHealth - hero.attackPoints);
      // console.log(villianHealth);
      $("#stats").text(
        "Hero HP: " + heroHealth + "| Villain HP: " + villianHealth + "!"
      );
    } else {
      // How I would end the game //
      // if (heroHealth  || villianHealth === 0){
      alert("The Hero Won the game");
      // I would also like to toggle show/hide a Restart Button//
      //Create Reset Button //
      /*
                var reset = $("'<button id="Reset">Reset</button>'").text("Reset");
                $(reset).show();
                alert("You won the game!");
                $("#container").hide();
                $('#reset').show();
                $(reset).on("click", () => {
                $()
                })
                */
    }
  });
});
