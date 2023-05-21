function convert(inUnit, outUnit, valueToConvert) {
    var power = inUnit - outUnit
    var multiplier = Math.pow(1000, power)
    return valueToConvert * multiplier
}
$(function () {
    var btn = $("#calculate");
    btn.click(function () {

        var valueToConvertDoc = document.getElementById('valueToConvert')
        if (isNaN(valueToConvertDoc.value)) {
            alert('Value ' + valueToConvertDoc.value + ' is not a number')
        } else {
            var valueToConvert = valueToConvertDoc.value
            var inUnitDoc = document.getElementById('inUnit')
            var inUnit = inUnitDoc.options[inUnitDoc.selectedIndex].value
            var outUnitDoc = document.getElementById('outUnit')
            var outUnit = outUnitDoc.options[outUnitDoc.selectedIndex].value
            var outValue = convert(inUnit, outUnit, valueToConvert)
            var outValueDoc = document.getElementById('outValue')
            outValueDoc.innerText = 'Wynik: ' + outValue
            var historyElement = document.createElement('p')
            historyElement.innerText = 'Wartość: ' + valueToConvert +
                ' Z: ' + inUnitDoc.options[inUnitDoc.selectedIndex].text +
                ' Na: ' + outUnitDoc.options[outUnitDoc.selectedIndex].text +
                ' Daje: ' + outValue
            document.body.append(historyElement)
        }
    })
})
