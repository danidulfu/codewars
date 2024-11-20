function declareWinner(fighter1, fighter2, firstAttacker) {
    let hitsAbsorbed1=Math.ceil(fighter1.health/fighter2.damagePerAttack)
    let hitsAbsorbed2=Math.ceil(fighter2.health/fighter1.damagePerAttack)
    if (hitsAbsorbed1>hitsAbsorbed2) {
      return fighter1.name
    } else
      if (hitsAbsorbed2>hitsAbsorbed1) {
        return fighter2.name
      } else
    return firstAttacker
  }