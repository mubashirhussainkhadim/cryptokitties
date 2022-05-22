var colors = Object.values(allColors())
//This function code needs to modified so that it works with Your cat code.
function headColor(color, code) {
    $('.cat__head, .cat__chest').css('background', '#' + color)  //This changes the color of the cat
    $('#headcode').html('code: ' + code) //This updates text of the badge next to the slider
    $('#dnabody').html(code) //This updates the body color part of the DNA that is displayed below the cat
}

function mouthTailColor(color, code) {
    $('.cat__mouth-contour, .cat__mouth-left, cat__mouth-right').css('background', '#' + color)
    $('#mouthtailcode').html('code: ' + code) // Updates Badge
    $('#dnamouth').html(code) // Updates DNA String
}

function eyeColor(color, code) {
    $('.pupil-left, .pupil-right').css('background', '#' + color)
    $('#eyecode').html('code: ' + code) // Updates Bade
    $('#dnaeyes').html(code) // Updates DNA String
}

function earColor(color, code) {
    $('#leftEar, #rightEar').css('background', '#' + color)
    $('#earcode').html('code: ' + code) // Updates Badge
    $('#dnaears').html(code) // Updates DNA String
}

function hairColorPrimary(color, code) {
    $('#midDot').css('background', '#' + color)
    $('#haircolorprimaryname').html('code: ' + code)
    $('#dnadecorationMid').html(code)
}

function hairColorSecondary(color, code) {
    $('#leftDot, #rightDot').css('background', '#' + color)
    $('#haircolorsecondaryname').html('code: ' + code)
    $('#dnadecorationSides').html(code)
}

//###################################################
//Functions below will be used later on in the project
//###################################################
function eyeVariation(num) {

    $('#dnashape').html(num) // Set DNA String
    switch (num) {
        case 1:
            normalEyes()
            $('#eyename').html('Basic') // Set Badge To 'Basic'
            break
        case 2:
            normalEyes()
            $('#eyename').html('Looking Down') // Set Badge To 'Looking Down'
            eyesType1()
            break
        case 3:
            normalEyes()
            $('#eyename').html('Looking Up') // Set Badge To 'Looking Up'
            eyesType2()
            break
        case 4:
            normalEyes()
            $('#eyename').html('Looking Left') // Set Badge To 'Looking Left'
            eyesType3()
            break
        case 5:
            normalEyes()
            $('#eyename').html('Looking Right') // Set Badge To 'Looking Right'
            eyesType4()
            break
        case 6:
            normalEyes()
            $('#eyename').html('Tiny Eyes') // Set Badge To 'Tiny Eyes'
            eyesType5()
            break
        default:
            normalEyes()
            $('#eyename').html('Error')
            break
    }
}

function decorationVariation(num) {
    $('#dnadecoration').html(num) // Set DNA String
    switch (num) {
        case 1:
            $('#decorationName').html('Basic')
            normaldecoration()
            break
        case 2:
            normaldecoration()
            $('#decorationName').html('Long Hair')
            decorationType1()
            break
        case 3:
            normaldecoration()
            $('#decorationName').html('Messy')
            decorationType2()
            break
        case 4:
            normaldecoration()
            $('#decorationName').html('Spiky')
            decorationType3()
            break
        case 5:
            normaldecoration()
            $('#decorationName').html('Flat')
            decorationType4()
            break
        default:
            normaldecoration()
            $('#decorationName').html('Error')
    }
}

function activityVariation(num) {
    $('#dnaanimation').html(num) // Set DNA String

    switch (num) {
        case 1:
            $('#activityname').html('Cutesy')
            animationType1()
            break
        case 2:
            $('#activityname').html('Boo!')
            animationType2()
            break
        case 3:
            $('#activityname').html('Waving')
            animationType3()
            break
        case 4:
            $('#activityname').html('Vibin')
            animationType4()
            break
        case 5:
            $('#activityname').html('Tail Wag')
            animationType5()
            break
        default:
            $('#activityname').html('Error')
            break
    }
}

// Set Eye Types

async function normalEyes() {
    await $('.cat__eye').find('span').css('border', 'none')
}

async function eyesType1() {
    await normalEyes()
    await $('.cat__eye').find('span').css('border-top', '15px solid')
}

async function eyesType2() {
    await normalEyes()
    await $('.cat__eye').find('span').css('border-bottom', '15px solid')
}

async function eyesType3() {
    await normalEyes()
    await $('.cat__eye').find('span').css('border-right', '15px solid')
}

async function eyesType4() {
    await normalEyes()
    await $('.cat__eye').find('span').css('border-left', '15px solid')
}

async function eyesType5() {
    await normalEyes()
    await $('.cat__eye').find('span').css('border', '15px solid')
}


// Set Hair Decoration

async function normaldecoration() {
    //Remove all style from other decorations
    //In this way we can also use normalDecoration() to reset the decoration style
    $('.cat__head-dots').css({ "transform": "rotate(0deg)", "height": "48px", "width": "14px", "top": "1px", "border-radius": "0 0 50% 50%" })
    $('.cat__head-dots_first').css({ "transform": "rotate(0deg)", "height": "35px", "width": "14px", "top": "1px", "border-radius": "50% 0 50% 50%" })
    $('.cat__head-dots_second').css({ "transform": "rotate(0deg)", "height": "35px", "width": "14px", "top": "1px", "border-radius": "0 50% 50% 50%" })
}

async function decorationType1() {
    await $('#midDot, #leftDot, #rightDot').css('height', '70px')
}

async function decorationType2() {
    await $('#leftDot').css('transform', 'rotate(-45deg)')
    await $('#rightDot').css('transform', 'rotate(45deg)')
}

async function decorationType3() {
    await $('#midDot, #leftDot, #rightDot').css('transform', 'rotate(180deg)')
}

async function decorationType4() {
    await $('#midDot, #leftDot, #rightDot').css('width', '20px')
}


// Set Activity Animation

async function resetanimation() {
    await $('#head, .cat__ear').removeClass('tiltingHead')
    await $('#head, .cat__ear').removeClass('scary')
    await $('.cat__paw-left, .cat__paw-right').removeClass('dancing')
    await $('#head, .cat__ear').removeClass('vibing')
    await $('#tail').removeClass('wagging')
}

async function animationType1() { // Tiltin
    await resetanimation()
    await $('#head, .cat__ear').addClass('tiltingHead')
}

async function animationType2() { // Scarin
    await resetanimation()
    await $('#head, .cat__ear').addClass('scary')
}

async function animationType3() { // Dancin
    await resetanimation()
    await $('.cat__paw-left, .cat__paw-right').addClass('dancing')
}

async function animationType4() { // Vibin
    await resetanimation()
    await $('.cat__paw-left, .cat__paw-right').addClass('dancing')
    await $('#head, .cat__ear').addClass('vibing')
}

async function animationType5() { // Tail Wag
    await resetanimation()
    await $('#tail').addClass('wagging')
}


// Eyes of the car followign the cursor
const closer = 4;
const further = -4;

document.addEventListener('mousemove', (e) => {
    let positionX = e.pageX;
    let positionY = e.pageY;

    let width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    let height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

    let moveX = (positionX - width) / (width) * closer;
    let moveY = (positionY - height) / (height) * closer;

    $('.pupil-left').css('transform', 'translate(' + moveX + 'px,' + moveY + 'px)')
    $('.pupil-right').css('transform', 'translate(' + moveX + 'px,' + moveY + 'px)')

}, false);
