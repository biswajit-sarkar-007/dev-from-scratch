export default function({children}:{
    children:React.ReactNode
}){
    return <div>
        <div className="border-b p-5 text-center">
            20% off for the next few days from now! hurry up!!!
        </div>
        {children}
    </div>
}