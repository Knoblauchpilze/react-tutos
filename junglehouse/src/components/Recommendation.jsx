
function Recommendation() {
  const curMonth = new Date().getMonth();
  const isSpring = curMonth >= 2 && curMonth <= 5;

  if (!isSpring) {
    return (
      <div>Take care of your plants !</div>
    );
  }

  return (
    <div>Spring has started, repot your loved plants !</div>
  );
}

export default Recommendation
