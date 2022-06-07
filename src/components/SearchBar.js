import React from 'react';

class SearchBar extends React.Component {
    state={
        term: ''
    };

    //For call-back function, always use arrow function to avoid `this` bug
    onFormSubmit = (event) => {
        event.preventDefault();
        //passing child props to parent
        this.props.userSubmit(this.state.term)
    };

    render() {
        return(
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Image Search</label>
                        <input 
                            type="text" 
                            value={this.state.term}
                            onChange={(e) => this.setState({term: e.target.value})}
                        />
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar;