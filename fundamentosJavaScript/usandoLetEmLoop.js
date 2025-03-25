const funcs = [];

for (let i = 0; i < 10; i++) {
    funcs.push(function(){
        console.log(i);
    });
};
// não ira ter problema de escopo, pois uma função tem noção do lugar que foi definida.
funcs[2]();
funcs[8]();