import React from 'react';
import IncomeEntries from './components/IncomeEntries';
import ExpenseEntries from './components/ExpenseEntries';
import Summary from './components/Summary';

export default class App extends React.Component {
  render() {
    return (
      <div className="background">
        <div className='container'>
          <div className='jumbotron' >
            <h1 className='display-3 text-center'>Budget Tracker</h1>
          </div>
          <div className='row'>
            <div className='col-12 col-md-6 mb-4'>
              <IncomeEntries />
            </div>
            <div className='col-12 col-md-6 mb-4'>
              <ExpenseEntries />
            </div>
          </div>

          <div className='row justify-content-center'>
            <div className='col-12 col-md-6'>
              <div className='card border-info mb-3'>
                <Summary />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
