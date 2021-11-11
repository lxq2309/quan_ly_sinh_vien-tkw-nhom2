var check_name = /^[A-Za-z]/;
function checknull(txt){
    if(txt.value.length==0)
        return true;
    else    
        return false;
}

function stringMatch(txt, reg){
    return reg.test(txt.value);
}


function validform(f){
    if(checknull(f.fullname)){
        alert("Bạn chưa nhập tên !")
        f.fullname.focus();
        return;
    }

    if(!stringMatch(f.fullname, check_name)){
        alert("Bạn nhập tên chưa đúng định dạng !");
        f.fullname.focus();
        return;
    }
}
