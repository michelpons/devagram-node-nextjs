import multer from "multer";
import cosmicjs from "cosmicjs";

const {
    CHAVE_DE_GRAVACAO_AVATARES,
    CHAVE_DE_GRAVACAO_PUBLICACOES,
    BUCKET_AVATARES,
    BUCKET_PUBLICACOES} = process.env;

const Cosmic = cosmicjs();
const bucketAvatares = Cosmic.bucket({
    slug: BUCKET_AVATARES,
    write_key: CHAVE_DE_GRAVACAO_AVATARES
});

const bucketPublicacoes = Cosmic.bucket({
    slug: BUCKET_PUBLICACOES,
    write_key: CHAVE_DE_GRAVACAO_PUBLICACOES
});

const storage = multer.memoryStorage();
const upload = multer({storage : storage});

const uploadImagemCosmic = async(req : any) => {
    console.log('uploadImagemCosmic', req);
    if(req?.file?.originalname){
        const media_object = {
            originalname: req.file.originalname,
            buffer : req.file.buffer
        };

        console.log('uploadImagemCosmic url', req.url);
        console.log('uploadImagemCosmic media_object', media_object);
        if(req.url && req.url.includes('publicação')){
            return await bucketPublicacoes.addMedia({media : media_object});
        }else{
            return await bucketAvatares.addMedia({media : media_object});
        }
    }
}

export {upload, uploadImagemCosmic};