Contact_html_code =
`
<section name="menu">
        <div class="container">
            <form id="contact" name="inserare_formular" action="inserare_formular.php" method="post">
                <h3>Parerea voastra conteaza!</h3>
                <h4>Veti primi un raspuns in mai putin de 24 de ore</h4>
                <fieldset>
                    <input name="nume" placeholder="Nume si Prenume" type="text" tabindex="1" required autofocus>
                </fieldset>
                <fieldset>
                    <input name="mail" placeholder="Email Adress" type="email" tabindex="2" required>
                </fieldset>
                <fieldset>
                    <input name="telefon" placeholder="Numarul de telefon" type="tel" tabindex="3" required>
                </fieldset>
                <fieldset>
                    <input name="nationalitatea" placeholder="Nationalitatea" type="text" tabindex="4" required>
                </fieldset>
                <fieldset>
                    <textarea name="parerea" placeholder="Lasati-ne parerea aici" tabindex="5" required></textarea>
                </fieldset>
                <fieldset>
                    <button name="submit" type="submit" id="contact-submit" data-sumbit="...Sending">Submit</button>
                </fieldset>
            </form>
        </div>
    </section>
`

function contact_html() {
    document.getElementsByTagName("link")[0].href = "./css/stylecontact.css";
    document.getElementsByTagName("h2")[0].innerText = "Contact";
    var wrapper = document.getElementById("wrapper");
    wrapper.innerHTML = Contact_html_code;
}