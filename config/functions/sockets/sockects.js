const genSocketRes = (name, client) => 
{
  client.on(`${name}Mov`, async (res) => {
    let productoData = await strapi.services[name].findOne({id: res});
    strapi.io.emit(`${name}Aviso`, productoData);
  });
}

module.exports = () => {
  strapi.io.on("connection", (client) => {
    client.emit("hello", JSON.stringify({ message: "Hello food lover" }));

    client.on("nuevaCalidad", async (res) => {
      let calidadData = await strapi.services.calidades.find({});
      strapi.io.emit("nuevaCalidadAviso", calidadData);
    });

    client.on("prodcutoMov", async (res) => {
      let productoData = await strapi.services.productos.find({});
      strapi.io.emit("productoAviso", productoData);
    });

    client.on("reporteVenteMov", async (res) => {
      let productoData = await strapi.services["reportes-ventas"].findOne({
        id: res,
      });
      console.log(res);
      strapi.io.emit("reporteVenteAviso", productoData);
    });

    client.on("preventaCalidadMov", async (res) => {
      let productoData = await strapi.services["preventa-calidad"].find({});
      strapi.io.emit("preventaCalidadAviso", productoData);
    });

    client.on("prospectosMov", async (res) => {
      let productoData = await strapi.services.prospectos.find({});
      strapi.io.emit("prospectosAviso", productoData);
    });

    client.on("prospectosVendMov", async (res) => {
      let productoData = 'hola, mundo'
      strapi.io.emit("prospectosVendAviso", productoData);
    });

    genSocketRes('rutas', client)
    genSocketRes('menciones', client);
    client.on("disconnect", () => console.log("a user disconnected"));
  });
};

