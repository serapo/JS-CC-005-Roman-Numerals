let rakamlar ={    
    "1":"I",
    "2":"II",
    "3":"III",
    "4":"IV",
    "5":"V",
    "6":"VI",
    "7":"VII",
    "8":"VIII",
    "9":"IX",
    "10":"X",
    "20":"XX",
    "30":"XXX",
    "40":"XL",
   "50":"L",
    "60":"LX",
    "70":"LXX",
    "80":"LXXX",
   "90":"XC",
    "100":"C",
    "200":"CC",
    "300":"CCC",
    "400":"CD",
    "500":"D",
    "600":"DC",
    "700":"DCC",
    "800":"DCCC",
    "900":"CM",
    "1000":"M",
    "2000":"MM",
    "3000":"MMM",

};

const number=prompt("Enter a number");

// const arr=number.split("");
// arr[0]=10
// arr[1]=2
// console.log(arr[0]);
// console.log(arr[1]);

let arr;
let liste=[];
if(number>0 && number<=3000){
   arr=number.split("");
   if(arr.length==2){
     liste.push(rakamlar[arr[1]]);
     liste.push(rakamlar[arr[0]+"0"])
   }
   else if(arr.length==3){
    liste.push(rakamlar[arr[2]]);
    liste.push(rakamlar[arr[1]+"0"]);
    liste.push(rakamlar[arr[0]+"00"]);
   }
   else if(arr.length==4){
    liste.push(rakamlar[arr[3]]);
    liste.push(rakamlar[arr[2]+"0"]);    
    liste.push(rakamlar[arr[1]+"00"]);
    liste.push(rakamlar[arr[0]+"000"]);
   }
   else if(arr.length==1){
       liste.push(rakamlar[arr[0]]);
   }

}
else {
    alert("1 ile 3000 arasında sayı giriniz");
}
liste.reverse();
console.log(liste.join(''));


// console.log(rakamlar[arr[0]]);
// console.log(rakamlar[arr[1]]);
