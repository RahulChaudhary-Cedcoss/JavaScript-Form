
    function verify() {
        var Age;
        Age = parseInt(document.getElementById("age").value);
        var wt;
        var wt = parseInt(wt);
        wt = document.getElementById("wt").value;
    if (Age>=5 && Age <=7){
        if(wt<15){
            alert("Under Weight");
        }
        else if (wt>=15 && wt<=20) {
            alert("Average Weight");
        }
        else if(wt>20) {
            alert("Over Weight");
        }
    }
    if (Age>=8 && Age<=10) {
        if(wt<21){
            alert("Under Weight");
        }
        else if (wt>=21 && wt<=25) {
            alert("Average Weight");
        }
        else if(wt>25) {
            alert("Over Weight");
        }
    }
    if (Age>=11 && Age<=15) {
        if(wt<26){
            alert("Under Weight");
        }
        else if (wt>=26 && wt<=30) {
            alert("Average Weight");
        }
        else if(wt>30) {
            alert("Over Weight");
        }
    }
    if (Age>=16 && Age<=20) {
        if(wt<31){
            alert("Under Weight");
        }
        else if (wt>=31 && wt<=40) {
            alert("Average Weight");
        }
        else if(wt>40) {
            alert("Over Weight");
        }
    }
    else {
        alert("Please enter valid inputs :")
    }
    
}
