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
    slug:BUCKET_PUBLICACOES,
    write_key: CHAVE_DE_GRAVACAO_PUBLICACOES
})
