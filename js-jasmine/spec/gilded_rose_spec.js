import { Shop, Item } from "../src/gilded_rose.js";
import { getMaxQuality, getQualityOnly, getSellInOnly, qualityNotNegative } from "./utils.js";
import { items } from './data.js';

describe('Gilded Rose', function () {
  describe("Normal items", function () {

    it("quality should decreased by 1", function () {
      // step1 => liste item a verifier
      const normalItems = items.filter(item =>
        !item.name.includes("Sulfuras") &&
        !item.name.includes("Aged Brie") &&
        !item.name.includes("Backstage passes")
      );

      // step2 => create Shop
      const shop = new Shop(normalItems);
      console.log("shop", shop);
      // step3 => keep initial data for comparison
      const initialQuality = shop.items.map(item => item.quality);

      console.log("initialQuality", initialQuality);
      console.log("Initial state:");
      shop.items.forEach(item => {
        console.log(`${item.name}: quality=${item.quality}, sellIn=${item.sellIn}`);
      });

      for (let day = 0; day < 3; day++) {
        shop.updateQuality();
        console.log(`\n-------- day ${day + 1} --------`);

        // decrease de 1 mais ne doit pas etre en dessous de zero
        shop.items.forEach((item, index) => {
          const expectedQuality = qualityNotNegative(initialQuality, index) - (day + 1);
          console.log(`${item.name}: quality=${item.quality}, sellIn=${item.sellIn}`);
          console.log(`Expected: ${expectedQuality}, Actual: ${item.quality}`);
          expect(item.quality).toBe(expectedQuality);
        });
      }
    });
    console.log(`\n-------- First test --------`);
  });
});

// initialQuality[index]


