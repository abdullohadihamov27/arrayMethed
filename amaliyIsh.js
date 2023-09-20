const royhat = [
    {ism:'bekzodbek', yosh:'26'},
    {ism:'sarvarbek', yosh:'14'},
    {ism:'umidjon', yosh:'15'},
    {ism:'abdulloh', yosh:'16'}
]
   function ismlarniAjratish (names){
       if(royhat.some(name => name.ism == names)){
        console.log("bunday ism ");
        }else{
        console.log("bunday ism mavjud emas");
       }
   }
   
   ismlarniAjratish("bekzodbek")
