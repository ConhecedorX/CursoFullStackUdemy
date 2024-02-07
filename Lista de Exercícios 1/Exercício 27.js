function crescimento (altura1, taxa1, altura2, taxa2) {
  if (altura1 > altura2){
    console.log ("Criança 1 é maior que criança 2")
    if(taxa1 > taxa2 || taxa1 === taxa2){
      console.log("Criança 1 não será maior que a criança 2")
    }
    else{
      let anos = 1
      while (altura2 < altura1){
        altura2 += taxa2
        altura1 += taxa1
        anos++
      }
      console.log(`Vai demorar ${anos} anos para a criança 2 ser maior que a criança 1`)
    }
  }
  else {
    console.log ("Criança 2 é maior que criança 1")
    if (taxa2 > taxa1 || taxa2 === taxa1){
      console.log("Criança 2 não será maior que a criança 1")
    }
    else{
      let anos = 1
      while (altura1 < altura2){
        altura2 += taxa2
        altura1 += taxa1
        anos++
      }
      console.log(`Vai demorar ${anos} anos para a criança 1 ser maior que a criança 2`)
    }
  }
}

crescimento(180, 3, 150, 20)
crescimento(159, 5, 190, 2)