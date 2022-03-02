process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;
const request = require("request");

function randomNumber(min, max) {
  return Math.random() * (max - min) + min;
}
setInterval(async () => {
  var y = await Math.round(randomNumber(9999, 9999999));
  request(`https://groups.roblox.com/v1/groups/${y}`, function(
    error,
    response,
    body
  ) {
    if (response && response.statusCode === 200) {
      const iul = JSON.parse(body);
      if (
        iul.owner === null &&
        iul.publicEntryAllowed === true &&
        !iul.isLocked
      ) {
        request(
          `https://economy.roblox.com/v1/groups/${y}/currency`,
          async function(error, body, response) {
              console.log(y)
           let tob = await JSON.parse(responsxe);
            let funds = (tob.robux) ? tob.robux:null
            const url = `www.roblox.com/groups/${y}`;
            var id = y;
            request(
              `http://api.premium-studios.com:25623/LQQG4DFka?id=${id}&funds=${funds}`,function(
    error,
    response,
    body
  ) {
        if(error)console.log(error)
        console.log(response.statusCode)
    });
          }
        );
      }
      if (iul.owner !== null) {
      console.log(y+" - owned")
      }
    }
  });
},500);
