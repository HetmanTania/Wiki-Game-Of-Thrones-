export default class ApiGOTService {

    constructor() {
        this.sendRequestAPIGOT = new SendRequestAPIGOT();
        this.sortData = new SortData();
    }

     getCharacters(){
        return this.sendRequestAPIGOT.getСharacters();
    }

    getCharacter(id){
        return this.sendRequestAPIGOT.getCharacter(id);
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
        let resFetch = await fetch(`${this.urlApi}${url}`);
        if (!resFetch.ok) {
            throw new Error(`Error in the function getData(), number error ${resFetch.status}`);
        }

        return await resFetch.json();;
    }


    async getСharacters(startPage = 1, endPage = 214) {
        try {
            let characters = [];
            let result = [];
            let indexPage = startPage;
            do {
              await this.getData(`/characters?page=${indexPage}&pageSize=40`).then((res) => {
                    result = res;
                    result.forEach((el) => {
                        if (el.tvSeries[0] !== "" && el.name !== ""){
                            characters.push(this.transformData.transformCheracter(el));
                        }
                    })
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

    async getCharacter(id) {
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