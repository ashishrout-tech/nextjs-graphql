let log = false;
function setLog (value: boolean) {
  log = value;
}

const userInfo = () => {
  // This function can be used to fetch the data of user from database, for authentication purposes.

  return { log, setLog };
};

export default userInfo;
