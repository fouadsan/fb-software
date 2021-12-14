class Link {
  constructor(id, name, icon) {
    this.id = id;
    this.name = name;
    this.icon = icon;
  }
}

class Social {
  constructor(id, icon, title, link) {
    this.id = id;
    this.icon = icon;
    this.title = title;
    this.link = link;
  }
}

class Coordinate {
  constructor(id, icon, title, text) {
    this.id = id;
    this.icon = icon;
    this.title = title;
    this.text = text;
  }
}

export { Link, Social, Coordinate };
