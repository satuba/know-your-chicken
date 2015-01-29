document.body.style.zoom="80%"

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

var chickens = {
  TJOFR : new Brand("Trader Joe's Organic FreeRange", "chicken", true, false, true, true, false, "none"),
  365 :new Brand("365 Organics", "chicken",                       true, true, true, true, true,  "none"),
  appNat :new Brand("Applegate Naturals", "chicken",              true, true, true, true, true, "none"),
  appOrg : new Brand("Applegate Organics", "chicken",             false, false,true, true, true, "none"),
  sTruthOrg :new Brand("Simple Truth Organic", "chicken",         true, true, true, false, false, "free-range"),
  tyson : new Brand("Tyson",  "chicken",                          false, false, false, false, false, "none"),
  perdue : new Brand("Perdue", "chicken",                         false, false, false, true,  false, "cage-free"),
  FF : new Brand("Foster Farms", "chicken",                       false, false, false, true, true, "cage-free"),
  FFO : new Brand("Foster Farms Organic", "chicken",              true,  true, true, true,  true, "cage-free"),
  safe : new Brand("Safeway Farms", "chicken",                    false, false, false, false, false, "cage-free"),
  opNat : new Brand("Open Nature", "chicken",                     false, false, true, true, true, "cage-free"),
  oOrg : new Brand("O Organics", "chicken",                       true, true, true, true, true, "cage-free")
};

var eggs = {
 SFOO3 : new Brand("Stiebr's Farm Omega3", "egg", true, true, true, true, true, "none"),
  SFFR : new Brand("Stiebr's Farm Free Range", "egg", true, true, true, true, true, "free-range"),
  SFPR : new Brand("Stiebr's Farm Pasture Raised", "egg", true, true, true, true, false, "pasture raised"),
  TJCF : new Brand("Trader Joe's Cage Free", "egg", false, false, true, true, false, "none"),
  TJOFR : new Brand("Trader Joe's Organic Free Range", "egg", true, false, true, true, false, "free-range")
};

$("#chickenDrop").on("change", function() {
  var selectedChicken = chickens[$(this).val()];
   $('#output').append("<tr>" + "<td> Name: </td> <td>" + selectedChicken.name + "</td> </tr> \
                        <tr>" + "<td> Organic: </td> <td>" + selectedChicken.organic + "</td> </tr> \
                        <tr>" + "<td> GMO Free: </td> <td>" + selectedChicken.gmofree+ "</td> </tr> \
                        <tr>" + "<td> Antibiotic Free: </td> <td>" + selectedChicken.antibioticsfree + "</td> </tr> \
                        <tr>" + "<td> Natural Diet: </td> <td>" + selectedChicken.naturalDiet+ "</td> </tr> \
                        <tr>" + "<td> Humanely Raised: </td> <td>" + selectedChicken.humaneRaised + "</td> </tr> \
                        <tr>" + "<td> Range: </td> <td>" + selectedChicken.range + "</td> </tr>"),
   $("#outputImage").append("<img src='images/chickenoutput.jpg'>");
 });

$("#eggDrop").on("change", function() {
  var selectedEgg = eggs[$(this).val()];
    $('#output').append("<tr>" + "<td> Name: </td> <td>" + selectedEgg.name + "</td> </tr> \
                        <tr>" + "<td> Organic: </td> <td>" + selectedEgg.organic + "</td> </tr> \
                        <tr>" + "<td> GMO Free: </td> <td>" + selectedEgg.gmofree+ "</td> </tr> \
                        <tr>" + "<td> Antibiotic Free: </td> <td>" + selectedEgg.antibioticsfree + "</td> </tr> \
                        <tr>" + "<td> Natural Diet: </td> <td>" + selectedEgg.naturalDiet+ "</td> </tr> \
                        <tr>" + "<td> Humanely Raised: </td> <td>" + selectedEgg.humaneRaised + "</td> </tr> \
                        <tr>" + "<td> Range: </td> <td>" + selectedEgg.range + "</td> </tr>"),
    $("#outputImage").append("<img src='images/egg.jpg'>");
 });

function save(){
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

function load(){    
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

function clearChecks(){
    localStorage.clear()
}

$(document).ready(function(){
    $('input[type="checkbox"]').click(function(){
        if($(this).attr("value")=="organic"){
            $("#ischecked").append("<h1>Organic egg brands:</h1><ul><li>Trader Joe's organic Free Range</li> \
              <li>Stiebrs farms go-organic omega3</li> \
              <li>Stiebrs Farms go-organic free-range</li> \
              <li>Stiebrs Farms pasture raised</li></ul>"),
            $("#chickencheck").append("<h1>Organic chicken brands:</h1><ul><li>Trader Joe's Organic free range</li> \
              <li>365 Organics</li>\
              <li>Applegate Organics</li>\
              <li>Simple Truth Organic</li>\
              <li>Foster Farms Organic</li>\
              <li>O Organics</li>\
              </ul>")
        }
        if($(this).attr("value")=="gmoFree"){
            $("#ischecked").append("<h1>GMO free egg brands:</h1><ul> \
              <li>Stiebrs farms go-organic omega3</li> \
              <li>Stiebrs Farms go-organic free-range</li> \
              <li>Stiebrs Farms pasture raised</li></ul>"),
            $("#chickencheck").append("<h1>GMO free chicken brands:</h1><ul> \
              <li>365 Organics</li>\
              <li>Applegate Organics</li>\
              <li>Simple Truth Organic</li>\
              <li>Foster Farms Organic</li>\
              <li>O Organics</li>\
              </ul>")
        }
        if($(this).attr("value")=="noAntibiotics"){
            $("#ischecked").append("<h1>Antibiotic free egg brands:</h1><ul><li>Trader Joe's cage free</li> \
              <li>Trader Joe's organic Free Range</li> \
              <li>Stiebrs farms go-organic omega3</li> \
              <li>Stiebrs Farms go-organic free-range</li> \
              <li>Stiebrs Farms pasture raised</li></ul>"),
            $("#chickencheck").append("<h1>Antibiotic free chicken brands:</h1><ul> \
              <li>365 Organics</li>\
              <li>Applegate Naturals</li>\
              <li>Applegate Organics</li>\
              <li>Simple Truth Organic</li>\
              <li>Foster Farms Organic</li>\
              <li>Open Nature</li>\
              <li>O Organics</li> \
              </ul>")

        }
        if($(this).attr("value")=="range"){
            $("#ischecked").append("<h1>Egg brands - good living conditions:</h1><ul><li>Trader Joe's cage free</li> \
              <li>Trader Joe's organic Free Range</li> \
              <li>Stiebrs Farms go-organic free-range</li> \
              <li>Stiebrs Farms pasture raised</li></ul>"),
            $("#chickencheck").append("<h1>Chicken brands - good living conditions:</h1><ul> \
              <li>Trader Joe's Organic free range</li>\
              <li>Simple Truth Organic cage free</li>\
              <li>Foster Farms cage free</li>\
              <li>Foster Farms Organic cage free</li>\
              <li>Safeway Farms cage free</li>\
              <li>Open Nature cage free</li>\
              <li>O Organics cage free</li> \
              </ul>")
        }
        if($(this).attr("value")=="humane"){
            $("#ischecked").append("<h1>Egg brands - Humanely raised:</h1><ul>\
              <li>Stiebrs farms go-organic omega3</li> \
              <li>Stiebrs Farms go-organic free-range</li> \
              <li>Stiebrs Farms pasture raised</li></ul>"),
            $("#chickencheck").append("<h1>Chicken brands - Humanely raised:</h1><ul> \
              <li>365 Organics</li>\
              <li>Applegate Naturals</li>\
              <li>Applegate Organics</li>\
              <li>Foster Farms cage free</li>\
              <li>Foster Farms Organic cage free</li>\
              <li>Open Nature cage free</li>\
              <li>O Organics</li> \
              </ul>")
        }
        if($(this).attr("value")=="diet"){
            $("#ischecked").append("<h1>Egg brands - Natural diet:</h1><ul><li>Trader Joe's cage free</li> \
              <li>Trader Joe's organic Free Range</li> \
              <li>Stiebrs farms go-organic omega3</li> \
              <li>Stiebrs Farms go-organic free-range</li> \
              <li>Stiebrs Farms pasture raised</li></ul>"),
            $("#chickencheck").append("<h1>Chicken brands - Natural diet:</h1><ul> \
              <li>365 Organics</li>\
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

$(document).ready(function () {
  load();
  clearChecks();
});    