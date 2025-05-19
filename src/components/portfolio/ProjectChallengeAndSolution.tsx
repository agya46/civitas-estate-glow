
import React from 'react';

interface ProjectChallengeAndSolutionProps {
  challenge: string;
  solution: string;
}

export const ProjectChallengeAndSolution: React.FC<ProjectChallengeAndSolutionProps> = ({ challenge, solution }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
      <div>
        <h3 className="text-xl font-semibold mb-3">The Challenge</h3>
        <p>{challenge}</p>
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-3">Our Solution</h3>
        <p>{solution}</p>
      </div>
    </div>
  );
};
