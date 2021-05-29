function displaymyth(buttonid)
  {
    document.getElementById("mythblock").style.display="block";
      var displaystring;
      var pageref = "#";
      switch(buttonid)
      {
        case 1:
          displaystring ="This is the myth about Niobe, a greek princess who turned into a waterfall.";
          pageref = "c1myth1.html";
          break;
        case 2:
          displaystring ="The myth about Midas, a king how lost his daughter to his own arrogance.";
          pageref = "c1myth2.html"
          break;
        default:
          displaystring = "default";
      }
      document.getElementById("mythpreview").innerHTML=displaystring;
      document.getElementById("pagelink").href=pageref;
  }