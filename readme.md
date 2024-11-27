# Proyecto de Validación de Tarjetas

## Descripción

Este proyecto permite la validación y formateo en tiempo real de los datos de una tarjeta de crédito o débito. Los campos validados son:

- **Nombre del titular**: Se limita a 16 caracteres y se muestra en tiempo real en el formato de la tarjeta.
- **Número de tarjeta**: Se valida y formatea en bloques de 4 dígitos (ej. "0000 0000 0000 0000").
- **Fecha de vencimiento**: El mes y año se validan y se formatean en dos dígitos.
- **CVC**: Se valida para que tenga 3 caracteres exactos.

El formulario muestra mensajes de error en los campos inválidos y resalta el borde en rojo. El contenedor de confirmación solo aparece cuando todos los campos son válidos.

## Funcionalidades

- **Validación y formato automático**: Los campos se validan y formatean en tiempo real mientras el usuario escribe.
- **Manejo de errores**: Los bordes de los campos inválidos se ponen rojos y se muestra un mensaje de error.
- **Confirmación de envío**: El contenedor de confirmación solo se muestra cuando todos los campos son válidos.

## Tecnologías Utilizadas

- **HTML**: Estructura del formulario y los mensajes de error.
- **CSS**: Estilos, diseño y manejo de errores.
- **TypeScript**: Lógica de validación, formateo de datos e interacción con el DOM.

## Uso

1. **Ingresa los datos** de la tarjeta.
2. Los campos se validan **automáticamente** en tiempo real.
3. Si un campo es inválido, el borde se pondrá rojo y aparecerá un mensaje de error.
4. Si todos los campos son válidos, se mostrará el contenedor de confirmación.

## Detalles Técnicos

### Validación y Formateo

- **Nombre del Titular**: Limitado a 16 caracteres. Si está vacío, no se puede enviar el formulario.
- **Número de Tarjeta**: Formato automático de bloques de 4 dígitos. Error si tiene menos de 16 caracteres.
- **Fecha de Vencimiento**: Valida mes y año en dos dígitos. Error si faltan dígitos.
- **CVC**: Exactamente 3 dígitos. Error si la longitud es incorrecta.

### Lógica de Validación

La función `validateInput` verifica que cada campo cumpla con la longitud mínima. Si no es válido, se previene el envío y se agrega un mensaje de error. Si todos los campos son válidos, se muestra el contenedor de confirmación.

```typescript
button.addEventListener("click", (e) => {
    if (cardName.value.trim() === "") {
        e.preventDefault();
        cardName.classList.add(errorActive);
    }
    validateInput(numberInput, errorNumber, 16, e);
    validateInput(monthInput, errorDate, 1, e);
    validateInput(yearInput, errorDate, 2, e);
    validateInput(cvcInput, errorCVC, 3, e);

    !document.querySelector(`.${errorActive}`) ? containerConfirm.style.display = "flex" : null;
}); 
```

Contribuciones

Si quieres contribuir, sigue estos pasos:
1.	Haz un fork del repositorio.
2.	Crea una nueva rama para tus cambios.
3.	Realiza tus modificaciones y haz commit.
4.	Sube tus cambios a tu fork.
5.	Crea un pull request describiendo tus cambios.