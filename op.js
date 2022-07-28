////////anes
function verif1(){
    var form1=document.getElementById('form1'); 
    var e1=form1.e1.value;
    var expressionReguliere = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var mp1=form1.mp1.value;
    if(!(expressionReguliere.test(e1)))
        {document.getElementById("email1").innerHTML ="<p>email doit se teminer par @mail@outlook @..fr.com....</p>";}
    else
        {document.getElementById("email1").innerHTML ="<p></p>";}
    if(mp1.length>=8 && mp1.match(/[A-Z]/g) && mp1.match(/[a-z]/g)&& mp1.match(/[0-9]/g))
        {document.getElementById("pwd1").innerHTML ="<p></p>";} 
   else
        {document.getElementById("pwd1").innerHTML ="<p>mot de passe doit contenir ,8 carractere, un majuscule , un miniscule et un chiffre</p>";}
}
function verif2(){
    var form2=document.getElementById('form2');
    var rad= document.querySelectorAll('input[type=radio]:checked')
    var selc=form2.selc.selectedIndex;
    var pn=form2.pren.value;
    var ad=form2.adr1.value;
    var mdp2=form2.mdp2.value;
    var day=form2.date.value;
    var zip=form2.Zip.value;
    var e2=form2.e2.value;
    var tlf=form2.tlf.value;
    var expressionReguliere = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var verif=document.querySelectorAll('input[type=checkbox]:checked')
    if(rad.length==0)
        {document.getElementById("rad").innerHTML ="<p>champ obligatoire</p>";}
    else
        {document.getElementById("rad").innerHTML ="<p></p>";}
    if(selc==0)
        {document.getElementById("selec").innerHTML ="<p>champ obligatoire</p>";}
    else
        {document.getElementById("selec").innerHTML ="<p></p>";}
    if(pn=="")
        {document.getElementById("pn1").innerHTML ="<p>champ obligatoire</p>";}
    else
    {
        if(!isNaN(pn))
            {document.getElementById("pn1").innerHTML ="<p>lettre uniquement</p>";}
        else
            {document.getElementById("pn1").innerHTML ="<p></p>";}
    }
    if(ad=="")
        {document.getElementById("ad1").innerHTML ="<p>champ obligatoire</p>";}
    else 
        {document.getElementById("ad1").innerHTML ="<p>champ obligatoire</p>";}
    if(mdp2.length>=8 && mdp2.match(/[A-Z]/g) && mdp2.match(/[a-z]/g)&& mdp2.match(/[0-9]/g))
        {document.getElementById("mdp22").innerHTML ="<p></p>";} 
   else
        {document.getElementById("mdp22").innerHTML ="<p>mot de passe doit contenir ,8 carractere, un majuscule , un miniscule et un chiffre</p>";}
    if(day=="")
        {document.getElementById("dat").innerHTML ="<p>champ obligatoire</p>";}
    else
        {{document.getElementById("dat").innerHTML ="<p></p>";}}
    if(zip=="")
        {document.getElementById("cp").innerHTML ="<p>champ obligatoire</p>";}
    else
        {
            if(isNaN(zip))
                {document.getElementById("cp").innerHTML ="<p>code postale composer par seulement des chiifres</p>";}
            else
                {document.getElementById("cp").innerHTML ="<p></p>";}
        }
    if(e2=="")  
        {document.getElementById("email2").innerHTML ="<p>champ obligatoire</p>";}
    else
        {
        if(!(expressionReguliere.test(e2)))
            {document.getElementById("email2").innerHTML ="<p>email doit se teminer par @mail@outlook @..fr.com....</p>";}
        else
            {document.getElementById("email2").innerHTML ="<p></p>";}
        }
    if(tlf=="")
        {document.getElementById("tlf").innerHTML ="<p>champ obligatoire</p>";}
    else
        {
            if((isNaN(tlf))||(tlf.length!=8))
                {document.getElementById("tlf").innerHTML ="<p>numero doit etre composer de 8 chiffre seulement</p>";}
            else
                {document.getElementById("tlf").innerHTML ="<p></p>";}
        }
    if(verif.length==0)
        {document.getElementById("check").innerHTML ="<p>il faut accepter les conditions de confidentialité</p>";}
    else
        {document.getElementById("check").innerHTML ="<p></p>";}
}
///////saif
function verif(){
var myForm = document.getElementById('baideform');
var n=myForm.nomR.value;
var pn=myForm.prenomR.value;
var expressionReguliere = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
var adresse=myForm.mail.value;    
if(n=="")
    {document.getElementById("errorNR").innerHTML ="<p>champ obligatoire</p>";}
        for(var i=0;i<n.length;i++)
           { if(i==0)
                {
                    if ((n[i]!=n[i].toUpperCase())||(!isNaN(n[i])||(n[i].toLowerCase()==n[i].toUpperCase())))
                        {document.getElementById("errorNR").innerHTML ="<p>il faut que le nom commence par un majuscule</p>"; }
                    else{document.getElementById("errorNR").innerHTML ="<p></p>";}
                   }
            else
                   {
                    if((!isNaN(n[i]))||(n[i].toLowerCase()==n[i].toUpperCase()))
                        {document.getElementById("errorNR").innerHTML ="<p>lettre uniquement</p>";}
                   }   
           }
if(pn=="")
    {document.getElementById("errorPR").innerHTML ="<p>champ obligatoire</p>";}
       for(var i=0;i<pn.length;i++)
           {
               if(i==0)
                   {
                       if ((pn[i]!= pn[i].toUpperCase())||(!isNaN(pn[i])))
                       {
                           document.getElementById("errorPR").innerHTML ="<p>il faut que le prenom commance par un majuscule</p>";
                        }
                        else
                       {
                        document.getElementById("errorPR").innerHTML ="<p></p>";
                       }

                   }
               else
                   {
                       if(!isNaN(pn[i]))
                           {document.getElementById("errorPR").innerHTML ="<p>lettre uniquement</p>";}
                   }   
           }
 if(!adresse.endsWith('@esprit.tn')&&(adresse==""))
                 {document.getElementById("errorMR").innerHTML ="<p>email doit se teminer par @mail@outlook @..fr.com....</p>";}
           else
           {document.getElementById("errorMR").innerHTML ="<p></p>";}

}