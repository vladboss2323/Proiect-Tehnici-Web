ADD_html_code =
`
<div class="container">
    <form id="contact">
        <h3>Adaugati o noua etapa</h3>
        <fieldset>
            <input  name="data" placeholder="Data_etapa" type="text" tabindex="2" required>
        </fieldset>
        <fieldset>
            <input  name="echipa1" placeholder="Nume_echipa_1" type="text" tabindex="1" required autofocus>
        </fieldset>
        <fieldset>
            <input name="echipa2" placeholder="Nume_echipa_2" type="text" tabindex="2" required>
        </fieldset>
        <fieldset>
            <input name="url1" placeholder="Img_echipa1" type="text" tabindex="2" required>
        </fieldset>
        <fieldset>
            <input name="url2" placeholder="Img_echipa2" type="text" tabindex="3" required>
        </fieldset>
        <fieldset>
            <input name="rezultat" placeholder="Rezultat" type="text" tabindex="4" required>
        </fieldset>
        <fieldset>
            <textarea name="stadion" placeholder="Nume_stadion" tabindex="5" required></textarea>
        </fieldset>
        <fieldset hidden>
            <textarea name="id" placeholder="ID" tabindex="5" required></textarea>
        </fieldset>
        <fieldset>
        <button  onclick="addEditEntity()"  id="add_button" type="button">Adauga</button>
        </fieldset>
        <fieldset id ="hidden_field" hidden>
        <button onclick="cancelEditEntity()" id="cancel_button" hidden>Cancel</button>
        </fieldset>
    </form>
</div>
`

function add_html() {
    document.getElementsByTagName("link")[0].href = "./css/stylecontact.css";
    document.getElementsByTagName("h2")[0].innerText = "Adauga o noua etapa";
    var wrapper = document.getElementById("wrapper");
    wrapper.innerHTML = ADD_html_code;
}