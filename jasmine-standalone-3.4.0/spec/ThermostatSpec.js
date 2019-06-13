describe ('Thermostat', function() {

  var thermostat;
  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it('starts at 20 degrees', function() {
    expect(thermostat.startTemp()).toBe(20);
  });

  describe ('changes the temperature by', function() {

    it('increasing it', function() {
      thermostat = new Thermostat();
      expect(thermostat.up(1)).toBe(21);
    });

  });

});
