// bootstrap required variable




const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl));

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

// project required variable

let scrollWrapperid = document.getElementById("scrollWrapperid");
let weatherForecast = document.getElementById("weatherForecast")
let advicesBoxBtn = document.getElementById("advicesBoxBtn");
let forecastBoxBtn = document.getElementById("forecastBoxBtn");
let arrowWrapper = document.getElementById("arrowWrapper");
let advicesUnderLine = document.getElementById("advicesUnderLine");
let weaderUnderLine = document.getElementById("weaderUnderLine");
let adviceLine = document.getElementById("adviceLine");
let weatherLine = document.getElementById("weatherLine");
let ShowHint = document.getElementById("ShowHint")

// box`s for show (display  block and none)

let hotttext =document.getElementById("hotttext");
let betterflyWoodEatBox =document.getElementById("betterflyWoodEatBox");
let coldNeededBox =document.getElementById("coldNeededBox");
let allHot = document.getElementById("allHot")

// handlers that will click on them

let coldNeededHandler = document.getElementById("coldNeededHandler")
let betterflyHandler = document.getElementById("betterflyHandler")
let HottedHandler = document.getElementById("HottedHandler")

// text in the handlers

let textcoldNeededHandler = document.getElementById("textcoldNeededHandler")
let textBetterflyHandler = document.getElementById("textBetterflyHandler")
let hottedtextHandler = document.getElementById("hottedtextHandler")
let stickToHead = document.getElementById("stickToHead"); 
let header = document.getElementById("header")
let table = document.getElementById("table")
let showDays = document.getElementById("showDays")
let hintShow = document.getElementById("hintShow")
 let dayHeader = document.getElementById("stablePosition")
// let stablePosition = document.getElementById("stablePosition")

// x-scrolls and y-scrolls 

let saterClick = document.getElementById("saterClick");
let sundayClick = document.getElementById("sundayClick");
let mondayClick = document.getElementById("mondayClick");
let tuesClick = document.getElementById("tuesClick");
let wensClick = document.getElementById("wensClick");
let thursClick = document.getElementById("thursClick");
let friClick = document.getElementById("friClick");



let advices = document.getElementById("advices");

let One = document.getElementById("One")
let Tow = document.getElementById("Tow")
let Three = document.getElementById("Three")
let Four = document.getElementById("Four")
let Five = document.getElementById("Five")
let Six = document.getElementById("Six")
let seven = document.getElementById("seven")

let wrapperscroll = document.getElementById("wrapperscroll")
let nextScrollBtn =document.getElementById("nextScrollBtn")
let perScrollBtn = document.getElementById("perScrollBtn")

let perImage = document.getElementById("perImage")
let nextImage = document.getElementById("nextImage")
let mobile__wrapper = document.getElementById('mobile__wrapper')
let container = document.getElementById("container")

 

 

// here i tested a simple function with (add event listener  and pure function) it dosent work






wrapperscroll.addEventListener('scroll' , function(){
if(wrapperscroll.scrollLeft === 0){
  perImage.style.display = 'inline'
}else{
  perImage.style.display = 'inline'
}
}
)

let clickCount = 1;



nextScrollBtn.addEventListener(  'click' , function(){

wrapperscroll.scrollBy(-140,0)


  clickCount++;
  
  if (clickCount === 1) { //شنبه
    perImage.style.display = 'none'
  One.click()
  One.style.boxShadow = "2px 2px 7px darkgray";
Tow.style.boxShadow = "none";
Three.style.boxShadow = "none";
Four.style.boxShadow = "none";
Five.style.boxShadow = "none";
Six.style.boxShadow = "none";
seven.style.boxShadow = "none";

One.style.border = "3px black  dashed";
Tow.style.border = "1px black solid";
Three.style.border = "1px black solid";
Four.style.border = "1px black solid";
Five.style.border = "1px black solid";
Six.style.border = "1px black solid";
seven.style.border = "1px black solid";
 
  } else if (clickCount === 2) { // یکشنبه
Tow.click()
One.style.boxShadow = "none";
Tow.style.boxShadow = "2px 2px 7px darkgray ";
Three.style.boxShadow = "none";
Four.style.boxShadow = "none";
Five.style.boxShadow = "none";
Six.style.boxShadow = "none";
seven.style.boxShadow = "none";

One.style.border = "1px black solid ";
Tow.style.border = "3px black  dashed";
Three.style.border = " 1px black solid  ";
Four.style.border = "1px black solid";
Five.style.border = "1px black solid";
Six.style.border = "1px black solid";
seven.style.border = "1px black solid";
perImage.style.display = 'inline'

  }else if (clickCount === 3) { // دوشنبه
    One.style.boxShadow = "none";
    Tow.style.boxShadow = "none";
    Three.style.boxShadow = "2px 2px 7px darkgray ";
    Four.style.boxShadow = "none";
    Five.style.boxShadow = "none";
    Six.style.boxShadow = "none";
    seven.style.boxShadow = "none";
    
    One.style.border = "1px black  solid";
    Tow.style.border = "1px black solid";
    Three.style.border = "3px black  dashed";
    Four.style.border = "1px black solid";
    Five.style.border = "1px black solid";
    Six.style.border = "1px black solid";
    seven.style.border = "1px black solid";
Three.click()
perImage.style.display = 'inline'
  }else if (clickCount === 4) { // سه شنبه
    One.style.boxShadow = "none";
    Tow.style.boxShadow = "none";
    Three.style.boxShadow = "none";
    Four.style.boxShadow = "2px 2px 7px darkgray ";
    Five.style.boxShadow = "none";
    Six.style.boxShadow = "none";
    seven.style.boxShadow = "none";
    
    One.style.border = "1px black solid ";
    Tow.style.border = "1px black solid";
    Three.style.border = "1px black solid";
    Four.style.border = "3px black  dashed";
    Five.style.border = " 1px black solid  ";
    Six.style.border = "1px black solid";
    seven.style.border = "1px black solid";

Four.click()
perImage.style.display = 'inline'
  }else if (clickCount === 5) { // چهارشنبه
    One.style.boxShadow = "none";
    Tow.style.boxShadow = "none";
    Three.style.boxShadow = "none";
    Four.style.boxShadow = "none";
    Five.style.boxShadow = "2px 2px 7px darkgray ";
    Six.style.boxShadow = "none";
    seven.style.boxShadow = "none";
    
    One.style.border = "1px black  solid";
    Tow.style.border = "1px black solid";
    Three.style.border = "1px black solid";
    Four.style.border = "1px black solid";
    Five.style.border = "3px black  dashed";
    Six.style.border = "1px black solid";
    seven.style.border = "1px black solid";
Five.click()
perImage.style.display = 'inline'
  }else if (clickCount === 6) { // پنجشنبه
    One.style.boxShadow = "none";
    Tow.style.boxShadow = "none";
    Three.style.boxShadow = "none";
    Four.style.boxShadow = "none";
    Five.style.boxShadow = "none";
    Six.style.boxShadow = "2px 2px 7px darkgray ";
    seven.style.boxShadow = "none";
    
    One.style.border = "1px black  solid";
    Tow.style.border = "1px black solid";
    Three.style.border = "1px black solid";
    Four.style.border = "1px black solid";
    Five.style.border = "1px black solid";
    Six.style.border = "3px black  dashed";
    seven.style.border = "1px black solid";
Six.click()
perImage.style.display = 'inline'
  }else if (clickCount === 7) { // جمعه
    One.style.boxShadow = "none";
  Tow.style.boxShadow = "none";
  Three.style.boxShadow = "none";
  Four.style.boxShadow = "none";
  Five.style.boxShadow = "none";
  Six.style.boxShadow = "none";
  seven.style.boxShadow = "2px 2px 7px darkgray ";
  
  One.style.border = "1px black  solid";
  Tow.style.border = "1px black solid";
  Three.style.border = "1px black solid";
  Four.style.border = "1px black solid";
  Five.style.border = "1px black solid";
  Six.style.border = "1px black solid";
  seven.style.border = "3px black  dashed";
seven.click()
perImage.style.display = 'inline'
  }else if (clickCount  > 7) {

    clickCount = 1;
    One.click();
    perImage.style.display = 'none'
    
  }

}  )



perScrollBtn.addEventListener(  'click' , function(){

  wrapperscroll.scrollBy(140,0)
nextImage.style.display = 'inline'

 clickCount--; 
 if (clickCount === 1) { //شنبه
  perImage.style.display = 'none'
One.click()
One.style.boxShadow = "2px 2px 7px darkgray";
Tow.style.boxShadow = "none";
Three.style.boxShadow = "none";
Four.style.boxShadow = "none";
Five.style.boxShadow = "none";
Six.style.boxShadow = "none";
seven.style.boxShadow = "none";

One.style.border = "3px black  dashed";
Tow.style.border = "1px black solid";
Three.style.border = "1px black solid";
Four.style.border = "1px black solid";
Five.style.border = "1px black solid";
Six.style.border = "1px black solid";
seven.style.border = "1px black solid";

} else if (clickCount === 2) { // یکشنبه
Tow.click()
One.style.boxShadow = "none";
Tow.style.boxShadow = "2px 2px 7px darkgray ";
Three.style.boxShadow = "none";
Four.style.boxShadow = "none";
Five.style.boxShadow = "none";
Six.style.boxShadow = "none";
seven.style.boxShadow = "none";

One.style.border = "1px black solid ";
Tow.style.border = "3px black  dashed";
Three.style.border = " 1px black solid  ";
Four.style.border = "1px black solid";
Five.style.border = "1px black solid";
Six.style.border = "1px black solid";
seven.style.border = "1px black solid";
perImage.style.display = 'inline'

}else if (clickCount === 3) { // دوشنبه
  One.style.boxShadow = "none";
  Tow.style.boxShadow = "none";
  Three.style.boxShadow = "2px 2px 7px darkgray ";
  Four.style.boxShadow = "none";
  Five.style.boxShadow = "none";
  Six.style.boxShadow = "none";
  seven.style.boxShadow = "none";
  
  One.style.border = "1px black  solid";
  Tow.style.border = "1px black solid";
  Three.style.border = "3px black  dashed";
  Four.style.border = "1px black solid";
  Five.style.border = "1px black solid";
  Six.style.border = "1px black solid";
  seven.style.border = "1px black solid";
Three.click()
perImage.style.display = 'inline'
}else if (clickCount === 4) { // سه شنبه
  One.style.boxShadow = "none";
  Tow.style.boxShadow = "none";
  Three.style.boxShadow = "none";
  Four.style.boxShadow = "2px 2px 7px darkgray ";
  Five.style.boxShadow = "none";
  Six.style.boxShadow = "none";
  seven.style.boxShadow = "none";
  
  One.style.border = "1px black solid ";
  Tow.style.border = "1px black solid";
  Three.style.border = "1px black solid";
  Four.style.border = "3px black  dashed";
  Five.style.border = " 1px black solid  ";
  Six.style.border = "1px black solid";
  seven.style.border = "1px black solid";

Four.click()
perImage.style.display = 'inline'
}else if (clickCount === 5) { // چهارشنبه
  One.style.boxShadow = "none";
  Tow.style.boxShadow = "none";
  Three.style.boxShadow = "none";
  Four.style.boxShadow = "none";
  Five.style.boxShadow = "2px 2px 7px darkgray ";
  Six.style.boxShadow = "none";
  seven.style.boxShadow = "none";
  
  One.style.border = "1px black  solid";
  Tow.style.border = "1px black solid";
  Three.style.border = "1px black solid";
  Four.style.border = "1px black solid";
  Five.style.border = "3px black  dashed";
  Six.style.border = "1px black solid";
  seven.style.border = "1px black solid";
Five.click()
perImage.style.display = 'inline'
}else if (clickCount === 6) { // پنجشنبه
  One.style.boxShadow = "none";
  Tow.style.boxShadow = "none";
  Three.style.boxShadow = "none";
  Four.style.boxShadow = "none";
  Five.style.boxShadow = "none";
  Six.style.boxShadow = "2px 2px 7px darkgray ";
  seven.style.boxShadow = "none";
  
  One.style.border = "1px black  solid";
  Tow.style.border = "1px black solid";
  Three.style.border = "1px black solid";
  Four.style.border = "1px black solid";
  Five.style.border = "1px black solid";
  Six.style.border = "3px black  dashed";
  seven.style.border = "1px black solid";
Six.click()
perImage.style.display = 'inline'
}else if (clickCount === 7) { // جمعه
  One.style.boxShadow = "none";
Tow.style.boxShadow = "none";
Three.style.boxShadow = "none";
Four.style.boxShadow = "none";
Five.style.boxShadow = "none";
Six.style.boxShadow = "none";
seven.style.boxShadow = "2px 2px 7px darkgray ";

One.style.border = "1px black  solid";
Tow.style.border = "1px black solid";
Three.style.border = "1px black solid";
Four.style.border = "1px black solid";
Five.style.border = "1px black solid";
Six.style.border = "1px black solid";
seven.style.border = "3px black  dashed";
seven.click()
perImage.style.display = 'inline'
}else if (clickCount  < 1 ) {

  clickCount = 1;
  One.click();
  perImage.style.display = 'none'
  
}



}  )





;
// automatic scroll in days weather 





mobile__wrapper.addEventListener('scroll', function() {
  var verticalScroll = mobile__wrapper.scrollTop;
  wrapperscroll.scroll( -verticalScroll / 7   ,  0);
});




One.style.boxShadow = "2px 2px 7px darkgray";
One.style.border = "3px black  dashed";
// choosing selected day base by y scroll in window

mobile__wrapper.addEventListener(  'scroll' ,  function(){
if ( mobile__wrapper.scrollTop <= 530){
clickCount = 1

One.style.boxShadow = "2px 2px 7px darkgray";
Tow.style.boxShadow = "none";
Three.style.boxShadow = "none";
Four.style.boxShadow = "none";
Five.style.boxShadow = "none";
Six.style.boxShadow = "none";
seven.style.boxShadow = "none";

One.style.border = "3px black  dashed";
Tow.style.border = "1px black solid";
Three.style.border = "1px black solid";
Four.style.border = "1px black solid";
Five.style.border = "1px black solid";
Six.style.border = "1px black solid";
seven.style.border = "1px black solid";

}
else if (mobile__wrapper.scrollTop > 530  &&  mobile__wrapper.scrollTop < 1050){

  clickCount = 2
  One.style.boxShadow = "none";
  Tow.style.boxShadow = "2px 2px 7px darkgray ";
  Three.style.boxShadow = "none";
  Four.style.boxShadow = "none";
  Five.style.boxShadow = "none";
  Six.style.boxShadow = "none";
  seven.style.boxShadow = "none";
  
  One.style.border = "1px black solid ";
  Tow.style.border = "3px black  dashed";
  Three.style.border = " 1px black solid  ";
  Four.style.border = "1px black solid";
  Five.style.border = "1px black solid";
  Six.style.border = "1px black solid";
  seven.style.border = "1px black solid";


}
else if (mobile__wrapper.scrollTop >1050   &&  mobile__wrapper.scrollTop < 1600){

  clickCount = 3

  One.style.boxShadow = "none";
  Tow.style.boxShadow = "none";
  Three.style.boxShadow = "2px 2px 7px darkgray ";
  Four.style.boxShadow = "none";
  Five.style.boxShadow = "none";
  Six.style.boxShadow = "none";
  seven.style.boxShadow = "none";
  
  One.style.border = "1px black  solid";
  Tow.style.border = "1px black solid";
  Three.style.border = "3px black  dashed";
  Four.style.border = "1px black solid";
  Five.style.border = "1px black solid";
  Six.style.border = "1px black solid";
  seven.style.border = "1px black solid";
}
else if (mobile__wrapper.scrollTop >1600   &&  mobile__wrapper.scrollTop < 2100 ){

  clickCount = 4

  One.style.boxShadow = "none";
  Tow.style.boxShadow = "none";
  Three.style.boxShadow = "none";
  Four.style.boxShadow = "2px 2px 7px darkgray ";
  Five.style.boxShadow = "none";
  Six.style.boxShadow = "none";
  seven.style.boxShadow = "none";
  
  One.style.border = "1px black solid ";
  Tow.style.border = "1px black solid";
  Three.style.border = "1px black solid";
  Four.style.border = "3px black  dashed";
  Five.style.border = " 1px black solid  ";
  Six.style.border = "1px black solid";
  seven.style.border = "1px black solid";
}
else if (mobile__wrapper.scrollTop >2100   &&  mobile__wrapper.scrollTop < 2600 ){

  clickCount = 5

  One.style.boxShadow = "none";
  Tow.style.boxShadow = "none";
  Three.style.boxShadow = "none";
  Four.style.boxShadow = "none";
  Five.style.boxShadow = "2px 2px 7px darkgray ";
  Six.style.boxShadow = "none";
  seven.style.boxShadow = "none";
  
  One.style.border = "1px black  solid";
  Tow.style.border = "1px black solid";
  Three.style.border = "1px black solid";
  Four.style.border = "1px black solid";
  Five.style.border = "3px black  dashed";
  Six.style.border = "1px black solid";
  seven.style.border = "1px black solid";
}else if (mobile__wrapper.scrollTop  > 2600 && mobile__wrapper.scrollTop < 3130  ){

  clickCount = 6

  One.style.boxShadow = "none";
  Tow.style.boxShadow = "none";
  Three.style.boxShadow = "none";
  Four.style.boxShadow = "none";
  Five.style.boxShadow = "none";
  Six.style.boxShadow = "2px 2px 7px darkgray ";
  seven.style.boxShadow = "none";
  
  One.style.border = "1px black  solid";
  Tow.style.border = "1px black solid";
  Three.style.border = "1px black solid";
  Four.style.border = "1px black solid";
  Five.style.border = "1px black solid";
  Six.style.border = "3px black  dashed";
  seven.style.border = "1px black solid";
}else if (mobile__wrapper.scrollTop > 3130 ){

  clickCount = 7

  One.style.boxShadow = "none";
  Tow.style.boxShadow = "none";
  Three.style.boxShadow = "none";
  Four.style.boxShadow = "none";
  Five.style.boxShadow = "none";
  Six.style.boxShadow = "none";
  seven.style.boxShadow = "2px 2px 7px darkgray ";
  
  One.style.border = "1px black  solid";
  Tow.style.border = "1px black solid";
  Three.style.border = "1px black solid";
  Four.style.border = "1px black solid";
  Five.style.border = "1px black solid";
  Six.style.border = "1px black solid";
  seven.style.border = "3px black  dashed";
}

  
}  )






// getting height of all tables

let Scroll = mobile__wrapper.scrollHeight / 7

console.log(Scroll);


let scrollSize = scrollWrapperid.clientHeight / 7
let endscrollSize = Math.floor(scrollSize)

saterClick.addEventListener( 'click' , function(){
mobile__wrapper.scrollTo( 0 , 0  )
clickCount === 1


One.style.boxShadow = "2px 2px 7px darkgray";
Tow.style.boxShadow = "none";
Three.style.boxShadow = "none";
Four.style.boxShadow = "none";
Five.style.boxShadow = "none";
Six.style.boxShadow = "none";
seven.style.boxShadow = "none";

One.style.border = "3px black  dashed";
Tow.style.border = "1px black solid";
Three.style.border = "1px black solid";
Four.style.border = "1px black solid";
Five.style.border = "1px black solid";
Six.style.border = "1px black solid";
seven.style.border = "1px black solid";

} )
sundayClick.addEventListener( 'click' , function(){
mobile__wrapper.scrollTo( 0 ,   endscrollSize  )
clickCount = 2

One.style.boxShadow = "none";
Tow.style.boxShadow = "2px 2px 7px darkgray ";
Three.style.boxShadow = "none";
Four.style.boxShadow = "none";
Five.style.boxShadow = "none";
Six.style.boxShadow = "none";
seven.style.boxShadow = "none";

One.style.border = "1px black solid ";
Tow.style.border = "3px black  dashed";
Three.style.border = " 1px black solid  ";
Four.style.border = "1px black solid";
Five.style.border = "1px black solid";
Six.style.border = "1px black solid";
seven.style.border = "1px black solid";
} )
mondayClick.addEventListener( 'click' , function(){
mobile__wrapper.scrollTo( 0 ,  endscrollSize * 2  )

clickCount = 3

One.style.boxShadow = "none";
Tow.style.boxShadow = "none";
Three.style.boxShadow = "2px 2px 7px darkgray ";
Four.style.boxShadow = "none";
Five.style.boxShadow = "none";
Six.style.boxShadow = "none";
seven.style.boxShadow = "none";

One.style.border = "1px black  solid";
Tow.style.border = "1px black solid";
Three.style.border = "3px black  dashed";
Four.style.border = "1px black solid";
Five.style.border = "1px black solid";
Six.style.border = "1px black solid";
seven.style.border = "1px black solid";
} )
tuesClick.addEventListener( 'click' , function(){
mobile__wrapper.scrollTo( 0 ,  endscrollSize * 3 )

clickCount = 4

One.style.boxShadow = "none";
Tow.style.boxShadow = "none";
Three.style.boxShadow = "none";
Four.style.boxShadow = "2px 2px 7px darkgray ";
Five.style.boxShadow = "none";
Six.style.boxShadow = "none";
seven.style.boxShadow = "none";

One.style.border = "1px black solid ";
Tow.style.border = "1px black solid";
Three.style.border = "1px black solid";
Four.style.border = "3px black  dashed";
Five.style.border = " 1px black solid  ";
Six.style.border = "1px black solid";
seven.style.border = "1px black solid";
} )
wensClick.addEventListener( 'click' , function(){
mobile__wrapper.scrollTo( 0 , endscrollSize * 4  )

clickCount = 5

One.style.boxShadow = "none";
Tow.style.boxShadow = "none";
Three.style.boxShadow = "none";
Four.style.boxShadow = "none";
Five.style.boxShadow = "2px 2px 7px darkgray ";
Six.style.boxShadow = "none";
seven.style.boxShadow = "none";

One.style.border = "1px black  solid";
Tow.style.border = "1px black solid";
Three.style.border = "1px black solid";
Four.style.border = "1px black solid";
Five.style.border = "3px black  dashed";
Six.style.border = "1px black solid";
seven.style.border = "1px black solid";
} )
thursClick.addEventListener( 'click' , function(){
mobile__wrapper.scrollTo( 0 , endscrollSize * 5  )

clickCount = 6

One.style.boxShadow = "none";
Tow.style.boxShadow = "none";
Three.style.boxShadow = "none";
Four.style.boxShadow = "none";
Five.style.boxShadow = "none";
Six.style.boxShadow = "2px 2px 7px darkgray ";
seven.style.boxShadow = "none";

One.style.border = "1px black  solid";
Tow.style.border = "1px black solid";
Three.style.border = "1px black solid";
Four.style.border = "1px black solid";
Five.style.border = "1px black solid";
Six.style.border = "3px black  dashed";
seven.style.border = "1px black solid";
} )
friClick.addEventListener( 'click' , function(){
mobile__wrapper.scrollTo( 0 , endscrollSize * 6  )

clickCount = 7

One.style.boxShadow = "none";
Tow.style.boxShadow = "none";
Three.style.boxShadow = "none";
Four.style.boxShadow = "none";
Five.style.boxShadow = "none";
Six.style.boxShadow = "none";
seven.style.boxShadow = "2px 2px 7px darkgray ";

One.style.border = "1px black  solid";
Tow.style.border = "1px black solid";
Three.style.border = "1px black solid";
Four.style.border = "1px black solid";
Five.style.border = "1px black solid";
Six.style.border = "1px black solid";
seven.style.border = "3px black  dashed";
} )






// this code  will  show three btn in advices page

betterflyWoodEatBox.style.display = 'none'
coldNeededBox.style.display = 'none'



coldNeededHandler.addEventListener( 'click', function(){

// show and hide the boxes

  hotttext.style.display = "none"
  betterflyWoodEatBox.style.display = "none"
  coldNeededBox.style.display = "block"
allHot.style.display = 'none'

// changes in the buttons



// oder btns style changes (second one)




// third one changes




} )
betterflyHandler.addEventListener( 'click', function(){

  hotttext.style.display = "none"
  betterflyWoodEatBox.style.display = "block"
  coldNeededBox.style.display = "none"
allHot.style.display = 'none'

// changes in the buttons



// oder btns style changes (second one)




// third one changes






} )
HottedHandler.addEventListener( 'click', function(){

  hotttext.style.display = "block"
  betterflyWoodEatBox.style.display = "none"
  coldNeededBox.style.display = "none"
allHot.style.display = 'block'

// changes in the buttons



// oder btns style changes (second one)




// third one changes




} )

// function that show or hidden the weather pages and advices page

weatherLine.style.borderBottom = '1px solid black'
forecastBoxBtn.style.fontWeight = 'bold'
advices.style.display = 'none'


advicesBoxBtn.addEventListener(  'click'  ,  function(){ // 

  adviceLine.style.borderBottom = '1px solid black'
    weatherLine.style.borderBottom = 'none'
  weatherForecast.style.display = 'none';
  advices.style.display = 'block'
dayHeader.style.display = 'none'
hintShow.style.display = 'none'
forecastBoxBtn.style.fontWeight = 'normal'
adviceLine.style.fontWeight = 'bold';
 document.getElementById("theTopDay").style.display = 'none'
 HottedHandler.style.backgroundColor = ""
}   )

forecastBoxBtn.addEventListener('click' , function(){

      weatherLine.style.borderBottom = '1px solid black'
    adviceLine.style.borderBottom = 'none'
   advices.style.display = 'none'
weatherForecast.style.display = 'block'
hintShow.style.display = 'block'
forecastBoxBtn.style.fontWeight = 'bold'
adviceLine.style.fontWeight = 'normal'
 document.getElementById("theTopDay").style.display = 'block'
dayHeader.style.display = 'block'
})







