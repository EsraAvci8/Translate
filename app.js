//prototype,ajax,callback kullanılacak
eventListenner();
function eventListenner(){
    document.getElementById("translate-form").addEventListener("submit",translateword());
//change
document.getElementById("language").addEventListener("onchange",function(){
    //arayüz işlemleri
    UI.changeUI();
});
}
const translate=new Translate(document.getElementById("word").value , document.getElementById("language").value);
const ui=new UI();
function translateword(e){
    translate.changeParameters(document.getElementById("word").value , document.getElementById("language").value);
     translate.translateword(function(err,response){
      if(err===null){
        console.log(err);
      } 
      else{
         ui.displayTranslate(response);
      }  
     });
    e.preventDefault();//sayfanın yenilenmemsi için
}