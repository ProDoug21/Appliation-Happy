const Database = require("./db");
const saveOrphanage = require("./saveOrphanage");
Database.then(async db => {
  // Inserir dados na tabela
await saveOrphanage(db, {
   
    name: "Lar Dos Meninos ",
    lat: "-27.222633",
    lng: "-49.6455874",
    whatsapp:"7859634265",
    instructions:
      "Venha como se sentir a vontade e traga muito amor e paciência pra dar",
    opening_hours: "Horários de Visitas Das 18h ás 8h",
    open_on_weekends: "1",

    images: [
      "https://images.unsplash.com/photo-1601564921698-0166194c51ee?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
      "https://images.unsplash.com/photo-1598539961915-040bb3be3f69?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
    ].toString(),

    about:
      "Presta assistência a crianças de 06 a 15 que se encontram em situação de risco e/ou vulnerabilidade social.",
  });

  // Consultar dados da tabela
  const selectedOrphanages = await db.all("SELECT * FROM orphanages");
  console.log(selectedOrphanages);

  // Consultar somente 1 Orfanato pelo id
  const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "1"');
  console.log(orphanage);

  // Apagar dado da tabela
 console.log(await db.run("DELETE FROM orphanages WHERE id = '3'"))

});
