const firstInput = document.getElementById('searchInput')
const secondInput = document.getElementById('mediaInput')

firstInput.addEventListener('input', () => {
    secondInput.value = firstInput.value;
})

secondInput.addEventListener('input', () => {
    firstInput.value = secondInput.value;
})

function searchFilter() {
    var input, filter, ul, li, h3, i, txtValue;
    input = document.getElementById('searchInput');
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName('li');

    for (i = 0; i < li.length; i++) {
        h3 = li[i].getElementsByTagName("h3")[0];
        txtValue = h3.textContent || h3.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}

