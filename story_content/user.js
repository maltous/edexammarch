function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6Gvcrl2Q3FT":
        Script1();
        break;
      case "5k9RwDu9GQo":
        Script2();
        break;
      case "66pxvzVwZ4v":
        Script3();
        break;
      case "6HlgeRd6IZK":
        Script4();
        break;
      case "61QdjBltCEP":
        Script5();
        break;
      case "6X4C2YEs6dK":
        Script6();
        break;
      case "6NQTeSrhyv0":
        Script7();
        break;
  }
}

function Script1()
{
  $("#tab-customlink").hide();
}

function Script2()
{
  $("#tab-customlink").hide();
}

function Script3()
{
  var currentTime = new Date()
var month = currentTime.getMonth() + 1
var day = currentTime.getDate()
var year = currentTime.getFullYear()
var dateString=month + "/" + day + "/" + year

var player = GetPlayer();
player.SetVar("SystemDate",dateString);
}

function Script4()
{
  $("#tab-customlink").show();
}

function Script5()
{
  $("#tab-customlink").show();
}

function Script6()
{
  $("#tab-customlink").hide();
}

function Script7()
{
  window.print();
}

