function buildKeyboard() {
    const layout = document.getElementById("layout").value;
    const switchType = document.getElementById("switchType").value;
    const keycapMaterial = document.getElementById("keycapMaterial").value;
    const customText = document.getElementById("customText").value;

    document.getElementById("result").innerText = `Wybrałeś klawiaturę: ${layout}, przełączniki: ${switchType}, nakładki: ${keycapMaterial}, tekst na spacji: ${customText}`;
}
