var WO = WO || {};

WO.Metronome = {
  metronome: null,

  notes: {
    "Gb4": "soundfont/Click-16-44b.wav",
    // "G4": "soundfont/MetroBar.mp3",
    // "A4": "soundfont/MetroBeat.mp3",
    // "D4" : "soundfont/acoustic-kit/snare.wav",
    // "A4" : "soundfont/acoustic-kit/tom1.wav",
    // "G4" : "soundfont/acoustic-kit/tom2.wav",
    "F4" : "soundfont/Click-16-44.wav",
    // "C4" : "soundfont/acoustic-kit/kick.wav"
  },

  playMetronome: function(){
    var metronomePreset = [
      [true,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
      // [true,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
      // [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
      // [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
      // [false,false,false,false,true,false,false,false,true,false,false,false,true,false,false,false],
      [false,false,false,false,true,false,false,false,true,false,false,false,true,false,false,false]
      // [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false]
    ];
    var stepNumber = 0;
    var noteName = Object.keys(this.notes);

    Tone.Transport.setInterval(function(time){
      stepNumber = stepNumber % 16;
      for (var i = 0; i < metronomePreset.length; i++){
        if (metronomePreset[i][stepNumber]){
          this.metronome.triggerAttack(noteName[i], time);
        }
      }
      stepNumber++;
    }.bind(this), "16n");
  }
};

WO.Metronome.metronome = new Tone.MultiSampler(WO.Metronome.notes, function(){
  });
WO.Metronome.metronome.setVolume(-5);
WO.Metronome.metronome.toMaster();
