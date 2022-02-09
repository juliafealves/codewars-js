function well(ideas) {
  const good = ideas.filter((idea) => idea === "good").length;

  if (good === 0) {
    return "Fail!";
  } else if (good <= 2) {
    return "Publish!";
  } else {
    return "I smell a series!";
  }
}
