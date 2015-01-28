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

var eggs = {
 SFOO3 : new Brand("Stiebr's Farm Omega3", "egg", true, true, true, true, true, "none"),
  SFFR : new Brand("Stiebr's Farm Free Range", "egg", true, true, true, true, true, "free-range"),
  SFPR : new Brand("Stiebr's Farm Pasture Raised", "egg", true, true, true, true, true, "pasture-raised"),
  TJCF : new Brand("Trader Joe's Cage Free", "egg", false, false, true, true, false, "none"),
  TJOFR : new Brand("Trader Joe's Organic Free Range", "egg", true, false, true, true, false, "free-range")
};

var chickens = {
  TJOFR : new Brand("Trader Joe's Organic FreeRange", "chicken", true, false, true, true, false, "none"),
  365 :new Brand("365 Organics", "chicken", true, true, true, true, true,  "none"),
  appNat :new Brand("Applegate Naturals", "chicken", true, true, true, true, true, "none"),
  appOrg : new Brand("Applegate Organics", "chicken", false, false,  true, true, true, "none"),
  sTruthOrg :new Brand("Simple Truth Organic", "chicken", true, true, true, false, false, "free-range"),
  tyson : new Brand("Tyson",  "chicken", false, false, false, false, false, "none"),
  perdue : new Brand("Perdue", "chicken", false, false, false, true,  false, "cage-free"),
  FF : new Brand("Foster Farms", "chicken", false, false, false, true, true, "cage-free"),
  FFO : new Brand("Foster Farms Organic", "chicken", true, true, true, true, true, "cage-free"),
  safe : new Brand("Safeway Farms", "chicken", false, false, false, false, false, "cage-free"),
  opNat : new Brand("Open Nature", "chicken",  false, false, true, true, true, "cage-free"),
  oOrg : new Brand("O Organics", "chicken",  true, true, true, true, true, "cage-free")
};


$("#chickenDrop").on("change", function() {
  var selectedChicken = chickens[$(this).val()];
   $('#output').append("<tr>" + "<td> Name: </td> <td>" + selectedChicken.name + "</td> </tr> \
                        <tr>" + "<td> Organic: </td> <td>" + selectedChicken.organic + "</td> </tr> \
                        <tr>" + "<td> GMO Free: </td> <td>" + selectedChicken.gmofree+ "</td> </tr> \
                        <tr>" + "<td> Antibiotic Free: </td> <td>" + selectedChicken.antibioticsfree + "</td> </tr> \
                        <tr>" + "<td> Natural Diet: </td> <td>" + selectedChicken.naturalDiet+ "</td> </tr> \
                        <tr>" + "<td> Humanely Raised: </td> <td>" + selectedChicken.humaneRaised + "</td> </tr> \
                        <tr>" + "<td> Range: </td> <td>" + selectedChicken.range + "</td> </tr>");
 });

$("#eggDrop").on("change", function() {
  var selectedEgg = eggs[$(this).val()];
   $('#output').append("<tr>" + "<td> Name: </td> <td>" + selectedEgg.name + "</td> </tr> \
                        <tr>" + "<td> Organic: </td> <td>" + selectedEgg.organic + "</td> </tr> \
                        <tr>" + "<td> GMO Free: </td> <td>" + selectedEgg.gmofree+ "</td> </tr> \
                        <tr>" + "<td> Antibiotic Free: </td> <td>" + selectedEgg.antibioticsfree + "</td> </tr> \
                        <tr>" + "<td> Natural Diet: </td> <td>" + selectedEgg.naturalDiet+ "</td> </tr> \
                        <tr>" + "<td> Humanely Raised: </td> <td>" + selectedEgg.humaneRaised + "</td> </tr> \
                        <tr>" + "<td> Range: </td> <td>" + selectedEgg.range + "</td> </tr>");
 });

$(".chkBrand").hide();
$(".eggBrand").hide();

function checkboxChecked() {
  if("[data-organic='true']:checked") {
    $("[data-organic='true']").show()
  }
  else if("[data-gmoFree='true']:checked") {
    $("[data-gmoFree='true']").show()
  }
  else if("[data-noAntibiotics='true']:checked") {
    $("[data-noAntibiotics='true']").show()
  }
  else if("[data-range='true']:checked") {
    $("[data-range='true']").show()
  }
  else if("[data-humane='true']:checked") {
    $("[data-humane='true']").show()
  }
  else if("[data-diet='true']:checked") {
    $("[data-diet='true']").show()
  }
};

$("#VBB").on("click", checkboxChecked);