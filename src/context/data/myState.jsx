import MyContext from "./myContext";

const myState = (props) => {
  const state = {
    name: "Piyush Yadav",
    rollno: 20,
  };

  return (
    <MyContext.Provider value={state}>{props.children}</MyContext.Provider>
  );
};

export default myState;
