/**
 * 
 * @param key Llave del cache
 * @param data Datos a almacenar
 * @param expire Tiempo de expiracion en minutos
 */
 export const saveCache = (key: string|RegExp, data: any, expire?: number) => {
    if(!key) return;

    if (!expire) {
        expire = 60000; // 1min
    } else {
        expire = expire * 60000;
    }
    const ticks = new Date().getTime();
    localStorage.setItem(key.toString(), JSON.stringify({
        exp: ticks + expire,
        data: data
    }));
};

export const getCache = (key: string) => {
   try{
    if(!key) return undefined;  
    const cache = JSON.parse(localStorage.getItem(key) || '');
    const ticks = new Date().getTime();
    if (cache.exp != undefined) {
        if (cache.exp && ticks < cache.exp) {
            return cache.data;
        }
    }
    else
    {
        return cache;
    }
    return undefined;
   }
   catch(e) {
       return undefined;
   }
}

export const clearCache = (value: string | RegExp) => {
    if(!value) return;
    if (typeof value === 'string'){
        localStorage.removeItem(value);
    } else {
        for(let i =0; i < localStorage.length; i++){
            let key = localStorage.key(i);
            if((value as RegExp).exec(key || '') !== null){
                localStorage.removeItem(key || '');
            }
        }
    }
}