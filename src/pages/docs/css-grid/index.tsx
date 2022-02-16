import Meta from '@components/Meta';
import React, { Fragment } from 'react';
import { Doc } from '@root/layout/Doc';
import { LogProps } from '@components/LogProps';
import { Hyperlink } from '@components/Hyperlink';
import { useGrid } from '@faceless-ui/css-grid/dist/Grid';

const GridDoc = () => {
  const gridContext = useGrid();

  return (
    <Fragment>
      <Meta
        title="Grid"
      />
      <h1>
        Grid
      </h1>
      <p>
        This component enables rapid layout development.
      </p>
      <div>
        <LogProps {...gridContext} />
      </div>
      <Hyperlink
        href="https://grid.faceless-ui.com"
        underline
        newTab
      >
        <small>
          Demo in playground
        </small>
      </Hyperlink>
    </Fragment>
  )
}

GridDoc.Layout = Doc;

export default GridDoc;
