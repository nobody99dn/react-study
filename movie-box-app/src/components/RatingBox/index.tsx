// Libraries
import { FC, memo } from 'react';

interface RatingBoxProps {
  value: number;
}

const RatingBox: FC<RatingBoxProps> = ({ value }) => (
  <div className="text-red-100 text-xs text-center border-red-100 border-2 w-6 h-5 rounded">
    {value}
  </div>
);

export default memo(RatingBox);
