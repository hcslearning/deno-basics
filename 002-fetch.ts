/*
deno run --allow-net 002-fetch.ts

o más estricto:

deno run --allow-net=https://jsonplaceholder.typicode.com/users 002-fetch.ts 
*/
try {
    const url       = "https://jsonplaceholder.typicode.com/users";
    const respuesta = await fetch(url);
    if( !respuesta.ok ) {
        throw new Error("Hubo un problema al traer los usuarios!!!");    
    }    
    const usuarios = await respuesta.json();
    console.dir( usuarios );
} catch (error) {
    console.error( error.message );
}

