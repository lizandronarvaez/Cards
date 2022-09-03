/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "../styles/nav.css"
function Navegador() {
    return (
        <nav class="navbar navbar-expand-lg bg-black">
            <div class="container-fluid">
                <h1 class="navbar-brand text-white">Lizandro Narvaez</h1>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <button class="btn btn-outline-success text-white" type="submit">Contacto</button>
                </div>
            </div>
        </nav>
    )
}
export { Navegador }