function CurrentYear() {
  //get current year
  const dateYear = new Date().getFullYear();
  return <span>{dateYear}</span>;
}

export default CurrentYear;
