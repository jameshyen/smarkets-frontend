import React from 'react';

const noCors = 'https://cors-anywhere.herokuapp.com/';

const wrapByThreeColumns = middleEl => (
  <div className="row">
    <div className="col-md-3" />
    {middleEl}
    <div className="col-md-3" />
  </div>
);

export { wrapByThreeColumns, noCors };
