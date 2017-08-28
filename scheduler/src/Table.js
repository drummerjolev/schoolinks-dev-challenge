import React from 'react';

const Table = ({ data }) => {
  const headers = data.headers.map((header, idx) =>
    <th key={'h_'+idx}>
      <h4>{header}</h4>
    </th>
  );
  const rows = data.rows.map((row, rIdx) => {
    return (
      <tr key={'r_'+rIdx}>
        {row.map((cell, cIdx) =>
          <td key={'c_'+cIdx}>
            <div className='cellControl'>
              {cell}
            </div>
          </td>
        )}
      </tr>
    );
  });
  return (
    <table className="table table-hover">
      <thead>
        <tr>
          {headers}
        </tr>
      </thead>
      <tbody>
        {rows}
      </tbody>
    </table>
  )
}

export default Table;
