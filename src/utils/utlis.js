module.exports = {
  removeEmptyValues: (myObj) => {
    const newObj = { ...myObj };
    for (let propName in myObj) {
      if (
        newObj[propName] === null ||
        newObj[propName] === undefined ||
        newObj[propName] === ""
      ) {
        delete newObj[propName];
      }
    }

    return newObj;
  },
};
