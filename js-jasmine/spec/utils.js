
const getMaxQuality = (array) => {
  const arrayQuality = array.map(item => item.quality);
  return Math.max(...arrayQuality);
};

const getQualityOnly = (array) => array.map(item => item.quality);

const getSellInOnly = (array) => array.map(item => item.sellIn);

const qualityNotNegative = (array, index) => Math.max(0, array[index]);

export { getMaxQuality, getQualityOnly, getSellInOnly, qualityNotNegative };