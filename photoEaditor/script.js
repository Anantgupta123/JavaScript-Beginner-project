let filters = {
    brightness:{
        value:100,
        min:0,
        max:200,
        unit:"%"
    },
    contrast:{
        value:100,
        min:0,
        max:200,
        unit:"%"
    },
    
    saturation:{
        value:100,
        min:0,
        max:200,
        unit:"%"
    },
    hueRotation:{
        value:0,
        min:0,
        max:200,
        unit:"deg"
    },
    blur:{
        value:0,
        min:0,
        max:200,
        unit:"px"
    },
    grayscale:{
        value:100,
        min:0,
        max:200,
        unit:"%"
    },
    sepia:{
        value:0,
        min:0,
        max:200,
        unit:"%"
    },
    opacity:{
        value:100,
        min:0,
        max:200,
        unit:"%"
    },
    invert:{
        value:0,
        min:0,
        max:200,
        unit:"%"
    }
}
let filtersContainer = document.getElementById('filters');

let imageCanvas = document.getElementById('image-canvas');
const imgInput = document.querySelector('#image-input');
const canvasCts = imageCanvas.getContext("2d");
const file = null;
let image = null;
let reset = document.getElementById('reset-btn')
const download = document.getElementById('download-btn');
const presetContainer = document.getElementById('presets')


// this is second step

function createFilterElement(name,unit="",value,min,max){
    
    let div = document.createElement('div');
    div.classList.add('filter');

    const input = document.createElement('input');
    input.type ="range";
    input.min = min;
    input.max = max;
    input.value = value;
    input.id= name;

    const p = document.createElement('p');
    p.innerHTML = name;

    div.appendChild(p);
    div.appendChild(input)

    input.addEventListener('input',(event)=>{
        filters[name].value = input.value;
       
        applyfilter()
    });
    return div


};
// this is fist step

function createFilter(){
    Object.keys(filters).forEach(key =>{
   
    const filterElement = createFilterElement(key, filters[key].unit,filters[key].value,filters[key].min,filters[key].max);
    
    
    filtersContainer.appendChild(filterElement);
});
 

}
createFilter()


// this is third step
imgInput.addEventListener('change',(event)=>{
    let  file = event.target.files[0];
    const imageplacehlder = document.querySelector('.placeholder');
    imageplacehlder.style.display = "none"
    

    const img = new Image();
    img.src = URL.createObjectURL(file);
    // When image is  load
    img.onload = ()=>{
        image = img
        imageCanvas.width =img.width;
        imageCanvas.height = img.height;
        canvasCts.drawImage(image,0,0)
    }
    

})

function appyfilters(){
    canvasCts.filter = 'blur(10px)';
    canvasCts.drawImage(image,0,0)
}

function applyfilter(){
         canvasCts.clearRect(0,0, imageCanvas.width,imageCanvas.height);
        
        canvasCts.filter = `
        brightness(${filters.brightness.value}${filters.brightness.unit})
        contrast(${filters.contrast.value}${filters.contrast.unit})
        saturate(${filters.saturation.value}${filters.saturation.unit})
       hue-rotate(${filters.hueRotation.value}${filters.hueRotation.unit})
        blur(${filters.blur.value}${filters.blur.unit})
        sepia(${filters.sepia.value}${filters.sepia.unit})
        opacity(${filters.opacity.value}${filters.opacity.unit})
        invert(${filters.invert.value}${filters.invert.unit}) `
       
        
        
        canvasCts.drawImage(image,0,0);
}
reset.addEventListener('click',()=>{
    filters = {
    brightness:{
        value:100,
        min:0,
        max:200,
        unit:"%"
    },
    contrast:{
        value:100,
        min:0,
        max:200,
        unit:"%"
    },
    
    saturation:{
        value:100,
        min:0,
        max:200,
        unit:"%"
    },
    hueRotation:{
        value:0,
        min:0,
        max:200,
        unit:"deg"
    },
    blur:{
        value:0,
        min:0,
        max:200,
        unit:"px"
    },
    grayscale:{
        value:100,
        min:0,
        max:200,
        unit:"%"
    },
    sepia:{
        value:0,
        min:0,
        max:200,
        unit:"%"
    },
    opacity:{
        value:100,
        min:0,
        max:200,
        unit:"%"
    },
    invert:{
        value:0,
        min:0,
        max:200,
        unit:"%"
    }
}
applyfilter()
 filtersContainer.innerHTML="";
  createFilter()
});

download.addEventListener('click',()=>{
    const link = document.createElement("a");
    link.download = "eadited-image.png";
    link.href = imageCanvas.toDataURL()
    link.click()
})

const presets = {
    normal: {
        brightness: 100,
        contrast: 100,
        saturation: 100,
        hueRotation: 0,
        blur: 0,
        grayscale: 0,
        sepia: 0,
        opacity: 100,
        invert: 0
    },

    drama: {
        brightness: 110,
        contrast: 140,
        saturation: 120,
        hueRotation: 0,
        blur: 0,
        grayscale: 0,
        sepia: 10,
        opacity: 100,
        invert: 0
    },

    vintage: {
        brightness: 105,
        contrast: 110,
        saturation: 80,
        hueRotation: 0,
        blur: 0,
        grayscale: 0,
        sepia: 40,
        opacity: 100,
        invert: 0
    },

    blackWhite: {
        brightness: 110,
        contrast: 120,
        saturation: 0,
        hueRotation: 0,
        blur: 0,
        grayscale: 100,
        sepia: 0,
        opacity: 100,
        invert: 0
    },

    cinematic: {
        brightness: 105,
        contrast: 130,
        saturation: 90,
        hueRotation: 10,
        blur: 0,
        grayscale: 0,
        sepia: 5,
        opacity: 100,
        invert: 0
    },

    cool: {
        brightness: 100,
        contrast: 110,
        saturation: 120,
        hueRotation: -10,
        blur: 0,
        grayscale: 0,
        sepia: 0,
        opacity: 100,
        invert: 0
    },

    warm: {
        brightness: 105,
        contrast: 105,
        saturation: 115,
        hueRotation: 10,
        blur: 0,
        grayscale: 0,
        sepia: 10,
        opacity: 100,
        invert: 0
    },

    moody: {
        brightness: 90,
        contrast: 140,
        saturation: 85,
        hueRotation: -5,
        blur: 0,
        grayscale: 10,
        sepia: 0,
        opacity: 100,
        invert: 0
    },

    faded: {
        brightness: 110,
        contrast: 85,
        saturation: 80,
        hueRotation: 0,
        blur: 0,
        grayscale: 0,
        sepia: 15,
        opacity: 100,
        invert: 0
    },

    vivid: {
        brightness: 105,
        contrast: 125,
        saturation: 140,
        hueRotation: 0,
        blur: 0,
        grayscale: 0,
        sepia: 0,
        opacity: 100,
        invert: 0
    },

    soft: {
        brightness: 108,
        contrast: 90,
        saturation: 95,
        hueRotation: 0,
        blur: 1,
        grayscale: 0,
        sepia: 0,
        opacity: 100,
        invert: 0
    },

    retro: {
        brightness: 100,
        contrast: 115,
        saturation: 85,
        hueRotation: -15,
        blur: 0,
        grayscale: 5,
        sepia: 25,
        opacity: 100,
        invert: 0
    },

    neon: {
        brightness: 110,
        contrast: 150,
        saturation: 160,
        hueRotation: 25,
        blur: 0,
        grayscale: 0,
        sepia: 0,
        opacity: 100,
        invert: 0
    },

    highContrast: {
        brightness: 100,
        contrast: 170,
        saturation: 100,
        hueRotation: 0,
        blur: 0,
        grayscale: 0,
        sepia: 0,
        opacity: 100,
        invert: 0
    }
};

Object.keys(presets).forEach((presetName)=>{
    const presetButton = document.createElement('button');
    presetButton.classList.add('btn');
    presetButton.innerText = presetName;
    presetContainer.appendChild(presetButton);

    presetButton.addEventListener('click',()=>{

        const preset = presets[presetName];

    Object.keys(preset).forEach(filterName=>{
        filters[filterName].value = preset[filterName]
        


    });
    applyfilter()
    filtersContainer.innerHTML=""
    createFilter()
    
    });
    
        
    

});




