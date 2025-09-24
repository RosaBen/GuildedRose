import { items } from './data.js';

const getMaxQuality = () => {
  const itemsQuality = items.map(item => item.quality);
  return Math.max(...itemsQuality);
};

const getQualityOnly = () => items.map(item => item.quality);

const getSellInOnly = () => items.map(item => item.sellIn);

const qualityNotNegative = (day, array, index) => Math.max(0, array[index] - (day + 1));

export { getMaxQuality, getQualityOnly, getSellInOnly, qualityNotNegative };