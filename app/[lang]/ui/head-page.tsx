import React from 'react';

export const HeadPage = ({ title, subtitle }: { title: string; subtitle: string }) => {
  return (
    <>
      <div className="page-container">
        <div className="head-page-content-container">
          <h1 className='mb-[0.8rem]'>{title}</h1>
          <p className="subtitle">{subtitle}</p>
        </div>
      </div>
      <hr className='underline' />
    </>
  );
};
