import React, { useContext } from 'react';
import ProfileContext from '../../context/profile/profileContext';
import LegendItem from './LegendItem';
import uuid from 'uuid';

const LegendSelect = () => {
  const profileContext = useContext(ProfileContext);

  const { profileData } = profileContext;
  return (
    <div>
      {profileData.segments
        .slice(1)
        .map(legend =>
          legend.attributes.id !== 'legend_0' ? (
            <LegendItem key={uuid.v4()} legend={legend} />
          ) : (
            ''
          )
        )}
    </div>
  );
};

export default LegendSelect;
