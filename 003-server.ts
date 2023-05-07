/**
deno run --unstable --allow-net 003-server.ts 
 */
//Deno.serve({port: 3000}, (_req) => new Response('Hola Mundo'));
Deno.serve({port: 3000}, (_req) => {
    const jsonStr = '[{"id": 1, "nombre": "Juan"}, {"id": 2, "nombre": "Ramón"}]';
    const respuesta = new Response( jsonStr );    
    respuesta.headers.append("Content-Type", "application/json");
    return respuesta;
});