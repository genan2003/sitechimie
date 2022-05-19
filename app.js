var quotes=[
    'Oamenii învață învățând pe alții- Seneca',
    'Învățătura trebuie să fie uneori un drum; întotdeuna un orizont- Nicolae Iorga',
    'A învăţa cum să înveţi este cea mai importantă deprindere din viaţă.',
    'Nu este greu să înveți mai multe.Ceea ce este cu adevărat greu este să te dezbări de lucrurile învățate greșit- Martin H. Fischer',
    'Există multe lucruri pe care ne permitem să le uităm deși merita totuși să fie învățate- Oliver Wendell Holmes, Jr.',
    'Îi poți da unui elev câte o lecție în fiecare zi, dar dacă îl poți îndruma să învețe stârnindu-i curiozitatea, el își va dedica întreaga viață învățăturii- Clay P. Bedford',
    'Cine întru muritori este atât de învățat, căruia mai multă parte a învățăturii să nu-i lipsească- Dimitrie Cantemir',
    'Învățătură, oricât de multă, nu învață înțelegerea- Heraclit',
    'Învățătura din constrângere nu e făcută să rămână, dar cea care pătrunde în suflet prin dragoste și bunăvoință, aceea rămâne acolo pentru totdeauna- Sfântul Ioan Gură de Aur',
    'Învățătura fără gândire este munca pierdută, gândirea fără învățătură este periculoasă- Confucius'
]

function newQuote(){
    var randomNumber=Math.floor(Math.random()*(quotes.length));
    document.getElementById('quoteDisplay').innerHTML=quotes[randomNumber];
}

function renderTime(){
    var mydate=new Date();
    var year=mydate.getFullYear();
    if(year<1000){
        year+=1900
    }
    var day=mydate.getDay();
    var month=mydate.getMonth();
    var daym=mydate.getDate();
    var dayarray=new Array("Luni","Marți","Miercuri","Joi","Vineri","Sâmbătă","Duminică");
    var montharray=new Array("Ianuarie","Februarie","Martie","Aprilie","Mai","Iunie","Iulie","August","Septembrie","Octombrie","Noiembrie","Decembrie");

    var currentTime=new Date();
    var h=currentTime.getHours();
    var m=currentTime.getMinutes();
    var s=currentTime.getSeconds();
    if(h==24){
        h=0;
    } else if(h>12){
        h=h-0;
    }
    if(h<10){
        h="0"+h;
    }
    if(m<10){
        m="0"+m;
    }
    if(s<10){
        s="0"+s;
    }

    var myClock=document.getElementById("clockDisplay");
    myClock.textContent=""+" "+daym+" "+montharray[month]+" "+year+"|"+h+":"+m;
    myClock.innerText=""+" "+daym+" "+montharray[month]+" "+year+"|"+h+":"+m;

    setTimeout("renderTime()",1000);
}
renderTime();