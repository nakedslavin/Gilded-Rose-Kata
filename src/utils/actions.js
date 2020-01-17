export const increaseQuality = item => {
    if (item.quality < 50) {
        item.quality = item.quality + 1;
    }
    return item;
}

export const decreaseQuality = (item, byAmout = 1) => {
    if (item.quality > 0) {
        item.quality = item.quality - byAmout;
    }
}