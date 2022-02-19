import { useExpanded, useTable } from 'react-table';
import styles from './index.module.scss';

export default function AssortmentLibrary({ columns, data }) {
  const {
    headerGroups,
    prepareRow,
    rows,
    getTableProps,
    getTableBodyProps,
    state: { expanded }
  } = useTable(
    {
      columns,
      data
    },
    useExpanded
  );

  return (
    <div className={styles.wrapper}>
      <h1>Assortment Library</h1>
      <div className={styles.AssortmentLibrary} {...getTableProps()}>
        <div className={styles.AssortmentLibraryHeader}>
          {headerGroups.map(headerGroup => (
            <div {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <div {...column.getHeaderProps()}>
                  {column.render('Header')}
                </div>
              ))}
            </div>
          ))}
        </div>
        <div className={styles.AssortmentLibraryBody} {...getTableBodyProps()}>
          {rows.map(row => {
            prepareRow(row);
            console.log(row);

            return (
              <div
                {...{
                  ...row.getRowProps(),
                  ...row.getToggleRowExpandedProps()
                }}
                style={{
                  backgroundColor:
                    row.depth === 1
                      ? 'yellow'
                      : row.depth === 2
                      ? 'lightblue'
                      : ''
                }}
              >
                {row.cells.map(cell => {
                  return (
                    <div {...cell.getCellProps()}>{cell.render('Cell')}</div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
