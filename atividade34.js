empresa = 
[['Jorge',66563678289,1500],
['Andre',24710112681,3000],
['Emily',39421364570,50],
['Lilian',13188435290,10000]
]

//f = 0 

for(i = 0; i < empresa.length; i++){
    //f += i
    if(empresa[i][2] > empresa[i+1][2]){

        sm = empresa[i][2]
    }
}


console.log(sm)