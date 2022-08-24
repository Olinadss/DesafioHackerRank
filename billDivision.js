function bonAppetit(bill, k, b) {
 
  let som_bill = 0

  let final_som = 0
 
  for (let index = 0; index < bill.length; index += 1) {
    som_bill = som_bill += bill[index]
  }

  som_bill = som_bill - bill[k]

  final_som = som_bill / 2

  if (final_som === b) {
    console.log("Bon Appetit");
  } else {
    console.log(b - final_som);
  }
 
}
 
console.log(bonAppetit([3, 10, 2, 9], 1, 12));