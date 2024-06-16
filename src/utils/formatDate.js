export default {
    getTotalDateReturnInUnix(date){
        const dateToReturn = new Date(date * 1000);

        const dia = dateToReturn.getDate().toString().padStart(2, "0");
        const mes = (dateToReturn.getMonth() + 1).toString().padStart(2, "0");
        const anio = dateToReturn.getFullYear().toString();

        let hora = dateToReturn.getHours() + ":" + dateToReturn.getMinutes();

        return `${mes}/${dia}/${anio} ${hora}`;
    },

    getTotalDateReturnInUnixWithoutHours(date){
        const dateToReturn = new Date(date * 1000);
        
        const dia = dateToReturn.getDate().toString().padStart(2, "0");
        const mes = (dateToReturn.getMonth() + 1).toString().padStart(2, "0");
        const anio = dateToReturn.getFullYear().toString();

        return `${mes}/${dia}/${anio}`;
    }
}