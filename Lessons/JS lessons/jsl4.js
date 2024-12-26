function HouseKeep(years, name, services){
    this.years = years;
    this.name = name;
    this.services = services

    this.clean = function(){
        alert("cleaning in progress");
    }
}

var keep1 = new HouseKeep(9, "Tim", ["kitchen", "bedroom"]);
keep1.clean();