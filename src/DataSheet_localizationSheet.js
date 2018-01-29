
export default class DataSheet_localizationSheet {
  constructor() {
    this.items = [];
    this.requestedKeyPath = '';

    // eslint-disable-next-line no-unused-vars
    let key = 1;
    // eslint-disable-next-line no-unused-vars
    let item;
    
    item = {};
    item.key = key++;
    this.items.push(item);
    item['key'] = "backarrow_n_852426";
    item['en'] = "";
    
    item = {};
    item.key = key++;
    this.items.push(item);
    item['key'] = "buttonkey_label_513900";
    item['en'] = "Intro";
    
    item = {};
    item.key = key++;
    this.items.push(item);
    item['key'] = "button2_label_915033";
    item['en'] = "Create Account";
    
    item = {};
    item.key = key++;
    this.items.push(item);
    item['key'] = "button1_label_182851";
    item['en'] = "Sign In";
    
    item = {};
    item.key = key++;
    this.items.push(item);
    item['key'] = "input_label_758081";
    item['en'] = "";
    
    item = {};
    item.key = key++;
    this.items.push(item);
    item['key'] = "buttonkeyexpandtop_label_18986";
    item['en'] = "Intro";
    
    item = {};
    item.key = key++;
    this.items.push(item);
    item['key'] = "buttonkeyexpandbottom_label_866384";
    item['en'] = "Hi, my name is Paul Rodriguez and I am Creative Full Stack Developer here in Denver, CO";
    
    item = {};
    item.key = key++;
    this.items.push(item);
    item['key'] = "buttonstack_title_282944";
    item['en'] = "Kevin & Anne\nBest Man Speech";
    
    item = {};
    item.key = key++;
    this.items.push(item);
    item['key'] = "n03keys_label_215177";
    item['en'] = "Keys";
    
    item = {};
    item.key = key++;
    this.items.push(item);
    item['key'] = "n03keys_label2_741960";
    item['en'] = "Capstone Presentation";
    
    item = {};
    item.key = key++;
    this.items.push(item);
    item['key'] = "n02stacks_label_274449";
    item['en'] = "Stacks";
    
    item = {};
    item.key = key++;
    this.items.push(item);
    item['key'] = "n02stacks_label2_555474";
    item['en'] = "@prdesignwork";
    
    item = {};
    item.key = key++;
    this.items.push(item);
    item['key'] = "n01home_password_912055";
    item['en'] = "Password";
    
    item = {};
    item.key = key++;
    this.items.push(item);
    item['key'] = "n01home_username_652148";
    item['en'] = "Username";
    
    item = {};
    item.key = key++;
    this.items.push(item);
    item['key'] = "n01home_label_939367";
    item['en'] = "A Simple Flash Card App to help with Memorization and Public Speaking";
    
    item = {};
    item.key = key++;
    this.items.push(item);
    item['key'] = "n04keysexpanded_label_196338";
    item['en'] = "KEYS";
    
    item = {};
    item.key = key++;
    this.items.push(item);
    item['key'] = "n04keysexpanded_label2_892673";
    item['en'] = "Capstone Presentations";
    
    item = {};
    item.key = key++;
    this.items.push(item);
    item['key'] = "n04keysexpanded_label_777755";
    item['en'] = "Keys";
    
    item = {};
    item.key = key++;
    this.items.push(item);
    item['key'] = "n04keysexpanded_label2_255559";
    item['en'] = "Capstone Presentation";
  }

  addItem = (item) => {
    let key = 1;
    if (this.items.length > 0) {
      key += this.items[this.items.length - 1].key;
    }
    item.key = key;
    this.items.push(item);
  }

  loadFromJson = (json) => {
    function setupArrayKeys(json) {
      // for an array, ensure that items have a key (this is required by React)
      for (var i = 0; i < json.length; i++) {
        if (json[i].key === undefined)
          json[i].key = i;
      }
    }

    if (Array.isArray(json)) {
      // for an array, ensure that items have a key (this is required by React)
      for (var i = 0; i < json.length; i++) {
        if (json[i].key === undefined)
          json[i].key = i;
      }
      setupArrayKeys(json);
      this.items = json;
    }
    else if (json) {
      // if we received a single JSON object, set it as the first row in the sheet.
      // if there's a keypath specified, look up that first.
      var keyPath = this.requestedKeyPath;
      if ( !keyPath || keyPath.length < 1) {
        if ( !json.key) json.key = 0;
        this.items = [ json ];
      } else {
        // look for the requested key path within this object
        var pathComps = keyPath.split('.');
        for (var comp of pathComps) {
          if ( !json.hasOwnProperty(comp)) break;
          json = json[comp];
        }
        if (Array.isArray(json)) {
          setupArrayKeys(json);
          this.items = json;
        } else {
          if ( !json.key) json.key = 0;
          this.items = [ json ];
        }
      }
    }
    else {
      this.items = [];
    }
  }

  getStringsByLanguage = () => {
    let stringsByLang = {};
    for (let row of this.items) {
      const locKey = row.key;
      for (let key in row) {
        if (key === 'key')
          continue;
        let langObj = stringsByLang[key] || {};
        langObj[locKey] = row[key];
        stringsByLang[key] = langObj;
      }
    }
    return stringsByLang;
  }
}
