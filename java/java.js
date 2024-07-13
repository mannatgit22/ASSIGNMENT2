const searchfun = () => {
    let filter=document.getElementById('myinput').value.toUppercase();
    let mytable=document.getElementById('mytable');
    let tr = mytable.getElementsByTagName('tr');
    for(var i=0;i<tr.length;i++){
        let td=tr[i].getElementsByTagName('td')[0];
        if(td){
            let textvalue=td.textContent || td.innerHTML;
            if(textvalue.toLocaleUpperCase().indexOf(filter)> -1){
                tr[i].style.display= "";
            }else{
                    tr[i].style.display="none";
                }
            
        }
    }

}





document.querySelectorAll('.edit-icon').forEach(icon => {
    icon.addEventListener('click', () => {
        const input = icon.previousElementSibling;
        input.removeAttribute('readonly');
        input.focus();
    });
});