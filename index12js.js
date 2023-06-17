function homePage() {

    window.location.href = "index.html";
  } 
  
  
  
  document.addEventListener("DOMContentLoaded", function() {
    var cards = localStorage.getItem("cards");
    var cardContainer = document.getElementById("card-container");
  
    if (cards) {
      var parsedCards = JSON.parse(cards);
  
      parsedCards.forEach(function(card, index) {
        var newDiv = document.createElement('div');
        newDiv.classList.add('card');
        newDiv.style.width = "300px";
        newDiv.style.height = "220px";
        newDiv.style.backgroundColor = "rgb(169, 169, 169)";
        newDiv.style.color = "black";
        newDiv.style.padding = "10px";
        newDiv.style.position = "relative";
  
        var heading = document.createElement('h2');
        heading.textContent = "Word: " + card.word;
  
        var details = document.createElement("div");
        details.classList.add("details");
        details.style.padding = "10px";
        details.style.fontFamily = "Verdana";
        details.style.fontSize = "14px";
  
        var paragraph = document.createElement('p');
        paragraph.textContent = card.meaning;
  
        //var deleteButton = document.createElement("button");
        var image =document.createElement('img');
        image.src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmAsWMLv_Cy2-nxsx49EJxxHAe6u_4Zruk5A&usqp=CAU';
        image.style.width="30px";
        image.style.height="30px";
        image.style.position = "absolute"; 
        image.style.bottom = "10px"; 
        image.style.right = "10px"; 
        image.style.cursor = "pointer";
        
        //deleteButton.appendChild(image);
        image.addEventListener("click", function() {
          parsedCards.splice(index, 1);
          localStorage.setItem("cards", JSON.stringify(parsedCards));
          cardContainer.removeChild(newDiv);
        });
  
        details.appendChild(heading);
        details.appendChild(paragraph);
        details.appendChild(image);
        newDiv.appendChild(details);
        cardContainer.appendChild(newDiv);
      });
    }
  });