from datetime import datetime, timezone, timedelta

def main(event):
  utc_minus_5 = timezone(timedelta(hours=-5))
  fecha_de_nacimiento = datetime.fromtimestamp(int(event["inputFields"]["fecha_de_nacimiento"])/1000, tz=utc_minus_5)
  hoy = datetime.now(utc_minus_5)
  años = hoy.year - fecha_de_nacimiento.year
  meses = hoy.month - fecha_de_nacimiento.month
  if meses < 0:
    años = años - 1
    meses = meses + 12
  partes = []
  if años > 0:
    partes.append(f"{años} año{'s' if años != 1 else ''}")
  if meses > 0:
    partes.append(f"{meses} mes{'es' if meses != 1 else ''}")
  return {
    "outputFields": {
      "edad": " y ".join(partes) if partes else "0 meses"
    }
  }