const {execSync} = require('child_process');

try{
    const result = execSync(`du -sh "/mnt/c/users/Claygen\ Abreu/favorites/NodeProject-FileExplorer"`).toString();
    console.log(result);
    
}catch(err){
    console.log(`Error: ${err}`);
}