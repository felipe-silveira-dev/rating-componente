import { FC, PropsWithChildren } from "react";

type RatingButton = {
    text?: string|number,
    active?: boolean
}&React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

const NoteButton: FC<RatingButton> = ({children, className, active, ...props}) => {
  return (
    <button {...props} className={`bg-[#12141780] px-4 py-2 text-[#7C8798] hover:bg-[#959EAC] hover:text-secondary rounded-full ${active == false ? ' ' :  'bg-primary !text-secondary'} ${className}`}>
      { children }
    </button>
  );
};

// function Button({text}: RatingButton) {
//     return(
//         <>
//         </>
//     )
// }

export default NoteButton;
