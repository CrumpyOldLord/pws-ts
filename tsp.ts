/// <reference path="./src/common.ts"/>
/// <reference path="./src/output.ts"/>
/// <reference path="./src/controller.ts"/>

/// <reference path="./src/variants/nn.ts"/>
/// <reference path="./src/variants/radius.ts"/>
/// <reference path="./src/variants/random.ts"/>

module TSP {
    "use strict"
    
    
    let controller = new Controller({
        dimensions: Size.default,
        summary:            <HTMLDivElement>     document.getElementById('InfoPanel'), 
        allResults:         <HTMLDivElement>     document.getElementById('AllResults'),
        resultArea:         <HTMLCanvasElement>  document.getElementById('Viewport'),
        exportOutputButton: <HTMLAnchorElement>  document.getElementById('ExportResults'),
        exportInputButton:  <HTMLButtonElement>  document.getElementById("ControllerExport"),
        importButton:       <HTMLButtonElement>  document.getElementById("ControllerImport"),
        importError:        <HTMLDivElement>     document.getElementById("InputError"),
        previewArea:        <HTMLCanvasElement>  document.getElementById("ControllerPreview"),
        fiddleArea:         <HTMLTextAreaElement>document.getElementById("ControllerFiddleArea"),
        fileInput:          <HTMLInputElement>   document.getElementById("ControllerFiles"),
        updateButton:       <HTMLButtonElement>  document.getElementById("ControllerUpdate"),
        randomCount:        <HTMLInputElement>   document.getElementById("RandomCount"),
        generateButton:     <HTMLButtonElement>  document.getElementById("RandomGenerate"),
        picker:             <HTMLSelectElement>  document.getElementById('Picker'),
        calculateButton:    <HTMLButtonElement>  document.getElementById('Calculate'),
        testCount:          <HTMLInputElement>   document.getElementById('TestCount'),
    })
}
