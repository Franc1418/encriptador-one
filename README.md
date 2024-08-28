# encriptador-one
# Encriptador/Desencriptador de Texto

## Descripción

Esta aplicación web permite encriptar y desencriptar texto utilizando un conjunto específico de reglas de sustitución. La herramienta ofrece dos funcionalidades principales: encriptar un texto ingresado y luego desencriptarlo para obtener el texto original. Además, permite copiar el texto resultante al portapapeles con una confirmación visual.

## Funcionalidades

- **Encriptar Texto**: Convierte el texto ingresado en una versión encriptada utilizando sustituciones específicas para las letras.
- **Desencriptar Texto**: Convierte el texto encriptado de vuelta a su forma original.
- **Copiar al Portapapeles**: Permite copiar el texto procesado al portapapeles. El botón de copia mostrará un mensaje de confirmación temporal ("Copiado al portapapeles!") antes de volver a su estado original.

## Reglas de Encriptación

- `a` se convierte en `ai`
- `e` se convierte en `enter`
- `i` se convierte en `imes`
- `o` se convierte en `ober`
- `u` se convierte en `ufat`

## Reglas de Desencriptación

- `ai` se convierte en `a`
- `enter` se convierte en `e`
- `imes` se convierte en `i`
- `ober` se convierte en `o`
- `ufat` se convierte en `u`

## Instrucciones de Uso

1. **Ingrese el Texto**: Escriba el texto que desea encriptar o desencriptar en el campo de entrada de texto.
2. **Encriptar o Desencriptar**: Haga clic en el botón correspondiente ("Encriptar" o "Desencriptar").
3. **Copiar al Portapapeles**: Una vez que el texto procesado aparezca en la tarjeta, haga clic en el botón "Copiar" para copiar el texto al portapapeles. El botón mostrará "Copiado al portapapeles!" durante 1 segundo antes de volver a su estado original.

## Capturas de Pantalla

Incluye algunas capturas de pantalla para mostrar la interfaz de usuario y cómo funciona la aplicación.

## Tecnologías Usadas

- **HTML**: Estructura del contenido web.
- **CSS**: Estilos y diseño de la aplicación.
- **JavaScript**: Lógica para encriptar, desencriptar y manejar eventos de usuario.
