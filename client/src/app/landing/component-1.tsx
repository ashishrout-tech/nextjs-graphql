

const Component1 = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  console.log("component1");

  return <div>Loading from component1</div>;
};

export default Component1;
