
    function login(){

    var nomeEmpresa = ipt_nomeEmpresa.value;
    var senha = Number(ipt_senha.value);

    if(    
    nomeEmpresa.toLowerCase() == 'adriana florista ltda' ||
    
    nomeEmpresa.toLowerCase() == 'floresfloridas@gmail.com' ||

    nomeEmpresa.toLowerCase() == 'Lilian Nara' &&
    
    senha == 00000 

    ){
        window.location.href = "chartjsFIORE.html"
    }else{
        alert(`Email ou senha podem estar incorretos`)
    };

}
