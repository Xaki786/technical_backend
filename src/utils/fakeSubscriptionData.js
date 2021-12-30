const faker = require("faker");
const fakeSubscriptionData = [];
const {
  genderValues,
  professionsValues,
  shoesizeValues,
  hairColorValues,
  hairLengthValues,
  braSizeValues,
  waistValues,
  heights,
  weights,
  castingsValues,
} = require("./constants");
for (let i = 0; i < 50; i++) {
  let sub = {
    firstname: "",
    lastname: "",
    //  picture (type dropdown),
    gender: "",
    dob: new Date(),
    profession: "",
    shoesize: "",
    hairColor: "",
    hairLength: "",
    braSize: "",
    waist: 0,
    height: 0,
    weight: 0,
    castings: "",
  };
  sub.firstname = faker.name.firstName();
  sub.lastname = faker.name.lastName();
  sub.gender = faker.random.arrayElement(genderValues);
  sub.dob = faker.date.past();
  sub.profession = faker.random.arrayElement(professionsValues);
  sub.shoesize = faker.random.arrayElement(shoesizeValues);
  sub.hairColor = faker.random.arrayElement(hairColorValues);
  sub.hairLength = faker.random.arrayElement(hairLengthValues);
  sub.braSize = faker.random.arrayElement(braSizeValues);
  sub.waist = faker.random.arrayElement(waistValues);
  sub.height = faker.random.arrayElement(heights);
  sub.weight = faker.random.arrayElement(weights);
  sub.castings = faker.random.arrayElement(castingsValues);
  fakeSubscriptionData.push(sub);
}

module.exports = {
  fakeSubscriptionData,
};
