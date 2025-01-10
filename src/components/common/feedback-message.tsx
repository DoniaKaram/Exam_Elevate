

type FeedbackMessageProps={
    children?:React.ReactNode;
}

function FeedbackMessage({children}:FeedbackMessageProps){
if(!children) return null;
  return (
    <div className="text-red-500 font-medium text-center flex justify-center text-sm">
     {children}
    </div>
  );
}

export default FeedbackMessage;
