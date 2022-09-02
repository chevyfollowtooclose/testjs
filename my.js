function testGS(){

    const url = "https://script.google.com/macros/s/AKfycbzigTRUyaSrejUAJwIO-_vpAscHQA3dwuawl7baoVBLgw4zyWaS/exec"


    fetch(url)
        .then(d => d.json())
        .then(d => {
            document.getElementById("app").textContent= d[0].status;
        });
}

document.getElementById("btn").addEventListener("click",testGS);

