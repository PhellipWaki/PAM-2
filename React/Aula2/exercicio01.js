 // Uma função que recebe 2 ou mais parametros e realize 
 // uma operação matemática qualquer 

    function mensagem (parametro1, parametro2){
        return console.log ("A sua mensagem é: ", parametro1, parametro2)
    }

    mensagem("Bom dia !" , "Boa Noite!")
    mensagem("Oi!" , "Tchau!")
    mensagem("Sim!" , "Não!")

    let a = 3
    let b = 4
    c = a + b 
     
    console.log("A reposta da soma é: ",c)

    function soma (n1,n2){

        let res = n1 + n2 
        
        return console.log('A soma dos números é: ',res)
    }

    return console.log(soma(2,3))