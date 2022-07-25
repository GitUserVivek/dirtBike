var screen = document.getElementById("Screen");
var N7 = document.getElementById("N7")
var N8 = document.getElementById("N8")
var N9 = document.getElementById("N9")
var N4 = document.getElementById("N4")
var N5 = document.getElementById("N5")
var N6 = document.getElementById("N6")
var N1 = document.getElementById("N1")
var N2 = document.getElementById("N2")
var N3 = document.getElementById("N3")
var N0 = document.getElementById("N0")
var N00 = document.getElementById("N00")
var Np = document.getElementById("Np")
N7.addEventListener('click', () => {
    screen.value += N7.value;
})
N8.addEventListener('click', () => {
    screen.value += N8.value;
})
N9.addEventListener('click', () => {
    screen.value += N9.value;
})
N4.addEventListener('click', () => {
    screen.value += N4.value;
})
N5.addEventListener('click', () => {
    screen.value += N5.value;
})
N6.addEventListener('click', () => {
    screen.value += N6.value;
})
N1.addEventListener('click', () => {
    screen.value += N1.value;
})
N2.addEventListener('click', () => {
    screen.value += N2.value;
})
N3.addEventListener('click', () => {
    screen.value += N3.value;
})
N0.addEventListener('click', () => {
    screen.value += N0.value;
})
N00.addEventListener('click', () => {
    screen.value += N00.value;
})
Np.addEventListener('click', () => {
    screen.value += Np.value;
})
var equal = document.getElementById("equal");
var del = document.getElementById("del").addEventListener('click', () => {})
var substract = document.getElementById("substract")
var plus = document.getElementById("plus")
var div = document.getElementById("div")
var into = document.getElementById("into")
var screen1 = document.getElementById("Screen1")
var screenO = document.getElementById("ScreenO")
var screen2 = document.getElementById("Screen2")

function vlaues() {
    if (screen1.value == 0) {
        screen1.value = screen.value;
    }
    if (screen1.value) {
        screen2.value = screen.value;
    }
}

function clr2() {
    screen.value = ""
    screen1.value = ""
    screen2.value = ""
    screenO.value = ""

}

function clrscr() {
    screen.value = ""
}
substract.addEventListener('click', () => {
    vlaues()
    screen2.value = "";
    clrscr()
    screenO.value = substract.value;
});
plus.addEventListener('click', () => {
    vlaues()
    screen2.value = "";
    clrscr()
    screenO.value = plus.value;
});
div.addEventListener('click', () => {
    vlaues()
    screen2.value = "";
    clrscr()
    screenO.value = div.value;
});
into.addEventListener('click', () => {
    vlaues()
    screen2.value = "";
    clrscr()
    screenO.value = into.value;
})
equal.addEventListener('click', () => {
    console.log(screenO.value)
    if (screenO.value == '+') {
        screen2.value = screen.value;
        screen.value = parseInt(screen1.value) + parseInt(screen2.value);
    }
    if (screenO.value == '-') {
        screen2.value = screen.value;
        screen.value = parseInt(screen1.value) - parseInt(screen2.value);
    }
    if (screenO.value == '/') {
        screen2.value = screen.value;
        screen.value = parseInt(screen1.value) / parseInt(screen2.value);
    }
    if (screenO.value == '*') {
        screen2.value = screen.value;
        screen.value = parseInt(screen1.value) * parseInt(screen2.value);
    }
});