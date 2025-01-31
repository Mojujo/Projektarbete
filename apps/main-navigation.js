class Navigation extends HTMLElement {
    connectedCallback() {
        this.innerHTML =
            `
<div id="left-nav-container" class="">
    <nav class="left-sidebar">
        <a id="index" class="nav-link" href="index.html">
            <div class="nav-box">
                <img class="nav-icon" src="svg/home.svg" alt="home page">
                <h3 class="nav-title">Startsida</h3>
            </div>
        </a>
        <a id="engineering" class="nav-link" href="engineering.html">
            <div class="nav-box">
                <img class="nav-icon" src="svg/cog.svg" alt="engineering page">
                <h3 class="nav-title">Teknik</h3>
            </div>
        </a>
        <a id="about" class="nav-link" href="about.html">
            <div class="nav-box">
                <img class="nav-icon" src="svg/user.svg" alt="about me page">
                <h3 class="nav-title">Om mig</h3>
            </div>
        </a>
        <a id="contact" class="nav-link" href="contact.html">
            <div class="nav-box">
                <img class="nav-icon" src="svg/contact.svg" alt="contact me">
                <h3 class="nav-title">Kontakt</h3>
            </div>
        </a>
    </nav>
    <hr>
    <nav class="left-sidebar">
        <a class="nav-link contact" href="https://github.com/Mojujo">
            <div class="nav-box">
                <img class="nav-icon" src="svg/github-icon.svg" alt="github repo">
                <h3 class="nav-title">Github</h3>
            </div>
        </a>
        <a class="nav-link contact" href="tel:0739626755">
            <div class="nav-box">
                <img class="nav-icon" src="svg/phone.svg" alt="telephone number">
                <h3 class="nav-title">073-962 67 55</h3>
            </div>
        </a>
        <a class="nav-link contact" href="mailto:oscar.tornqvist@stud.sti.se">
            <div class="nav-box">
                <img class="nav-icon" src="svg/email.svg" alt="email address">
                <h3 class="nav-title">Skicka ett mail</h3>
            </div>
        </a>
        <a class="nav-link contact" href="CV.html">
            <div class="nav-box">
                <img class="nav-icon" src="svg/academic.svg" alt="academics">
                <h3 class="nav-title">Mina referenser</h3>
            </div>
        </a>
    </nav>
    <hr>
    <footer class="nav-footer">
        <p>© Copyright Oscar LLC <br> All rights reserved ©</p>
    </footer>
</div>
`
    }
}

customElements.define('main-navigation', Navigation);