function hourglass(n){

    let counter= 0;
    let blank= '';

    for (let i= 0; i<=n; i++){

        counter ++
        if (i==0){
            blank +=`${'#'.repeat(n-i)}\n`
        }else if (i==1){
            blank +=`#${'#' + ' '.repeat(n-4)}##\n`
        }else if (i==2){
            blank +=`# ${'#' + ' '.repeat(n-4-i)}# #\n`
        }else if (counter%2==0 && counter < n-3){
            blank +=`#${' '.repeat((counter/2)) + '#' + ' '.repeat(n-4-counter) + '#' + ' '.repeat((counter/2))}#\n`
        }

    };

    for (let i= n; i>=0; i--){

        counter--
        if (i==0){
            blank +=`${'#'.repeat(n-i)}\n`
        }else if(i==1){
            blank +=`${'#'.repeat(n)}\n`
        }else if(i==2){
            blank +=`# ${' '.repeat((i/2)-1) + '#'.repeat(n-i-2)} #\n`
        }else if(i%2==0 && i < n-3){
            blank +=`#${' '.repeat((counter/2)) + '#'.repeat((n-counter-2))+ ' '.repeat((counter/2))}#\n`
        }
    };
    return(blank)

    }

    console.log(hourglass(20))
    console.log('n= 20')
