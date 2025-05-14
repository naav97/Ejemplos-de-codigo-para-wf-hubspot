# Calcular la edad de una persona según fecha de nacimiento

## De qué consiste el código?

0. En el caso de Python debemos importar las librerías para trabajar con tiempo.
```Python
from datetime import datetime, timezone, timedelta
```

1. Obtenemos la fecha de nacimiento y la fecha actual. En este caso se hace el cálculo para UTC-5 (hora Colombia - Perú etc sin tener en cuenta cambios de horario por estaciones). Note que en ambos casos tenemos que pasar el valor de la propiedad de HubSpot a número (en JS usamos parseInt y en python int). En el caso de python, debemos dividir por 1000 para ajustar las unidades de tiempo.
```JavaScript
const offsetMinutes = -5 * 60;
const fecha_de_nacimiento = new Date(parseInt(event.inputFields['fecha_de_nacimiento']) + offsetMinutes * 60);
const hoy_0 = new Date();
const hoy = new Date(hoy_0.getTime() + offsetMinutes * 60 * 1000);
```

```Python
utc_minus_5 = timezone(timedelta(hours=-5))
fecha_de_nacimiento = datetime.fromtimestamp(int(event["inputFields"]["fecha_de_nacimiento"])/1000, tz=utc_minus_5)
hoy = datetime.now(utc_minus_5)
```

2. Calculamos la diferencia de años y meses por separado.
```JavaScript
let años = hoy.getFullYear() - fecha_de_nacimiento.getFullYear();
let meses = hoy.getMonth() - fecha_de_nacimiento.getMonth();
```

```Python
años = hoy.year - fecha_de_nacimiento.year
meses = hoy.month - fecha_de_nacimiento.month
```

3. Si la diferencia de meses nos da negativo, debemos restar 1 año y ajustar los meses.
```JavaScript
if (meses < 0) {
  años--;
  meses += 12;
}
```

```Python
if meses < 0:
  años = años - 1
  meses = meses + 12
```

4. Creamos un arreglo donde vamos a guardar las partes de la respuesta. Verificamos si los años y los meses son mayores a 0 para agregarlos a la respuesta. Usamos un operador ternario para manejar si poner plural o singular.
```JavaScript
const parts = [];
if (años > 0) {
  parts.push(`${años} año${años !== 1 ? 's' : ''}`);
}
if (meses > 0) {
  parts.push(`${meses} mes${meses !== 1 ? 'es' : ''}`);
}
```

```Python
partes = []
if años > 0:
  partes.append(f"{años} año{'s' if años != 1 else ''}")
if meses > 0:
  partes.append(f"{meses} mes{'es' if meses != 1 else ''}")
```

5. Retornamos la concatenación (unión) de lo que guardamos en el arreglo de partes unido por " y " como nuestra respuesta. Si el arreglo está vacío, solo retornamos "0 meses".
```JavaScript
callback({
  outputFields: {
    edad: parts.length > 0 ? parts.join(' y ') : '0 meses'
  }
});
```

```Python
return {
  "outputFields": {
    "edad": " y ".join(partes) if partes else "0 meses"
  }
}
```