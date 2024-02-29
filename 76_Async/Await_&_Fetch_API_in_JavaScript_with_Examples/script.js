function back_process() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(455)
        }, 1000);
    })
}
function main() {
    console.log("running")
    let data = back_process()
    console.log(data)
    console.log("Our Work is loaded")
}