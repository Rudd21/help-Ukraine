function funFun() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let town = document.getElementById("town").value;
    let blob = new Blob([name, email, phone, town], { type: "text/plain" });
    let link = document.createElement("a");
    link.setAttribute("href", URL.createObjectURL(blob));
    link.setAttribute("download", Date.now() + "");
    link.click();
}