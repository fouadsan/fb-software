class Links {
  constructor(id, text, url, icon) {
    this.id = id;
    this.text = text;
    this.url = url;
    this.icon = icon;
  }
}

class Socials {
  constructor(id, icon, title) {
    this.id = id;
    this.icon = icon;
    this.title = title;
  }
}

class Services {
  constructor(id, icon, title, text) {
    this.id = id;
    this.icon = icon;
    this.title = title;
    this.text = text;
  }
}

class Technologies {
  constructor(id, logoUrl, name) {
    this.id = id;
    this.logoUrl = logoUrl;
    this.name = name;
  }
}

export { Links, Socials, Services, Technologies };
