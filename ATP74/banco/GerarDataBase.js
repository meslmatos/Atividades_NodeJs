import Database from "./Database.js";
import ClienteTable from "./ClienteTable.js";

Database
    .sync()
    .then(()=> console.log('Sincronizando database'))
    .catch(()=> console.log('Deu erro'))