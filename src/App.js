import React, { useMemo } from 'react';

import { AssortmentLibrary } from './components';
import styles from './App.module.scss';

import { makeData } from './utils';

function App() {
  const columns = useMemo(
    () => [
      {
        Header: 'Scenario Name',
        accessor: 'scenarioName'
      },
      {
        Header: 'Status',
        accessor: 'status'
      },
      {
        Header: 'Description',
        accessor: 'description'
      },
      {
        Header: 'User Name',
        accessor: 'userName'
      },
      {
        Header: 'Created Time',
        accessor: 'createdTime'
      }
    ],
    []
  );
  const data = React.useMemo(() => makeData(5, 5, 5), []);
  console.log(data);

  return (
    <div className={styles.App}>
      <AssortmentLibrary columns={columns} data={data} />
    </div>
  );
}

export default App;
