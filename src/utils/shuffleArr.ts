const shuffleArr = (arr: any[]) => {
    debugger
    const fixedArr = [...arr].map(el => {
       return el.replace(/&#039;/g, '"')
    })
    return fixedArr.sort( () => .5 - Math.random() );
}

export default shuffleArr;