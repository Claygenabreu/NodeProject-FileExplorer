//require node modules
const {execSync} = require('child_process');



const calculateSizeD = itemFullStaticPath => {
    //escape spaces, tabs, etc
    const itemFullStaticPathCleaned = itemFullStaticPath.replace(/\s/g, '\ ');
    
    const commandOutput = execSync(`du -sh "${itemFullStaticPathCleaned}"`).toString();
    
    console.log(commandOutput);
    
    
    //remove all spaces, tabs, etc
    let filesize = commandOutput.replace(/\s/g, '');
    
    //split the filesize using the '/' separator
    filesize = filesize.split('/');
    
    
    //human size is the first item of the array
    filesize = filesize[0];
    console.log(filesize);
    
    //unit
    const filesizeUnit = filesize.replace(/\d|\./g, '');
     console.log(filesizeUnit);
    
    //size number
    const filesizeNumber = parseFloat(filesize.replace(/[a-z]/i, ''));
     console.log(filesizeNumber);
    
    const units = "BKMGT";
    
    //B 10 -> 10 bytes (*1024^0)
    //K 10k -> 10*1024 bytes (*1024)
    //M 10M -> 10*1024*1024 bytes (*1024^2)
    //G 10G -> 10*1024*1024*1024 bytes (*1024^3)
    //T 10T -> 10*1024*1024*1024*1024 bytes (*1024^4)
    
    
    const filesizeBytes = filesizeNumber * Math.pow(1024, units.indexOf(filesizeUnit));
    
    console.log(filesizeBytes);
    
    return [filesize, 110*1000*1000];
};

module.exports = calculateSizeD;
