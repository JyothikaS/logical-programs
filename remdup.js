// arr1 = [1, 2, 3, 4, 2, 1, ]
// arr2 = [2, 3, 4, 1, 5, 0]
// let arr3 = [ ];
// arr3 = arr1 +','+ arr2;
// console.log(arr3)
// //remove duplicates
// for (let i=0; i <= arr3.length; i++){

// }
let ar1=[45,67,89,34,56,78,67]

let ar2=[67,90,67,43,67,88,34,66]

let ar3=[]
for (let i = 0; i < ar2.length; i++) {

    ar1.push(ar2[i])

}
console.log("original elements are")
console.log(ar1)
console.log("After elimination")
for (let i = 0; i < ar1.length; i++) {

    for (let j = i+1; j < ar1.length; j++) {

        if (ar1[i] == ar1[j]) {

            ar1[j]=false



           

        }

       

       

    }

   

}

for (let i = 0; i < ar1.length; i++) {

    if (ar1[i]!=false) {
        // console.log(ar1[i])
        ar3.push(ar1[i])
    }
}
console.log(ar3)

