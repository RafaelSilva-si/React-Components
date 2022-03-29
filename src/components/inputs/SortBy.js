import React from 'react';
import * as Button from '../../styles/Buttons';

const SortBy = ({ }) => {
    return (
        <div className="d-flex">
            <Button.labelSortBy>Sort By:</Button.labelSortBy>
            <div class="dropdown">
                <button class="btn dropdown-toggle btn-sm" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Most relevant
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a class="dropdown-item" href="#">Action</a>
                    <a class="dropdown-item" href="#">Another action</a>
                    <a class="dropdown-item" href="#">Something else here</a>
                </div>
            </div>
        </div>
    )
}

export default SortBy;