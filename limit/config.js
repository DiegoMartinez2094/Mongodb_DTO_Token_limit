import rateLimit from "express-rate-limit";
export let limitGrt = ()=>{
    return rateLimit({
        windowMs: 30 * 1000, // Define el intervalo de tiempo en milisegundos durante el cual se aplicará el límite de velocidad. En este caso, es de 30 segundos.
        max: 5, //Especifica el número máximo de solicitudes permitidas en el intervalo de tiempo definido.
        standardHeaders: true, 
        legacyHeaders: false, 
        skip: (req,res)=>{ //Una función que determina si se debe omitir la limitación de velocidad para ciertas solicitudes.
                          // En este caso, si la longitud del contenido de la solicitud es mayor que 120 bytes, 
            if(req.headers["content-length"]>120){
                res.status(413).send({
                    status:413, 
                    message: "Tamaño de la solicitud alcanzado"
                });
                return true;
            }
        }, 
        message: (req,res)=>{ //Una función que proporciona el mensaje de error cuando se supera el límite de velocidad
            res.status(429).send({
                status: 429, 
                message: "Limite alcanzado"
            });
        }
    })    
}