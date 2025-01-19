function showNavBar() {
    document.getElementById("left-nav-container").classList.toggle("active");
    document.getElementById("master").classList.toggle("scroll-lock")

    if (document.URL.includes("index.html")) {
        document.getElementById("index").classList.toggle("active")
    } else if (document.URL.includes("engineering.html")) {
        document.getElementById("engineering").classList.toggle("active")
    } else if (document.URL.includes("about.html")) {
        document.getElementById("about").classList.toggle("active")
    } else if (document.URL.includes("contact.html")) {
        document.getElementById("contact").classList.toggle("active")
    }
}