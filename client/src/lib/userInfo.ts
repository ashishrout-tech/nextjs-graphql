let log = false;
function setLog (value: boolean) {
  log = value;
}

const userInfo = () => {
  // This function should be used to fetch the data of user from database, for authentication purposes.
  // when visiting a new page next compiles the page in dev mode. So, log resets to false

  return { log, setLog };
};

export default userInfo;
