const MyButton = ({ onClick, color }) => {
  return <button style={{ background: color }} onClick={onClick}></button>;
};

export default MyButton;
