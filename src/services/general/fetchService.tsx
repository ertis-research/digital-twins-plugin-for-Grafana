export const fetchService = async ( url:string, init:RequestInit ) => {
    console.log(init)
    const res = await fetch(url, init)
    console.log(res)
    if (!res.ok) throw new Error('Response is NOT ok')
    return await res.json()
}