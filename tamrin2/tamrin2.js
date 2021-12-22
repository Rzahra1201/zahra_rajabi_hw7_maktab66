class Media {
  constructor() {
    this.media = "internet";
  }
}

class book extends Media {
  constructor() {
    super();
    this.name = "shahname";
    this.type = "pdf";
  }
}

class film extends Media {
  constructor() {
    super();
    this.name = "360";
    this.roducer = "netflix";
  }
}

class music extends Media {
  constructor() {
    super();

    this.name = "life good";
    this.artist = "jon";
  }
}

var objectbook = new book();
var objectfilm = new film();
var objectmusic = new music();

console.log(objectbook.media);
console.log(objectbook.type);
console.log(objectfilm.name);
console.log(objectmusic.artist);