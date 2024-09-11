export const navbarItems = ["Proposals","RFPs","Projects","About","Ideas"]
export const truncateString = (str: string,numberSlice: number) =>{
    if(str.length > numberSlice){
        return str.slice(0,numberSlice)+"..."
    }
    return str
}