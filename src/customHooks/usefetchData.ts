import React from "react";

export const usefetchData = (url: string, method: string) => {
    const [data, setData] = React.useState(null)
    const [isLoading, setIsLoading] = React.useState(false)
    const [error, setError] = React.useState<unknown>(null)

    React.useEffect(() => {
        const callApi = async () => {
            setIsLoading(true)
            try {
                const res = await fetch(url, {
                    method: method,
                    headers: {}
                })
                if (!res.ok) {
                    setError('response not ok')
                }
                const data = await res.json()
                setData(data)
                setIsLoading(false)
            } catch (error) {
                setError(error)
                setIsLoading(false)
            }
        }

        callApi()
    }, [])

    return { data, isLoading, error }
}