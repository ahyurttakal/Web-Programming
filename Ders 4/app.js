// better comment, auto rename tag, javascript console util

// Yorum satırı, /* */, Ctrl+Ö

//!Çıktı Alma İşlemleri

document.writeln("Merhaba Dünya <br>");
document.write("Javascript Dersleri");
console.log(3.5);
console.log(window.document.location.host);
console.error("Hata!");
console.warn("Uyarı!");
alert("Merhaba");

//! Değişken Tanımlama
var a=5; //Global Scope
if(true)
{
    console.log(a);
}
if(true)
{
    var b=10; // Function scope
    console.log(b);
}
let sayi=10;
//var: Function scope, Bellekte yer kaplar, aynı isimle tekrar tanımlanabilir
//let/const: Block Scope, aynı isimle tekrar tanımlanmaz
//let const farkı, const da değişken değeri değişmez
const user={
    username:"ahmet",
    password:"123"
}
user.username="mehmet";
console.log(user);

//! Veri Türleri
let rakamlar=[1,2,3,4,5,true,"Ahmet",3.2];
console.log(typeof rakamlar);

let func=function(){
    console.log("Merhaba");
}
func();
console.log(typeof func);

//!Operatörler
// === hem veri türü hem değer eşit mi?

//!Diyalog
let isim=prompt("İsim gir");
console.log(isim);

let onay=confirm("Emin misin");
console.log(onay);

//!Koşullar
let secilenharf = prompt("Lütfen harf seçiniz :");

if(secilenharf =='a'){
    alert("Seçilen harf "+ secilenharf);
}
else if(secilenharf=='b'){
    alert("Seçilen harf "+ secilenharf);
}
else if(secilenharf =='c'){
    alert("Seçilen harf "+ secilenharf);
}
else{
    alert("Lütfen geçerli bir harf seçiniz !!");
}

//Tc Kimlik Kontrol

let ad = prompt("Lütfen ad gir :");
let tc = prompt("Lütfen tc gir :");

kontrol(ad,tc);

function kontrol(ad,tc){
    if(ad!=""){
        if(tc.length==11){
            console.log("Başarılı");
        }
        else
        {
            console.log("11 karakter olmalı");
        }
    }
    else{
        console.log("İsim gir");
    }
}

//BMI Hesap

let kilo = Number(prompt("Kilonuzu giriniz")); //Tür Dönüşümü, String

let boy = Number(prompt("Boyunuzu metre cinsinden giriniz"));

let sonuc = kilo/(boy*2);

if(sonuc<18.5){
    console.log("İdeal kilonun altında" + sonuc);
}else if (sonuc>=18.5 && sonuc<=24.9){
    console.log("İdeal kilonun altında" + sonuc);
}else if(sonuc>=25 && sonuc<=29.9){
    console.log("deal kiloda" + sonuc);
}else if(sonuc>=30 && sonuc<=39.9){
    console.log("İdeal kilonun çok üstünde (obez)" + sonuc);
}else if(sonuc>=40){
    console.log("İdeal kilonun çok üstünde (morbid obez)" + sonuc);
}

//Günler

let yeniSatir = "\r\n";
let metin = "1-Pazartesi" + yeniSatir
    + "2-Salı" + yeniSatir
    + "3-Çarşamba" + yeniSatir
    + "4-Perşembe" + yeniSatir
    + "5-Cuma" + yeniSatir
    + "6-Cumartesi" + yeniSatir
    + "7-Pazar"+yeniSatir
    +"Lütfen bir seçim yapınız";

let deger = prompt(metin);
switch (deger) {
    case "1":
        console.log("Pazartesi Günü");
        break;
    case "2":
        console.log("Salı Günü");
        break;

    case "3":
        console.log("Çarşamba Günü");
        break;

    case "4":
        console.log("Perşembe Günü");
        break;

    case "5":
        console.log("Cuma Günü");
        break;

    case "6":
        console.log("Cumartesi Günü");
        break;

    case "7":
        console.log("Pazar Günü");
        break;
    default:
        console.log("lütfen geçerli bir değer giriniz!");
}

//!Döngüler
//Çarpım Tablosu
for(let i = 1; i<=10; i++){
    for(let j=1;j<=10; j++){
        console.log(i+"x"+j+"="+ (i*j));
    }
    console.log("----------------------------------------");
}

//Asal Sayı
let say = Number(prompt("Lütfen bir sayı giriniz :"));
let son =true;
for(let i=2 ; i<= Math.floor(sayi/2) ; i++){
    if(say%i==0){
        //Asal degildir
        son=false;
        break;
    }
}
if(son){
    alert(say +" asaldır.");
}else{
    alert(say +" asal değildir!");
}

//! Fonksiyonlar
//Harf sayısı
let icerik ="Şuanda Javascript dersindeyiz";

let harf = prompt("Harfi giriniz");

function bul(harf){
    let toplam =0;
    for(let i =0; i<icerik.length ; i++){
        if(icerik.charAt(i).toLowerCase()===harf.toLowerCase()){
            toplam+=1;
        }
    }
   console.log("Harf Sayısı : " + toplam);
}

//Binary To Dec
let binary = "101";

function convertBinaryToDecimal(binary){
    let toplam =0;
    let ust =0;

    for(let i=binary.length-1 ; i>=0 ; i--){
        if(Number(binary.charAt(i))!=0){
            toplam+= Number(binary.charAt(i)) * Math.pow(2,ust);
        }
        ust++;
    }

    console.log("Sonuç : " + toplam);
}
convertBinaryToDecimal(binary);

//! Diziler

// Dizinin Metotları
/*
push    : dizinin sonuna eleman ekler , ayrıca dizinin uzunluğunu döner
unshift : dizinin başına eleman ekler , eleman sayısını geriye döner

pop     : dizinin sonundan eleman siler , eleman sayısını döner
shift   : dizinin başından eleman siler , eleman sayısını döner

splice(index,incdex)  :eleman eklemek ve silmek için kullanılır.

toString: diziyi stringe çevirebiliriz.
join    : diziyi stringe çevirir . Farkı ise araya eleman ekleyebiliriz

concat  : dizileri birleştirmek için kullanılır.
slice(dilimlemek)   : diziyi istenilen yerden bölüp yeni bir dizi oluşturur.
length  : dizinin uzunluğunu verir.
reverse : dizinin elemanlarını ters çevirmek
split(bölmek)   : belirli bir ifadeye göre bölüp diziye çevirmek.
indexOf : elemanın index numarasını verir.
includes: verilen elemanı içeriyor mu ona bakar

*/

let arabalar = ["bmw","toyota","renault","mercedes","porsche"];
// let arabalar2 = ["hundai","tofaş"];
//PUSH METOT

// console.log(arabalar.length);
// arabalar.push("opel");
// console.log(arabalar);

//UNSHIFT METOT
// arabalar.unshift("hundai");
// console.log(arabalar);

//POP METOT
// let silinenEleman = arabalar.pop();
// console.log(arabalar);
// console.log(silinenEleman);

//SHIFT METOT
// let silinenEleman =arabalar.shift();
// console.log(arabalar);
// console.log(silinenEleman);

//SPLİCE METOT
// console.log(arabalar);
// arabalar.splice(3,0,"hundai");
// console.log(arabalar);

// arabalar.splice(1,2);
// console.log(arabalar);

// arabalar.splice(2,2,"hundai");
// console.log(arabalar);


//TOSTRİNG METOT
// console.log(typeof arabalar);
// let stringArabalar = arabalar.toString();
// console.log(typeof stringArabalar);
// console.log(stringArabalar);


//JOIN METOT
// let stringArabalar = arabalar.join("?");
// console.log(stringArabalar);


//CONCAT METOT 
// let birlesmisDizi =  arabalar1.concat(arabalar2);
// console.log(birlesmisDizi);

//SLİCE METOT
// console.log(arabalar);
// let ayriDizi = arabalar.slice(2);
// console.log(ayriDizi);


//LENGTH ÖZELLİK
// console.log(arabalar.length);

//REVERSE METOT
// console.log(arabalar);
// arabalar.reverse();
// console.log(arabalar);


//SPLİT METOT
// let isimler = "Enes,Ali,Veli";

//  let isimlerDizi = isimler.split(",");
//  console.log(typeof isimlerDizi);


//INDEXOF METOT

// let index = arabalar.indexOf("bmw");
// if(index==0){
//     console.log("belirtilen eleman vardır");
// }else{
//     console.log("elaman yoktur");
// }


//INCLUDES METOT

// let sonuc = arabalar.includes("renault232");
// if(sonuc){
//     console.log("eleman vardır");
// }else{
//     console.log("eleman yoktur");
// }

//! Ürün Arama Uygulaması

let urun1 = {
    isim: "ACER Swift",
    kategori: "Teknoloji",
    fiyat: 6.219
}

let urun2 = {
    isim: "ACER Nitro 5",
    kategori: "Teknoloji",
    fiyat: 15.475
}

let urun3 = {
    isim: "LENOVO V15",
    kategori: "Teknoloji",
    fiyat: 10.999
}
let urun4 = {
    isim: "LENOVO V14",
    kategori: "Teknoloji",
    fiyat: 4.399
}
let urun5 = {
    isim: "LENOVO Ideapad",
    kategori: "Teknoloji",
    fiyat: 4.510
}
let urunler = [urun1, urun2, urun3, urun4, urun5];
let filtreliUrunler = [];
let kullaniciUrunIsmi = prompt("Bir ürün ismi giriniz");

filtreliUrunleriDoldur(urunler);
filtreliUrunleriYazdir(filtreliUrunler);


function filtreliUrunleriDoldur(urunler) {
    urunler.forEach(function (urun) {
        if (urun.isim.toUpperCase().includes(kullaniciUrunIsmi.toUpperCase(), 0)) {
            filtreliUrunler.push(urun);
        }
    });

}

function filtreliUrunleriYazdir(urunler) {
    urunler.forEach(function (urun) {
        console.log("----------------------------------------");
        console.log("|" + urun.isim + "|" + urun.fiyat + "|" + urun.kategori);
        console.log("----------------------------------------");
    });
}

