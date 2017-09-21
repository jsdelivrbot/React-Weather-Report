import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import enterCityName from '../actions/index.js';

class SearchBar extends Component{
  constructor(props){
    super(props);
    this.state = {searchInput: ''};
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event){
    this.setState({searchInput: event.target.value});
  }

  onFormSubmit(event){
    event.preventDefault();
    var searchTerm = this.state.searchInput;
    this.setState({searchInput: ''});
    this.props.enterCityName(searchTerm);
  }

  render(){
    return (
      <div className='search-bar'>
        <form className='form-inline' onSubmit={this.onFormSubmit}>
          <input className='form-control search-bar-input' placeholder="Enter a U.S. City Name" value={this.state.searchInput} onChange = {this.onInputChange}/>
          <button type="submit" className="btn btn-default button"  aria-label="Left Align">
            <span className="glyphicon glyphicon-search" aria-hidden="true"></span>
          </button>
        </form>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({enterCityName: enterCityName}, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
