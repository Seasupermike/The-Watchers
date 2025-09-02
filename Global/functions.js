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

function prefab(prefabName, design) {
    const prefabs = document.querySelectorAll(prefabName);
    for (let prefab of prefabs) {
        for (let element of design) {
            let Part = document.createElement(element.Name);
            if ("textContent" in Part && "text" in element) {
                Part.textContent = element.text
            }

            if ("src" in Part && "src" in element) {
                Part.src = element.src
            }

            if ("alt" in Part && "alt" in element) {
                Part.alt = element.alt
            }

            if ("classes" in element) {
                Part.classList.add(...element.classes);
            }

            prefab.appendChild(Part)
        }
    }
}
