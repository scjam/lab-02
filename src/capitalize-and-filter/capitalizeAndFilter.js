const capitalizeAndFilter = (arr) => {
    return arr
      .filter((item) => item.charAt(0) !== 'f')
      .map((item) => item.toUpperCase());
}

module.exports = {
    capitalizeAndFilter
};
