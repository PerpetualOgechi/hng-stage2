export async function GET(req,res) {
    const request = await fetch('https://api.timbu.cloud/products?organization_id=b5163eb7a959483f90a7df7cd29f8599&page=1&Appid=NJMPAIMIPFE2HPZ&Apikey=d238528d95c840dfae914c67c3f988b620240712230211366946')
    const response = await request.json()
     return Response.json({response})
}