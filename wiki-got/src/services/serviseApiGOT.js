export default class ApiGOTService {

    constructor() {
        this.sendRequestAPIGOT = new SendRequestAPIGOT();
        this.sortData = new SortData();
    }





     getCharacters(){
        let a = this.sendRequestAPIGOT.getСharacters();
          return a;
    }

    getCheracter(id){
        return this.sendRequestAPIGOT.getСharacter(id);
    }

    sortByName(data){
       return this.sortData.sortByName(data);
    }

}


class TransformData {

    transformCheracter(cheracter){
        return {
            id: this.returnId(cheracter.url),
            name : cheracter.name,
            gender : cheracter.gender,
            culture : cheracter.culture,
            born : cheracter.born,
            died : cheracter.died,
            aliases : cheracter.aliases
        }
    }

    returnId(url){
        let id = url.match(/\d+$/);
        return id[0];
    }
}

class SendRequestAPIGOT {

    constructor() {
        this.transformData = new TransformData();
        this.urlApi = "https://www.anapioficeandfire.com/api";
    }



    async getData(url) {
        let res = await fetch(`${this.urlApi}${url}`);
        if (!res.ok) {
            throw new Error(`Error in the function getData(), number error ${res.status}`);
        }


        if(!res.length ||  !Object.keys(res).length){
            throw new Error(`Data not found`);
        }
        return res;
    }


    async getСharacters(startPage = 1, endPage = 214) {
        try {
            let characters = [];
            let result = [];
            let indexPage = startPage;
            do {
                result = await this.getData(`/characters?page=6756456&pageSize=40`).then(() => {
                    result.forEach((el) => {
                        if (el.tvSeries[0] !== "" && el.name !== "") {
                            characters.push(this.transformData.transformCheracter(el));
                        }
                    });
                    indexPage++;
                }).catch((e) => {
                    throw e;
                });

            } while (result.length !== 0);


            return characters;
        }
        catch (e) {
            throw e;

        }
    }

    async getAPICheracter(id) {
        let character = await this.getData(`/characters/${id}`);
        return this.transformData.transformCheracter(character);
    }

}

class SortData{
    sortByName(data){
        let sortData =  data;
        sortData.sort((el1, el2) => {
            if (el1.name < el2.name)
                return -1
            if (el1.name > el2.name)
                return 1
            return 0
        });
        return sortData;
    }
}