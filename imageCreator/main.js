const api='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'
const inp =document.getElementById('inp')
const images=document.querySelector('.images')

const getImage=async()=>{
    const res=await fetch('https://api.openai.com/v1/images/generations',{
        method:"POST",
        headers:{
            "Content-Type":"application/json",
            "Authorization":`Bearer ${api}`
        },
        body:JSON.stringify(
            {
                "prompt":inp.value,
                "n":3,
                "size":"1024x1024"
            }
        )
    })

    const data =await res.json()
    const listImage=data.data
    images.innerHTML=''
    listImage.map((photo)=>{
        const container=document.createElement("div")
        images.append(container)
        const img=document.createElement("img")
        container.append(img)
        img.src=photo.url
    })
}