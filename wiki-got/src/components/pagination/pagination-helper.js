export default class paginationHelper {

    getPrintItems(items, countItems, numberPage){
        let start = numberPage !==1 ? numberPage * countItems : 0;
        let and = start + countItems;
        return   items.slice(start,  and);
    }
}