import { Shop } from '../model/shop';

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

});
