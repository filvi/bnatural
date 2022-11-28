window.onload = loadNotes();


function loadNotes() {
    
    if (!document.contains(document.querySelector("#homenotes"))) {
        return;  
    }  
    
    function playAudio(url, octave) {
        const PARTIAL_URL = "/assets/sounds/";
        console.log("playing", url, url * octave)
        new Audio(`${PARTIAL_URL}key${String(url + 12 * octave).padStart(2, "0")}.mp3`).play();
    }

    var octave = 0;
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
    
    


    function playC(){       playAudio(1  , octave)}
    function playCsharp(){  playAudio(2  , octave)}
    function playD(){       playAudio(3  , octave)}
    function playDsharp(){  playAudio(4  , octave)}
    function playE(){       playAudio(5  , octave)}
    function playF(){       playAudio(6  , octave)}
    function playFsharp(){  playAudio(7  , octave)}
    function playG(){       playAudio(8  , octave)}
    function playGsharp(){  playAudio(9  , octave)}
    function playA(){       playAudio(10  , octave)}
    function playAsharp(){  playAudio(11 , octave)}
    function playB(){       playAudio(12 , octave)}


    function setListeners(){
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
    }




    
    function removeListeners(){
        C.removeEventListener("click",         playC)
        Csharp.removeEventListener("click",    playCsharp)
        D.removeEventListener("click",         playD)
        Dsharp.removeEventListener("click",    playDsharp)
        E.removeEventListener("click",         playE)
        F.removeEventListener("click",         playF)
        Fsharp.removeEventListener("click",    playFsharp)
        G.removeEventListener("click",         playG)
        Gsharp.removeEventListener("click",    playGsharp)
        A.removeEventListener("click",         playA)
        Asharp.removeEventListener("click",    playAsharp)
        B.removeEventListener("click",         playB)

    }

    // Start the listening -----------------------------------------------------
    setListeners(octave);
    
    const OCTAVE_NODE = document.getElementById('octave');
    const OCTAVE_DOWN_LINK = "/assets/img/extra/Octave-down.white.svg";
    const OCTAVE_UP_LINK = "/assets/img/extra/Octave-up.white.svg";
    const OCTAVE_ICON = document.getElementById('octaveIcon')
    OCTAVE_NODE.addEventListener("click", switchOctave)
    
    function switchOctave(){
        
        // remove all the Listeners to create new one
        removeListeners(octave)
        
        
        // change the iscon and the dataset
        if(OCTAVE_NODE.dataset.octave == "0"){
            octave = 1      
            OCTAVE_ICON.src = OCTAVE_DOWN_LINK;
        } else {
            octave = 0;
            OCTAVE_ICON.src = OCTAVE_UP_LINK;
        }
        OCTAVE_NODE.dataset.octave = octave;
        
        setListeners(octave);

    }
}


