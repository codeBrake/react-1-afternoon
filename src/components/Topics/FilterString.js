import React, { Component } from 'react';

class FilterString extends Component {
    constructor(){
        super()
        this.state = {
            jobs: ['plumber', 'gardener', 'teacher', 'electrician', 'salesman', 'coalminer'],
            userInput: '',
            filteredJobs: []
        };
    }
    
    handleChange(val) {
        this.setState({ userInput: val });
      }
    
    filteNames(userInput) {
        var jobs = this.state.jobs;
        var filteredJobs = [];
        for(var i = 0; i < jobs.length; i++){
            if(jobs[i].includes(userInput)){
                filteredJobs.push(jobs[i]);
            }
        }
    
        this.setState({ filteredJobs: filteredJobs});
    }
    
    
    render(){
        return (
            <div className="puzzleBox filterStringPB">
                <h4> Filter String </h4>
                <span className="puzzleText"> Names: {JSON.stringify(this.state.jobs, null, 10)} </span>
                <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value) }></input>
                <button className="confirmationButton" onClick={ () => this.filterJobs(this.state.userInput) }> Filter </button>
                <span className="resultsBox filterStringRB"> Filtered Jobs: { JSON.stringify(this.state.filteredJobs, null, 10) }</span>
            </div>
        )
    }
}
export default FilterString;