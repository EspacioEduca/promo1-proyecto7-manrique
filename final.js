//Escondidos 
$(".op").hide();
//Contenedores
let estudios=["Toda mi educación ha sido en Fe y alegría"];
let experiencias=[" Centro Nacional de Despacho"];
let habilidades = ["Innovador", "Lider", "Matemático"];


//Llamados
for(let estudio of estudios){
$(".principios").append(`<li> ${estudio} </li>`)
}
for(let experiencia of experiencias){
    $(".intermedio").append(`<li> ${experiencia} </li>`)
}
for(let habilidad of habilidades){
    $(".final").append(`<li>${habilidad}</li>`)
}

//Acciones
$(".al").hover(function(){
    $(".principios").show();
});
$(".el").hover(function(){
    $(".intermedio").show();
});
$(".il").hover(function(){
    $(".final").show();
});
