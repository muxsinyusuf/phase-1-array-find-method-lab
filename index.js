function superbowlWin(record) {
    const winGame = record.find((game) => game.result === "W");
    return winGame ? winGame.year : undefined;
  }

  const record = [
    { year: "2015", result: "W" },
    { year: "2014", result: "N/A" },
    { year: "2013", result: "L" },
    //...
  ];
  console.log(superbowlWin(record)); 