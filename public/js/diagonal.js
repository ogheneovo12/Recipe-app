
let n=3;
let arr=[
       [1,2,3],
       [4,5,6],
        [9,8,9]

]
let updiag =0, dowdiag=0;

for(k=0,z=n-1; k<n; k++,z--){
	for(j=0; j<n; j++)
	if (j==k){
		updiag += arr[k][j]
		dowdiag += arr[z][j]
	}
	
}
console.log(updiag)
console.log(dowdiag)
