function currAED(val){
    document.getElementById("us").value = val / 3.67;
    document.getElementById("ru").value = val * 20.33;
    document.getElementById("ko").value = val * 323.15;
}

function currUSD(val){
    document.getElementById("dhs").value = val * 3.67;
    document.getElementById("ru").value = val * 55.33;
    document.getElementById("ko").value = val * 1187.15;
}

function currINR(val){
    document.getElementById("dhs").value = val / 20.33;
    document.getElementById("us").value = val / 55.33;
    document.getElementById("ko").value = val * 15.85;
}

function currKRW(val){
    document.getElementById("dhs").value = val / 323.15;
    document.getElementById("us").value = val / 1187.15;
    document.getElementById("ru").value = val / 15.85;
}