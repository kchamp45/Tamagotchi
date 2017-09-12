export let tamatoy = {
  foodLevel: 10,
  happyLevel: 20,
  sleepLevel: 10,

  setHunger: function() {
    const hungerInterval = setInterval(() => {
      this.foodLevel--;
      if (this.didYouGetEaten() == true) {
        clearInterval(hungerInterval);
        return "You got eaten!";
      }
    }, 1000);
  },

  didYouGetEaten: function() {
    if (this.foodLevel > 0) {
      return false;
    } else {
      return true;
    }
  },

  feed: function(amount) {
    let that = this;
    if(this.didYouGetEaten() == false){
      return function(food) {
        that.foodLevel += amount;
        return `The tamatoy ate the ${food}! Food level goes up ${amount}!`;
      };
    }else {
      return `Sorry, you're dead, so your tamatoy is on its own!`;
    }
  },

  setHappy: function(){
    const happyInterval = setInterval(() => {
      this.happyLevel--;
      if(this.didYouPlayWithIt() == true) {
        clearInterval(happyInterval);
        return "The tamatoy is sad.";
      }
    }, 1000);
  },

  didYouPlayWithIt: function(){
    if(this.happyLevel > 0) {
      return false;
    }else {
      return true;
    }
  },

  play: function(amount) {
    return ((type) => {
      if(this.foodLevel > 0) {
      this.happyLevel += amount;
    }
      return `You played ${type} with tamatoy.  Happiness level goes up ${amount}!`;

    });
  },
  setSleep: function(){
    const sleepInterval = setInterval(() => {
      this.sleepLevel--;
      if(this.didYouLetItSleep() == true) {
        clearInterval(sleepInterval);
        return "The tamatoy is grouchy.";
      }
    }, 1000);
  },
  didYouLetItSleep: function(){
    if(this.sleepLevel > 0) {
      return false;
    }else {
      return true;
    }
  },

  sleep: function(amount) {
    return ((duration) => {
      if(this.foodLevel>0){
      this.sleepLevel += amount;
    }
      return `You let your tamatoy sleep this ${duration} long.  Sleep level goes up ${amount}!`;

    });
  },

};
  tamatoy.eatSmall = tamatoy.feed(5);
  tamatoy.eatMedium = tamatoy.feed(10);
  tamatoy.eatLarge = tamatoy.feed(15);
  tamatoy.playChess = tamatoy.play(5);
  tamatoy.playCatch = tamatoy.play(10);
  tamatoy.playRollover = tamatoy.play(15);
  tamatoy.noonNap = tamatoy.sleep(10);
  tamatoy.snooze = tamatoy.sleep(15);
  tamatoy.hibernate = tamatoy.sleep(20);

  
