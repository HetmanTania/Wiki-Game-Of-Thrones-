import React from "react";

export default class Pagination extends React.Component {

    state = {
        currentPage: 1
    }

    pushArr(arr, num, classPage, printNum) {
        arr.push(<li className={classPage} onClick={() => {
            this.props.onClickPagination(num);
            this.setState({currentPage: num})
        }}>
            <a className="page-link" href="#">{printNum}</a>
        </li>)
    }

    getArrPage() {
        let pages = Math.floor(this.props.totalPage / this.props.pageCount);
        let arr = [];
        let classPage = "page-item";
        if (pages < 5) {
            for (let i = 1; i <= pages; i++) {
                let activeClass = "";
                if ((i === this.state.currentPage)) {
                    activeClass += " active"
                }
                this.pushArr(arr, i, classPage + activeClass, i);
            }
        } else if (pages > 5 && this.state.currentPage <= 3) {
            let i = 1;
            for (; i <= 3; i++) {
                let activeClass = "";
                if ((i === this.state.currentPage)) {
                    activeClass += " active"
                }
                this.pushArr(arr, i, classPage + activeClass, i);
            }
            this.pushArr(arr, i, classPage, "...");
            this.pushArr(arr, pages, classPage, pages);
        }
        else if(pages > 5 && this.state.currentPage > 3 && this.state.currentPage < pages - 3){

            this.pushArr(arr,1,classPage,1);
            this.pushArr(arr, 2, classPage, "...");
            this.pushArr(arr, this.state.currentPage - 1, classPage, this.state.currentPage - 1);
            this.pushArr(arr, this.state.currentPage, classPage + " active", this.state.currentPage );
            this.pushArr(arr, this.state.currentPage + 1, classPage, this.state.currentPage + 1);

            this.pushArr(arr, this.state.currentPage + 2, classPage, "...");
            this.pushArr(arr, pages, classPage, pages);


        }
        else if(pages > 5 && this.state.currentPage >= pages - 3){
            this.pushArr(arr,1,classPage,1);
            this.pushArr(arr, 2, classPage, "...");

            for(let i = pages - 3; i <= pages; i++){
                let activeClass = "";
                if ((i === this.state.currentPage)) {
                    activeClass += " active"
                }
                this.pushArr(arr, i, classPage + activeClass, i);
            }
        }
        return arr;
    }

    render() {

        return (
            <div>
                <div>
                    <ul className="pagination">
                        <li className="page-item disabled">
                            <a className="page-link" href="#">&laquo;</a>
                        </li>
                        {this.getArrPage()}

                        <li className="page-item">
                            <a className="page-link" href="#">&raquo;</a>
                        </li>
                    </ul>
                </div>
            </div>

        );
    }
}