let arr = [1,0,8,5,2,3];

    for (let i = 0; i < arr.length; i++) 
    {
        for (let j = i + 1; j < arr.length; j++) 
        {
            if (arr[i] > arr[j]) 
            {
                temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
console.log(arr);

