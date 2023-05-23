const RegisterButton = ({ list, setList, todo }) => {
  const registerButtonhandler = () => {
    setList([...list, todo]);
    todo.id +=1;
  };
  return <button onClick={registerButtonhandler}>추가하기</button>;
};

export default RegisterButton;
