

const Component2 = async () => {
  await new Promise((resolve) => setTimeout(resolve, 5000));
  console.log("component2");

  return <div>Loading from component2</div>;
};

export default Component2;
