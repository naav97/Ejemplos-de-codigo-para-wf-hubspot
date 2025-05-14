exports.main = async (event, callback) => {
  const offsetMinutes = -5 * 60;
  const fecha_de_nacimiento = new Date(parseInt(event.inputFields['fecha_de_nacimiento']) + offsetMinutes * 60);
  const hoy_0 = new Date();
  const hoy = new Date(hoy_0.getTime() + offsetMinutes * 60 * 1000);
  let años = hoy.getFullYear() - fecha_de_nacimiento.getFullYear();
  let meses = hoy.getMonth() - fecha_de_nacimiento.getMonth();
  if (meses < 0) {
    años--;
    meses += 12;
  }
  const parts = [];
  if (años > 0) {
    parts.push(`${años} año${años !== 1 ? 's' : ''}`);
  }
  if (meses > 0) {
    parts.push(`${meses} mes${meses !== 1 ? 'es' : ''}`);
  }
  callback({
    outputFields: {
      edad: parts.length > 0 ? parts.join(' y ') : '0 meses'
    }
  });
}