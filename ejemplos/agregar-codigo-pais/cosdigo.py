def main(event):
  phone = event["inputFields"]["phone"]
  if not phone.startswith("+"):
    if not phone.startswith("57"):
      phone = "+57" + phone
    else:
      phone = "+" + phone
  return {
    "outputFields": {
      "phone": phone
    }
  }