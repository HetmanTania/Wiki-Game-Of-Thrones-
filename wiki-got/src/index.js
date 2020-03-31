class ApiGOTService {

    constructor() {
        this.urlApi = "https://www.anapioficeandfire.com/api";

    }


    async getData(url) {
        let res = await fetch(`${this.urlApi}${url}`);
        if (!res.ok) {
            throw new Error(`Error in the function getData(), number error  ${res.status}`);
        }

        return await res.json();
    }

    async getСharacters(startPage = 1, endPage = 214) {
        let characters = [];
        let result = [];
        let indexPage = startPage;
        do {

            result = await this.getData(`/characters?page=${indexPage}&pageSize=40`);
            result.filter((el) => {
                if (el.tvSeries[0] !== "") {
                    let idCharacter = el.url.match(/\d+$/);
                    el.id = idCharacter[0];
                    characters.push(el);
                }
            });
            indexPage++;
        } while (result.length !== 0);

        return characters
    }

     sortСharactersDySeason(character) {
        let charecters = character;
        charecters.sort((el1, el2) => {
            return el1.tvSeries.length < el2.tvSeries.length;
        });

    }


    async getCheracter(id) {
        let character =  await this.getData(`/characters/${id}`);
        return character;
    }
}

let apiGOTService = new ApiGOTService();
let cheracters = apiGOTService.getСharacters();
cheracters.then((cs) => {
    css.filter(() => {
        
    })
} )

