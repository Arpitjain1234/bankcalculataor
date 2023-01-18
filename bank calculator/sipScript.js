
// amount
// rateOfReturn
// duration
// Duration (years): <select name="year" id=" duration" itemid="">/* <option value="1">1</option>
{/* <option value="2">2</option>
<option value="3">3</option>
<option value="4">4</option>
<option value="5">5</option>
<option value="6">6</option>
<option value="7">7</option>
<option value="8">8</option>
<option value="9">9</option>
<option value="10">10</option>
<option value="11">11</option>
<option value="13">13</option>
<option value="14">14</option>
<option value="15">15</option>
</select>  */}

function displayAmount(){

    p=document.getElementById("amount").value;                              //p = principal
    r=document.getElementById("rateOfReturn").value;                           // r = expected rate of return on the investment
    t=document.getElementById("duration").value;
    x=document.getElementById("netret");
    
        netAmount =  p* Math.pow((1+r/100),t);
        amountR = parseInt(netAmount);
        document.getElementById("amountfut").value = amountR;
        console.log(netAmount);

        var netReturn = (amountR-p)/p*100;
        console.log(netReturn);
        document.getElementById("netret").value = netReturn;
}
function reset(){
    document.getElementById("amount").value = '';                              //p = principal
    document.getElementById("rateOfReturn").value = '';                           // r = expected rate of return on the investment
    document.getElementById("duration").value = '';
    document.getElementById("amountfut").value = '';
    document.getElementById("netret").value = '';

}
