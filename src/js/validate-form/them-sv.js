var check_name = /^[A-Za-z]/;
function checknull(txt){
    if(txt.value.length==0)
        return true;
    else    
        return false;
}

function notCheck(radio){
    var rt=true;
    for(i=0;i<radio.length; i++)
        if(radio[i].checked)
            rt=false;
    return rt;
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



    if(checknull(f.data)){
        alert("Bạn chưa nhập ngày sinh !")
        f.data.focus();
        return;
    }
    
    if(checknull(f.native_place)) 
    {
        alert("Bạn chưa chọn quê quán !");
        return;
    }

    if(checknull(f.faculty)) 
    {
        alert("Bạn chưa chọn khoa !");
        return;
    }

    if(checknull(f.grade)) 
    {
        alert("Bạn chưa chọn khoá !");
        return;
    }

    if(checknull(f.class)) 
    {
        alert("Bạn chưa chọn lớp !");
        return;
    }

    if(notCheck(f.gender)){
        alert("Bạn chưa chọn giới tính !");
        return;
    }

    alert("Thêm sinh viên thành công !");
}
