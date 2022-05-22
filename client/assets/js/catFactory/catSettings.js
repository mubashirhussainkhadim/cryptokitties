var colors = Object.values(allColors())

var defaultDNA = {
  "headcolor": 15,
  "mouthColor": 23,
  "eyesColor": 93,
  "earsColor": 10,
  //Cattributes
  "eyesShape": 1,
  "decorationPattern": 1,
  "decorationMidcolor": 13,
  "decorationSidescolor": 13,
  "animation": 1,
  "lastNum": 1
}

// when page load
$(document).ready(function () {
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
});

function getDna() {
  var dna = ''
  dna += $('#dnabody').html()
  dna += $('#dnamouth').html()
  dna += $('#dnaeyes').html()
  dna += $('#dnaears').html()
  dna += $('#dnashape').html()
  dna += $('#dnadecoration').html()
  dna += $('#dnadecorationMid').html()
  dna += $('#dnadecorationSides').html()
  dna += $('#dnaanimation').html()
  dna += $('#dnaspecial').html()

  return parseInt(dna)
}

function renderCat(dna) {
  headColor(colors[dna.headcolor], dna.headcolor)
  $('#bodycolor').val(dna.headcolor)

  mouthTailColor(colors[dna.mouthColor], dna.mouthColor)
  $('#mouthtailcolor').val(dna.mouthColor)

  eyeColor(colors[dna.eyesColor], dna.eyesColor)
  $('#eyecolor').val(dna.eyesColor)

  earColor(colors[dna.earsColor], dna.earsColor)
  $('#earscolor').val(dna.earsColor)

  eyeVariation(dna.eyesShape)
  $('#eyeshape').val(dna.eyesShape)

  decorationVariation(dna.decorationPattern)
  $('#decorationpattern').val(dna.decorationPattern)

  hairColorPrimary(colors[dna.decorationMidcolor], dna.decorationMidcolor)
  $('#haircolorprimary').val(dna.decorationMidcolor)

  hairColorSecondary(colors[dna.decorationSidescolor], dna.decorationSidescolor)
  $('#haircolorsecondary').val(dna.decorationSidescolor)

  activityVariation(dna.animation)
  $('#activity').val(dna.animation)
}

// Changing cat colors
$('#bodycolor').change(() => {
  var colorVal = $('#bodycolor').val()
  headColor(colors[colorVal], colorVal)
})

$('#mouthtailcolor').change(() => {
  var mouthTailColorVal = $('#mouthtailcolor').val()
  mouthTailColor(colors[mouthTailColorVal], mouthTailColorVal)
})

$('#eyecolor').change(() => {
  var eyeColorVal = $('#eyecolor').val()
  eyeColor(colors[eyeColorVal], eyeColorVal)
})

$('#earcolor').change(() => {
  var earColorVal = $('#earcolor').val()
  earColor(colors[earColorVal], earColorVal)
})


// Changing Cattributes

$('#eyeshape').change(() => {
  var eyeShapeVal = parseInt($('#eyeshape').val()) // Between 1 and 7
  eyeVariation(eyeShapeVal)
})

$('#decorationpattern').change(() => {
  var decorationVal = parseInt($('#decorationpattern').val())
  decorationVariation(decorationVal)
})

$('#haircolorprimary').change(() => {
  var hairColorPrimaryVal = $('#haircolorprimary').val()
  hairColorPrimary(colors[hairColorPrimaryVal], hairColorPrimaryVal)
})

$('#haircolorsecondary').change(() => {
  var hairColorSecondaryVal = $('#haircolorsecondary').val()
  hairColorSecondary(colors[hairColorSecondaryVal], hairColorSecondaryVal)
})

$('#activity').change(() => {
  var activityVal = parseInt($('#activity').val())
  activityVariation(activityVal)
})