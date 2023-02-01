  <script>
    function expovalue()  
    {
  var a = main_form.answer.value;
  var b = (prompt("Please,type the exponent.Your answer will appear here"));
  //b = parseInt(b);
  
var expoanswer=Math.pow(a,b); 
alert(expoanswer);

document.getElementById("calc").innerHTML= expoanswer;

}
</script>
