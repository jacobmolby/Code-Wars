function calculateDamage(yourType, opponentType, attack, defense) {
  let effectiveness = 1;

  if (yourType === "fire") {
    switch (opponentType) {
      case "grass":
        effectiveness = 2;
        break;
      case "water":
        effectiveness = 0.5;
        break;
      case "electric":
        effectiveness = 1;
        break;
    }
    if (yourType === "water") {
      switch (opponentType) {
        case "grass":
          effectiveness = 0.5;
          break;
        case "electric":
          effectiveness = 0.5;
          break;
        case "fire":
          effectiveness = 2;
          break;
      }
    }
    if (yourType === "grass") {
      switch (opponentType) {
        case "electric":
          effectiveness = 1;
          break;
        case "water":
          effectiveness = 2;
          break;
        case "fire":
          effectiveness = 0.5;
          break;
      }
    }
    if (yourType === "electric") {
      switch (opponentType) {
        case "grass":
          effectiveness = 1;
          break;
        case "water":
          effectiveness = 0.5;
          break;
        case "fire":
          effectiveness = 1;
          break;
      }
    }

    const damage = 50 * (attack / defense) * effectiveness;
    console.log(damage);
    console.log(effectiveness);

    return Math.ceil(damage);
  }
}
