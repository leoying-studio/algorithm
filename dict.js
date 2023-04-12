
function Dict() {
   this.dataStore = [];
}

Dict.prototype = {
   constructor: Dict,
   add: function(key, value) {
      this.dataStore[key] = value;
   },
  remove: function(key) {
     delete dataStore[key]
  },
  find(key) {
    return dataStore[key]
  },
  count: function() {
     let n = 0;
        for(var key in Object.keys(this.datastore)) {
            ++n;
    }
    return n;
  }
};
