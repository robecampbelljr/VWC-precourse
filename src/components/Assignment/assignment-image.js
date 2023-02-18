import React from 'react';
import assignmentCS from '../../pics/assignment.png';
import useFadeInRight from '../../lib/hooks/useFadeInRight';

function AssignmentImage() {
  const fadeInRight = useFadeInRight();

  return (<img src={assignmentCS} ref={fadeInRight} alt="Assignment Code Snippet" />)
}

export default AssignmentImage;