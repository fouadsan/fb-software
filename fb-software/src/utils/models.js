class Link {
  constructor(id, name, icon) {
    this.id = id;
    this.name = name;
    this.icon = icon;
  }
}

class Social {
  constructor(id, icon, title) {
    this.id = id;
    this.icon = icon;
    this.title = title;
  }
}

class Service {
  constructor(id, icon, title, text) {
    this.id = id;
    this.icon = icon;
    this.title = title;
    this.text = text;
  }
}

class Technology {
  constructor(id, logoUrl, name) {
    this.id = id;
    this.logoUrl = logoUrl;
    this.name = name;
  }
}

class Experience {
  constructor(id, title, start_date, end_date, place, description) {
    this.id = id;
    this.title = title;
    this.start_date = start_date;
    this.end_date = end_date;
    this.place = place;
    this.description = description;
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

export { Link, Social, Service, Technology, Experience, Coordinate };
