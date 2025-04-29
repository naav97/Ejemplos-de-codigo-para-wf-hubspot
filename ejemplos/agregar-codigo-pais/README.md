# Agregar +57 al teléfono si no lo tiene

**Este código no agrega +57 a la propiedad, solo la calcula**

## De qué consiste el código?

1. Se obtiene el valor actual de la propiedad:
```JavaScript
let phone = event.inputFields['phone'];
```

```Python
phone = event["inputFields"]["phone"]
```
2. Se valida que tiene actualmente la propiedad y en base a eso se calcula el valor con lo que falte:
```JavaScript
if(!phone.startsWith("+")) {
    if(!phone.startsWith("57")) {
      phone = "+57" + phone;
    }
    else {
      phone = "+" + phone;
    }
}
```

```Python
if not phone.startswith("+"):
  if not phone.startswith("57"):
    phone = "+57" + phone
  else:
    phone = "+" + phone
```
3. Finalmente, retornamos el valor calculado para poder usarlo más adelante en el flujo:

```JavaScript
callback({
    outputFields: {
      phone: phone
    }
});
```

```Python
return {
  "outputFields": {
    "phone": phone
  }
}
```
