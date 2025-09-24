import { items } from './data.js';

const getMaxQuality = () => {
  const itemsQuality = items.map(item => item.quality);
  return Math.max(...itemsQuality);
};

const getQualityOnly = () => items.map(item => item.quality);

const getSellInOnly = () => items.map(item => item.sellIn);

console.log(getSellInOnly());

export { getMaxQuality, getQualityOnly, getSellInOnly };