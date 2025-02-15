
export const handleSubmit = async (url: string, data: any) => {
    const res = await fetch(url, {
        method: "POST",
        headers: {
        },
        body: data
    })

    if (!res.ok) {
        console.log('not ok')
    }
    const resJson = res.json()
    return resJson
}