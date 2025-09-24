import { Shop } from "../src/gilded_rose.js";
import { getMaxQuality, getQualityOnly, getSellInOnly } from "./utils.js";
import { items } from './data.js';


describe('Gilded Rose', function () {
  describe("Normal items", function () {


    it("quality should decreased by 1", function () {
      const normalItems = items.filter(item => !item.name.includes("Sulfuras") && !item.name.includes("Aged Brie"));
      console.log('test', normalItems);
    });

    // const selectedItems = new Shop(normalItems);


  });

});
// let expectedSellIn = normalItems.items.map(item => item.sellIn);
// let expectedQuality = normalItems.items.map(item => item.quality);

// console.log('--------------------------------------------');
// console.log('fulltest sellin et quality pour plusieurs items normaux');

// // Afficher l'état initial (jour 0)
// console.log(`\n-------- day 0 --------`);
// console.log("name, sellIn, quality");


// for (let day = 1; day <= 3; day++) {
//   // Calculer les valeurs attendues après la mise à jour
//   expectedSellIn = expectedSellIn.map(sellIn => sellIn - 1);
//   expectedQuality = expectedQuality.map(quality => quality > 0 ? quality - 1 : quality);

//   // Mettre à jour les items
//   normalItems.updateQuality();

//   console.log(`\n-------- day ${day} --------`);
//   console.log("name, sellIn, quality");
//   normalItems.items.forEach((item, index) => {
//     console.log(item);
//     expect(item.sellIn).toEqual(expectedSellIn[index]);
//     expect(item.quality).toEqual(expectedQuality[index]);
//     expect(item.quality).toBeGreaterThanOrEqual(0);
//     // expect(item.quality).toBeLessThanOrEqual(50);
//   });
// }


// it("La qualité d'un produit ne peut jamais être négative pour ", function () {
//   const normalItems = new Shop([
//     new Item("+5 Dexterity Vest", 10, 20),
//     new Item("Elixir of the Mongoose", 5, 7)
//   ]);

//   let expectedSellIn = normalItems.items.map(item => item.sellIn);
//   let expectedQuality = normalItems.items.map(item => item.quality);

//   console.log('--------------------------------------------');
//   console.log("quality can't be negative");

//   // Afficher l'état initial (jour 0)
//   console.log(`\n-------- day 0 --------`);
//   console.log("name, sellIn, quality");


//   for (let day = 0; day <= 21; day++) {
//     // Calculer les valeurs attendues après la mise à jour
//     expectedSellIn = expectedSellIn.map(sellIn => sellIn - 1);
//     expectedQuality = expectedQuality.map(quality => quality > 0 ? quality - 1 : quality);

//     // Mettre à jour les items
//     normalItems.updateQuality();

//     console.log(`\n-------- day ${day} --------`);
//     console.log("name, sellIn, quality");
//     normalItems.items.forEach((item) => {
//       console.log(item);
//       expect(item.quality).toBeGreaterThanOrEqual(0);
//     });
//   }
// });




