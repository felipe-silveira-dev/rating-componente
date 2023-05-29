import { FC, useState } from "react";
import RatingButton from "./RatingButton";
import Star from "./icons/Star";
import Acknowledgment from "./Acknowledgment";

type Rating = {
  className?: string,
  submited?: boolean,
  handleSubmit: CallableFunction
  rate?: number
}
const Rating: FC<Rating> = ({className, handleSubmit, rate}) => {
  const [selectedRating, setSelectedRating] = useState<number>(rate ?? 0);
  const [error, setError] = useState<boolean>(false);

  function handleRatingClicked(rating: number) {
    setSelectedRating(rating)
  }

  function checkSubmit() {
    if(selectedRating > 0 && selectedRating <= 5) {
      return handleSubmit(selectedRating)
    }
    setError(true)
  }

  return (
    <div className={`flex flex-col space-y-6 bg-[#252D37] rounded-2xl p-6 max-w-xs md:max-w-sm ${className}`}>
      <div className="flex w-fit bg-[#12141780] p-4 rounded-full">
        <Star />
      </div>
      <div className="flex flex-col space-y-4">
        <h1 className="mt-2 text-2xl font-extrabold">How did we do? </h1>
        <p className="text-[#7C8798] text-sm">
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </p>
      </div>
      <div className="flex items-center justify-between w-full">
        {[1,2,3,4,5].map((value, key) => <RatingButton key={key} onClick={() => handleRatingClicked(value)} active={selectedRating == value}> {value} </RatingButton> )}
      </div>
      <button onClick={() => checkSubmit()} className="btn-secondary">
        Submit
      </button>
      {error && <p className="text-xs text-red-500">Please, select an option.</p>}
    </div>
  );
};

export default Rating;
