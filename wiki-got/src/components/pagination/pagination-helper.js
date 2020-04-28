export default class paginationHelper {

    getPrintItems(items, countItems, numberPage){
        let start = numberPage * countItems;
        let and = start + countItems;
        return   items.slice(start,  and);
    }
}