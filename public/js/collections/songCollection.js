var WO = WO || {};
WO.Song = Backbone.Collection.extend({
  model: WO.Track,

  settings : {
    tempo: 130,
    title: "untitled song",
    timeSignature: 4,
    length: "16:0:0",
    activeTrack: ""
  },

  initialize : function(){

    debugger;
    this.add( new WO.Track());
    this.settings.activeTrack = this.at(0);
    // WO.setTempo(this.settings.tempo);
  }

});
