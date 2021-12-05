import React, { Fragment } from 'react';

export default function Movie({ statusClick, openPanel, movieObj }) {

  const statusClickProxy = () => {
    statusClick(movieObj);
  };

  const openPanelProxy = () => {
    openPanel(movieObj);
  };

    return (
      <Fragment>
        <div>
          <li onClick={openPanelProxy}>{movieObj.title}</li>
          <button onClick={statusClickProxy}>{movieObj.status}</button>
        </div>
      </Fragment>
    );
  }