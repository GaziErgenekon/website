import { useEffect } from "react"

const useScrollPosition = (changeEvent = () => { }, disabled) => {
    useEffect(() => {
        const handleScroll = () => !disabled ? changeEvent(window.scrollY) : null;

        document.addEventListener("scroll", handleScroll)
        handleScroll()

        if (disabled) {
            document.removeEventListener("scroll", handleScroll)
        }

        return () => document.removeEventListener("scroll", handleScroll)


    }, [changeEvent, disabled])
}

export default useScrollPosition