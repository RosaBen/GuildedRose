import { Shop, Item } from "../src/gilded_rose.js";
import { getMaxQuality, getQualityOnly, getSellInOnly, qualityNotNegative } from "./utils.js";
import { items } from './data.js';


describe('Gilded Rose', function () {
  describe("Normal items", function () {

    // Une fois que la date de péremption est passée, la qualité se dégrade deux fois plus rapidement.
    // La qualité (quality) d'un produit ne peut jamais être négative.
    // A la fin de chaque journée, quality diminue
    // La qualité d'un produit n'est jamais de plus de 50
    // "Backstage passes" augmente sa qualité (quality) plus le temps passe (sellIn) : La qualité augmente de 2 quand il reste 10 jours ou moins et de 3 quand il reste 5 jours ou moins, mais la qualité tombe à 0 après le concert (jour 0)


    // step1 => getdata
    const normalItems = items.filter(item =>
      !item.name.includes("Sulfuras") &&
      !item.name.includes("Aged Brie") &&
      !item.name.includes("Backstage passes")
    );
    it("quality should decreased by 1", function () {


      // step2 => create Shop
      const shop = new Shop(normalItems);

      // step3 => keep initial data for comparison
      const InitialQuality = shop.items.map(item => item.quality);


      //  verification 
      for (let day = 0; day < 2; day++) {
        shop.updateQuality();
        console.log(`\n-------- day ${day} --------`);
        console.log("name, sellIn, quality");
        shop.items.forEach((item, index) => {
          if (item.quality > 0) {
            const expectedQuality = qualityNotNegative(day, InitialQuality, index);
            console.log("test", expectedQuality);
            expect(item.quality).toBe(expectedQuality);
          }
        });
      }


    });

    it('quality decreased by 2 when seelIn <0', function () {

    });


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




