$(document).ready(() => {
    $('#cattributes').css('display', 'none')
})

$('#generateDefault').click(() => {
    $('#dnabody').html(defaultDNA.headColor);
    $('#dnamouth').html(defaultDNA.mouthColor);
    $('#dnaeyes').html(defaultDNA.eyesColor);
    $('#dnaears').html(defaultDNA.earsColor);

    $('#dnashape').html(defaultDNA.eyesShape);
    $('#dnadecoration').html(defaultDNA.decorationPattern);
    $('#dnadecorationMid').html(defaultDNA.decorationMidcolor);
    $('#dnadecorationSides').html(defaultDNA.decorationSidescolor);
    $('#dnaanimation').html(defaultDNA.animation);
    $('#dnaspecial').html(defaultDNA.lastNum);

    renderCat(defaultDNA)
})

$('#colorsButton').click(() => {
    $('#cattributesLink').removeClass('active')
    $('#colorsLink').addClass('active')
    $('#cattributes').css('display', 'none')
    $('#catColors').css('display', 'block')
})

$('#cattributesButton').click(() => {
    $('#colorsLink').removeClass('active')
    $('#cattributesLink').addClass('active')
    $('#catColors').css('display', 'none')
    $('#cattributes').css('display', 'block')
})

$('#generateRandomButton').click(() => {
    var randomHeadColor = parseFloat(Math.floor(Math.random() * ($('#bodycolor').prop('max') - $('#bodycolor').prop('min') + 1))) + parseFloat($('#bodycolor').prop('min'))
    $('#bodycolor').val(randomHeadColor)
    headColor(colors[randomHeadColor], randomHeadColor)

    var randomMouthColor = parseFloat(Math.floor(Math.random() * ($('#mouthtailcolor').prop('max') - $('#mouthtailcolor').prop('min') + 1))) + parseFloat($('#mouthtailcolor').prop('min'))
    $('#mouthtailcolor').val(randomMouthColor)
    mouthTailColor(colors[randomMouthColor], randomMouthColor)

    var randomEyeColor = parseFloat(Math.floor(Math.random() * ($('#eyecolor').prop('max') - $('#eyecolor').prop('min') + 1))) + parseFloat($('#eyecolor').prop('min'))
    $('#eyecolor').val(randomEyeColor)
    eyeColor(colors[randomEyeColor], randomEyeColor)

    var randomEarColor = parseFloat(Math.floor(Math.random() * ($('#earcolor').prop('max') - $('#earcolor').prop('min') + 1))) + parseFloat($('#earcolor').prop('min'))
    $('#earcolor').val(randomEarColor)
    earColor(colors[randomEarColor], randomEarColor)

    var randomEyeShape = parseFloat(Math.floor(Math.random() * ($('#eyeshape').prop('max') - $('#eyeshape').prop('min') + 1))) + parseFloat($('#eyeshape').prop('min'))
    $('#eyeshape').val(randomEyeShape)
    eyeVariation(randomEyeShape)

    var randomDecoration = parseFloat(Math.floor(Math.random() * ($('#decorationpattern').prop('max') - $('#decorationpattern').prop('min') + 1))) + parseFloat($('#decorationpattern').prop('min'))
    $('#decorationpattern').val(randomDecoration)
    decorationVariation(randomDecoration)

    var randomHairColorPrimary = parseFloat(Math.floor(Math.random() * ($('#haircolorprimary').prop('max') - $('#haircolorprimary').prop('min') + 1))) + parseFloat($('#haircolorprimary').prop('min'))
    $('#haircolorprimary').val(randomHairColorPrimary)

    hairColorPrimary(colors[randomHairColorPrimary], randomHairColorPrimary)

    var randomHairColorSecondary = parseFloat(Math.floor(Math.random() * ($('#haircolorsecondary').prop('max') - $('#haircolorsecondary').prop('min') + 1))) + parseFloat($('#haircolorsecondary').prop('min'))
    $('#haircolorsecondary').val(randomHairColorSecondary)
    hairColorSecondary(colors[randomHairColorSecondary], randomHairColorSecondary)

    var randomActivity = parseFloat(Math.floor(Math.random() * ($('#activity').prop('max') - $('#activity').prop('min') + 1))) + parseFloat($('#activity').prop('min'))
    console.log(randomActivity)
    $('#activity').val(randomActivity)
    activityVariation(randomActivity)
})