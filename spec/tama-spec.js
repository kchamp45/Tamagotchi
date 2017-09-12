import { tamatoy } from './../js/tama.js';

describe('Tamagotchi', function() {
  let bobby = tamatoy;

beforeEach(function() {
    jasmine.clock().install();
    bobby.foodLevel = 10;
    bobby.happyLevel = 20;
    bobby.sleepLevel = 10;
    bobby.name = "Bob";
    bobby.setHunger();
    bobby.setHappy();
    bobby.setSleep();
  });

  afterEach(function() {
    jasmine.clock().uninstall();
  });

  it('should have a name and a food level of 10 when it is created', function() {
    expect(bobby.name).toEqual("Bob");
    expect(bobby.foodLevel).toEqual(10);
  });

  it('should have a food level of 7 after 3001 milliseconds', function() {
      jasmine.clock().tick(3001);
      expect(bobby.foodLevel).toEqual(7);
  });

  it('should get very hungry if the food level drops below zero', function() {
    bobby.foodLevel = 0;
    expect(bobby.didYouGetEaten()).toEqual(true);
  });

  it('should get very hungry if 10 seconds pass without feeding', function() {
    jasmine.clock().tick(10001);
    expect(bobby.didYouGetEaten()).toEqual(true);
  });

  it('should not be able to feed tamatoy if you got eaten', function() {
    bobby.foodLevel = -1;
    expect(bobby.feed(5)).toEqual("Sorry, you're dead, so your tamatoy is on its own!");
  });

  it('should return that the tamatoy ate dirt and the food level should go up 5', function() {
    expect(bobby.eatSmall("dirt")).toEqual("The tamatoy ate the dirt! Food level goes up 5!");
    expect(bobby.foodLevel).toEqual(15);
  });

  it('should have a name and a happiness level of 20 when it is created', function() {
    expect(bobby.name).toEqual("Bob");
    expect(bobby.happyLevel).toEqual(20);
  });

  it('should get very sad after 20 seconds without play', function() {
    jasmine.clock().tick(20001);
    expect(bobby.didYouPlayWithIt()).toEqual(true);
  });

  it('should be happy if you play with it and the happy level should go up 10', function() {
    expect(bobby.playChess("chess")).toEqual("You played chess with tamatoy.  Happiness level goes up 5!");
    expect(bobby.happyLevel).toEqual(25);
  });

  it('should get very grouchy after 10 seconds without sleep', function() {
    jasmine.clock().tick(10001);
    expect(bobby.didYouLetItSleep()).toEqual(true);
  });

  it('should be rested if you let it sleep and the sleep level should go up 10', function() {
    expect(bobby.noonNap(5)).toEqual("You let your tamatoy sleep this 5 long.  Sleep level goes up 10!");
    expect(bobby.happyLevel).toEqual(20);
  });


});
