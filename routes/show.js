    const router = require('express').Router();
    const APP = process.env.APP_URL;
    router.get('/:uuid', async (req, res) => {
        try{
            const file = await File.findOne({uuid:req.params.uuid});
            if(!file){
                return res.render('download',{error: 'Link has been expired.'})
            }
            return res.render('download',{
                uuid: file.uuid,
                fileName: file.fileName,
                fileSize: file.fileSize,
                download: `${APP}/files/download/${file.uuid}`
            });
        }
        catch(err){
            return res.render('download',{error: 'Something went wrong.'});
        }
    });

    module.exports=router;