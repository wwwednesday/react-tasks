import React, { Component } from 'react';

import Headline from 'components/Headline';
import SearchPanel from 'components/SearchPanel';
import TodoList from 'components/TodoList';
import TodoCounter from 'components/TodoCounter';
import ButtonPanel from 'components/ButtonPanel';
import AddItemPanel from 'components/AddItemPanel';

import './App.sass';

import { params } from 'consts';

export default class App extends Component {
  constructor() {
    super();

    this.filterTypes = {
      default: {
        id: 'default',
        label: 'All'
      },
      active: {
        id: 'active',
        label: 'Active'
      },
      done: {
        id: 'done',
        label: 'Done'
      }
    };

    this.state = {
      list: [],
      filterBy: this.filterTypes.default.id,
      searchBy: ''
    };

    this.handleItemRemoved = this.handleItemRemoved.bind(this);
    this.handleItemAdd = this.handleItemAdd.bind(this);
    this.handleStateChanged = this.handleStateChanged.bind(this);
    this.handleImportanceChanged = this.handleImportanceChanged.bind(this);
    this.setSortValue = this.setSortValue.bind(this);
    this.handleSearchValueChange = this.handleSearchValueChange.bind(this);
  }

  handleItemRemoved({ id }) {
    this.setState(({ list }) => ({
      list: list.filter(({ id: currentID }) => id !== currentID)
    }));
  }

  handleItemAdd(value) {
    const item = {
      id: Date.now(),
      label: value,
      done: false,
      important: false
    };

    this.setState(({ list }) => ({ list: [item, ...list] }));
  }

  changeState(id, type) {
    const { list: oldList } = this.state;
    const index = oldList.findIndex((item) => id === item.id);

    const oldItem = oldList[index];
    const newItem = {
      ...oldItem,
      [type]: !oldItem[type]
    };

    this.setState(({ list }) => ({
      list: [
        ...list.slice(0, index),
        newItem,
        ...list.slice(index + 1)
      ]
    }));
  }

  handleStateChanged({ id }) {
    this.changeState(id, params.done);
  }

  handleImportanceChanged({ id }) {
    this.changeState(id, params.important);
  }

  setSortValue(key) {
    this.setState({
      filterBy: this.filterTypes[key].id
    });
  }

  handleSearchValueChange(value) {
    this.setState({
      searchBy: value
    });
  }

  getListFilteredBySearch() {
    const {
      list,
      searchBy
    } = this.state;

    return list.filter(({ label }) => label.toLowerCase().indexOf(searchBy.toLowerCase()) !== -1);
  }

  getListFilteredByParam(list) {
    const {
      filterBy
    } = this.state;

    const {
      active,
      done
    } = this.filterTypes;

    switch(filterBy) {
      case active.id:
        return list.filter(item => !item.done);
      case done.id:
        return list.filter(item => item.done);
      default:
        return list;
    }
  }

  getList() {
    const filteredList = this.getListFilteredBySearch();
    return this.getListFilteredByParam(filteredList);
  }

  render() {
    const list = this.getList();
    const { list: stateList } = this.state;

    const stateListLength = stateList.length;

    const active = stateList.filter(item => !item.done).length;
    const done = stateListLength - active;

    return (
      <div className="app d-flex flex-column justify-content-center align-items-center">
        <div className="app__inner">
          <div className="app__head d-flex justify-content-between align-items-center">
            <Headline />
            <TodoCounter active={active} done={done} />
          </div>
          <div className="app__row d-flex">
            <SearchPanel onChange={this.handleSearchValueChange} />
            <ButtonPanel filterTypes={this.filterTypes} handleSort={this.setSortValue} />
          </div>
          <div className="app__row">
            <AddItemPanel onAdd={this.handleItemAdd} />
          </div>
          <div className="app__list">
            {
              list.length
                ? <TodoList
                  list={list}
                  remove={this.handleItemRemoved}
                  toggleState={this.handleStateChanged}
                  toggleImportance={this.handleImportanceChanged}
                />
                : <p>There is no items to show</p>
            }

          </div>
        </div>
      </div>
    );
  }
};
