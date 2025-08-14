// JavaScript source code
async function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time))
}


/* 
How to use:
await until(() => a == 1)
*/
async function until(condition) {
    return new Promise((resolve) => {
        let interval = setInterval(() => {
            if (condition()) {
                resolve()
                clearInterval(interval)
            }
        })
    })
}

function copyText(text) {
    navigator.clipboard.writeText(text)
}

function checkForDupilactes(Array, Target) {
    for (let Element of Array) {
        if (Element == Target) {
            return true;
        }
    }
    return false;
}


async function temporarilyChangeClass(target, time, Class) {
    // Time is in milliseconds
    document.querySelectorAll(target).classList.add(Class);
    await Delay(time);
    document.querySelectorAll(target).classList.remove(Class);
}