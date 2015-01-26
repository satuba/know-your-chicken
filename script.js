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

var eggs = [];
eggs.push(new Brand("Stiebr's Farm Omega3", "egg", true, true, true, true, true, "none"));
eggs.push(new Brand("Stiebr's Farm Free Range", "egg", true, true, true, true, true, "free-range"));
eggs.push(new Brand("Stiebr's Farm Pasture Raised", "egg", true, true, true, true, false, "pasture raised"));
eggs.push(new Brand("Trader Joe's Cage Free", "egg", false, false, true, true, false, "none"));
eggs.push(new Brand("Trader Joe's Organic Free Range", "egg", true, false, true, true, false, "free-range"));

var chickens = [];
chickens.push(new Brand("Trader Joe's Organic FreeRange", "chicken", true, false, true, true, false, "none"));
chickens.push(new Brand("365 Organics", "chicken", true, true, true, true, true,  "none"));
chickens.push(new Brand("Applegate Naturals", "chicken", true, true, true, true, true, "none"));
chickens.push(new Brand("Applegate Organics", "chicken", false, false,  true, true, true, "none"));
chickens.push(new Brand("Simple Truth Organic", "chicken", true, true, true, false, false, "free-range"));
chickens.push(new Brand("Tyson",  "chicken", false, false, false, false, false, "none"));
chickens.push(new Brand("Perdue", "chicken", false, false, false, true,  false, "cage-free"));
chickens.push(new Brand("Foster Farms", "chicken", false, false, false, true, true, "cage-free"));
chickens.push(new Brand("Foster Farms Organic", "chicken", true, true, true, true, true, "cage-free"));
chickens.push(new Brand("Safeway Farms", "chicken", false, false, false, false, false, "cage-free"));
chickens.push(new Brand("Open Nature", "chicken",  false, false, true, true, true, "cage-free"));
chickens.push(new Brand("O Organics", "chicken",  true, true, true, true, true, "cage-free"));

$("chickenBrandResults").click(function() {
  $('option').each(function(i) {
    if(':selected' === chickens[0]) {
      $('footer').append("<p>it works!</p>");
    }
  })
});
