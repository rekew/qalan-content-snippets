function args(count){

    const enforce_keys = Array.from({length: count}, (_, i) => `:number${i + 1}`)
    const functionArgs = Array.from({length: count}, (_, i) => `number${i + 1}: number${i + 1}`)
    const newGenerate = Array.from({length: count}, (_, i) => `number${i + 1}: 0`)
    
    return [enforce_keys, functionArgs, newGenerate];
}

args(3);

module.exports = {args}