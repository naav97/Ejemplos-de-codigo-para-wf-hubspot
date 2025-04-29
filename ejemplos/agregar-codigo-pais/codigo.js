exports.main = async (event, callback) => {
  let phone = event.inputFields['phone'];
  if(!phone.startsWith("+")) {
    if(!phone.startsWith("57")) {
      phone = "+57" + phone;
    }
    else {
      phone = "+" + phone;
    }
  }
  callback({
    outputFields: {
      phone: phone
    }
  });
}
