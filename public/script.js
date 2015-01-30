document.body.style.zoom="80%"

//Object constructor
function Brand(name, type, organic, gmofree, antibioticsfree, naturalDiet, humaneRaised, range) {
  this.name = name;
  this.type = type;
  this.organic = organic;
  this.gmofree = gmofree;
  this.antibioticsfree = antibioticsfree;
  this.naturalDiet = naturalDiet;
  this.humaneRaised = humaneRaised;
  this.range = range;
}

//Chicken objects
var chickens = {
  TJOFR : new Brand("Trader Joe's Organic FreeRange", "chicken", "yes", "no", "yes", "yes", "no", "N/A"),
  365 :new Brand("365 Organics", "chicken", "yes", "yes", "yes", "yes", "yes", "N/A"),
  appNat :new Brand("Applegate Naturals", "chicken", "yes", "yes", "yes", "yes", "yes", "N/A"),
  appOrg : new Brand("Applegate Organics", "chicken", "no", "no","yes", "yes", "yes", "N/A"),
  sTruthOrg :new Brand("Simple Truth Organic", "chicken", "yes", "yes", "yes", "no", "no", "free-range"),
  tyson : new Brand("Tyson", "chicken", "no", "no", "no", "no", "no", "N/A"),
  perdue : new Brand("Perdue", "chicken", "no", "no", "no", "yes",  "no", "cage-free"),
  FF : new Brand("Foster Farms", "chicken", "no", "no", "no", "yes", "yes", "cage-free"),
  FFO : new Brand("Foster Farms Organic", "chicken", "yes",  "yes", "yes", "yes", "yes", "cage-free"),
  safe : new Brand("Safeway Farms", "chicken", "no", "no", "no", "no", "no", "cage-free"),
  opNat : new Brand("Open Nature", "chicken", "no", "no", "yes", "yes", "yes", "cage-free"),
  oOrg : new Brand("O Organics", "chicken", "yes", "yes", "yes", "yes", "yes", "cage-free"),
  PFC : new Brand("Prestige Farms", "chicken", "no", "no", "no", "no", "no", "N/A")
};

//Egg objects
var eggs = {
  EggB : new Brand("Eggland's Best", "egg", "no", "no", "no", "no", "no", "N/A"),
  SFOO3 : new Brand("Stiebr's Farm Omega3", "egg", "yes", "yes", "yes", "yes", "yes", "N/A"),
  SFFR : new Brand("Stiebr's Farm Free Range", "egg", "yes", "yes", "yes", "yes", "yes", "free-range"),
  SFPR : new Brand("Stiebr's Farm Pasture Raised", "egg", "yes", "yes", "yes", "yes", "no", "pasture raised"),
  TJCF : new Brand("Trader Joe's Cage Free", "egg", "no", "no", "yes", "yes", "no", "N/A"),
  TJOFR : new Brand("Trader Joe's Organic Free Range", "egg", "yes", "no", "yes", "yes", "no", "free-range"),
  MMF : new Brand("Misty Meadow Farms", "egg", "yes", "yes", "yes", "yes", "yes", "pasture raised"),
  OrgV : new Brand("Organic Valley", "egg", "yes", "yes", "yes", "yes", "no", "N/A"),
  TCH : new Brand("The Country Hen", "egg", "no", "no", "no", "no", "no", "N/A"),
  TLA : new Brand("Trout Lake Abbey", "egg", "yes", "yes", "yes", "yes", "yes", "pasture raised"),
  WXF : new Brand("Wilcox Farms", "egg", "no", "no", "no", "no", "yes", "N/A")
};

//Dropdown menu table creators
$("#chickenDrop").on("change", function() {
  var selectedChicken = chickens[$(this).val()];
   $('#chickenoutput').prepend("<table><tr>" + "<td> Name: </td> <td>" + selectedChicken.name + "</td> </tr>        \
                        <tr>" + "<td> Type: </td> <td>" + selectedChicken.type + "</td> </tr>                       \
                        <tr>" + "<td> Organic: </td> <td>" + selectedChicken.organic + "</td> </tr>                 \
                        <tr>" + "<td> GMO Free: </td> <td>" + selectedChicken.gmofree+ "</td> </tr>                 \
                        <tr>" + "<td> Antibiotic Free: </td> <td>" + selectedChicken.antibioticsfree + "</td> </tr> \
                        <tr>" + "<td> Natural Diet: </td> <td>" + selectedChicken.naturalDiet+ "</td> </tr>         \
                        <tr>" + "<td> Humanely Raised: </td> <td>" + selectedChicken.humaneRaised + "</td> </tr>    \
                        <tr>" + "<td> Range: </td> <td>" + selectedChicken.range + "</td> </tr></table>");
 });

$("#eggDrop").on("change", function() {
  var selectedEgg = eggs[$(this).val()];
    $('#eggoutput').prepend("<table><tr>" + "<td> Name: </td> <td>" + selectedEgg.name + "</td> </tr>           \
                        <tr>" + "<td> Type: </td> <td>" + selectedEgg.type + "</td> </tr>                       \
                        <tr>" + "<td> Organic: </td> <td>" + selectedEgg.organic + "</td> </tr>                 \
                        <tr>" + "<td> GMO Free: </td> <td>" + selectedEgg.gmofree+ "</td> </tr>                 \
                        <tr>" + "<td> Antibiotic Free: </td> <td>" + selectedEgg.antibioticsfree + "</td> </tr> \
                        <tr>" + "<td> Natural Diet: </td> <td>" + selectedEgg.naturalDiet+ "</td> </tr>         \
                        <tr>" + "<td> Humanely Raised: </td> <td>" + selectedEgg.humaneRaised + "</td> </tr>    \
                        <tr>" + "<td> Range: </td> <td>" + selectedEgg.range + "</td> </tr></table>");
 });

//JSON
function save() {
  var checkbox1 = document.getElementById('AO');
  localStorage.setItem('AO', checkbox1.checked);
  var checkbox2 = document.getElementById('GM');
  localStorage.setItem('GM', checkbox2.checked);
  var checkbox3 = document.getElementById('NA');
  localStorage.setItem('NA', checkbox3.checked);
  var checkbox4 = document.getElementById('FR');
  localStorage.setItem('FR', checkbox4.checked);
  var checkbox5 = document.getElementById('HR');
  localStorage.setItem('HR', checkbox5.checked);
  var checkbox6 = document.getElementById('ND');
  localStorage.setItem('ND', checkbox6.checked);
}

function load() {    
  var checked1 = JSON.parse(localStorage.getItem('AO'));
  document.getElementById("AO").checked = checked1;
  var checked2 = JSON.parse(localStorage.getItem('GM'));
  document.getElementById("GM").checked = checked2;
  var checked3 = JSON.parse(localStorage.getItem('NA'));
  document.getElementById("NA").checked = checked3;
  var checked4 = JSON.parse(localStorage.getItem('FR'));
  document.getElementById("FR").checked = checked4;
  var checked5 = JSON.parse(localStorage.getItem('HR'));
  document.getElementById("HR").checked = checked5;
  var checked6 = JSON.parse(localStorage.getItem('ND'));
  document.getElementById("ND").checked = checked6;  
}

function clearChecks() {
  localStorage.clear()
}

//Checkbox lists
$(document).ready(function() {
  $('input[type="checkbox"]').one("click", function(){
    if($(this).attr("value")=="organic"){
      $("#ischecked").prepend("<h1>Organic egg brands:</h1> \
        <ul><li>Trader Joe's organic Free Range</li> \
        <li>Stiebrs farms go-organic omega3</li> \
        <li>Misty Meadow Farms</li> \
        <li>Organic Valley</li> \
        <li>Trout Lake Abbey</li> \
        <li>Stiebrs Farms go-organic free-range</li> \
        <li>Stiebrs Farms pasture raised</li></ul>"),
      $("#chickencheck").prepend("<h1>Organic chicken brands:</h1> \
        <ul><li>Trader Joe's Organic free range</li> \
        <li>365 Organics</li> \
        <li>Applegate Organics</li> \
        <li>Simple Truth Organic</li> \
        <li>Foster Farms Organic</li> \
        <li>O Organics</li> \
        </ul>")
    }
    if($(this).attr("value")=="gmoFree") {
      $("#ischecked").prepend("<h1>GMO free egg brands:</h1> \
        <ul><li>Stiebrs farms go-organic omega3</li> \
        <li>Misty Meadow Farms</li> \
        <li>Organic Valley</li> \
        <li>Trout Lake Abbey</li> \
        <li>Stiebrs Farms go-organic free-range</li> \
        <li>Stiebrs Farms pasture raised</li></ul>"),
      $("#chickencheck").prepend("<h1>GMO free chicken brands:</h1> \
        <ul><li>365 Organics</li>\
        <li>Applegate Organics</li>\
        <li>Simple Truth Organic</li>\
        <li>Foster Farms Organic</li>\
        <li>O Organics</li>\
        </ul>")
    }
    if($(this).attr("value")=="noAntibiotics") {
      $("#ischecked").prepend("<h1>Antibiotic free egg brands:</h1> \
        <ul><li>Trader Joe's cage free</li> \
        <li>Trader Joe's organic Free Range</li> \
        <li>Stiebrs farms go-organic omega3</li> \
        <li>Misty Meadow Farms</li> \
        <li>Organic Valley</li> \
        <li>Trout Lake Abbey</li> \
        <li>Stiebrs Farms go-organic free-range</li> \
        <li>Stiebrs Farms pasture raised</li></ul>"),
      $("#chickencheck").prepend("<h1>Antibiotic free chicken brands:</h1> \
        <ul><li>365 Organics</li>\
        <li>Applegate Naturals</li>\
        <li>Applegate Organics</li>\
        <li>Simple Truth Organic</li>\
        <li>Foster Farms Organic</li>\
        <li>Open Nature</li>\
        <li>O Organics</li> \
        </ul>")
    }
    if($(this).attr("value")=="range") {
      $("#ischecked").prepend("<h1>Egg brands - good living conditions:</h1> \
        <ul><li>Trader Joe's cage free</li> \
        <li>Trader Joe's organic Free Range</li> \
         <li>Misty Meadow Farms pasture raised</li> \
        <li>Trout Lake Abbey pasture raised</li> \
        <li>Stiebrs Farms go-organic free-range</li> \
        <li>Stiebrs Farms pasture raised</li></ul>"),
      $("#chickencheck").prepend("<h1>Chicken brands - good living conditions:</h1> \
        <ul><li>Trader Joe's Organic free range</li>\
        <li>Simple Truth Organic cage free</li>\
        <li>Foster Farms cage free</li>\
        <li>Foster Farms Organic cage free</li>\
        <li>Safeway Farms cage free</li>\
        <li>Open Nature cage free</li>\
        <li>O Organics cage free</li> \
        </ul>")
    }
    if($(this).attr("value")=="humane") {
      $("#ischecked").prepend("<h1>Egg brands - Humanely raised:</h1> \
        <ul><li>Stiebrs farms go-organic omega3</li> \
        <li>Stiebrs Farms go-organic free-range</li> \
        <li>Stiebrs Farms pasture raised</li></ul>"),
      $("#chickencheck").prepend("<h1>Chicken brands - Humanely raised:</h1> \
        <ul><li>365 Organics</li>\
        <li>Applegate Naturals</li>\
        <li>Applegate Organics</li>\
        <li>Foster Farms cage free</li>\
        <li>Foster Farms Organic cage free</li>\
        <li>Open Nature cage free</li>\
        <li>O Organics</li> \
        </ul>")
    }
    if($(this).attr("value")=="diet") {
      $("#ischecked").prepend("<h1>Egg brands - Natural diet:</h1> \
        <ul><li>Trader Joe's cage free</li> \
        <li>Trader Joe's organic Free Range</li> \
        <li>Misty Meadow Farms</li> \
        <li>Trout Lake Abbey</li> \
        <li>Stiebrs farms go-organic omega3</li> \
        <li>Stiebrs Farms go-organic free-range</li> \
        <li>Stiebrs Farms pasture raised</li></ul>"),
      $("#chickencheck").prepend("<h1>Chicken brands - Natural diet:</h1> \
        <ul><li>365 Organics</li>\
        <li>Applegate Naturals</li>\
        <li>Applegate Organics</li>\
        <li>Perdue</li>\
        <li>Foster Farms cage free</li>\
        <li>Foster Farms Organic cage free</li>\
        <li>Open Nature cage free</li>\
        <li>O Organics</li> \
        </ul>")
    }
      save();
    });
});

//JSON
$(document).ready(function () {
  load();
  clearChecks();
});    