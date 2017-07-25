function androidd() {
  for (var i = 0; i < android.length; i++) {
    if(i%3===0) {
      var row = document.createElement('div');
      row.className = "row";
      row.id = "android-row-" + i/3;

      $('#androiddev').append(row);

    } 
    var holder = document.createElement('div');
    holder.className = "col s12 m4";

    var card = document.createElement('div');
    card.className = "card";

    var cardimg= document.createElement('div');
    cardimg.className="card-image waves-effect waves-block waves-light";
    card.appendChild(cardimg);

    var image = document.createElement('img');
    image.src = "images/projects/" + android[i].image;
    image.className = "activator";
    image.style = "width: 100%; height: 300px"

    cardimg.appendChild(image);

    var cardcc = document.createElement('div');
    cardcc.className = "card-content deep-purple darken-2";

    var cardtitle=document.createElement('span');
    cardtitle.className="card-title activator white-text";
    cardtitle.innerHTML=android[i].title;

    var para =document.createElement('p');
    para.className="paraweb";

    var links = document.createElement('a');
    links.title="Link to Github:";
    links.href=android[i].linkg;
    links.className="yellow-text";
    links.innerHTML = "Link to Github Repository";

    var icon=document.createElement('i');
    icon.className="material-icons right";
    icon.innerText="more_vert";

    cardtitle.appendChild(icon);
    para.appendChild(links);
    card.appendChild(cardcc);
    cardcc.appendChild(cardtitle);
    cardcc.appendChild(para);


    var cardreveal=document.createElement('div');
    cardreveal.className="card-reveal purple lighten-4";

    var revealtitle=document.createElement('span');
    revealtitle.className="card-title grey-text text-darken-4";
    
    var revealicon= document.createElement('i');
    revealicon.className="material-icons right";
    revealicon.innerText="close";

    var revealcont=document.createElement('p');
    revealcont.innerHTML=android[i].details;
    revealcont.className="revealcont";


    cardreveal.appendChild(revealtitle);
    revealtitle.appendChild(revealicon);
    cardreveal.appendChild(revealcont);
    card.appendChild(cardreveal);

    holder.appendChild(card);

    card.id = "android-"+i;


    $('#android-row-'+parseInt(i/3)).append(holder);
  }
}