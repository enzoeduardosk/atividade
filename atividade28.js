m5 = [5,10,15,20,25,30,35,40,45,50,55,60,65,70,75,80,85,90,100,105,110];

console.log('Todos Os numeros: ', m5)

n1 = m5.length+1

for (i = 0; i < n1; i++){
        
        if (m5[i]%2 == 0){

            m5.splice(i, 1)

        }
}

    console.log('sem os numeros pares:',m5)