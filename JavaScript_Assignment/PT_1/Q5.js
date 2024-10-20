let standard;
let express;
let overnight;
let package = 'standard';

switch(package){
    case 'standard':
        console.log("it might take 3-5 days");
        break
    case 'express':
        console.log("it might take 1-2 days");
        break;
    case 'overnight':
        console.log("would be delivered next day");
        break;
   default:
        console.log("Invalid package type"); 
}
