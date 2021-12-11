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

class Resume {
  constructor(id, title, start_date, end_date, place, description) {
    this.id = id;
    this.title = title;
    this.start_date = start_date;
    this.end_date = end_date;
    this.place = place;
    this.description = description;
  }
}

class Education extends Resume {}

class Experience extends Resume {}

class Coordinate {
  constructor(id, icon, title, text) {
    this.id = id;
    this.icon = icon;
    this.title = title;
    this.text = text;
  }
}

export { Link, Social, Education, Experience, Coordinate };
