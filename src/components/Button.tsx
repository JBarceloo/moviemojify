interface Props {
	isLoading: boolean;
}

const Button = ({isLoading}: Props) => {
  return (
    <button type="submit" disabled={isLoading}>
      <div className="bg-submitButton py-4 w-full flex justify-center border-[3px] rounded-md border-textColor drop-shadow-[10px_10px_0px_#00000015]">
        <img src="/Arrow1.png" />
      </div>
    </button>
  );
};

export default Button;
