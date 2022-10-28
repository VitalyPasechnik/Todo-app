import React, { useState } from 'react';
import classNames from 'classnames/bind';

export const TodosFilter = ({ chooseFilter }) => {
  const [select, setSelect] = useState('All');

  return (
    <ul className="filters">
      <li>
        <a
          href="#/"
          className={classNames({ selected: select === 'All' })}
          onClick={() => {
            chooseFilter('All');
            setSelect('All');
          }}
        >
          All
        </a>
      </li>

      <li>
        <a
          href="#/active"
          className={classNames({ selected: select === 'Active' })}
          onClick={() => {
            chooseFilter('Active');
            setSelect('Active');
          }}
        >
          Active
        </a>
      </li>

      <li>
        <a
          href="#/completed"
          className={classNames({ selected: select === 'Completed' })}
          onClick={() => {
            chooseFilter('Completed');
            setSelect('Completed');
          }}
        >
          Completed
        </a>
      </li>
    </ul>
  );
};
