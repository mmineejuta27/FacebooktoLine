const express =require('express')
const line = require('@line/bot-sdk')
const app = express()
const port = 3000
const user = 'Ue9d0c197bb3d66e066079e362f5035f9'
const cors = require('cors')
const bodyParser = require('body-parser')

const config= {
    channelAccessToken:"Abw+VO6MZBj2csJHOEBcW0wNJPtg6+E4c1iRizFJ9+188KMX6HIO2D+qJvzEt5X5AU/FHm8SP5R+B2mvdINH7T4ujUXnuNAps05FSAGBGqO6vJeUxJoCJGWXvqBoa2B60BrF6O5fjuU/CmNlZOgyiwdB04t89/1O/w1cDnyilFU=",

    channelSecret:"b047ec87df8339f3b5c114b56f0ac6ff"
}

const client = new line.Client(config);

app.use(cors())
app.use(bodyParser.json())

app.post('/login',(req,res)=>{
    console.log('test')
    console.log(req.body)
    const namebox={
        type:'text',
        text:req.body.name
    }

    const emailbox={
        type:'text',
        text:req.body.email
    }
    const picturebox={
        type:'image',
        originalContentUrl:req.body.picture,
        previewImageUrl:req.body.picture
    }

    client.pushMessage(user,namebox)
    client.pushMessage(user,emailbox)
    client.pushMessage(user,picturebox)

})



app.listen(port, () => console.log(`App running ${port}`))
