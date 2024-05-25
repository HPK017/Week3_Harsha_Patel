import express, {Request, Response} from  "express";
import nodemailer from 'nodemailer'

const app = express();
app.use(express.json())

app.post('/nodemailer', async(req: Request,res:Response)=>{
    const weatherReport = req.body;

    try{
        let transport = nodemailer.createTransport({
            service:'gmail',
            auth:{
                user: "parelharsh0250@gmail.com",
                pass: "mudnnwhimjqygnhf"
            }
        });

        let tableRows = '';
        for(const report of weatherReport){
            const { city, country, date, weather } = report;
        tableRows += ` <tr>
        <td>${city}</td>
        <td>${country}</td>
        <td>${date}</td>
        <td>${weather}</td>
    </tr>`

        let info = await transport.sendMail({
            from : {
                name: "Harsha Patel Kharvi",
                address: "parelharsh0250@gmail.com"
            },
            to : "k20harsha017@gmail.com",
            subject:"Weather Reports",
            text:"this is a testing",
            html: `<table border=1>
                    <tr>
                        <th>City</th>
                        <th>Country</th>
                        <th>Date</th>
                        <th>Weather</th>
                    </tr>
                   ${tableRows}
                </table>`
        })
        console.log(info.messageId)
        res.send(info)
    }
    }
    catch(err){
        console.log(err)
    }
})


app.listen(8000,()=>{
    console.log("We are comfertable with NodeJS");
})

