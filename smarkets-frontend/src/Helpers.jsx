import React from 'react';

const noCors = 'https://cors-anywhere.herokuapp.com/';

const wrapByNColumns = (middleEl, n) => (
  <div className="row">
    <div className={`col-md-${n}`} />
    {middleEl}
    <div className={`col-md-${n}`} />
  </div>
);

export { wrapByNColumns, noCors };
