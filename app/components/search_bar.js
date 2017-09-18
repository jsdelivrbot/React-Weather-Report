import React, {Component} from 'react'

export default class SearchBar extends Component{
  render(){
    return (
      <div className='search-bar'>
        <form className='form-inline'>
          <input className = 'form-control search-bar-input' />
          <button type="submit" className="btn btn-default button"  aria-label="Left Align">
            <span className="glyphicon glyphicon-search" aria-hidden="true"></span>
          </button>
        </form>
      </div>
    )
  }
}
