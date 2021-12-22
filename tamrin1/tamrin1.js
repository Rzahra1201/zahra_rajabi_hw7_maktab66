function Uni(type) {
    if (type == "network") {
      this.className = "network";
      this.classUnit = 3;
      this.classCapacity = 50;
    } else {
      this.className = "softEngineering";
      this.classUnit = 3;
      this.classCapacity = 30;
    }
    return { className: this.className, classUnit: this.classUnit, classCapacity: this.classCapacity };
  }
  var classname = new Uni("softEngineering");
  var classname2 = new Uni("network");
  
  classname.book = true;
  classname2.project = true;
  
  console.log(classname);
  console.log(classname2);
  