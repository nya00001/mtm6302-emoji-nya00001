const $wrapper = document.getElementById("wrapper") 

const emojies = [
    9749,
    127861,
    127862,
    127863,
    127864,
    127865,
    127866,
    127868,
    127870,
    127994,
    129346,
    129347,
    129371,
    129380,
    129475,
];

const emojisString=[]

for(const emoji of emojies ){
    emojisString.push(`
    <p class="card">
       <span>&#${emoji};</span><br>
       <code>${emoji}</code>
   </p>
`)
}

$wrapper.innerHTML=emojisString.join("")