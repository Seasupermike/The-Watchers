// JavaScript source code
function CopyText(Text) {
    navigator.clipboard.writeText(Text)
}

async function TemporarilyChangeClass(Id, Time, Class) {
    // Time is in milliseconds
    $(Id).addClass(Class);
    await Delay(Time);
    $(Id).removeClass(Class);
}

async function Delay(Time) {
    return new Promise(Resolve => setTimeout(Resolve, Time))
}

function CheckForDupilactes(Arr, Target) {
    for (let i = 0; i < Arr.length; i++) {
        if (Arr[i] == Target) {
            return true;
        }
    }
    return false;
}

function CountCharacters(Text, Target) {
    let Characters = Text.split("");
    if (Target == undefined) {
        return Characters.length;
    }

    let Count = 0;
    for (let i = 0; i < Characters.length; i++) {
        if (Text[i] == Target) {
            Count++;
        }
    }

    return Count;
}

function Find(Target) {
    let Charaters = Target.split("");
    let Name = ""
    for (let i = 1; i < Charaters.length; i++) {
        Name += Charaters[i]
    }

    if (Charaters[0] == "#") {
        return document.getElementById(Name)
    }
    if (Charaters[0] == ".") {
        return document.getElementsByClassName(Name)
    }
    if (Charaters[0] == "@") {
        return document.getElementsByName(Name)
    }
    return document.querySelector(Charaters[0] + Name)
}

