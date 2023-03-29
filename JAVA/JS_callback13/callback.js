function alertName(text) {
    alert(text)
}

function consoleName(text) {
    console.log(text)
}

function coreFunction(name , callback) {
    const capitalizedName = name.charAt(0) . toUpperCase() + name.slice(1) . toLowerCase();
    callback(capitalizedName)
} 

coreFunction("manTas", consoleName)