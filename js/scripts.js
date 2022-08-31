function myFunction() {
 
  if(document.getElementById("themelabel").innerHTML=="Light Theme"){
   
    document.getElementById("cardbody").classList.add("cardbodydark");
    document.getElementById("twitterpage").classList.add("twitterdark");
    document.getElementById("firstprofilename").classList.add("whitetext");
    document.getElementById("secondprofilename").classList.add("whitetext");
    document.getElementById("thirdprofilename").classList.add("whitetext");
    document.getElementById("li1").classList.add("whitetext");
    document.getElementById("li2").classList.add("whitetext");
    document.getElementById("li3").classList.add("whitetext");
    document.getElementById("li4").classList.add("whitetext");
    document.getElementById("no1").classList.add("whitetext");
    document.getElementById("no2").classList.add("whitetext");
    document.getElementById("themelabel").classList.add("whitetext");
    document.getElementById("themelabel").innerHTML="Dark Theme";
    document.getElementById("indicator").classList.add("indicatordark");
    document.getElementById("toggle").classList.add("toggledark");
    document.getElementById("editp").classList.add("grey");
    document.getElementById("profilepic2").classList.add("profilepicdark");
    document.getElementById("profilepic1").classList.add("profilepicdark");
    document.getElementById("icon").classList.add("icondark");
    document.getElementById("icon2").classList.add("icondark");
    document.getElementById("icon").classList.remove("iconlight");
    document.getElementById("icon2").classList.remove("iconlight");
  }
  else{
    if(document.getElementById("themelabel").innerHTML=="Dark Theme"){
     
      document.getElementById("cardbody").classList.remove("cardbodydark");
      document.getElementById("twitterpage").classList.remove("twitterdark");
      document.getElementById("firstprofilename").classList.remove("whitetext");
      document.getElementById("secondprofilename").classList.remove("whitetext");
      document.getElementById("thirdprofilename").classList.remove("whitetext");
      document.getElementById("li1").classList.remove("whitetext");
      document.getElementById("li2").classList.remove("whitetext");
      document.getElementById("li3").classList.remove("whitetext");
      document.getElementById("li4").classList.remove("whitetext");
      document.getElementById("no1").classList.remove("whitetext");
      document.getElementById("no2").classList.remove("whitetext");
      document.getElementById("themelabel").classList.remove("whitetext");
      document.getElementById("themelabel").innerHTML="Light Theme";
      document.getElementById("indicator").classList.remove("indicatordark");
      document.getElementById("toggle").classList.remove("toggledark");
      document.getElementById("editp").classList.remove("grey");
      document.getElementById("profilepic1").classList.remove("profilepicdark");
      document.getElementById("profilepic2").classList.remove("profilepicdark");
      document.getElementById("icon").classList.add("iconlight");
     document.getElementById("icon2").classList.add("iconlight");
     document.getElementById("icon").classList.remove("icondark");
     document.getElementById("icon2").classList.remove("icondark");
    }

  }

  }
  document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("firstprofilename").innerHTML="John Doe";
    document.getElementById("secondprofilename").innerHTML="John Doe";
    document.getElementById("thirdprofilename").innerHTML="John Doe";
    document.getElementById("profilepic1").src = "./images/johndoe.jfif";
    document.getElementById("profilepic2").src = "./images/johndoe.jfif";
  });
  function changeColor(element){
    document.getElementById("background").style.backgroundColor = element.value;
  }