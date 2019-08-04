function f_name() {
   
    var num = document.f1.mobile.value;
 
     
    
	if(isNaN(num)) {
        alert("enter numeric value only in mobile no");
        document.f1.mobile.focus;
        return false;
    }
    else if(num.length < 10 || num.length > 10) {
        alert("enter valid mobile number");
         document.f1.num.focus;
        return false;
    }


}
