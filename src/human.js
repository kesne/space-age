export class Human {
  constructor(age, gender, ses) {
    this.age = age;
    this.ageInDays = Math.floor(age*365.25);
    this.gender = gender;
    this.ses = ses;
  }

  setPreciseAge(month, day, year) {
    const birthday = new Date(year, month-1, day);
    const today = new Date();
    this.ageInDays = Math.floor((today.getTime() - birthday.getTime())/(1000*60*60*24));
    this.age = Math.floor(this.ageInDays/365);
    return this.ageInDays;
  }

  getPlanetAge(planet) {
    const planets = {
      Mercury: 88,
      Venus: 225,
      Mars: 687,
      Jupiter: 4332,
      Saturn: 10759,
      Uranus: 30688,
      Neptune: 60200
    }
    return (this.ageInDays/planets[planet]).toFixed(2);
  }
}
