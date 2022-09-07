if (annyang) {
    // Let's define a command.
    var commands = {
      'hi': function(){ alert('Wish you Many more Happy Returns of the day Suman !!! '); }
    };
  
    // Add our commands to annyang
    annyang.addCommands(commands);
  
    // Start listening.
    annyang.start();
  }