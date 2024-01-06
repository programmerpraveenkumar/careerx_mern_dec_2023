 // localStorage->data ll be always there.until users uninstll or delete
        // sessionStorage->data ill be removed when user closes the browser or the tab.
        
        //
        // sessionStorage.setItem("user_token","dfgergergdgergter");
//shud contain only javascript code.
console.log(localStorage.getItem("user_token"));
console.log(sessionStorage.getItem("user_token"));

localStorage.removeItem("user_token");
sessionStorage.removeItem("user_token");
function store(){
    let val = document.getElementById("txt").value;
    localStorage.setItem("user_token",val);
    // localStorage.setItem("user_token1",val);
}