import React, {ReactNode} from 'react';

interface BrainBoxProps {
  children: ReactNode;
}

const BrainBox: React.FC<BrainBoxProps> = ({children}) => {
  return <>{children}</>;
};

export default BrainBox;
