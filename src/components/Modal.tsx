interface Props {
  message: string;
}

const Modal = ({ message }: Props) => {
  return (
    <div className="bg-red-200 border-2 border-red-700 p-5 rounded-xl text-black font-bold">
      <span>❌</span>
      <span className="ml-2">{message}</span>
    </div>
  );
};

export default Modal;
