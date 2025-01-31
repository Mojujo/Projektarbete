class Header extends HTMLElement {
    connectedCallback() {
        this.innerHTML =
            `
<div id="background" class=""></div>
<div id="container" class="style-scope">
    <div id="start">
        <icon-button id="guide-button" toggleable="true" class="style-scope">
            <button onclick="showNavBar()" id="button" class="style-scope icon-button" aria-label="Guide"
                aria-pressed="true">
                <span class="icon-shape style-scope icon">
                    <img src="svg/guide.svg" alt="guide button">
                </span>
            </button>
        </icon-button>
        <topbar-logo class="style-scope logo">
            <a class="topbar-logo logopoint" id="logo" aria-label href="index.html" title="Teknikmagasinets Startsida">
                <div class="icon-shape">
                    <img class="logo-icon" src="pictures/logo.png" alt="Logo">
                    <h2 id="title">Teknikmagasinet</h2>
                </div>
            </a>
        </topbar-logo>
    </div>
    <div id="search-box-container" class="style-scope">
        <div role="search" class="search-box-component">
            <div class="search-box-component-input-box">
                <form action="/results" class="search-box-component-searchform">
                    <input id="searchInput" onkeyup="searchFilter()" name="search_query" type="text" autocomplete="off" aria-autocomplete="list" role="combobox"
                        class="search-box-component-input" aria-label="Search-box" aria-expanded="false"
                        placeholder="Sök">
                </form>
            </div>
            <button id="search-button" aria-label="Search" class="search-box-component-button" title="Sök">
                <button-icon>
                    <span class="icon-shape style-scope icon">
                        <img src="svg/search-button.svg" alt="search button">
                    </span>
                </button-icon>
            </button>
        </div>
    </div>
    <div id="end">
        <button onclick="mediaSearch()" aria-label="Mobile-Search" class="media-search-button" title="Sök">
            <button-icon>
                <span class="icon-shape style-scope icon">
                    <img src="svg/search-button.svg" alt="media search button">
                </span>
            </button-icon>
        </button>
    </div>
    <div id="media-search" role="search" class="media-search-box-component">
        <div class="media-search-component-input-box">
            <form action="/results" class="media-search-component-searchform">
                <input id="mediaInput" onkeyup="searchFilter()" name="search_query" type="text" autocomplete="off" aria-autocomplete="none" role="combobox"
                    class="media-search-input" aria-label="Media Search-box" aria-expanded="false"
                    placeholder="Sök . . .">
            </form>
        </div>
        <button onclick="mediaSearch()" aria-label="Cancel search" class="media-cancel-button" title="Cancel search">
            <button-icon>
                <span class="icon-shape style-scope icon">
                    <img src="svg/cancel.svg" alt="cancel search">
                </span>
            </button-icon>
        </button>
    </div>
</div>
`
    }
}

customElements.define('main-header', Header);