function UI(){
    this.outputImage=document.getElementById("outputImage");
    this.outputLanguage=document.getElementById("outputLanguage");
    this.outputWord=document.getElementById("outputWord");
    
    this.languageList=document.getElementById("language");
}
UI.prototype.changeUI=function(){
    //arayüzü değiştir
    this.outputImage.src='images/${this.languageList.value}.png';

    console.log(this.languageList.options);
}
UI.prototype.displayTranslate=function(word){
    this.outputWord.textContent=word;
}