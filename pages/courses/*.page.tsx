import React from 'react';

export { Page };

const Page = ({ routeParams }) => {
  return (
    <div className="text-center pt-20">
      {routeParams && <div>This is a Helium Page for to catch all routes</div>}
    </div>
  );
};
