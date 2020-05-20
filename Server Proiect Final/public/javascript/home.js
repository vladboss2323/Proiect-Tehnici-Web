Home_html_code =
    `
    <section id="boxes" name="menu">
        <div class="container">
            <div class="box">
                <img src="./img/video.jpg" >
                    <button  onclick = "stiri_html()" class="btn">Stiri</button>
                <p>Aici puteti gasi cele mai noi stiri despre Premier League</p>
            </div>
            <div class="box">
                <img src="./img/video.jpg">
                    <button onclick = "meciuri_html()" class="btn">Meciuri</button>
                <p>Aici puteti meciurile si derbyurile din etapele viitoare din Premier League</p>
            </div>
            <div class="box">
                <img src="./img/video.jpg">
                    <button onclick = "contact_html()" class="btn">Contact</button>
                <p>Aici ne puteti lasa parerea dumneavoastra</p>
            </div>
        </div>
    </section>
`

function home_html() {
    document.getElementsByTagName("link")[0].href = "./css/stylehome.css";
    document.getElementsByTagName("h2")[0].innerText = "Home";
    var wrapper = document.getElementById("wrapper");
    wrapper.innerHTML = Home_html_code;
}