function genPass(length, upper, number, special) {
    let chars = "abcdefghijklmnopqrstuvwxyz";
    if (upper) {
        chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    if (number) {
        chars += "0123456789";
    }
    if (special) {
        chars += "!@#$%^&*";
    }
    let password = "";
    for (let i = 0; i < length; i++) {
        let random = Math.floor(Math.random() * chars.length);
        password += chars[random];
    }
    return password;
}
function generate() {
    const len = parseInt(document.getElementById("len").value);
    const upper = document.getElementById("upper").checked;
    const nums = document.getElementById("nums").checked;
    const special = document.getElementById("special").checked;

    const pass = genPass(len, upper, nums, special);
    document.getElementById("passOut").textContent = pass;
}
function reset() {
    document.getElementById("len").value = 12;
    document.getElementById("upper").checked = true;
    document.getElementById("nums").checked = true;
    document.getElementById("special").checked = true;
    document.getElementById("passOut").textContent = "Your password will appear here";
}