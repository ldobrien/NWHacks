import React, { Component } from 'react';
import { connect } from "react-redux";
import { addExercise } from "../store/actions/projectActions";

class PhysioOp extends Component {
    state ={
        name: null,
        desc: null,
        duration: null,
        reps: null,
        frequency: null,
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value,
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addExercise(this.state)
    }

  render() {
      let exercises = []
      if(this.props.exercises){
        this.props.exercises.forEach(element => {
            exercises.push(<div key={exercises.length} className="black-text">
                <div className="card">
                    <div className="card-content">
                        <p>Exercise Name: {element.name}</p>
                        <p>Description:{element.desc}</p>
                        <p>Duration:{element.duration}</p>
                        <p>Reps:{element.reps}</p>
                        <p>Frequency:{element.frequency}</p>
                    </div>
                </div>
        </div>)
        })
      }
      return (
         <div>
             <form onSubmit={this.handleSubmit}>
                <input type="text" onChange={this.handleChange} id="name" name="Name" placeholder="Exercise Name"/>
                <input type="text" onChange={this.handleChange} id="desc" name="Description" placeholder="Description"/>
                <input type="text" onChange={this.handleChange} id="duration" name="Duration" placeholder="Duration"/>
                <input type="number" onChange={this.handleChange} id="reps" name="Repetitions" placeholder="Repetitions"/>
                <input type="text" onChange={this.handleChange} id="frequency" name="Frequency" placeholder="Frequency"/>
                <button className="btn" type="submit">+ Add Physio Exercise</button>
            </form>
             <br />
             <br />
            {exercises}
        </div>
  );
};
}

const mapStatetoProps = (state) => {
    return {
        exercises: state.project.exercises
    }
}
const mapDispatchtoProps = (dispatch) => {
    return {
        addExercise: (exercise) => dispatch(addExercise(exercise))
    }
}
export default connect(mapStatetoProps, mapDispatchtoProps)(PhysioOp);
