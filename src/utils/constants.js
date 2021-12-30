const genderValues = ["male", "female", "other"];
const professionsValues = ["commedian", "actor", "actres", "model"];
const shoesizeValues = [
  6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 13, 14, 15,
];
const hairColorValues = ["bonde", "caramel", "black", "brown", "gray"];
const hairLengthValues = ["long", "medium", "short", "bald"];
const braSizeValues = [
  "26AA",
  "28AA",
  "30AA",
  "32AA",
  "34AA",
  "36AA",
  "38AA",
  "40AA",
  "42AA",
  "44AA",
  "46AA",
  "48AA",
  "50AA",
  "52AA",
  "54AA",
  "56AA",
  "58AA",
  "60AA",
];
const waistValues = [24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36];
const heights = [];
const weights = [];
for (let i = 150; i < 250; i++) {
  heights.push(i);
  weights.push(i - 50);
}
const castingsValues = ["movies", "commercials", "newspapers", "magazines"];
module.exports = {
  genderValues,
  professionsValues,
  shoesizeValues,
  hairLengthValues,
  hairColorValues,
  braSizeValues,
  heights,
  waistValues,
  weights,
  castingsValues,
};
