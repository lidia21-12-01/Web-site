const files=['game.part1.txt','game.part2.txt','game.part3.txt','game.part4.txt','game.part5.txt'];
const parts=await Promise.all(files.map(async f=>{const r=await fetch(f,{cache:'no-store'});if(!r.ok)throw new Error('Не удалось загрузить '+f);return r.text()}));
const url=URL.createObjectURL(new Blob(parts,{type:'text/javascript'}));
try{await import(url)}finally{URL.revokeObjectURL(url)}
