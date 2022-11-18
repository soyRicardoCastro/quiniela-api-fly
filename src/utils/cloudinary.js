import { v2 as cloudinary } from 'cloudinary'

cloudinary.config({
  cloud_name: 'ricardocastrodev',
  api_key: '255152963646996',
  api_secret: 'InlxiBrfHfQlK_ncUPVUY6uznDw'
})

export async function uploadImage (file) {
  return await cloudinary.uploader.upload(file)
}
