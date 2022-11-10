class Utente {
    constructor(_log, _cancella) {
        this.log = _log;
    }
}

document.getElementById('log').addEventListener('click', (e) => {
    e.preventDefault();
    let nuovoUser = document.getElementById('user').value;

let newLogin = new Utente(nuovoUser);
    localStorage.setItem('utente', JSON.stringify(newLogin));

});

document.getElementById('cancella').addEventListener('click', (e) => {
    localStorage.clear();

});