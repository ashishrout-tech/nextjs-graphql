

const Component1 = async () => {

  try{
      await new Promise((resolve) => setTimeout(resolve, 2000));
      throw new Error("test error");
  }
  catch(error){
    console.error((error as Error).name);
    throw new Error("test Error")
  }

  console.log("component1");

  return <div>Hi! from component1</div>;
};

export default Component1;
