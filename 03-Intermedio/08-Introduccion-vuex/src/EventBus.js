// Primera solución copartir información usando BUS, al día de hoy poco recomendado
// En el fondo es una variable global (instancia Vue) donde los compoentes emiten
// y los demas se suscriben para leer.
// usamos eventos personalizados.
// Problema, se pierde el control de quien emite, de quien escucha, etc.
import Vue from 'vue';

export default new Vue();
