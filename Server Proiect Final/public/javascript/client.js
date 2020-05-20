var etape;

async function deleteEntity(id) {

    console.log(id);
    fetch("/site/" + id, {
        method: 'DELETE',
        headers: {
            "Content-type": "application/json"
        },
    }).then(function (response) {
        response.json().then((resp) => {
            console.log("Recevied Matches:", resp);
        });
    });

    rezultate_html();
    /*var oReq = new XMLHttpRequest();
    oReq.onload = reqListener;
    oReq.onerror = reqError;
    await oReq.open('delete', 'http://localhost:3000/site/' , false);
    await oReq.send();

    location.reload();
    */
}

function reqListener() {
    etape = JSON.parse(this.responseText);
    //console.log(etape);
    var section = document.getElementsByTagName("section")[0];
    section.setAttribute("class", "fixtures");
    section.setAttribute("name", "menu");
    for (var i = 0; i < etape.length; i++) {
        //console.log(etape[i]);
        var nume_etapa = etape[i]["etapa"];
        var stema = etape[i]["stema"];
        var data = document.createElement("time");
        var id = etape[i]["id"];
        data.setAttribute("class", "date");
        // data.setAttribute("datetime", nume_etapa);
        var strong = document.createElement("strong");
        strong.innerText = nume_etapa;
        strong.setAttribute("class", "strong_rezultate");
        data.appendChild(strong);
        //console.log(data);
        //console.log(Rezultate_html_code);
        var div = document.createElement("div");
        div.setAttribute("class", "DataList");
        var divstema = document.createElement("div");
        divstema.setAttribute("class", "competionright");
        var span_stema = document.createElement("span");
        span_stema.setAttribute("class", "competionImage");
        var img = document.createElement("img");
        img.src = stema;
        span_stema.appendChild(img);
        divstema.appendChild(span_stema);
        div.appendChild(divstema);
        var ul = document.createElement("ul");
        var button = document.createElement("d");
        var button_edit = document.createElement("d");
        button.innerHTML = "<button type='button' id='delete_button' onclick='deleteEntity(\"" + id + "\")'>Sterge o Etapa</button>";
        button_edit.innerHTML = "<button type='button' id='edit_button' onclick='prepareEditEntity(\"" + id + "\")'>Editeaza o Etapa</button>";
        //button.setAttribute("id", "delete_button");
        //button.setAttribute("type", "button");
        //button.addEventListener("onclick", function () { deleteEntity(id) });
        ul.setAttribute("class", "MatchList");
        for (var j = 0; j < etape[i]["meciuri"].length; j++) {
            var echipa1 = etape[i]["meciuri"][j]["team1_name"];
            var echipa2 = etape[i]["meciuri"][j]["team2_name"];
            var li = document.createElement("li");
            li.setAttribute("class", "MatchContainer");
            var div_match = document.createElement("div");
            div_match.setAttribute("class", "Match");
            var span_overview = document.createElement("span");
            span_overview.setAttribute("class", "overview");
            var span_teams = document.createElement("span");
            span_teams.setAttribute("class", "Teams");
            //team1
            var div_team1 = document.createElement("div");
            div_team1.setAttribute("class", "Team1");
            var span_team_name = document.createElement("span");
            span_team_name.setAttribute("class", "teamName");
            span_team_name.innerText = echipa1;
            div_team1.appendChild(span_team_name);
            var span_badge = document.createElement("span");
            span_badge.setAttribute("class", "badge");
            var img = document.createElement("img");
            img.src = etape[i]["meciuri"][j]["team1_img"];
            span_badge.appendChild(img);
            div_team1.appendChild(span_badge);
            //score
            var span_score = document.createElement("span");
            span_score.setAttribute("class", "score");
            span_score.innerText = etape[i]["meciuri"][j]["rezultat"];
            //team2
            var div_team2 = document.createElement("div");
            div_team2.setAttribute("class", "Team2");
            var span_team_name = document.createElement("span");
            span_team_name.setAttribute("class", "teamName");
            span_team_name.innerText = echipa2;
            var span_badge = document.createElement("span");
            span_badge.setAttribute("class", "badge");
            var img = document.createElement("img");
            img.src = etape[i]["meciuri"][j]["team2_img"];
            span_badge.appendChild(img);
            div_team2.appendChild(span_badge);
            div_team2.appendChild(span_team_name);
            span_teams.appendChild(div_team1);
            span_teams.appendChild(span_score)
            span_teams.appendChild(div_team2);
            var div_stadium = document.createElement("div");
            div_stadium.setAttribute("class", "Stadium");
            var span_emblema = document.createElement("span");
            span_emblema.setAttribute("class", "emblema");
            var img = document.createElement("img");
            img.src = etape[i]["meciuri"][j]["stadion_img"];
            span_emblema.appendChild(img);
            var span_nume = document.createElement("span");
            span_nume.setAttribute("class", "numeStadion");
            span_nume.innerText = etape[i]["meciuri"][j]["stadion_name"];
            div_stadium.appendChild(span_emblema);
            div_stadium.appendChild(span_nume);
            span_overview.appendChild(span_teams);
            span_overview.appendChild(div_stadium);
            div_match.appendChild(span_overview);
            li.appendChild(div_match);
            ul.appendChild(li);
        }
        div.appendChild(data);
        div.appendChild(button);
        div.appendChild(button_edit);
        div.appendChild(ul);
        //console.log(div);
        section.insertBefore(div, section.childNodes[0]);
    }
    console.log(section);
}

function reqError(err) {
    console.log('Fetch Error :-S', err);
}

function randare() {
    //console.log(document.getElementsByTagName("h2")[0].innerText);
    var oReq = new XMLHttpRequest();
    oReq.onload = reqListener;
    oReq.onerror = reqError;
    oReq.open('get', 'http://localhost:3000/site', true);
    oReq.send();
}


async function addEditEntity() {
    if(document.getElementById("add_button").innerText == "Adauga")
        {
            document.getElementsByName("id").value = "";
        }
    var echipa1 = document.getElementsByName("echipa1")[0].value;
    var echipa2 = document.getElementsByName("echipa2")[0].value;
    var url_echipa1 = document.getElementsByName("url1")[0].value;
    var url_echipa2 = document.getElementsByName("url2")[0].value;
    var data = document.getElementsByName("data")[0].value;
    var rezultat = document.getElementsByName("rezultat")[0].value;
    var stadion = document.getElementsByName("stadion")[0].value;
    var id = document.getElementsByName("id").value;
    console.log(id);
    var id1 = "";
    var action = "post";

    if (id != "") {
        id1 = "/" + id;
        console.log(id1);
        action = "put";
    }

    console.log(action);
    var ob = {
        etapa: data,
        stema: "./img/titlubpl.jpg",
        meciuri: [
            {
                "team1_name": echipa1,
                "team1_img": url_echipa1,
                "team2_name": echipa2,
                "team2_img": url_echipa2,
                "rezultat": rezultat,
                "stadion_img": "./img/stadion.jpg",
                "stadion_name": stadion
            }
        ],
        id: id
    }
    console.log(ob);
    fetch("http://localhost:3000/site" + id1, {
        method: action,
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(ob)
    }).then(function (response) {
        response.json().then((resp) => {
            console.log("Recevied Matches:", resp);
        });
    });

    rezultate_html();
}

function prepareEditEntity(id) {
    add_html();
    var echipa1, echipa2, url_echipa1, url_echipa2, data, rezultat, stadion;
    var etapa;
    console.log(etape);
    for (var i = 0; i < etape.length; i++) {
        if (etape[i]["id"] == id) {
            etapa = etape[i];
            break;
        }
    }
    console.log(etapa);
    echipa1 = etapa["meciuri"][0]["team1_name"];
    echipa2 = etapa["meciuri"][0]["team2_name"];
    url_echipa1 = etapa["meciuri"][0]["team1_img"];
    url_echipa2 = etapa["meciuri"][0]["team2_img"];
    data = etapa["etapa"]
    rezultat = etapa["meciuri"][0]["rezultat"];
    stadion = etapa["meciuri"][0]["stadion_name"];
    document.getElementsByName("echipa1")[0].value = echipa1;
    document.getElementsByName("echipa2")[0].value = echipa2;
    document.getElementsByName("url1")[0].value = url_echipa1;
    document.getElementsByName("url2")[0].value = url_echipa2;
    document.getElementsByName("data")[0].value = data;
    document.getElementsByName("rezultat")[0].value = rezultat;
    document.getElementsByName("stadion")[0].value = stadion;
    document.getElementsByName("id").value = id;
    console.log(id);
    document.getElementById("cancel_button").hidden = false;
    document.getElementById("hidden_field").hidden = false;
    document.getElementById("add_button").innerText = "Edit";
    console.log(document.getElementsByName("id").value);
}

function cancelEditEntity() {
    document.getElementsByName("echipa1")[0].value = "";
    document.getElementsByName("echipa2")[0].value = "";
    document.getElementsByName("url1")[0].value = "";
    document.getElementsByName("url2")[0].value = "";
    document.getElementsByName("data")[0].value = "";
    document.getElementsByName("rezultat")[0].value = "";
    document.getElementsByName("stadion")[0].value = "";
    document.getElementsByName("id").value = "";
    document.getElementById("cancel_button").hidden = true;
    document.getElementById("hidden_field").hidden = true;
    document.getElementById("add_button").innerText = "Adauga";
    rezultate_html();
}
