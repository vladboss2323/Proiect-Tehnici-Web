Clasament_html_code =
    `
<input class="culoare" placeholder="Culoare">
<button onclick="local_storage_change_color()">Schimba culoarea textului</button>
<section name="menu">
        <div class="clasament">
            <table>
                <tr>
                    <th>Pozitia</th>
                    <th>Echipa</th>
                    <th>Meciuri Jucate</th>
                    <th>Golaveraj</th>
                    <th>Puncte</th>
                </tr>
                <tr>
                    <td>1</td>
                    <td><img src="./img/liverpool.png"> Liverpool</td>
                    <td>22</td>
                    <td>40</td>
                    <td>57</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td><img src="./img/manchestercity.png"> Manchester City </td>
                    <td>22</td>
                    <td>42</td>
                    <td>53</td>

                </tr>
                <tr>
                    <td>3</td>
                    <td><img src="./img/tottenham.png"> Tottenham</td>
                    <td>22</td>
                    <td>24</td>
                    <td>48</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td><img src="./img/chelsea.png"> Chelsea </td>
                    <td>22</td>
                    <td>23</td>
                    <td>47</td>
                </tr>
                <tr>
                    <td>5</td>
                    <td><img src="./img/arsenal.png"> Arsenal </td>
                    <td>22</td>
                    <td>14</td>
                    <td>41</td>
                </tr>
                <tr>
                    <td>6</td>
                    <td><img src="./img/manchesterunited.png"> Manchster United</td>
                    <td>22</td>
                    <td>12</td>
                    <td>41</td>
                </tr>
                <tr>
                    <td>7</td>
                    <td> <img src="./img/watford.png"> Watford </td>
                    <td>22</td>
                    <td>0</td>
                    <td>32</td>
                </tr>
                <tr>
                    <td>8</td>
                    <td> <img src="./img/leicester.png"> Leicester </td>
                    <td>22</td>
                    <td>1</td>
                    <td>31</td>
                </tr>
                <tr>
                    <td>9</td>
                    <td> <img src="./img/westham.png"> West Ham </td>
                    <td>22</td>
                    <td>-2</td>
                    <td>31</td>
                </tr>
                <tr>
                    <td>10</td>
                    <td> <img src="./img/everton.png"> Everton</td>
                    <td>22</td>
                    <td>2</td>
                    <td>30</td>
                </tr>
                <tr>
                    <td>11</td>
                    <td> <img src="./img/wolves.png"> Wolves </td>
                    <td>22</td>
                    <td>-5</td>
                    <td>29</td>
                </tr>
                <tr>
                    <td>12</td>
                    <td><img src="./img/bournemouth.png"> Bournemouth</td>
                    <td>22</td>
                    <td>-11</td>
                    <td>27</td>
                </tr>
                <tr>
                    <td>13</td>
                    <td> <img src="./img/brighton.png"> Brighton </td>
                    <td>22</td>
                    <td>-6</td>
                    <td>26</td>
                </tr>
                <tr>
                    <td>14</td>
                    <td> <img src="./img/crystalpalace.png"> Crystal Palace </td>
                    <td>22</td>
                    <td>-8</td>
                    <td>22</td>
                </tr>
                <tr>
                    <td>15</td>
                    <td> <img src="./img/burnley.png"> Burnley </td>
                    <td>22</td>
                    <td>-20</td>
                    <td>21</td>
                </tr>
                <tr>
                    <td>16</td>
                    <td> <img src="./img/southampton.png"> Southampton</td>
                    <td>22</td>
                    <td>-16</td>
                    <td>19</td>
                </tr>
                <tr>
                    <td>17</td>
                    <td> <img src="./img/cardiff.png"> Cardiff </td>
                    <td>22</td>
                    <td>-22</td>
                    <td>19</td>
                </tr>
                <tr>
                    <td>18</td>
                    <td> <img src="./img/newcastle.png"> Newcastle </td>
                    <td>22</td>
                    <td>-15</td>
                    <td>18</td>
                </tr>
                <tr>
                    <td>19</td>
                    <td> <img src="./img/fulham.png"> Fulham </td>
                    <td>22</td>
                    <td>-29</td>
                    <td>14</td>
                </tr>
                <tr>
                    <td>20</td>
                    <td> <img src="./img/huddersfield.png"> Huddersfield</td>
                    <td>22</td>
                    <td>-24</td>
                    <td>11</td>
                </tr>
            </table>
        </div>
    </section>
`

function echipe_html() {
    document.getElementsByTagName("link")[0].href = "./css/styleechipe.css";
    document.getElementsByTagName("h2")[0].innerText = "Clasament";
    var wrapper = document.getElementById("wrapper");
    wrapper.innerHTML = Clasament_html_code;
    console.log(localStorage.getItem("culoare"));
    if (!localStorage.getItem("culoare") || localStorage.getItem("culoare") === "") {
        var data = document.getElementsByTagName("th");
        for (var i = 0; i < data.length; i++) {
            data[i].style.color = "black";
        }
        var data = document.getElementsByTagName("td");
        for (var i = 0; i < data.length; i++) {
            data[i].style.color = "black";
        }
    }
    else {
        var data = document.getElementsByTagName("th");
        for (var i = 0; i < data.length; i++) {
            data[i].style.color = localStorage.getItem("culoare");
        }
        var data = document.getElementsByTagName("td");
        for (var i = 0; i < data.length; i++) {
            data[i].style.color = localStorage.getItem("culoare");
        }
    }
}

function local_storage_change_color() {
    var culoare = document.getElementsByClassName("culoare")[0].value;
    localStorage.setItem("culoare", culoare);
    console.log(localStorage.getItem("culoare"));
    echipe_html();
}