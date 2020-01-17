import {agedBrieSKU,backstagePassesToATafkalConcert,sulfurasHandofRagnaros,conjuredProduct } from '../model/catalog';

export const isBackstagePassesToATafkalConcert = item => item.name == backstagePassesToATafkalConcert;
export const isAgedBrie = item => item.name == agedBrieSKU;
export const isSulfuras = item => item.name == sulfurasHandofRagnaros;
export const isConjured = item => item.name == conjuredProduct;