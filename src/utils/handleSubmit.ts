
export const handleSubmit = async (url: string, payload: any, method: string) => {
    let err;
    let data;
    try {
        const res = await fetch(url, {
            method: method,
            headers: {
            },
            body: payload
        })

        if (!res.ok) {
            console.log('not ok')
        }

        const resJson = await res.json()
        if (resJson.status === 200) {
            data = resJson.data
        }
    } catch (error) {
        err = error
    }

    return { data, err }
}