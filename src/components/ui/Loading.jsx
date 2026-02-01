
const Loading = () => {
    return (
        <div className="flex-center w-full h-[60vh] flex-col gap-4">
            <div className="relative size-16">
                <div className="absolute inset-0 rounded-full border-t-2 border-primary animate-spin"></div>
                <div className="absolute inset-2 rounded-full border-b-2 border-secondary animate-spin reverse-spin duration-700"></div>
            </div>
            <p className="text-secondary/80 font-mono animate-pulse">Yükleniyor...</p>
        </div>
    )
}

export default Loading
