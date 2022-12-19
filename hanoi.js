resolver_tower_of_hanoi = function (a, b, c, n) {

    // terminating condition
    if (n <= 0) {
        return
    }

    resolver_tower_of_hanoi(a, c, b, n - 1);

    const paragraf = document.createElement('p');
    paragraf.innerHTML = `Muta disc-${n} de la ${a} la ${b}`
    zonaRulare.appendChild(paragraf);

    resolver_tower_of_hanoi(c, b, a, n - 1);
}

iaNumarDiscuri = function () {
    const input = document.getElementById('input');
    const valoare = input.value;
    if(isNaN(valoare) || valoare < 1) {
        alert("Introduceti un numar intreg intre 1 si n");
        return;
    }
    resolver_tower_of_hanoi('A', 'B', 'C', valoare);
}

reseteaza = function () {
    zonaRulare.innerHTML = "";
}

const zonaRulare = document.getElementById('zona-rulare');

const buton = document.getElementById('buton');
buton.addEventListener('click', iaNumarDiscuri);

const reset = document.getElementById('reseteaza');
reset.addEventListener('click', reseteaza);