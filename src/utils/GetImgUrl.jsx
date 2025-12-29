const getImgUrl = (nombre) => {
   
    return new URL(`../assets/images/${nombre}`, import.meta.url).href;
}

export default getImgUrl;