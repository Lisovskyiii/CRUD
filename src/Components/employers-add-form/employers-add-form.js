import "./employers-add-form.css";
import { Component } from "react";

class EmployeesAddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      salary: "",
    };
  }

  onInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.onAdd(this.state.name, this.state.salary);
    this.setState({
      name: "",
      salary: "",
    });
  };

  render() {
    const { salary, name } = this.state;

    return (
      <div className="app-add-form">
        <h3>Добавьте нового сотрудника</h3>
        <form onSubmit={this.onSubmit} className="add-form d-flex">
          <input
            onChange={this.onInput}
            type="text"
            className="form-control new-post-label"
            placeholder="Как его зовут?"
            name="name"
            value={name}
          />
          <input
            onChange={this.onInput}
            type="number"
            className="form-control new-post-label"
            placeholder="З/П в $?"
            name="salary"
            value={salary}
          />

          <button type="submit" className="btn btn-outline-light">
            Добавить
          </button>
        </form>
      </div>
    );
  }
}

export default EmployeesAddForm;
