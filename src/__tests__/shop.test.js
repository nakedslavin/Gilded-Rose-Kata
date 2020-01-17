import { Shop } from '../model/shop';
import { Item } from '../model/item';
import { genericProduct } from '../model/catalog';

describe("Gilded rose shop", function () {
    
    it("empty store functions", function () {
        const gildedRose = new Shop();
        const items = gildedRose.updateQuality();
        expect(items.length).toEqual(0);
    });

    it("system updates items sellIn and quality values next day by a single unit", function() {
        // - At the end of each day our system lowers both values for every item
        const item = new Item(genericProduct, 4, 4);
        const gildedRose = new Shop([item]);
        gildedRose.updateQuality();
        expect(gildedRose.items[0].quality).toEqual(3);
    });

    it("quality degrades twice as fast for passed products", function() {
        // - Once the sell by date has passed, Quality degrades twice as fast
        const item = new Item(genericProduct, 0, 4);
        const gildedRose = new Shop([item]);
        gildedRose.updateQuality();
        expect(gildedRose.items[0].quality).toEqual(2);
    });

    it("item quality cannot be negative ", function() {
        // The Quality of an item is never negative
        const item = new Item(genericProduct, 1, 0);
        const gildedRose = new Shop([item]);
        gildedRose.updateQuality();
        expect(gildedRose.items[0].quality).toEqual(0);
    });

    it("aged brie product has reverse quality system", function() {
        // "Aged Brie" actually increases in Quality the older it gets
        const item = new Item(agedBrieSKU, 1, 1);
        const gildedRose = new Shop([item]);
        gildedRose.updateQuality();
        expect(gildedRose.items[0].quality).toEqual(2);
    });

    it("aged brie product quality cannot be more than fifty", function() {
        // - The Quality of an item is never more than 50
        const item = new Item(agedBrieSKU, 1, 50);
        const gildedRose = new Shop([item]);
        gildedRose.updateQuality();
        expect(gildedRose.items[0].quality).toEqual(50);
    });
    
    it("sulfuras cannot decrease in quality", function() {
        // - "Sulfuras", being a legendary item, never has to be sold or decreases in Quality
        const item = new Item(sulfurasHandofRagnaros, 1, 1);
        const gildedRose = new Shop([item]);
        gildedRose.updateQuality();
        
        expect(gildedRose.items[0].quality).toEqual(1);
    });

});
