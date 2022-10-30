function union(a, b) {
    let unionSet = new Set(a);
    for (let i of b) {
      unionSet.add(i);
    }
    return unionSet;
  }
  const setA = new Set(["messi", "kaka", "neymar"]);
  const setB = new Set(["suarez", "salah", "kante"]);
  
  const result = union(setA, setB);
  
  console.log(result);