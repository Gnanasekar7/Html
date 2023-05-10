function v1fun(){
    
    var uname= document.getElementById("uname").value;
    var uwpd= document.getElementById("upwd").value;

    if(uname==null || uname==""){
        document.getElementById("errorbox").innerHTML="please enter user name";
        return false;
    }
    if(uwpd==null || uwpd==""){
        document.getElementById("errorbox").innerHTML="please enter password";
        return false;
    }
    if(uname!=''&& uwpd!=''){
        alert("login successful");
    }
}
