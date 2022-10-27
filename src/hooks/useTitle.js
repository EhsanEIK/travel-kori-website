import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title}-Travel Kori`;
    }, [title]);
}

export default useTitle;