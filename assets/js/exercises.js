window.onload = loadNotes();


function loadNotes() {
    
    if (!document.contains(document.querySelector("#homenotes"))) {
        return;  
    }  
    
    function playAudio(item, number, octave) {
        const PARTIAL_URL = "/assets/sounds/";
        item.dataset.selected = item.dataset.selected == "false" ? "true" : "false";
        new Audio(`${PARTIAL_URL}key${String(number + octave * 12).padStart(2, "0")}.mp3`).play();
    }

    // first row of octaves
    const C       = document.getElementById("C");
    const Csharp  = document.getElementById("Csharp");
    const D       = document.getElementById("D");
    const Dsharp  = document.getElementById("Dsharp");
    const E       = document.getElementById("E");
    const F       = document.getElementById("F");
    const Fsharp  = document.getElementById("Fsharp");
    const G       = document.getElementById("G");
    const Gsharp  = document.getElementById("Gsharp");
    const A       = document.getElementById("A");
    const Asharp  = document.getElementById("Asharp");
    const B       = document.getElementById("B");

    // second row of octaves
    const C2       = document.getElementById("C2");
    const Csharp2  = document.getElementById("Csharp2");
    const D2       = document.getElementById("D2");
    const Dsharp2  = document.getElementById("Dsharp2");
    const E2       = document.getElementById("E2");
    const F2       = document.getElementById("F2");
    const Fsharp2  = document.getElementById("Fsharp2");
    const G2       = document.getElementById("G2");
    const Gsharp2  = document.getElementById("Gsharp2");
    const A2       = document.getElementById("A2");
    const Asharp2  = document.getElementById("Asharp2");
    const B2       = document.getElementById("B2");
    



    // Function for lower octave
    function playC(){       playAudio(this, 1, 0)}
    function playCsharp(){  playAudio(this, 2, 0)}
    function playD(){       playAudio(this, 3, 0)}
    function playDsharp(){  playAudio(this, 4, 0)}
    function playE(){       playAudio(this, 5, 0)}
    function playF(){       playAudio(this, 6, 0)}
    function playFsharp(){  playAudio(this, 7, 0)}
    function playG(){       playAudio(this, 8, 0)}
    function playGsharp(){  playAudio(this, 9, 0)}
    function playA(){       playAudio(this, 10, 0)}
    function playAsharp(){  playAudio(this, 11, 0)}
    function playB(){       playAudio(this, 12, 0)}

    // Function for higher octave
    function playC2(){       playAudio(this, 1, 1)}
    function playCsharp2(){  playAudio(this, 2, 1)}
    function playD2(){       playAudio(this, 3, 1)}
    function playDsharp2(){  playAudio(this, 4, 1)}
    function playE2(){       playAudio(this, 5, 1)}
    function playF2(){       playAudio(this, 6, 1)}
    function playFsharp2(){  playAudio(this, 7, 1)}
    function playG2(){       playAudio(this, 8, 1)}
    function playGsharp2(){  playAudio(this, 9, 1)}
    function playA2(){       playAudio(this, 10, 1)}
    function playAsharp2(){  playAudio(this, 11, 1)}
    function playB2(){       playAudio(this, 12, 1)}

    // Event listeners for the lower octave
    C.addEventListener("click",         playC)
    Csharp.addEventListener("click",    playCsharp)
    D.addEventListener("click",         playD)
    Dsharp.addEventListener("click",    playDsharp)
    E.addEventListener("click",         playE)
    F.addEventListener("click",         playF)
    Fsharp.addEventListener("click",    playFsharp)
    G.addEventListener("click",         playG)
    Gsharp.addEventListener("click",    playGsharp)
    A.addEventListener("click",         playA)
    Asharp.addEventListener("click",    playAsharp)
    B.addEventListener("click",         playB)
    
    // Event listeners for the higher octave
    C2.addEventListener("click",         playC2)
    Csharp2.addEventListener("click",    playCsharp2)
    D2.addEventListener("click",         playD2)
    Dsharp2.addEventListener("click",    playDsharp2)
    E2.addEventListener("click",         playE2)
    F2.addEventListener("click",         playF2)
    Fsharp2.addEventListener("click",    playFsharp2)
    G2.addEventListener("click",         playG2)
    Gsharp2.addEventListener("click",    playGsharp2)
    A2.addEventListener("click",         playA2)
    Asharp2.addEventListener("click",    playAsharp2)
    B2.addEventListener("click",         playB2)




}


