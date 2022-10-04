const shuffleArr = (arr: any[]) => {
    return [...arr].sort( () => .5 - Math.random() );
}

export default shuffleArr;