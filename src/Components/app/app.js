import "./app.css";
import { Component } from "react";
import nextId from "react-id-generator";
import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployersList from "../employers-list/employers-list";
import EmployeesAddForm from "../employers-add-form/employers-add-form";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          name: "Kukuruza M.",
          salary: 6000,
          increase: false,
          id: nextId(),
          rise: true,
          like: false,
        },
        {
          name: "Lisovskyi K.",
          salary: 13000,
          increase: true,
          id: nextId(),
          rise: false,
          like: true,
        },
        {
          name: "Morgenshtern",
          salary: 10000,
          increase: false,
          id: nextId(),
          rise: false,
          like: false,
        },
      ],
      term: "",
      status: "all",
    };
  }

  searchEmp = (items, term) => {
    if (term.length === 0) {
      return items;
    }
    return items.filter((item) => {
      return item.name.indexOf(term) > -1;
    });
  };

  filterPost = (items, status) => {
    switch (status) {
      case "inc":
        return items.filter((item) => item.increase);
      case "salary":
        return items.filter((item) => item.salary > 1000);
      default:
        return items;
    }
  };

  onToggleProp = (id, prop) => {
    this.setState(({ data }) => ({
      data: data.map((item) => {
        if (item.id === id) {
          return { ...item, [prop]: !item[prop] };
        }
        return item;
      }),
    }));
  };

  deleteItem = (id) => {
    this.setState(({ data }) => ({
      data: data.filter((elem) => elem.id !== id),
    }));
  };

  addItem = (name, salary) => {
    if (name.trim() !== "" || salary.trim() !== "") {
      let newData = this.state.data.slice();
      newData = [
        ...newData,
        {
          name: name,
          salary: salary,
          increase: false,
          id: nextId(),
          rise: false,
          like: false,
        },
      ];
      this.setState(() => ({
        data: newData,
      }));
    }
  };

  onUpdateSearch = (term) => {
    this.setState({ term });
  };

  onUpdateFilter = (status) => {
    this.setState({ status });
  };

  render() {
    const { data, term, status } = this.state;
    const numEmployers = this.state.data.length;
    const numEmployersUp = this.state.data.filter(
      (elem) => elem.increase
    ).length;
    const visibleData = this.filterPost(this.searchEmp(data, term), status);

    return (
      <div className="app">
        <AppInfo
          numEmployers={numEmployers}
          numEmployersUp={numEmployersUp}
        ></AppInfo>
        <div className="search-panel">
          <SearchPanel onUpdateSearch={this.onUpdateSearch} />
          <AppFilter onUpdateFilter={this.onUpdateFilter} status={status} />
        </div>
        <EmployersList
          data={visibleData}
          onDelete={this.deleteItem}
          onToggleProp={this.onToggleProp}
        />
        <EmployeesAddForm onAdd={this.addItem} />
      </div>
    );
  }
}

export default App;
