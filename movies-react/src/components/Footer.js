import React from 'react'

export default function Footer() {
  return (
    <>
     <div className ="footer-dark">
        <footer>
            <img className ="prime" src="imagenes/primevideo.png" alt=""/>
            <div className ="row">
                <div className ="col-sm-6 col-md-3 item">
                    <h3 className ="colorDeTexto">Términos y Aviso de privacidad</h3>

                </div>

                <div className ="col-sm-6 col-md-3 item">
                    <h3 className ="colorDeTexto">Envíanos tus comentarios</h3>

                </div>
                <div className ="col-md-3 item text">
                    <h3 className ="colorDeTexto">Ayuda</h3>

                </div>
                <div className ="col-sm-6 col-md-3 item">
                    <h3 className ="copyright">©1996-2021,Amazon.com,inc. o sus filiales</h3>

                </div>
            </div>

        </footer>
    </div> 
    </>
  )
}
