# Calcular si estamos en horario laboral

## De qué consiste el código?

1. Se obtiene la hora y día actuales para UTC-5 / GMT-5:
```JavaScript
const now = new Date();
const utcHour = now.getUTCHours();
const utcDay = now.getUTCDay();
const localHour = (utcHour - 5 + 24) % 24;
const localDay = (utcHour - 5 < 0) ? (utcDay + 6) % 7 : utcDay;
```

```Python
now = datetime.now(ZoneInfo("Etc/GMT+5"))
current_day = now.weekday()
current_hour = now.hour
```

2. Finalmente, retornamos el valor calculado para poder usarlo más adelante en el flujo (los días van de 0 a 6 y las horas de 0 a 23) (en Python 0 es lunes y en JavaScript 0 es domingo):
```JavaScript
callback({
    outputFields: {
        es_laboral: localDay >= 1 && localDay <= 5 && localHour >= 9 && localHour < 18
    }
});
```

```Python
return {
  "outputFields": {
    "es_laboral": 0 <= current_day <= 4 and 9 <= current_hour < 18
  }
}
```
