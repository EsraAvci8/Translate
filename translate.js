function Translate(word,language){
    this.apikey="trnsl.1.1.20180930T080756Z.753c49142579b043.b2798189b8760e7b357c9d23a8736ef0a54be481";
    this.word=word;
    this.language=language;
}
//xhr object
this.xhr=new XMLHttpRequest();

//prototype
Translate.prototype.translateword=function(callback){
//ajax işlemleri
const endpoint="trnsl.1.1.20180930T080756Z.753c49142579b043.b2798189b8760e7b357c9d23a8736ef0a54be481";

this.xhr.open("GET",endpoint);
this.xhr.onload= ()=>{
if(this.xhr.status===200){
 const json =JSON.parse(this.xhr.responseText);
 const text=json.text[0];
 console.log(text);
callback(null,text);//hata yok
}
else{
   callback("hata oluştu",null);
}
}
this.xhr.send();

};
//değişkenler değiştiği zaman constructor içindekilerin de değişmesi için yazdık
Translate.prototype.changeParameters=function(newWord,newLanguage){
    this.word=newWord;
    this.language=newLanguage;
}