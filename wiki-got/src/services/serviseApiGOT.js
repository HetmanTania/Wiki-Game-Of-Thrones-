export default class ApiGOTService {

    constructor() {
        this.urlApi = "https://www.anapioficeandfire.com/api";
    }


    async getData(url) {
        let res = await fetch(`${this.urlApi}${url}`);
        if (!res.ok) {
            throw new Error(`Error in the function getData(), number error ${res.status}`);
        }

        return await res.json();
    }

    async getСharacters(startPage = 1, endPage = 214) {
        let characters = [];
        let result = [];
        let indexPage = startPage;
        do {
            result = await this.getData(`/characters?page=${indexPage}&pageSize=40`);
            result.forEach((el) => {
                if (el.tvSeries[0] !== "" && el.name !== "") {
                    characters.push(this.transformCheracter(el));
                }
            });
            indexPage++;
        } while (result.length !== 0);

        return this.sortСharactersByName(characters);
    }

     sortСharactersByName(character) {
        let charecters =  character;
        charecters.sort((el1, el2) => {
            if (el1.name < el2.name)
                return -1
            if (el1.name > el2.name)
                return 1
            return 0
        });
        return charecters;
    }


    async getAPICheracter(id) {
        let character = await this.getData(`/characters/${id}`);
        return this.transformCheracter(character);
    }

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